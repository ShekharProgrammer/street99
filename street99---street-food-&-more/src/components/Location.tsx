import { motion, useInView } from "motion/react";
import { MapPin, Clock, Phone, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef } from "react";

export default function Location() {
  const mapRef = useRef<HTMLDivElement>(null);
  const isMapInView = useInView(mapRef, { once: true, margin: "200px" });

  return (
    <section id="location" className="py-24 px-4 bg-card/50 relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="space-y-8"
        >
          <div>
            <h2 className="font-heading text-5xl md:text-6xl mb-6 neon-glow-blue">FIND US</h2>
            <p className="text-muted-foreground text-lg">
              Located in the heart of Gopasandra, Street99 is your go-to spot for 
              late-night cravings and evening hangouts.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-neon-blue/10 flex items-center justify-center shrink-0">
                <MapPin className="text-neon-blue w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">Address</h4>
                <p className="text-muted-foreground">
                  Near Nambiar Ellegenza & Millenia, 100m from Nambiar Ellegenza Gate,<br />
                  Muthanallur Rd, Gopasandra, Bangalore
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-neon-green/10 flex items-center justify-center shrink-0">
                <Clock className="text-neon-green w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">Opening Hours</h4>
                <p className="text-muted-foreground">Mon - Sun: 4:00 PM - 11:30 PM</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-neon-orange/10 flex items-center justify-center shrink-0">
                <Phone className="text-neon-orange w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">Contact</h4>
                <p className="text-muted-foreground">+91 9901X XXXXX</p>
              </div>
            </div>
          </div>

          <Button size="lg" className="bg-neon-blue text-black font-bold h-14 px-8 hover:bg-neon-blue/80">
            <Navigation className="w-5 h-5 mr-2" />
            GET DIRECTIONS
          </Button>
        </motion.div>

        <motion.div
          ref={mapRef}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="relative h-[500px] rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,229,255,0.1)] bg-black/20"
        >
          {isMapInView ? (
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.96238614488!2d77.72!3d12.84!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6d8f8f8f8f8f%3A0x8f8f8f8f8f8f8f8f!2sNambiar%20Ellegenza!5e0!3m2!1sen!2sin!4v1712650000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-muted-foreground">
              Loading Map...
            </div>
          )}
          <div className="absolute inset-0 pointer-events-none border-[20px] border-card/50 rounded-3xl" />
        </motion.div>
      </div>
    </section>
  );
}
