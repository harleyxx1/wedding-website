"use client";

import { motion } from "framer-motion";
import { Gift, ExternalLink, Heart } from "lucide-react";
import { WEDDING_DATA } from "@/lib/constants";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export default function Registry() {
  const { registry } = WEDDING_DATA;

  return (
    <section id="registry" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-primary mb-4">
            Registry & Gifts
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto mb-6">
            Your presence at our wedding is the greatest gift of all. However,
            if you wish to honor us with a gift, we have registered at the
            following stores.
          </p>
          <div className="flex items-center justify-center gap-2 text-accent">
            <Heart className="w-5 h-5 fill-accent" />
            <span className="italic">
              Your love and support mean the world to us
            </span>
            <Heart className="w-5 h-5 fill-accent" />
          </div>
        </motion.div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
          {registry.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card hover className="text-center h-full flex flex-col">
                <div className="flex-1">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Gift className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="font-serif text-2xl text-primary mb-4">
                    {item.store}
                  </h3>
                </div>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() =>
                    item.url !== "#" && window.open(item.url, "_blank")
                  }
                  disabled={item.url === "#"}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  {item.url === "#" ? "Coming Soon" : "View Registry"}
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-2xl mx-auto mt-12"
        >
          <Card className="text-center bg-gradient-to-br from-primary/5 to-accent/5">
            <p className="text-text-secondary italic">
              &quot;The greatest gift is not found in a store nor under a tree,
              but in the hearts of true friends.&quot;
            </p>
            <p className="text-text-secondary mt-4">
              If you prefer, you can also contribute to our honeymoon fund to
              help us create unforgettable memories together.
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
