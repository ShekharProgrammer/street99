import { motion } from "motion/react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Coffee, Pizza, Utensils, Soup, Plus } from "lucide-react";

const menuData = {
  tea: [
    { name: "Masala Chai", desc: "Authentic Indian spiced tea", price: "TBD", image: "https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?q=80&w=400&auto=format&fit=crop" },
    { name: "Ginger Tea", desc: "Fresh ginger infused tea", price: "TBD", image: "https://images.unsplash.com/photo-1544787210-228394c3d3e0?q=80&w=400&auto=format&fit=crop" },
    { name: "Lemon Tea", desc: "Refreshing citrus tea", price: "TBD", image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=400&auto=format&fit=crop" },
  ],
  burger: [
    { name: "Street99 Special", desc: "Our signature double patty burger", price: "TBD", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=400&auto=format&fit=crop" },
    { name: "Crispy Paneer", desc: "Spicy paneer patty with secret sauce", price: "TBD", image: "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=400&auto=format&fit=crop" },
    { name: "Classic Veg", desc: "The timeless street burger", price: "TBD", image: "https://images.unsplash.com/photo-1512152272829-e3139592d56f?q=80&w=400&auto=format&fit=crop" },
  ],
  chowmein: [
    { name: "Veg Chowmein", desc: "Classic street style stir-fried noodles", price: "TBD", image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=400&auto=format&fit=crop" },
    { name: "Schezwan Noodles", desc: "Extra spicy noodles with red chilies", price: "TBD", image: "https://images.unsplash.com/photo-1617093727343-374698b1b08d?q=80&w=400&auto=format&fit=crop" },
    { name: "Hakka Noodles", desc: "Mildly spiced with fresh veggies", price: "TBD", image: "https://images.unsplash.com/photo-1526318896980-cf78c088247c?q=80&w=400&auto=format&fit=crop" },
  ],
  pizza: [
    { name: "Margherita", desc: "Fresh basil and mozzarella", price: "TBD", image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?q=80&w=400&auto=format&fit=crop" },
    { name: "Farmhouse", desc: "Loaded with garden fresh vegetables", price: "TBD", image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=400&auto=format&fit=crop" },
    { name: "Spicy Paneer Pizza", desc: "Indian twist with marinated paneer", price: "TBD", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=400&auto=format&fit=crop" },
  ]
};

export default function Menu() {
  return (
    <section id="menu" className="py-24 px-4 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-heading text-5xl md:text-7xl mb-4 neon-glow-pink"
          >
            THE MENU
          </motion.h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Handcrafted street food made with love and the freshest ingredients. 
            Explore our diverse range of flavors.
          </p>
        </div>

        <Tabs defaultValue="burger" className="w-full">
          <TabsList className="flex flex-wrap justify-center gap-2 md:gap-4 bg-transparent h-auto mb-12">
            <TabsTrigger value="tea" className="data-[state=active]:bg-neon-blue data-[state=active]:text-black border border-white/10 px-4 md:px-8 py-2 md:py-3 rounded-full transition-all text-xs md:text-sm">
              <Coffee className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" /> TEA
            </TabsTrigger>
            <TabsTrigger value="burger" className="data-[state=active]:bg-neon-orange data-[state=active]:text-black border border-white/10 px-4 md:px-8 py-2 md:py-3 rounded-full transition-all text-xs md:text-sm">
              <Utensils className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" /> BURGER
            </TabsTrigger>
            <TabsTrigger value="chowmein" className="data-[state=active]:bg-neon-green data-[state=active]:text-black border border-white/10 px-4 md:px-8 py-2 md:py-3 rounded-full transition-all text-xs md:text-sm">
              <Soup className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" /> CHOWMEIN
            </TabsTrigger>
            <TabsTrigger value="pizza" className="data-[state=active]:bg-neon-pink data-[state=active]:text-black border border-white/10 px-4 md:px-8 py-2 md:py-3 rounded-full transition-all text-xs md:text-sm">
              <Pizza className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" /> PIZZA
            </TabsTrigger>
          </TabsList>

          {Object.entries(menuData).map(([key, items]) => (
            <TabsContent key={key} value={key} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {items.map((item, idx) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Card className="bg-card border-white/5 overflow-hidden group hover:border-primary/50 transition-colors">
                    <div className="relative h-64 overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                      <Badge className="absolute top-4 right-4 bg-neon-orange text-black font-bold">
                        NEW
                      </Badge>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-heading text-xl tracking-tight">{item.name}</h3>
                        <span className="text-neon-yellow font-bold">{item.price}</span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-6">{item.desc}</p>
                      <button className="w-full py-3 rounded-lg border border-white/10 flex items-center justify-center gap-2 hover:bg-white/5 transition-colors font-bold text-xs tracking-widest uppercase">
                        <Plus className="w-4 h-4" /> Add to Order
                      </button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
