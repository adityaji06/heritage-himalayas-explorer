import { Card } from "@/components/ui/card";

const stats = [
  {
    number: "12+",
    label: "Historic Monasteries",
    description: "Documented across Sikkim"
  },
  {
    number: "50+",
    label: "Virtual Tours",
    description: "360° immersive experiences"
  },
  {
    number: "200+",
    label: "Digital Artifacts",
    description: "Manuscripts and murals"
  },
  {
    number: "3",
    label: "Languages",
    description: "English, Hindi & Tibetan"
  }
];

export const Stats = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 hero-gradient">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Preserving Heritage Through Technology
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Our platform represents the largest digital collection of Sikkim's monastic heritage, making ancient wisdom accessible to the world.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6 text-center bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-monastery">
              <div className="space-y-2">
                <div className="text-3xl lg:text-4xl font-bold text-monastery-gold">
                  {stat.number}
                </div>
                <div className="font-semibold text-white">
                  {stat.label}
                </div>
                <div className="text-sm text-white/80">
                  {stat.description}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};