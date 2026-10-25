import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Clock, Star } from "lucide-react";
import destinationsImage from "@/assets/indian-destinations.jpg";

const Destinations = () => {
  const destinations = [
    {
      name: "Golden Triangle",
      location: "Delhi - Agra - Jaipur",
      duration: "7 Days",
      rating: 4.8,
      description: "Explore India's most iconic destinations including the majestic Taj Mahal.",
      highlights: ["Taj Mahal", "Red Fort", "Hawa Mahal", "Amber Palace"]
    },
    {
      name: "Kerala Backwaters",
      location: "Alleppey - Kumarakom",
      duration: "5 Days",
      rating: 4.9,
      description: "Cruise through serene backwaters in traditional houseboats.",
      highlights: ["Houseboat Stay", "Spice Gardens", "Ayurvedic Spa", "Local Cuisine"]
    },
    {
      name: "Rajasthan Royal",
      location: "Jodhpur - Udaipur - Jaisalmer",
      duration: "10 Days",
      rating: 4.7,
      description: "Experience royal heritage in the land of maharajas.",
      highlights: ["Palace Hotels", "Desert Safari", "Royal Dining", "Folk Performances"]
    },
    {
      name: "Himalayan Adventure",
      location: "Manali - Leh - Ladakh",
      duration: "12 Days",
      rating: 4.6,
      description: "Thrilling journey through the mighty Himalayas.",
      highlights: ["Mountain Views", "Monasteries", "Adventure Sports", "Local Culture"]
    },
    {
      name: "Goa Beach Escape",
      location: "North & South Goa",
      duration: "6 Days",
      rating: 4.8,
      description: "Relax on pristine beaches and enjoy vibrant nightlife.",
      highlights: ["Beach Resorts", "Water Sports", "Portuguese Heritage", "Beach Parties"]
    },
    {
      name: "Tamil Nadu Temples",
      location: "Chennai - Madurai - Thanjavur",
      duration: "8 Days",
      rating: 4.5,
      description: "Discover ancient temples and rich Dravidian architecture.",
      highlights: ["Ancient Temples", "Classical Dance", "Local Crafts", "Cultural Shows"]
    }
  ];

  return (
    <section id="destinations" className="py-16 bg-gradient-to-br from-background to-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
            <MapPin className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">Popular Destinations</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Explore India's
            <span className="block bg-gradient-hero bg-clip-text text-transparent">
              Incredible Destinations
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From the snow-capped Himalayas to tropical beaches, ancient temples to modern cities - 
            India offers diverse experiences for every traveler.
          </p>
        </div>

        {/* Featured Image */}
        <div className="mb-16">
          <div 
            className="h-96 rounded-2xl bg-cover bg-center shadow-elevated"
            style={{ backgroundImage: `url(${destinationsImage})` }}
          >
            <div className="h-full bg-gradient-hero opacity-20 rounded-2xl"></div>
          </div>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <Card key={index} className="overflow-hidden border border-border shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-1">
                      {destination.name}
                    </h3>
                    <div className="flex items-center text-muted-foreground text-sm">
                      <MapPin className="w-4 h-4 mr-1" />
                      {destination.location}
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-golden mr-1" fill="currentColor" />
                    <span className="text-sm font-medium">{destination.rating}</span>
                  </div>
                </div>

                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {destination.description}
                </p>

                <div className="flex items-center text-sm text-muted-foreground mb-4">
                  <Clock className="w-4 h-4 mr-1" />
                  {destination.duration}
                </div>

                <div className="space-y-2">
                  <div className="text-sm font-medium text-foreground">Highlights:</div>
                  <div className="flex flex-wrap gap-1">
                    {destination.highlights.map((highlight, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            asChild
            size="lg"
            className="px-8 py-4 bg-saffron hover:bg-saffron-light text-white shadow-warm"
          >
            <a href="#contact">Inquire for Custom Package</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Destinations;
