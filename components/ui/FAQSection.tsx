"use client";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

interface FAQSectionProps {
  questions: { question: string; answer: string }[];
  pageTitle?: string;
}

export default function FAQSection({ questions, pageTitle }: FAQSectionProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    ...(pageTitle ? { name: pageTitle } : {}),
    mainEntity: questions.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: q.answer,
      },
    })),
  };

  return (
    <section className="w-full">
      <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6">
        Frequently Asked Questions
      </h2>
      <Accordion>
        {questions.map((q, index) => (
          <AccordionItem key={index} value={`faq-${index}`}>
            <AccordionTrigger>{q.question}</AccordionTrigger>
            <AccordionContent>
              <p>{q.answer}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
  );
}
