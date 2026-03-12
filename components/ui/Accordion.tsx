"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

export default function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col gap-3">
      {items.map((item, i) => (
        <div
          key={i}
          className="border border-white/10 rounded-lg overflow-hidden bg-bg-alt"
        >
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex items-center justify-between px-6 py-4 text-left font-sans font-semibold text-cream hover:text-gold transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            aria-expanded={openIndex === i}
          >
            <span className="pr-4">{item.question}</span>
            <motion.span
              animate={{ rotate: openIndex === i ? 180 : 0 }}
              transition={{ duration: 0.25 }}
              className="flex-shrink-0 text-gold"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </motion.span>
          </button>
          <AnimatePresence initial={false}>
            {openIndex === i && (
              <motion.div
                key="content"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-5 pt-0 text-muted font-sans leading-relaxed border-t border-white/5">
                  <div className="pt-4">{item.answer}</div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
