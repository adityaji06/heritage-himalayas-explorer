import { Layout } from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Navigation, Clock, Star } from "lucide-react";

const Map = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Header */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-monastery-cream/30">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-monastery-brown mb-4">
              Interactive Map
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore the geographical distribution of Sikkim's monasteries with interactive markers and travel routes.
            </p>
          </div>
        </section>

        {/* Map Container */}
        <section className="px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto -mt-8">
            <Card className="overflow-hidden shadow-monastery-strong">
              {/* Map Placeholder */}
              <div className="aspect-[16/9] bg-gradient-to-br from-monastery-stone/20 to-monastery-cream flex items-center justify-center">
                <div className="text-center space-y-4">
                  <MapPin className="h-16 w-16 text-monastery-gold mx-auto" />
                  <div>
                    <h3 className="text-xl font-semibold text-monastery-brown">Interactive Map Coming Soon</h3>
                    <p className="text-muted-foreground">
                      Advanced mapping with GPS coordinates, travel routes, and monastery details
                    </p>
                  </div>
                  <Button variant="hero">
                    <Navigation className="h-4 w-4 mr-2" />
                    Enable Location Services
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Featured Locations */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold text-monastery-brown mb-8">Featured Locations</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: "Rumtek Monastery",
                  location: "East Sikkim",
                  distance: "24 km from Gangtok",
                  coordinates: "27.3056° N, 88.5683° E",
                  rating: 4.9
                },
                {
                  name: "Enchey Monastery",
                  location: "Gangtok",
                  distance: "3 km from city center",
                  coordinates: "27.3389° N, 88.6065° E",
                  rating: 4.7
                },
                {
                  name: "Pemayangtse Monastery",
                  location: "West Sikkim",
                  distance: "110 km from Gangtok",
                  coordinates: "27.2125° N, 88.2461° E",
                  rating: 4.8
                }
              ].map((location, index) => (
                <Card key={index} className="p-6 hover:shadow-monastery-medium transition-monastery">
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold text-monastery-brown">{location.name}</h3>
                        <p className="text-sm text-muted-foreground">{location.location}</p>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 fill-monastery-gold text-monastery-gold" />
                        <span className="text-sm font-medium">{location.rating}</span>
                      </div>
                    </div>
                    
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-2">
                        <Navigation className="h-4 w-4" />
                        <span>{location.distance}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4" />
                        <span className="font-mono text-xs">{location.coordinates}</span>
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <Button variant="sacred" size="sm" className="flex-1">
                        View on Map
                      </Button>
                      <Button variant="outline" size="sm">
                        Directions
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Map;