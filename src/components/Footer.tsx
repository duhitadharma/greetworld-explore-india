import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { label: "About Us", href: "#about" },
    { label: "Destinations", href: "#destinations" },
    { label: "Tour Packages", href: "#packages" },
    { label: "Contact", href: "#contact" },
    { label: "Blog", href: "#" },
    { label: "Reviews", href: "#" }
  ];

  const destinations = [
    "Golden Triangle",
    "Kerala Backwaters", 
    "Rajasthan Royal",
    "Goa Beaches",
    "Himalayan Trek",
    "South India Temple Tour"
  ];

  const services = [
    "Custom Tour Packages",
    "Hotel Bookings",
    "Transportation",
    "Travel Insurance",
    "Visa Assistance",
    "24/7 Support"
  ];

  return (
    <footer className="bg-royal-blue text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold bg-gradient-warm bg-clip-text text-transparent mb-4">
                GreetWorld
              </h3>
              <p className="text-white/80 leading-relaxed">
                Your trusted partner for exploring the incredible beauty and rich heritage of India. 
                Creating unforgettable memories since 2008.
              </p>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-golden" />
                <a href="tel:+919403080909" className="text-sm hover:text-golden transition-colors">
                  +91 94030 80909
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-golden" />
                <a href="mailto:greetworld.h@gmail.com" className="text-sm hover:text-golden transition-colors">
                  greetworld.h@gmail.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-golden mt-1" />
                <span className="text-sm">
                  G603, Mithila Nagari<br />
                  Kate Patil Chowk, Pimple Saudagar<br />
                  Pimpri Chinchwad, Maharashtra, India
                </span>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="font-semibold mb-3">Follow Us</h4>
              <div className="flex space-x-3">
                <Button size="sm" variant="ghost" className="w-10 h-10 p-0 hover:bg-white/10">
                  <Facebook className="w-4 h-4" />
                </Button>
                <Button size="sm" variant="ghost" className="w-10 h-10 p-0 hover:bg-white/10">
                  <Instagram className="w-4 h-4" />
                </Button>
                <Button size="sm" variant="ghost" className="w-10 h-10 p-0 hover:bg-white/10">
                  <Twitter className="w-4 h-4" />
                </Button>
                <Button size="sm" variant="ghost" className="w-10 h-10 p-0 hover:bg-white/10">
                  <Youtube className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-golden">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-white/80 hover:text-golden transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Destinations */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-golden">Popular Destinations</h4>
            <ul className="space-y-3">
              {destinations.map((destination, index) => (
                <li key={index}>
                  <a 
                    href="#"
                    className="text-white/80 hover:text-golden transition-colors text-sm"
                  >
                    {destination}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-golden">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href="#"
                    className="text-white/80 hover:text-golden transition-colors text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-12 p-6 bg-white/5 rounded-2xl">
          <div className="text-center mb-6">
            <h4 className="text-xl font-semibold mb-2">Stay Updated</h4>
            <p className="text-white/80">
              Subscribe to our newsletter for the latest travel deals and destination insights.
            </p>
          </div>
          <div className="max-w-md mx-auto flex gap-3">
            <input 
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:border-golden"
            />
            <Button className="bg-saffron hover:bg-saffron-light text-white px-6">
              Subscribe
            </Button>
          </div>
        </div>
      </div>

      <Separator className="bg-white/20" />

      {/* Bottom Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-white/60">
            © 2024 GreetWorld Tourism. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-white/60 hover:text-golden transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-white/60 hover:text-golden transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-white/60 hover:text-golden transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;