import { Button } from "@/components/ui/button";
import { ArrowRight, Play, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-monastery.jpg";

export const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Majestic Sikkim monastery perched on mountain cliff at golden hour"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-monastery-brown/60 via-monastery-brown/40 to-monastery-brown/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-monastery-brown/50 via-transparent to-monastery-gold/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="text-monastery-gold font-medium text-sm tracking-wider uppercase">
              Digital Heritage Platform
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Discover Sikkim's
              <span className="block text-monastery-gold">Sacred Monasteries</span>
            </h1>
          </div>
          
          <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Experience immersive 360° virtual tours, explore centuries-old manuscripts, 
            and journey through the spiritual heritage of the Himalayas.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button variant="hero" size="lg" className="group">
              <Play className="h-5 w-5 mr-2 group-hover:scale-110 transition-monastery" />
              Start Virtual Tour
              <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-monastery" />
            </Button>
            
            <Button variant="temple" size="lg" className="group">
              <MapPin className="h-5 w-5 mr-2 group-hover:bounce transition-bounce" />
              Explore Map
            </Button>
          </div>

          {/* Stats */}
          <div className="pt-8 grid grid-cols-3 gap-8 max-w-md mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-monastery-gold">12+</div>
              <div className="text-sm text-white/80">Monasteries</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-monastery-gold">50+</div>
              <div className="text-sm text-white/80">Virtual Tours</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-monastery-gold">200+</div>
              <div className="text-sm text-white/80">Artifacts</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};