import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

export default function CinematicIntro({ onComplete }: { onComplete: () => void }) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer1 = setTimeout(() => setStep(1), 1000);
    const timer2 = setTimeout(() => setStep(2), 2500);
    const timer3 = setTimeout(() => onComplete(), 4000);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onComplete]);

  return (
    <motion.div 
      className="fixed inset-0 z-[100] bg-black flex items-center justify-center overflow-hidden"
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Background Glow */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute w-[800px] h-[800px] bg-neon-orange/20 blur-[150px] rounded-full"
        />

        <AnimatePresence mode="wait">
          {step === 0 && (
            <motion.div
              key="step0"
              initial={{ opacity: 0, letterSpacing: "1.5em" }}
              animate={{ opacity: 1, letterSpacing: "0.5em" }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="text-center"
            >
              <h2 className="font-heading text-3xl md:text-5xl text-white/40 uppercase">
                Something is cooking...
              </h2>
              <motion.div 
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 bg-neon-orange/5 blur-3xl rounded-full"
              />
            </motion.div>
          )}

          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 2 }}
              transition={{ duration: 0.8, ease: "backOut" }}
              className="text-center"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-2 border-dashed border-neon-orange/20 rounded-full scale-150"
              />
              <h1 className="font-heading text-8xl md:text-[12rem] neon-glow-orange leading-none">
                99
              </h1>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, letterSpacing: "2em" }}
              animate={{ opacity: 1, letterSpacing: "0.2em" }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-center"
            >
              <h1 className="font-heading text-6xl md:text-9xl neon-glow-orange">
                STREET99
              </h1>
              <p className="font-sans text-neon-yellow tracking-[0.5em] uppercase text-xs mt-6 font-bold opacity-80">
                ESTABLISHED 2026 • BANGALORE
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Cinematic Lines */}
        <div className="absolute top-0 left-0 w-full h-[15vh] bg-black z-10" />
        <div className="absolute bottom-0 left-0 w-full h-[15vh] bg-black z-10" />
      </div>
    </motion.div>
  );
}
