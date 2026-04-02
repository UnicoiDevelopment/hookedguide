import Anthropic from '@anthropic-ai/sdk';
import { NextRequest, NextResponse } from 'next/server';

const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

function getMonthName(month: number): string {
  return MONTH_NAMES[(month - 1) % 12];
}

function formatHour(hour: number): string {
  if (hour === 0 || hour === 24) return '12:00 AM';
  if (hour === 12) return '12:00 PM';
  if (hour < 12) return `${hour}:00 AM`;
  return `${hour - 12}:00 PM`;
}

// Simple in-memory rate limiter (resets on redeploy)
const requestCounts = new Map<string, { count: number; resetAt: number }>();

function rateLimit(ip: string, maxPerDay: number = 50): boolean {
  const now = Date.now();
  const record = requestCounts.get(ip);

  if (!record || now > record.resetAt) {
    requestCounts.set(ip, { count: 1, resetAt: now + 86400000 });
    return true;
  }

  if (record.count >= maxPerDay) return false;
  record.count++;
  return true;
}

export async function POST(request: NextRequest) {
  const ip =
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    request.headers.get('x-real-ip') ||
    'unknown';

  if (!rateLimit(ip)) {
    return NextResponse.json(
      { error: 'Rate limit exceeded. Try again tomorrow.' },
      { status: 429 }
    );
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: 'API key not configured' },
      { status: 500 }
    );
  }

  const anthropic = new Anthropic({ apiKey });

  try {
    const { recommendation, input } = await request.json();

    const systemPrompt = `You are an expert fishing guide with 30 years of experience. You're standing on the boat with your client, they just asked you what to use. Give them advice in a warm, knowledgeable, conversational tone — like a friend who happens to be the best guide in the state.

Rules:
- Write 3-4 sentences as one flowing paragraph. No bullet points. No headers. Just talk.
- Be specific: mention exact hook sizes, weight sizes, line weights, colors, depths, cast angles.
- Explain WHY — connect the conditions to the recommendation. "The water's at 67 which means they're transitioning off beds" not just "use a Texas rig."
- Include one tactical tip that shows deep expertise — something a weekend angler wouldn't know.
- Sound like a real person, not a website. Use contractions. Be direct.
- Do NOT use generic phrases like "I recommend" or "you should consider." Just tell them what to do.
- If conditions are tough (post-frontal, extreme temps), be honest: "It's gonna be tough today, but here's your best shot..."
- Reference the specific conditions they gave you (temperature, weather, time, water clarity).
- End with something encouraging or a specific tactical note.
- Keep it under 150 words.`;

    const primary = recommendation.primary;
    const userPrompt = `The angler is fishing for ${input.species} in ${input.state || 'their local water'}.

Conditions:
- Water temp: ${input.waterTemp}\u00b0F
- Month: ${getMonthName(input.month)}
- Time: ${formatHour(input.hourOfDay)}
- Water body: ${input.waterBody.type}, ${input.waterBody.clarity} water, ${input.waterBody.coverType} cover
- Weather: ${input.weather.sky}, wind ${input.weather.wind} from ${input.weather.windDirection}
- Barometric pressure: ${input.weather.pressureTrend}
- Frontal system: ${input.weather.frontalSystem}
${input.moonPhase ? `- Moon: ${input.moonPhase}` : ''}

The recommendation engine says to use:
- Technique: ${primary.technique.name}
- Lure: ${primary.lure.specificLure} in ${primary.lure.color}, ${primary.lure.size}
- Hook: ${primary.hookType} ${primary.hookSize}
- Line: ${primary.line.type} ${primary.line.weight}
- Rod: ${primary.rodReel.rodLength} ${primary.rodReel.rodPower} ${primary.rodReel.rodAction}
- Target depth: ${primary.targetDepth}
- Presentation: ${primary.presentation?.action || 'standard retrieve'}

Give the angler your guide recommendation in one conversational paragraph.`;

    const response = await anthropic.messages.create({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 300,
      system: systemPrompt,
      messages: [{ role: 'user', content: userPrompt }],
    });

    const text =
      response.content[0].type === 'text' ? response.content[0].text : '';

    return NextResponse.json({ conversation: text });
  } catch (error) {
    console.error('Guide API error:', error);
    return NextResponse.json(
      { error: 'Failed to generate conversational recommendation' },
      { status: 500 }
    );
  }
}
