import { Button, MonasteryCardProps } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Clock, Camera, Star } from "lucide-react";

export const MonasteryCard = ({ 
  name, 
  location, 
  century, 
  image, 
  description, 
  toursCount, 
  rating,
  featured = false 
}: MonasteryCardProps) => {
  return (
    <Card className={`group overflow-hidden transition-monastery hover:shadow-monastery-medium hover:-translate-y-2 ${
      featured ? 'ring-2 ring-monastery-gold/50' : ''
    }`}>
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img 
          src={image} 
          alt={`${name} monastery exterior view`}
          className="w-full h-full object-cover group-hover:scale-105 transition-monastery"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        {/* Featured Badge */}
        {featured && (
          <div className="absolute top-3 left-3">
            <div className="bg-monastery-gold text-monastery-brown px-2 py-1 rounded-full text-xs font-medium">
              Featured
            </div>
          </div>
        )}

        {/* Rating */}
        <div className="absolute top-3 right-3 bg-black/40 backdrop-blur-sm text-white px-2 py-1 rounded-full flex items-center space-x-1">
          <Star className="h-3 w-3 fill-monastery-gold text-monastery-gold" />
          <span className="text-xs font-medium">{rating}</span>
        </div>

        {/* Quick Stats */}
        <div className="absolute bottom-3 left-3 right-3">
          <div className="flex items-center justify-between text-white text-xs">
            <div className="flex items-center space-x-1">
              <Camera className="h-3 w-3" />
              <span>{toursCount} tours</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="h-3 w-3" />
              <span>{century}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-bold text-monastery-brown group-hover:text-monastery-gold transition-monastery">
            {name}
          </h3>
          <div className="flex items-center space-x-1 text-muted-foreground mt-1">
            <MapPin className="h-4 w-4" />
            <span className="text-sm">{location}</span>
          </div>
        </div>

        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
          {description}
        </p>

        <div className="flex space-x-2">
          <Button variant="sacred" size="sm" className="flex-1">
            Virtual Tour
          </Button>
          <Button variant="outline" size="sm">
            Details
          </Button>
        </div>
      </div>
    </Card>
  );
};