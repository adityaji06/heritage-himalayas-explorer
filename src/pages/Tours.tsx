import { Layout } from "@/components/Layout";
import { MonasteryCard } from "@/components/MonasteryCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Filter, SlidersHorizontal } from "lucide-react";
import rumtekImage from "@/assets/rumtek-monastery.jpg";
import encheyImage from "@/assets/enchey-monastery.jpg";
import pemayangtseImage from "@/assets/pemayangtse-monastery.jpg";

const tours = [
  {
    id: "rumtek",
    name: "Rumtek Monastery",
    location: "East Sikkim",
    century: "16th Century",
    image: rumtekImage,
    description: "Experience the grandeur of the largest monastery in Sikkim with multiple 360° tours covering the main hall, prayer wheels, and meditation chambers.",
    toursCount: 8,
    rating: 4.9,
    featured: true,
  },
  {
    id: "enchey",
    name: "Enchey Monastery",
    location: "Gangtok",
    century: "19th Century",
    image: encheyImage,
    description: "Explore this hilltop monastery with panoramic views of Gangtok and detailed tours of the traditional architecture and sacred spaces.",
    toursCount: 5,
    rating: 4.7,
  },
  {
    id: "pemayangtse",
    name: "Pemayangtse Monastery",
    location: "West Sikkim",
    century: "17th Century",
    image: pemayangtseImage,
    description: "Discover intricate wood carvings and magnificent wall paintings in one of Sikkim's oldest and most important monasteries.",
    toursCount: 6,
    rating: 4.8,
  },
];

const Tours = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Header */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-monastery-cream/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center space-y-4 mb-8">
              <h1 className="text-4xl sm:text-5xl font-bold text-monastery-brown">
                Virtual Tours
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Immerse yourself in 360° experiences of Sikkim's most sacred monasteries from anywhere in the world.
              </p>
            </div>

            {/* Search and Filters */}
            <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Search monasteries..." 
                  className="pl-10"
                />
              </div>
              <Button variant="outline" className="flex items-center space-x-2">
                <SlidersHorizontal className="h-4 w-4" />
                <span>Filters</span>
              </Button>
            </div>
          </div>
        </section>

        {/* Tours Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tours.map((tour) => (
                <MonasteryCard
                  key={tour.id}
                  {...tour}
                />
              ))}
            </div>

            <div className="text-center mt-12">
              <Button variant="pilgrimage">
                Load More Tours
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Tours;