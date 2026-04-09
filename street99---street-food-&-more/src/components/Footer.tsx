import { motion } from "motion/react";
import { Instagram, Facebook, Twitter, Utensils } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-20 px-4 border-t border-white/5 bg-background">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        
        <div className="col-span-1 md:col-span-2 space-y-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-neon-orange rounded flex items-center justify-center rotate-3">
              <Utensils className="text-black w-5 h-5" />
            </div>
            <span className="font-heading text-xl tracking-tighter neon-glow-orange">STREET99</span>
          </div>
          <p className="text-muted-foreground max-w-sm">
            Bringing the authentic taste of street food to Bangalore. 
            Quality, flavor, and vibes - all in one place.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-neon-pink hover:text-black transition-all">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-neon-blue hover:text-black transition-all">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-neon-blue-dark hover:text-white transition-all">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-bold mb-6 uppercase tracking-widest text-xs text-neon-yellow">Quick Links</h4>
          <ul className="space-y-4 text-sm text-muted-foreground">
            <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
            <li><a href="#menu" className="hover:text-white transition-colors">Menu</a></li>
            <li><a href="#location" className="hover:text-white transition-colors">Location</a></li>
            <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6 uppercase tracking-widest text-xs text-neon-pink">Legal</h4>
          <ul className="space-y-4 text-sm text-muted-foreground">
            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Refund Policy</a></li>
          </ul>
        </div>

      </div>
      
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:row justify-between items-center gap-4 text-xs text-muted-foreground uppercase tracking-widest">
        <p>© 2026 STREET99. ALL RIGHTS RESERVED.</p>
        <p>MADE WITH ❤️ IN BANGALORE</p>
      </div>
    </footer>
  );
}
