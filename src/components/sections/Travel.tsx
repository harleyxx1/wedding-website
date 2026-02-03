"use client";

import { motion } from "framer-motion";
import { Plane, Car, Hotel, MapPin } from "lucide-react";
import { WEDDING_DATA } from "@/lib/constants";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export default function Travel() {
  const { accommodations, travel } = WEDDING_DATA;

  return (
    <section id="travel" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-primary mb-4">
            Travel & Accommodations
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Everything you need to know to plan your trip
          </p>
        </motion.div>

        {/* Travel Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <Card>
            <h3 className="font-serif text-2xl text-primary mb-6 text-center">
              Getting There
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <Plane className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-medium text-text-primary mb-1">By Air</h4>
                  <p className="text-text-secondary text-sm">
                    {travel.nearestAirport} ({travel.airportCode})
                  </p>
                  <p className="text-text-secondary text-sm">
                    {travel.distanceFromVenue}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Car className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-medium text-text-primary mb-1">
                    Parking
                  </h4>
                  <p className="text-text-secondary text-sm">
                    {travel.parkingInfo}
                  </p>
                </div>
              </div>

              {travel.shuttleInfo && (
                <div className="flex gap-4 md:col-span-2">
                  <MapPin className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium text-text-primary mb-1">
                      Shuttle Service
                    </h4>
                    <p className="text-text-secondary text-sm">
                      {travel.shuttleInfo}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </Card>
        </motion.div>

        {/* Accommodations */}
        <div className="max-w-6xl mx-auto">
          <h3 className="font-serif text-3xl text-primary mb-8 text-center">
            Recommended Hotels
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {accommodations.map((hotel, index) => (
              <motion.div
                key={hotel.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card hover className="h-full flex flex-col">
                  <div className="flex-1">
                    <div className="flex items-start gap-3 mb-4">
                      <Hotel className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-serif text-xl text-primary mb-1">
                          {hotel.name}
                        </h4>
                        <p className="text-sm text-accent font-medium">
                          {hotel.distance}
                        </p>
                      </div>
                    </div>

                    <p className="text-sm text-text-secondary mb-2">
                      {hotel.address}
                    </p>
                    <p className="text-sm text-text-secondary mb-4">
                      {hotel.phone}
                    </p>

                    {hotel.bookingCode && (
                      <div className="bg-accent/10 rounded-md p-3 mb-4">
                        <p className="text-xs text-text-secondary mb-1">
                          Booking Code:
                        </p>
                        <p className="font-mono font-bold text-primary">
                          {hotel.bookingCode}
                        </p>
                      </div>
                    )}

                    <div className="mb-4">
                      <p className="text-xs text-text-secondary mb-2">
                        Amenities:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {hotel.amenities.map((amenity) => (
                          <span
                            key={amenity}
                            className="text-xs bg-primary/10 text-primary px-2 py-1 rounded"
                          >
                            {amenity}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full mt-4"
                    onClick={() => window.open(hotel.bookingUrl, "_blank")}
                  >
                    Book Now
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
