"use client";

import { useState } from "react";

interface FaqItemProps {
  question: string;
  answer: string;
}

function FaqItem({ question, answer }: FaqItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-[var(--border-color)]">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-6 text-left transition"
      >
        <span className="pr-8 text-lg font-medium text-[var(--text-primary)]">{question}</span>
        <span className={`text-2xl text-[var(--accent-gold)] transition-transform duration-300 ${open ? "rotate-45" : ""}`}>+</span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${open ? "max-h-96 pb-6" : "max-h-0"}`}
      >
        <p className="text-[var(--text-muted)]">{answer}</p>
      </div>
    </div>
  );
}

export default function FaqAccordion({ items }: { items: FaqItemProps[] }) {
  return (
    <div className="divide-y divide-[var(--border-color)]">
      {items.map((item, i) => (
        <FaqItem key={i} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
}
