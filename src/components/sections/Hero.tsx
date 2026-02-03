"use client";

import { useEffect, useState } from "react";
import { ChevronDown, Calendar, MapPin } from "lucide-react";
import { WEDDING_DATA } from "@/lib/constants";
import { formatDate, getCountdown } from "@/lib/utils";

export default function Hero() {
  const { hero } = WEDDING_DATA;
  const [countdown, setCountdown] = useState(getCountdown(hero.date));

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(getCountdown(hero.date));
    }, 1000);

    return () => clearInterval(timer);
  }, [hero.date]);

  const scrollToNext = () => {
    const element = document.getElementById("story");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center bg-gradient-to-br from-primary/20 via-purple/20 to-accent/20"
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/30 z-0" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4">
        <div className="animate-fade-in">
          <p className="text-lg md:text-xl mb-4 tracking-wide">
            WE&apos;RE GETTING MARRIED
          </p>
          <h1 className="font-script text-6xl md:text-8xl mb-6">
            {hero.bride} & {hero.groom}
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light">
            {hero.welcomeMessage}
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span className="text-lg">{formatDate(hero.date)}</span>
            </div>
            <div className="hidden md:block w-px h-6 bg-white/50" />
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span className="text-lg">{hero.location}</span>
            </div>
          </div>

          {/* Countdown */}
          <div className="flex justify-center gap-4 md:gap-8 mb-12">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold">
                {countdown.days}
              </div>
              <div className="text-sm uppercase tracking-wide">Days</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold">
                {countdown.hours}
              </div>
              <div className="text-sm uppercase tracking-wide">Hours</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold">
                {countdown.minutes}
              </div>
              <div className="text-sm uppercase tracking-wide">Minutes</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold">
                {countdown.seconds}
              </div>
              <div className="text-sm uppercase tracking-wide">Seconds</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce"
        aria-label="Scroll to next section"
      >
        <ChevronDown className="w-8 h-8 text-white" />
      </button>
    </section>
  );
}
