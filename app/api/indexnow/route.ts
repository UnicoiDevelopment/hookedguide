import { NextResponse } from 'next/server';

const INDEXNOW_KEY = 'a1b2c3d4e5f6g7h8i9j0hookedguide';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const urls: string[] = body.urls || [];

    if (urls.length === 0) {
      return NextResponse.json({ error: 'No URLs provided' }, { status: 400 });
    }

    const payload = {
      host: 'hookedguide.com',
      key: INDEXNOW_KEY,
      keyLocation: 'https://hookedguide.com/a1b2c3d4e5f6g7h8i9j0hookedguide.txt',
      urlList: urls,
    };

    const endpoints = [
      'https://api.indexnow.org/indexnow',
      'https://www.bing.com/indexnow',
    ];

    const results = await Promise.allSettled(
      endpoints.map(endpoint =>
        fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        })
      )
    );

    return NextResponse.json({
      success: true,
      submitted: urls.length,
      results: results.map((r, i) => ({
        endpoint: endpoints[i],
        status: r.status === 'fulfilled' ? r.value.status : 'failed',
      })),
    });
  } catch {
    return NextResponse.json({ error: 'Internal error' }, { status: 500 });
  }
}
