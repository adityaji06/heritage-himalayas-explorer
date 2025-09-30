import { MonasteryCard } from "./MonasteryCard";
import rumtekImage from "@/assets/rumtek-monastery.jpg";
import encheyImage from "@/assets/enchey-monastery.jpg";
import pemayangtseImage from "@/assets/pemayangtse-monastery.jpg";
import tashidingImage from "@/assets/Tashiding-Monastery-Sightseeing.jpg";
import SangaImage from "@/assets/Sanga-Choling-3-1200x900.jpg";
import PhadongImage from "@/assets/Padong.jpg";
import ralongImage from "@/assets/ralong.jpg";
import dodulImage from "@/assets/dodul.jpg";
import kartokImage from "@/assets/kartok.jpg";
import yangthangImage from "@/assets/yangthang.jpg";
import lingdumImage from "@/assets/lingdum.jpg";
import tenzingImage from "@/assets/tenzing.jpg";
const monasteries = [
  {
    id: "rumtek",
    name: "Rumtek Monastery",
    virtualTourInfo: "Explore the grand prayer hall, golden stupa, and panoramic views of the Himalayas in this immersive virtual tour.",
    location: "East Sikkim",
    century: "16th Century",
    image: rumtekImage,
    description: "The largest monastery in Sikkim, home to the Karmapa and center of the Karma Kagyu lineage. Features stunning architecture and precious Buddhist artifacts.",
    toursCount: 8,
    rating: 4.5,
    featured: true,
  },
  {
    id: "enchey",
    name: "Enchey Monastery",
    location: "Gangtok",
    century: "19th Century",
    image: encheyImage,
    description: "Perched on a hilltop above Gangtok, this serene monastery offers panoramic views and houses precious manuscripts and artifacts.",
    toursCount: 5,
    rating: 4.6,
  },
  {
    id: "pemayangtse",
    name: "Pemayangtse Monastery",
    location: "West Sikkim",
    century: "17th Century",
    image: pemayangtseImage,
    description: "One of Sikkim's oldest and most important monasteries, featuring intricate wood carvings and magnificent wall paintings.",
    toursCount: 6,
    rating: 4.8,
  },
  {
    id: "tashiding",
    name: "Tashiding Monastery",
    location: "West Sikkim",
    century: "17th Century",
    image: tashidingImage, // Placeholder image
    description: "A sacred site believed to be blessed by Guru Rinpoche, known for its annual Bumchu festival and stunning hilltop location.",
    toursCount: 4,
    rating: 4.7,
    

  },
  {
    id: "sanga-choling",
    name: "Sanga Choling Monastery",
    location: "North Sikkim",
    century: "18th Century",
    image: SangaImage, // Placeholder image
    description: "A remote monastery nestled in the mountains, renowned for its peaceful ambiance and beautiful frescoes.",
    toursCount: 3,
    rating: 4.5,
  },
    {
    id: "phodong",
    name: "Phodong Monastery",
    location: "North Sikkim",
    established: "18th Century",
    image: PhadongImage,
    description: "Known for vibrant festivals and Buddhist relics.",
    tourCount: 3,
    rating: 4.7,
  },
    {
    id: "rabong",
    name: "Ralong Monastery",
    location: "South Sikkim",
    established: "18th Century",
    image: ralongImage,
    description: "Built by the 9th Karmapa, known for Kagyu festivals.",
    tourCount: 3,
    rating: 4.6,
  },
    {
    id: "do-drul-chorten",
    name: "Do Drul Chorten Monastery",
    location: "Gangtok, East Sikkim",
    established: "1945",
    image: dodulImage,
    description: "Famous stupa surrounded by 108 prayer wheels.",
    tourCount: 5,
    rating: 4.7,
  },
    {
    id: "kartok",
    name: "Kartok Monastery",
    location: "Yuksom, West Sikkim",
    established: "17th Century",
    image: kartokImage,
    description: "Picturesque monastery near Kartok Lake.",
    tourCount: 2,
    rating: 4.5,
  },

    {
    id: "yangthang",
    name: "Yangthang Monastery",
    location: "West Sikkim",
    established: "17th Century",
    image: yangthangImage,
    description: "Lesser-known monastery amidst traditional villages.",
    tourCount: 2,
    rating: 4.4,
  },
    {
    id: "lingdum",
    name: "Lingdum (Ranka) Monastery",
    location: "East Sikkim",
    established: "Late 20th Century",
    image: lingdumImage,
    description: "Modern monastery with grand architecture, popular among tourists.",
    tourCount: 4,
    rating: 4.7,
  },
    {
    id: "tenzang",
    name: "Tenzing Monastery",
    location: "South Sikkim",
    established: "20th Century",
    image: tenzingImage,
    description: "A peaceful retreat surrounded by forests and hills.",
    tourCount: 2,
    rating: 4.4,
  },
];

export const FeaturedMonasteries = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-monastery-cream/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-monastery-brown">
            Featured Monasteries
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore the most significant monastic centers of Sikkim, each with unique history and spiritual significance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {monasteries.map((monastery) => (
            <MonasteryCard
              key={monastery.id}
              {...monastery}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="text-monastery-gold font-medium hover:text-monastery-brown transition-monastery">
            View All Monasteries →
          </button>
        </div>
      </div>
    </section>
  );
};
