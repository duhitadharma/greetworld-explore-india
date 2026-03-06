import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
const WHATSAPP_NUMBER = "919876543210"; // Change to your actual WhatsApp number

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    travelDate: "",
    destination: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hello GreetWorld Holidays!%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Phone:* ${formData.phone}%0A*Travel Date:* ${formData.travelDate}%0A*Destination:* ${formData.destination}%0A*Message:* ${formData.message}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
  };
  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      details: ["+91 98765 43210", "+91 87654 32109"],
      subtitle: "Available 24/7"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      details: ["info@greetworld.com", "bookings@greetworld.com"],
      subtitle: "Quick Response"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Us",
      details: ["123 Travel Plaza", "Connaught Place, New Delhi"],
      subtitle: "Mon-Sat: 9AM-7PM"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Office Hours",
      details: ["Monday - Saturday", "9:00 AM - 7:00 PM"],
      subtitle: "Sunday: 10AM-4PM"
    }
  ];

  return (
    <section id="contact" className="py-16 bg-gradient-to-br from-background to-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/20 text-accent-foreground mb-4">
            <Send className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">Get In Touch</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Start Your
            <span className="block bg-gradient-hero bg-clip-text text-transparent">
              Journey Today
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to explore India? Our travel experts are here to help you plan 
            the perfect adventure tailored to your preferences and budget.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-elevated">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Send Us a Message
                </h3>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Full Name *
                      </label>
                      <Input 
                        placeholder="Enter your full name"
                        className="border-border focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Email Address *
                      </label>
                      <Input 
                        type="email"
                        placeholder="Enter your email"
                        className="border-border focus:ring-primary"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Phone Number *
                      </label>
                      <Input 
                        type="tel"
                        placeholder="Enter your phone number"
                        className="border-border focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Travel Dates
                      </label>
                      <Input 
                        type="date"
                        className="border-border focus:ring-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Destination of Interest
                    </label>
                    <Input 
                      placeholder="e.g., Golden Triangle, Kerala, Rajasthan"
                      className="border-border focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Message
                    </label>
                    <Textarea 
                      placeholder="Tell us about your travel preferences, group size, budget, and any special requirements..."
                      rows={5}
                      className="border-border focus:ring-primary resize-none"
                    />
                  </div>

                  <Button 
                    type="submit"
                    size="lg"
                    className="w-full bg-saffron hover:bg-saffron-light text-white shadow-warm hover:shadow-elevated transition-all"
                  >
                    Send Message
                    <Send className="ml-2 w-5 h-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="border-0 shadow-cool hover:shadow-warm transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center text-white flex-shrink-0">
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-foreground mb-1">
                        {info.title}
                      </h4>
                      <div className="space-y-1">
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-muted-foreground">
                            {detail}
                          </p>
                        ))}
                      </div>
                      <p className="text-sm text-primary mt-2 font-medium">
                        {info.subtitle}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Quick Contact Card */}
            <Card className="bg-gradient-hero text-white border-0 shadow-elevated">
              <CardContent className="p-6 text-center">
                <h4 className="text-xl font-bold mb-2">
                  Need Immediate Assistance?
                </h4>
                <p className="text-white/90 mb-4">
                  Call our 24/7 helpline for urgent travel support
                </p>
                <Button 
                  variant="secondary"
                  size="lg"
                  className="w-full bg-white/20 hover:bg-white/30 text-white border-white/30"
                >
                  <Phone className="mr-2 w-5 h-5" />
                  Call Now: +91 98765 43210
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map or Additional CTA */}
        <div className="mt-16 text-center">
          <Card className="bg-muted/50 border-0">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Why Choose GreetWorld?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl mb-2">🏆</div>
                  <div className="font-semibold text-foreground">Award Winning</div>
                  <div className="text-sm text-muted-foreground">Industry recognition</div>
                </div>
                <div>
                  <div className="text-3xl mb-2">🌟</div>
                  <div className="font-semibold text-foreground">Expert Guides</div>
                  <div className="text-sm text-muted-foreground">Local knowledge</div>
                </div>
                <div>
                  <div className="text-3xl mb-2">💝</div>
                  <div className="font-semibold text-foreground">Best Value</div>
                  <div className="text-sm text-muted-foreground">Competitive pricing</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;