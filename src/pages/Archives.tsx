import { Layout } from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import prajnaparnitaImage from "@/assets/prajnapranita.jpg";
import avalokiteshvaraImage from "@/assets/avloaishvetra.jpg";
import monastrychronicles from "@/assets/monastrychronicles.jpg";
import { 
  Search, 
  Filter, 
  Download, 
  Eye, 
  FileText, 
  Image as ImageIcon,
  Calendar,
  Tag
} from "lucide-react";

const Archives = () => {
  const archiveItems = [
    {
      id: 1,
      title: "Prajnaparamita Manuscript",
      type: "manuscript",
      monastery: "Rumtek Monastery",
      century: "17th Century",
      description: "Ancient Buddhist text on the perfection of wisdom, written in traditional Tibetan script on palm leaves.",
      image: prajnaparnitaImage ,
      width:400,
      height:500,
      fileSize: "2.4 MB",
      language: "Tibetan"
    },
    {
      id: 2,
      title: "Avalokiteshvara Mural",
      type: "mural",
      monastery: "Pemayangtse",
      century: "18th Century",
      description: "Exquisite wall painting depicting the compassionate bodhisattva Avalokiteshvara in traditional style.",
      image: avalokiteshvaraImage,
      width:400,
      height:200,
      fileSize: "5.1 MB",
      language: "Visual"
    },
    {
      id: 3,
      title: "Monastery Chronicles",
      type: "manuscript",
      monastery: "Enchey",
      century: "19th Century",
      description: "Historical records documenting the founding and development of Enchey Monastery.",
      image: monastrychronicles,
      width: 300,
      height: 400,
      fileSize: "1.8 MB",
      language: "Tibetan"
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Header */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-monastery-cream/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center space-y-4 mb-8">
              <h1 className="text-4xl sm:text-5xl font-bold text-monastery-brown">
                Digital Archives
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore our comprehensive collection of digitized manuscripts, murals, and historical documents from Sikkim's monasteries.
              </p>
            </div>

            {/* Search and Filters */}
            <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Search archives..." 
                  className="pl-10"
                />
              </div>
              <Button variant="outline" className="flex items-center space-x-2">
                <Filter className="h-4 w-4" />
                <span>Filter</span>
              </Button>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Manuscripts", count: "125" },
                { label: "Murals", count: "89" },
                { label: "Documents", count: "156" },
                { label: "Languages", count: "3" }
              ].map((stat, index) => (
                <Card key={index} className="p-4 text-center">
                  <div className="text-2xl font-bold text-monastery-gold">{stat.count}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Archive Grid */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {archiveItems.map((item) => (
                <Card key={item.id} className="group overflow-hidden hover:shadow-monastery-medium transition-monastery">
                  {/* Thumbnail */}
               <div className="aspect-[4/3] bg-monastery-stone/20 flex items-center justify-center">
  {item.image && (
    <img
      src={item.image}
      alt={item.title}
      width={item.width}
      height={item.height}
      style={{ maxWidth: "150%", maxHeight: "300px", borderRadius: "10px" }}
    />
  )}
</div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <div>
                      <div className="flex items-center space-x-2 mb-2">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          item.type === 'manuscript' 
                            ? 'bg-monastery-gold/20 text-monastery-brown' 
                            : 'bg-monastery-brown/20 text-monastery-brown'
                        }`}>
                          {item.type}
                        </span>
                        <span className="text-xs text-muted-foreground">{item.fileSize}</span>
                      </div>
                      
                      <h3 className="font-semibold text-monastery-brown group-hover:text-monastery-gold transition-monastery">
                        {item.title}
                      </h3>
                      
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground mt-2">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-3 w-3" />
                          <span>{item.century}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Tag className="h-3 w-3" />
                          <span>{item.language}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                      {item.description}
                    </p>

                    <div className="text-xs text-monastery-gold font-medium">
                      {item.monastery}
                    </div>

                    <div className="flex space-x-2">
                      <Button variant="sacred" size="sm" className="flex-1">
                        <Eye className="h-4 w-4 mr-2" />
                        View
                      </Button>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button variant="pilgrimage">
                Load More Archives
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Archives;