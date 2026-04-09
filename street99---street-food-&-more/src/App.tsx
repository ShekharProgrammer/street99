import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Location from "./components/Location";
import Footer from "./components/Footer";
import CinematicIntro from "./components/CinematicIntro";
import { motion, useScroll, useSpring, AnimatePresence } from "motion/react";
import { ShoppingBag } from "lucide-react";
import { useState, useEffect } from "react";

export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-neon-orange selection:text-black">
      <AnimatePresence>
        {showIntro && (
          <CinematicIntro onComplete={() => setShowIntro(false)} />
        )}
      </AnimatePresence>

      {!showIntro && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Progress Bar */}
          <motion.div
            className="fixed top-0 left-0 right-0 h-1 bg-neon-orange z-[60] origin-left"
            style={{ scaleX }}
          />

          <Navbar />
          
          <main>
            <Hero />
            
            {/* Marketing Section / Call to Action */}
            <section id="contact" className="py-20 px-4 bg-neon-orange text-black overflow-hidden relative">
              <motion.div 
                initial={{ x: "100%" }}
                animate={{ x: "-100%" }}
                transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                className="flex whitespace-nowrap gap-12 font-heading text-6xl md:text-8xl opacity-20 pointer-events-none absolute top-1/2 -translate-y-1/2"
              >
                <span>BOOK NOW • ORDER ONLINE • STREET99 • BEST BURGERS • </span>
                <span>BOOK NOW • ORDER ONLINE • STREET99 • BEST BURGERS • </span>
              </motion.div>

              <div className="max-w-4xl mx-auto text-center relative z-10">
                <h2 className="font-heading text-4xl md:text-6xl mb-8 leading-tight">
                  HUNGRY? DON'T WAIT. <br />
                  <span className="bg-black text-neon-orange px-4">YOUR TABLE IS READY.</span>
                </h2>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                  <button className="w-full sm:w-auto px-12 py-5 bg-black text-white font-bold rounded-full text-xl hover:scale-105 transition-transform shadow-2xl">
                    BOOK A TABLE
                  </button>
                  <button className="w-full sm:w-auto px-12 py-5 bg-white text-black font-bold rounded-full text-xl hover:scale-105 transition-transform shadow-2xl border-2 border-neon-orange">
                    ORDER ONLINE
                  </button>
                </div>
              </div>
            </section>

            <Menu />
            
            <Location />
          </main>

          <Footer />

          {/* Floating Mobile CTA */}
          <motion.div 
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            className="fixed bottom-6 left-6 right-6 z-50 md:hidden"
          >
            <button className="w-full py-4 bg-neon-orange text-black font-bold rounded-full shadow-[0_0_30px_rgba(255,107,0,0.5)] flex items-center justify-center gap-2 border-2 border-black">
              <ShoppingBag className="w-5 h-5" />
              ORDER ONLINE NOW
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
