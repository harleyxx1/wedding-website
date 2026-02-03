"use client";

import { motion } from "framer-motion";
import { WEDDING_DATA } from "@/lib/constants";
import Card from "@/components/ui/Card";

export default function OurStory() {
  const { story } = WEDDING_DATA;

  return (
    <section id="story" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-primary mb-4">
            Our Love Story
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Every love story is beautiful, but ours is our favorite
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-12">
          {story.map((milestone, index) => (
            <motion.div
              key={milestone.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card
                className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-6`}
              >
                <div className="md:w-1/3">
                  <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
                    <span className="text-6xl">💑</span>
                  </div>
                </div>
                <div className="md:w-2/3 flex flex-col justify-center">
                  <div className="text-primary font-medium mb-2">
                    {milestone.date}
                  </div>
                  <h3 className="font-serif text-2xl text-primary mb-3">
                    {milestone.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
