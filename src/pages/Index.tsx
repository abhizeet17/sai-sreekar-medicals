
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, MapPin, Upload, Truck, Clock, Shield, Heart } from "lucide-react";
import { toast } from "sonner";

const Index = () => {
  const [prescriptionFile, setPrescriptionFile] = useState<File | null>(null);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleCall = () => {
    window.open('tel:9490894601', '_self');
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/919490894601?text=Hello, I would like to inquire about medicines.', '_blank');
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setPrescriptionFile(e.target.files[0]);
    }
  };

  const handlePrescriptionSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!prescriptionFile) {
      toast.error("Please select a prescription file to upload");
      return;
    }
    
    // For demo purposes, show success message
    toast.success("Prescription uploaded successfully! We'll contact you soon.");
    setPrescriptionFile(null);
    (e.target as HTMLFormElement).reset();
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully! We'll get back to you soon.");
    setContactForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-white font-poppins">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Heart className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-semibold text-gray-800">Sai Sreekar Medicals</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-600 hover:text-primary transition-colors">Home</a>
            <a href="#about" className="text-gray-600 hover:text-primary transition-colors">About</a>
            <a href="#services" className="text-gray-600 hover:text-primary transition-colors">Services</a>
            <a href="#contact" className="text-gray-600 hover:text-primary transition-colors">Contact</a>
          </div>
          <Button onClick={handleCall} className="bg-primary hover:bg-primary/90">
            <Phone className="w-4 h-4 mr-2" />
            Call Now
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 px-6">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
              Your Trusted Healthcare Partner
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
              Quality Medicines,
              <span className="text-primary block">Care You Deserve</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Located in Gorantla, we provide quality medicines and healthcare products with home delivery service. Your health is our priority.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={handleCall} className="bg-primary hover:bg-primary/90 text-lg px-8 py-3">
                <Phone className="w-5 h-5 mr-2" />
                Call 9490894601
              </Button>
              <Button size="lg" variant="outline" onClick={handleWhatsApp} className="border-primary text-primary hover:bg-primary hover:text-white text-lg px-8 py-3">
                WhatsApp Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">About Sai Sreekar Medicals</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Established with a mission to provide accessible and quality healthcare products to the Gorantla community.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Quality Assured</h3>
                <p className="text-gray-600">All medicines are sourced from licensed distributors and properly stored.</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Quick Service</h3>
                <p className="text-gray-600">Fast prescription processing and quick home delivery service.</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Caring Service</h3>
                <p className="text-gray-600">Personalized care and guidance for all your healthcare needs.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">Complete healthcare solutions for you and your family</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-6">Medicines & Healthcare Products</h3>
              <ul className="space-y-3 text-lg text-gray-600">
                <li className="flex items-center"><span className="w-2 h-2 bg-primary rounded-full mr-3"></span>Prescription Medicines</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-primary rounded-full mr-3"></span>Over-the-Counter Drugs</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-primary rounded-full mr-3"></span>Health Supplements</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-primary rounded-full mr-3"></span>Medical Equipment</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-primary rounded-full mr-3"></span>Baby Care Products</li>
              </ul>
            </div>
            <Card className="p-8 border-0 shadow-xl">
              <CardContent>
                <div className="text-center">
                  <Truck className="w-16 h-16 text-primary mx-auto mb-4 animate-float" />
                  <h4 className="text-2xl font-semibold mb-4">Home Delivery</h4>
                  <p className="text-gray-600 mb-6">Free home delivery for orders above ₹500 in Gorantla area</p>
                  <Button onClick={handleWhatsApp} className="bg-primary hover:bg-primary/90">
                    Order Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Prescription Upload */}
          <Card className="max-w-2xl mx-auto p-8 border-0 shadow-xl">
            <CardContent>
              <div className="text-center mb-6">
                <Upload className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-semibold mb-2">Upload Prescription</h3>
                <p className="text-gray-600">Upload your prescription and we'll prepare your medicines</p>
              </div>
              
              <form onSubmit={handlePrescriptionSubmit} className="space-y-4">
                <div>
                  <Input
                    type="file"
                    accept="image/*,.pdf"
                    onChange={handleFileChange}
                    required
                    className="border-gray-300 focus:border-primary"
                  />
                </div>
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                  Upload Prescription
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h2>
            <p className="text-xl text-gray-600">Get in touch for any questions or to place an order</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Our Location</h3>
                  <p className="text-gray-600">Gorantla Main Road<br />Opposite Police Station<br />Gorantla</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Phone</h3>
                  <p className="text-gray-600">9490894601</p>
                  <Button variant="link" onClick={handleCall} className="p-0 h-auto text-primary">
                    Call Now
                  </Button>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Email</h3>
                  <p className="text-gray-600">saisreekarmedicals@gmail.com</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="p-8 border-0 shadow-xl">
              <CardContent>
                <h3 className="text-2xl font-semibold mb-6">Send us a Message</h3>
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <Input
                    placeholder="Your Name"
                    value={contactForm.name}
                    onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                    required
                    className="border-gray-300 focus:border-primary"
                  />
                  <Input
                    type="email"
                    placeholder="Your Email"
                    value={contactForm.email}
                    onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                    required
                    className="border-gray-300 focus:border-primary"
                  />
                  <Textarea
                    placeholder="Your Message"
                    value={contactForm.message}
                    onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                    required
                    className="border-gray-300 focus:border-primary min-h-[120px]"
                  />
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-6">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Heart className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-semibold">Sai Sreekar Medicals</span>
          </div>
          <p className="text-gray-400 mb-6">Your trusted healthcare partner in Gorantla</p>
          <div className="flex justify-center space-x-6 mb-6">
            <Button variant="ghost" onClick={handleCall} className="text-white hover:text-primary">
              <Phone className="w-5 h-5 mr-2" />
              Call
            </Button>
            <Button variant="ghost" onClick={handleWhatsApp} className="text-white hover:text-primary">
              WhatsApp
            </Button>
          </div>
          <p className="text-gray-500 text-sm">© 2024 Sai Sreekar Medicals. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
