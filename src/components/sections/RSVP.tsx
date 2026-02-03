"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle } from "lucide-react";
import { RSVP_DEADLINE } from "@/lib/constants";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Card from "@/components/ui/Card";

const rsvpSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  attending: z.enum(["yes", "no", "maybe"]),
  guestCount: z.number().min(1).max(10),
  mealPreference: z.string().optional(),
  dietaryRestrictions: z.string().optional(),
  songRequest: z.string().optional(),
  message: z.string().optional(),
});

type RSVPFormData = z.infer<typeof rsvpSchema>;

export default function RSVP() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<RSVPFormData>({
    resolver: zodResolver(rsvpSchema),
    defaultValues: {
      guestCount: 1,
      attending: "yes",
    },
  });

  const onSubmit = async (data: RSVPFormData) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("RSVP Submission:", data);
    setIsSubmitted(true);
    reset();
  };

  return (
    <section id="rsvp" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-primary mb-4">
            RSVP
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto mb-4">
            Please let us know if you can join us for our special day
          </p>
          <p className="text-primary font-medium">
            Kindly respond by{" "}
            {RSVP_DEADLINE.toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          {isSubmitted ? (
            <Card className="text-center py-12">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="font-serif text-2xl text-primary mb-2">
                Thank You!
              </h3>
              <p className="text-text-secondary mb-6">
                Your RSVP has been received. We can&apos;t wait to celebrate
                with you!
              </p>
              <Button onClick={() => setIsSubmitted(false)}>
                Submit Another RSVP
              </Button>
            </Card>
          ) : (
            <Card>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <Input
                  label="Full Name *"
                  placeholder="Maria Santos"
                  error={errors.fullName?.message}
                  {...register("fullName")}
                />

                <Input
                  label="Email Address *"
                  type="email"
                  placeholder="maria@example.com"
                  error={errors.email?.message}
                  {...register("email")}
                />

                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Will you be attending? *
                  </label>
                  <div className="flex gap-4">
                    {[
                      { value: "yes", label: "Joyfully Accept" },
                      { value: "no", label: "Regretfully Decline" },
                      { value: "maybe", label: "Not Sure Yet" },
                    ].map((option) => (
                      <label
                        key={option.value}
                        className="flex items-center cursor-pointer"
                      >
                        <input
                          type="radio"
                          value={option.value}
                          {...register("attending")}
                          className="mr-2"
                        />
                        <span className="text-sm">{option.label}</span>
                      </label>
                    ))}
                  </div>
                  {errors.attending && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.attending.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Number of Guests *
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="10"
                    className="w-full px-4 py-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    {...register("guestCount", { valueAsNumber: true })}
                  />
                  {errors.guestCount && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.guestCount.message}
                    </p>
                  )}
                </div>

                <Input
                  label="Meal Preference"
                  placeholder="e.g., Chicken, Beef, Vegetarian"
                  {...register("mealPreference")}
                />

                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Dietary Restrictions
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Please let us know of any allergies or dietary restrictions"
                    className="w-full px-4 py-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    {...register("dietaryRestrictions")}
                  />
                </div>

                <Input
                  label="Song Request"
                  placeholder="What song will get you on the dance floor?"
                  {...register("songRequest")}
                />

                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Message to the Couple
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Share your well wishes..."
                    className="w-full px-4 py-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    {...register("message")}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit RSVP"}
                </Button>
              </form>
            </Card>
          )}
        </motion.div>
      </div>
    </section>
  );
}
