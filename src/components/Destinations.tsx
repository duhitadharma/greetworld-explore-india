import { Button } from "@/components/ui/button";
import { MapPin, Clock, Star } from "lucide-react";
import destinationsImage from "@/assets/indian-destinations.jpg";
import { useState } from "react";

const Destinations = () => {
  const [flipped, setFlipped] = useState<number | null>(null);

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
            <div
              key={index}
              className="cursor-pointer [perspective:1000px] h-[340px]"
              onClick={() => setFlipped(flipped === index ? null : index)}
            >
              <div
                className={`relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] ${
                  flipped === index ? "[transform:rotateY(180deg)]" : ""
                }`}
              >
                {/* Front */}
                <div className="absolute inset-0 [backface-visibility:hidden] rounded-xl shadow-cool hover:shadow-elevated transition-shadow bg-card p-6 flex flex-col">
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

                  <p className="text-xs text-muted-foreground mt-auto">Click to see highlights →</p>
                </div>

                {/* Back */}
                <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-xl shadow-cool bg-gradient-hero text-white p-6 flex flex-col">
                  <h3 className="text-xl font-bold mb-4">{destination.name}</h3>
                  <div className="text-sm font-medium mb-3">Highlights:</div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {destination.highlights.map((highlight, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-white/20 text-white text-xs rounded-full backdrop-blur-sm"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                  <Button
                    className="w-full mt-auto bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm border border-white/30"
                    onClick={(e) => e.stopPropagation()}
                  >
                    View Details
                  </Button>
                  <p className="text-xs text-white/70 mt-2 text-center">Click to flip back</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="px-8 py-4 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            View All Destinations
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Destinations;