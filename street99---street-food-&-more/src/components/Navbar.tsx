import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Utensils, Phone, MapPin, ShoppingBag } from "lucide-react";

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-neon-orange rounded-lg flex items-center justify-center rotate-3 shadow-[0_0_15px_rgba(255,107,0,0.5)]">
            <Utensils className="text-black w-6 h-6" />
          </div>
          <span className="font-heading text-2xl tracking-tighter neon-glow-orange">STREET99</span>
        </div>

        <div className="hidden md:flex items-center gap-8 font-medium text-sm uppercase tracking-widest">
          <a href="#menu" className="hover:text-neon-orange transition-colors">Menu</a>
          <a href="#location" className="hover:text-neon-yellow transition-colors">Location</a>
          <a href="#contact" className="hover:text-neon-pink transition-colors">Contact</a>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="outline" className="hidden sm:flex border-2 border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(0,229,255,0.2)]">
            <ShoppingBag className="w-4 h-4 mr-2" />
            Order Online
          </Button>
          <Button className="bg-neon-orange text-black hover:bg-neon-light-orange shadow-[0_0_20px_rgba(255,107,0,0.3)] hover:shadow-[0_0_30px_rgba(255,107,0,0.5)] transition-all duration-300">
            Book a Table
          </Button>
        </div>
      </div>
    </motion.nav>
  );
}
