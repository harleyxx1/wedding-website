"use client";

import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";
import { WEDDING_DATA } from "@/lib/constants";
import Accordion from "@/components/ui/Accordion";

export default function FAQ() {
  const { faqs } = WEDDING_DATA;

  // Group FAQs by category
  const categories = Array.from(new Set(faqs.map((faq) => faq.category)));

  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <HelpCircle className="w-10 h-10 text-accent" />
            <h2 className="font-serif text-4xl md:text-5xl text-primary">
              Frequently Asked Questions
            </h2>
          </div>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Find answers to common questions about our wedding
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-8">
          {categories.map((category, index) => {
            const categoryFaqs = faqs.filter(
              (faq) => faq.category === category,
            );
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h3 className="font-serif text-2xl text-primary mb-4">
                  {category}
                </h3>
                <Accordion items={categoryFaqs} />
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-3xl mx-auto mt-12 text-center"
        >
          <div className="bg-white rounded-lg shadow-md p-8">
            <p className="text-text-secondary mb-4">Still have questions?</p>
            <p className="text-text-primary">
              Feel free to reach out to us directly at{" "}
              <a
                href="mailto:janeandjohn@wedding.com"
                className="text-accent hover:underline"
              >
                janeandjohn@wedding.com
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
