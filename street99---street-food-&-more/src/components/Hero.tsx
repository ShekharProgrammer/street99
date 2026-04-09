import { motion, useScroll, useTransform, useSpring, useInView } from "motion/react";
import { useRef, Suspense } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Loader2 } from "lucide-react";
import { Canvas } from "@react-three/fiber";
import Burger3D from "./Burger3D";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { margin: "100px" });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Smooth spring for buttery motion
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 20,
    restDelta: 0.001
  });

  // Text content transforms
  const textOpacity = useTransform(smoothProgress, [0, 0.3], [1, 0]);
  const textScale = useTransform(smoothProgress, [0, 0.3], [1, 0.8]);
  const textY = useTransform(smoothProgress, [0, 0.3], [0, -100]);

  return (
    <section ref={containerRef} className="relative min-h-[400vh] grid-bg">
      {/* Hero Content - Sticky */}
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden px-4">
        
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-orange/10 blur-[150px] rounded-full" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-blue/10 blur-[150px] rounded-full" />
        </div>

        <motion.div 
          style={{ opacity: textOpacity, scale: textScale, y: textY }}
          className="text-center z-30 mb-8 md:mb-12 pt-16 md:pt-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-4 md:mb-6">
            <Star className="w-3 h-3 md:w-4 md:h-4 text-neon-yellow fill-neon-yellow" />
            <span className="text-[10px] md:text-xs font-bold tracking-widest uppercase">Best Street Food in Bangalore</span>
          </div>
          <h1 className="font-heading text-5xl sm:text-6xl md:text-8xl lg:text-9xl mb-6 md:mb-8 leading-[1.1] tracking-tight py-2 md:py-4">
            STREET<span className="text-neon-orange neon-glow-orange">99</span>
          </h1>
          <p className="max-w-xl mx-auto text-sm md:text-lg text-muted-foreground mb-8 md:mb-10 px-6">
            Taste the explosion of flavors with our signature burgers, 
            authentic chowmein, and the most refreshing tea in town.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-6">
            <Button size="lg" className="w-full sm:w-auto bg-neon-orange text-black font-bold h-12 md:h-14 px-8 text-base md:text-lg hover:scale-105 transition-transform shadow-[0_0_20px_rgba(255,107,0,0.3)]">
              EXPLORE MENU
              <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto border-white/20 h-12 md:h-14 px-8 text-base md:text-lg hover:bg-white/5">
              OUR STORY
            </Button>
          </div>
        </motion.div>

        {/* 3D Interactive Food Assembly */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          {isInView && (
            <Canvas shadows dpr={[1, 1.5]} frameloop="demand" camera={{ position: [0, 0, 10], fov: 50 }}>
              <Suspense fallback={null}>
                <Burger3D scrollYProgress={scrollYProgress} />
              </Suspense>
            </Canvas>
          )}
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          style={{ opacity: textOpacity }}
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 flex flex-col items-center gap-2 opacity-50"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Dive into the 3D taste</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-neon-orange to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}

