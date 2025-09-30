import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Camera, 
  Map, 
  Archive, 
  Headphones, 
  Smartphone, 
  Search,
  Calendar,
  Users
} from "lucide-react";

const features = [
  {
    icon: Camera,
    title: "360° Virtual Tours",
    description: "Experience immersive panoramic views of monastery interiors and exteriors with interactive hotspots.",
    color: "monastery-gold"
  },
  {
    icon: Headphones,
    title: "Multilingual Narration",
    description: "Listen to guided tours in English, Hindi, and Tibetan with synchronized audio and captions.",
    color: "monastery-brown"
  },
  {
    icon: Map,
    title: "Interactive Maps",
    description: "Navigate geo-tagged monasteries with travel routes and nearby attractions overlay.",
    color: "monastery-gold"
  },
  {
    icon: Archive,
    title: "Digital Archives",
    description: "Browse high-resolution scanned manuscripts, murals, and historical documents with OCR search.",
    color: "monastery-brown"
  },
  {
    icon: Search,
    title: "AI-Powered Search",
    description: "Discover content through semantic search and automated categorization of artifacts.",
    color: "monastery-gold"
  },
  {
    icon: Smartphone,
    title: "Smart Audio Guide",
    description: "GPS and Bluetooth beacon-triggered audio guides with offline mode for remote areas.",
    color: "monastery-brown"
  },
  {
    icon: Calendar,
    title: "Cultural Calendar",
    description: "Stay updated with monastery festivals, rituals, and special events with booking capabilities.",
    color: "monastery-gold"
  },
  {
    icon: Users,
    title: "Community Archive",
    description: "Contribute photos, stories, and oral histories to preserve living heritage.",
    color: "monastery-brown"
  }
];

export const Features = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-monastery-brown">
            Comprehensive Digital Heritage Platform
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Advanced technology meets ancient wisdom. Explore Sikkim's monasteries through cutting-edge digital tools designed for preservation and accessibility.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="p-6 group hover:shadow-monastery-medium transition-monastery hover:-translate-y-1">
                <div className="space-y-4">
                  <div className={`w-12 h-12 rounded-lg bg-${feature.color}/10 flex items-center justify-center group-hover:bg-${feature.color}/20 transition-monastery`}>
                    <Icon className={`h-6 w-6 text-${feature.color} group-hover:scale-110 transition-monastery`} />
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-monastery-brown mb-2 group-hover:text-monastery-gold transition-monastery">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button variant="pilgrimage" size="lg">
            Explore All Features
          </Button>
        </div>
      </div>
    </section>
  );
};