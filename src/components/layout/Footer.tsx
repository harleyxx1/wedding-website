import { Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <Heart className="w-5 h-5 text-accent fill-accent" />
          <span className="font-script text-2xl">Angelica & Harley</span>
          <Heart className="w-5 h-5 text-accent fill-accent" />
        </div>
        <p className="text-sm text-white/80 mb-2">
          May 1, 2027 • Sta. Maria, Bulacan, Philippines
        </p>
        <p className="text-sm text-accent font-medium mb-2">
          #HARLICASaPangHabangBuhay
        </p>
        <p className="text-xs text-white/60">
          © {currentYear} Angelica & Harley. Made with love.
        </p>
      </div>
    </footer>
  );
}
