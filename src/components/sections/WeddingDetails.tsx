"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Navigation } from "lucide-react";
import { WEDDING_DATA } from "@/lib/constants";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export default function WeddingDetails() {
  const { ceremony, reception } = WEDDING_DATA;

  const EventCard = ({
    event,
  }: {
    event: typeof ceremony | typeof reception;
  }) => (
    <Card hover className="h-full">
      <div className="text-center mb-6">
        <h3 className="font-serif text-3xl text-primary mb-2">
          {event.type === "ceremony" ? "Ceremony" : "Reception"}
        </h3>
        <p className="text-text-secondary">{event.description}</p>
      </div>

      <div className="space-y-4 mb-6">
        <div className="flex items-start gap-3">
          <Calendar className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
          <div>
            <div className="font-medium text-text-primary">Date</div>
            <div className="text-text-secondary">
              {event.date.toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </div>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
          <div>
            <div className="font-medium text-text-primary">Time</div>
            <div className="text-text-secondary">{event.time}</div>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
          <div>
            <div className="font-medium text-text-primary">Venue</div>
            <div className="text-text-secondary">{event.venueName}</div>
            <div className="text-sm text-text-secondary">{event.address}</div>
          </div>
        </div>
      </div>

      <Button
        variant="outline"
        className="w-full"
        onClick={() => window.open(event.mapUrl, "_blank")}
      >
        <Navigation className="w-4 h-4 mr-2" />
        Get Directions
      </Button>
    </Card>
  );

  return (
    <section id="details" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-primary mb-4">
            Wedding Details
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Join us for our special day
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <EventCard event={ceremony} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <EventCard event={reception} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
