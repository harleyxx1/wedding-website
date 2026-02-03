import { Heart } from "lucide-react";
import { FOOTER_DATA } from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <Heart className="w-5 h-5 text-accent fill-accent" />
          <span className="font-script text-2xl">
            {FOOTER_DATA.coupleNames}
          </span>
          <Heart className="w-5 h-5 text-accent fill-accent" />
        </div>
        <p className="text-sm text-white/80 mb-2">
          {FOOTER_DATA.weddingDate} • {FOOTER_DATA.location}
        </p>
        <p className="text-sm text-accent font-medium mb-2">
          {FOOTER_DATA.hashtag}
        </p>
        <p className="text-xs text-white/60">
          © {currentYear} {FOOTER_DATA.coupleNames}. Made with love.
        </p>
      </div>
    </footer>
  );
}
