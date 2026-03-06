import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Star, Users } from "lucide-react";
import heroImage from "@/assets/hero-taj-mahal.jpg";
import greetWorldLogo from "@/assets/greetworld-logo.png";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-60"></div>
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
            <Star className="w-4 h-4 mr-2 text-golden" fill="currentColor" />
            <span className="text-sm font-medium">India's Premier Travel Experience</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Discover the
            <span className="block bg-gradient-warm bg-clip-text text-transparent">
              Magic of India
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Embark on an unforgettable journey through India's rich heritage, stunning landscapes, 
            and vibrant culture with our expertly crafted tour experiences.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-10">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-golden" />
              <span className="text-lg font-semibold">50,000+ Happy Travelers</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-golden" />
              <span className="text-lg font-semibold">200+ Destinations</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-golden" fill="currentColor" />
              <span className="text-lg font-semibold">4.9/5 Rating</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="text-lg px-8 py-4 bg-saffron hover:bg-saffron-light text-white shadow-warm hover:shadow-elevated transition-bounce"
            >
              Explore Packages
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg"
              className="text-lg px-8 py-4 bg-saffron hover:bg-saffron-light text-white shadow-warm hover:shadow-elevated transition-bounce"
            >
              Watch Our Story
            </Button>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;