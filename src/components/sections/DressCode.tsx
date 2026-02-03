"use client";

import { motion } from "framer-motion";
import { Shirt, Check, X } from "lucide-react";
import { WEDDING_DATA } from "@/lib/constants";
import Card from "@/components/ui/Card";

export default function DressCode() {
  const { dressCode } = WEDDING_DATA;

  return (
    <section id="dress-code" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Shirt className="w-10 h-10 text-accent" />
            <h2 className="font-serif text-4xl md:text-5xl text-primary">
              Dress Code
            </h2>
          </div>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Help us set the tone for our special day
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <Card className="text-center">
              <h3 className="font-serif text-3xl text-primary mb-3">
                {dressCode.type}
              </h3>
              <p className="text-text-secondary text-lg">
                {dressCode.description}
              </p>
            </Card>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Do's */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <Check className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="font-serif text-2xl text-primary">
                    Do&apos;s
                  </h3>
                </div>
                <ul className="space-y-3">
                  {dressCode.dos.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-text-secondary">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>

            {/* Don'ts */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                    <X className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="font-serif text-2xl text-primary">
                    Don&apos;ts
                  </h3>
                </div>
                <ul className="space-y-3">
                  {dressCode.donts.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <span className="text-text-secondary">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          </div>

          {/* Examples */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card>
              <h3 className="font-serif text-2xl text-primary mb-4 text-center">
                Attire Examples
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                {dressCode.examples.map((example, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg p-4 text-center"
                  >
                    <p className="text-text-primary">{example}</p>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Color Palette */}
          {dressCode.colorPalette && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8"
            >
              <Card className="text-center">
                <h3 className="font-serif text-2xl text-primary mb-4">
                  Wedding Color Palette
                </h3>
                <p className="text-text-secondary mb-6">
                  Feel free to incorporate these colors into your outfit
                </p>
                <div className="flex justify-center gap-4">
                  {dressCode.colorPalette.map((color, index) => (
                    <div key={index} className="text-center">
                      <div
                        className="w-16 h-16 rounded-full shadow-md mx-auto mb-2"
                        style={{ backgroundColor: color }}
                      />
                      <p className="text-xs text-text-secondary font-mono">
                        {color}
                      </p>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
