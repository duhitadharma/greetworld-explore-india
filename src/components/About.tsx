import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Globe, Heart, Shield, Clock } from "lucide-react";
import templeImage from "@/assets/indian-temple.jpg";

const About = () => {
  const features = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "Award-Winning Service",
      description: "Recognized as India's leading tourism company with multiple industry awards."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Expert Local Guides",
      description: "Our certified guides share authentic stories and hidden gems of each destination."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Safety & Security",
      description: "Your safety is our priority with 24/7 support and comprehensive travel insurance."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Flexible Booking",
      description: "Easy booking, free cancellation, and flexible rescheduling options available."
    }
  ];

  const stats = [
    { number: "15+", label: "Years Experience" },
    { number: "50K+", label: "Happy Travelers" },
    { number: "200+", label: "Destinations" },
    { number: "99%", label: "Customer Satisfaction" }
  ];

  return (
    <section id="about" className="py-16 bg-gradient-to-br from-muted/30 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary/20 text-secondary mb-4">
            <Heart className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">About GreetWorld</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Your Trusted
            <span className="block bg-gradient-hero bg-clip-text text-transparent">
              Travel Partner
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            For over 15 years, we've been crafting extraordinary travel experiences 
            that showcase the beauty, culture, and heritage of incredible India.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Text Content */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-foreground">
              Passionate About India's Rich Heritage
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              GreetWorld was born from a deep love for India's diverse landscapes, 
              rich cultural heritage, and warm hospitality. We believe every journey 
              should be more than just a trip – it should be a transformative experience 
              that creates lasting memories.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our team of local experts and passionate travelers work tirelessly to 
              curate authentic experiences that go beyond the ordinary. From bustling 
              markets and ancient temples to serene mountains and pristine beaches, 
              we help you discover the soul of India.
            </p>
            <div className="flex items-center space-x-4">
              <Button 
                size="lg"
                className="bg-saffron hover:bg-saffron-light text-white shadow-warm"
              >
                Our Story
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                Meet Our Team
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div 
              className="h-96 lg:h-[500px] rounded-2xl bg-cover bg-center shadow-elevated"
              style={{ backgroundImage: `url(${templeImage})` }}
            >
              <div className="absolute inset-0 bg-gradient-cool opacity-20 rounded-2xl"></div>
            </div>
            {/* Floating Stats Card */}
            <Card className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-sm shadow-elevated border-0">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground">15+</div>
                    <div className="text-sm text-muted-foreground">Years of Excellence</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="text-center border-0 shadow-cool hover:shadow-warm transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                  {feature.icon}
                </div>
                <h4 className="text-lg font-bold text-foreground mb-2">
                  {feature.title}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <Card className="bg-gradient-hero text-white border-0 shadow-elevated">
          <CardContent className="p-8 md:p-12">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4">Our Journey in Numbers</h3>
              <p className="text-white/90 text-lg">
                These numbers represent the trust and love our travelers have shown us.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold mb-2 text-golden">
                    {stat.number}
                  </div>
                  <div className="text-white/90 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;