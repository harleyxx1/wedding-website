"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionItemProps {
  id: string;
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

function AccordionItem({
  question,
  answer,
  isOpen,
  onToggle,
}: AccordionItemProps) {
  return (
    <div className="border-b border-border">
      <button
        onClick={onToggle}
        className="w-full py-4 px-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
      >
        <span className="font-medium text-text-primary">{question}</span>
        <ChevronDown
          className={cn(
            "w-5 h-5 text-primary transition-transform",
            isOpen && "transform rotate-180",
          )}
        />
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-300",
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <div className="px-6 pb-4 text-text-secondary">{answer}</div>
      </div>
    </div>
  );
}

interface AccordionProps {
  items: Array<{
    id: string;
    question: string;
    answer: string;
  }>;
}

export default function Accordion({ items }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  const handleToggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {items.map((item) => (
        <AccordionItem
          key={item.id}
          {...item}
          isOpen={openId === item.id}
          onToggle={() => handleToggle(item.id)}
        />
      ))}
    </div>
  );
}
