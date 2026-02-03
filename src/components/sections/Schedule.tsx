"use client";

import { motion } from "framer-motion";
import { Users, Heart, Wine, Utensils, Music, Sparkles } from "lucide-react";
import { WEDDING_DATA } from "@/lib/constants";

const iconMap: Record<string, React.ReactNode> = {
  users: <Users className="w-6 h-6" />,
  heart: <Heart className="w-6 h-6" />,
  glass: <Wine className="w-6 h-6" />,
  utensils: <Utensils className="w-6 h-6" />,
  music: <Music className="w-6 h-6" />,
  sparkles: <Sparkles className="w-6 h-6" />,
};

export default function Schedule() {
  const { schedule } = WEDDING_DATA;

  return (
    <section id="schedule" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-primary mb-4">
            Schedule of Events
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Here&apos;s what to expect on our special day
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-accent/30 transform md:-translate-x-1/2" />

            {schedule.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative mb-12 last:mb-0"
              >
                <div className="flex items-start gap-6 md:gap-8">
                  {/* Time - Left side on desktop */}
                  <div className="hidden md:block md:w-1/2 text-right pr-8">
                    {index % 2 === 0 && (
                      <>
                        <div className="font-bold text-xl text-primary">
                          {event.time}
                        </div>
                        <div className="text-sm text-text-secondary">
                          {event.duration}
                        </div>
                      </>
                    )}
                  </div>

                  {/* Icon */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-white shadow-lg">
                      {iconMap[event.icon] || <Heart className="w-6 h-6" />}
                    </div>
                  </div>

                  {/* Content - Right side on desktop */}
                  <div className="flex-1 md:w-1/2 md:pl-8">
                    {/* Time - Mobile */}
                    <div className="md:hidden mb-2">
                      <div className="font-bold text-xl text-primary">
                        {event.time}
                      </div>
                      <div className="text-sm text-text-secondary">
                        {event.duration}
                      </div>
                    </div>

                    {/* Desktop - Show on right for odd items */}
                    {(index % 2 !== 0 || true) && (
                      <div className="hidden md:block">
                        <div className="font-bold text-xl text-primary">
                          {event.time}
                        </div>
                        <div className="text-sm text-text-secondary mb-2">
                          {event.duration}
                        </div>
                      </div>
                    )}

                    <h3 className="font-serif text-2xl text-primary mb-2">
                      {event.title}
                    </h3>
                    <p className="text-text-secondary">{event.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
