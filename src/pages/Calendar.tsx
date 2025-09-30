import { Layout } from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Calendar as CalendarIcon, 
  Clock, 
  MapPin, 
  Users, 
  Star,
  Bookmark
} from "lucide-react";

const Calendar = () => {
  const events = [
    {
      id: 1,
      title: "Losar Festival",
      date: "February 21, 2026",
      time: "6:00 AM - 6:00 PM",
      monastery: "Rumtek Monastery",
      description: "Celebrate the Tibetan New Year with traditional ceremonies, mask dances, and community festivities.",
      capacity: 500,
      registered: 234,
      featured: true,
      category: "Festival"
    },
    {
      id: 2,
      title: "Butter Lamp Festival",
      date: "March 15, 2026",
      time: "7:00 PM - 10:00 PM",
      monastery: "Enchey Monastery",
      description: "Evening ceremony with thousands of butter lamps creating a mesmerizing display of devotion.",
      capacity: 200,
      registered: 89,
      featured: false,
      category: "Ceremony"
    },
    {
      id: 3,
      title: "Meditation Retreat",
      date: "April 10-12, 2026",
      time: "3 days",
      monastery: "Pemayangtse Monastery",
      description: "Three-day silent meditation retreat guided by senior monks in the peaceful mountain setting.",
      capacity: 30,
      registered: 18,
      featured: false,
      category: "Retreat"
    },
    {
    id: 4,
    title: "Bumchu Festival",
    date: "March 2, 2026",
    time: "6:00 AM - 4:00 PM",
    monastery: "Tashiding Monastery",
    description: "Sacred opening of the holy water vase, believed to predict the fortunes of the year ahead.",
    capacity: 800,
    registered: 560,
    featured: true,
    category: "Spiritual"
  },
    {id: 5,
    title: "Guru Rinpoche Thrungkar Tshechu",
    date: "August 5, 2026",
    time: "7:00 AM - 3:00 PM",
    monastery: "Deorali Chorten, Gangtok",
    description: "Procession and blessings marking Guru Padmasambhava’s birth anniversary with thangka display.",
    capacity: 1000,
    registered: 720,
    featured: false,
    category: "Festival"
  },


  ];

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Header */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-monastery-cream/30">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-monastery-brown mb-4">
              Cultural Calendar
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join sacred festivals, ceremonies, and spiritual events at Sikkim's monasteries throughout the year.
            </p>
          </div>
        </section>

        {/* Featured Event */}
        <section className="px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto -mt-8">
            <Card className="overflow-hidden shadow-monastery-strong hero-gradient">
              <div className="p-8 md:p-12 text-white">
                <div className="max-w-3xl">
                  <div className="flex items-center space-x-2 mb-4">
                    <Star className="h-5 w-5 fill-monastery-gold text-monastery-gold" />
                    <span className="text-monastery-gold font-medium">Featured Event</span>
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Losar Festival 2026
                  </h2>
                  
                  <p className="text-lg text-white/90 mb-6 leading-relaxed">
                    Experience the grandest celebration of the Tibetan New Year at Rumtek Monastery. 
                    Witness ancient mask dances, participate in traditional ceremonies, and join the community in welcoming prosperity and peace.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 text-sm">
                    <div className="flex items-center space-x-2">
                      <CalendarIcon className="h-4 w-4" />
                      <span>February 21, 2026</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4" />
                      <span>6:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4" />
                      <span>Rumtek Monastery</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button variant="temple" size="lg">
                      Register Now
                    </Button>
                    <Button variant="outline" size="lg" className="text-white border-white/30 hover:bg-white/10">
                      <Bookmark className="h-4 w-4 mr-2" />
                      Save Event
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold text-monastery-brown mb-8">Upcoming Events</h2>
            
            <div className="space-y-6">
              {events.map((event) => (
                <Card key={event.id} className="p-6 hover:shadow-monastery-medium transition-monastery">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          event.category === 'Festival' ? 'bg-monastery-gold/20 text-monastery-brown' :
                          event.category === 'Ceremony' ? 'bg-monastery-brown/20 text-monastery-brown' :
                          'bg-monastery-stone/20 text-monastery-brown'
                        }`}>
                          {event.category}
                        </span>
                        {event.featured && (
                          <Star className="h-4 w-4 fill-monastery-gold text-monastery-gold" />
                        )}
                      </div>

                      <h3 className="text-xl font-semibold text-monastery-brown mb-2">
                        {event.title}
                      </h3>

                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {event.description}
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-2">
                          <CalendarIcon className="h-4 w-4" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="h-4 w-4" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-4 w-4" />
                          <span>{event.monastery}</span>
                        </div>
                      </div>
                    </div>

                    <div className="lg:text-right space-y-4">
                      <div className="flex items-center space-x-2 text-sm">
                        <Users className="h-4 w-4 text-monastery-gold" />
                        <span className="text-muted-foreground">
                          {event.registered}/{event.capacity} registered
                        </span>
                      </div>

                      <div className="flex flex-col sm:flex-row lg:flex-col gap-2">
                        <Button variant="sacred" size="sm">
                          Register
                        </Button>
                        <Button variant="outline" size="sm">
                          Details
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button variant="pilgrimage">
                View All Events
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Calendar;