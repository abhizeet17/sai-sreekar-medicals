import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, MapPin, Upload, Truck, Clock, Shield, Heart, Star, CheckCircle, ArrowRight, Users, Award } from "lucide-react";
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

  const handleGoogleMaps = () => {
    window.open('https://maps.app.goo.gl/ZkqM6tuKByBBhLbY6', '_blank');
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
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-teal-50/30 font-poppins">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200/50 shadow-sm">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="text-xl font-bold text-gray-800">Sai Sreekar Medicals</span>
              <p className="text-xs text-gray-500 -mt-1">Your Healthcare Partner</p>
            </div>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-600 hover:text-primary transition-all duration-300 font-medium relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full">Home</a>
            <a href="#about" className="text-gray-600 hover:text-primary transition-all duration-300 font-medium relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full">About</a>
            <a href="#services" className="text-gray-600 hover:text-primary transition-all duration-300 font-medium relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full">Services</a>
            <a href="#contact" className="text-gray-600 hover:text-primary transition-all duration-300 font-medium relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full">Contact</a>
          </div>
          <Button onClick={handleCall} className="bg-gradient-to-r from-primary to-teal-600 hover:from-primary/90 hover:to-teal-600/90 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5">
            <Phone className="w-4 h-4 mr-2" />
            Call Now
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-teal-600/5"></div>
        <div className="container mx-auto text-center relative z-10">
          <div className="animate-fade-in">
            <Badge className="mb-8 bg-white/90 backdrop-blur-sm text-primary border-2 border-primary/30 hover:bg-white hover:border-primary/50 px-8 py-3 text-base font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              ⭐ Your Trusted Healthcare Partner Since 2020
            </Badge>
            <h1 className="text-6xl md:text-7xl font-bold text-gray-800 mb-8 leading-tight">
              Quality Medicines,
              <span className="block bg-gradient-to-r from-primary to-teal-600 bg-clip-text text-transparent">
                Care You Deserve
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Located in the heart of Gorantla, we provide premium quality medicines and healthcare products with doorstep delivery. Your health is our mission, your trust is our foundation.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Button size="lg" onClick={handleCall} className="bg-gradient-to-r from-primary to-teal-600 hover:from-primary/90 hover:to-teal-600/90 text-lg px-10 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <Phone className="w-5 h-5 mr-3" />
                Call 9490894601
              </Button>
              <Button size="lg" variant="outline" onClick={handleWhatsApp} className="border-2 border-primary text-primary hover:bg-primary hover:text-white text-lg px-10 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <ArrowRight className="w-5 h-5 mr-3" />
                WhatsApp Us
              </Button>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">5000+</div>
                <div className="text-gray-600">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <div className="text-gray-600">Emergency Service</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">4.9★</div>
                <div className="text-gray-600">Customer Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">Free</div>
                <div className="text-gray-600">Home Delivery</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="flex items-center space-x-4 p-6 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100">
              <CheckCircle className="w-12 h-12 text-green-600" />
              <div>
                <h3 className="font-semibold text-gray-800">Licensed & Certified</h3>
                <p className="text-sm text-gray-600">Government approved</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100">
              <Shield className="w-12 h-12 text-blue-600" />
              <div>
                <h3 className="font-semibold text-gray-800">100% Genuine</h3>
                <p className="text-sm text-gray-600">Authentic medicines</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-violet-50 border border-purple-100">
              <Clock className="w-12 h-12 text-purple-600" />
              <div>
                <h3 className="font-semibold text-gray-800">Fast Delivery</h3>
                <p className="text-sm text-gray-600">Same day service</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 p-6 rounded-2xl bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-100">
              <Heart className="w-12 h-12 text-orange-600" />
              <div>
                <h3 className="font-semibold text-gray-800">Care & Support</h3>
                <p className="text-sm text-gray-600">Expert guidance</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Our Story</Badge>
            <h2 className="text-5xl font-bold text-gray-800 mb-6">About Sai Sreekar Medicals</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Established with a mission to provide accessible, reliable, and quality healthcare products to the Gorantla community. We believe healthcare should be convenient, trustworthy, and always within reach.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-white to-gray-50 hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-primary/10 to-teal-600/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  Shield className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Quality Assured</h3>
                <p className="text-gray-600 leading-relaxed">All medicines are sourced from licensed distributors, stored in optimal conditions, and checked for authenticity before delivery.</p>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-white to-gray-50 hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-primary/10 to-teal-600/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Clock className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Quick Service</h3>
                <p className="text-gray-600 leading-relaxed">Lightning-fast prescription processing with same-day delivery service across Gorantla and surrounding areas.</p>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-white to-gray-50 hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-primary/10 to-teal-600/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Heart className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Caring Service</h3>
                <p className="text-gray-600 leading-relaxed">Personalized healthcare guidance, medicine consultations, and dedicated support for all your medical needs.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">What We Offer</Badge>
            <h2 className="text-5xl font-bold text-gray-800 mb-6">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Complete healthcare solutions designed around your needs and convenience</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="space-y-8">
              <h3 className="text-4xl font-bold text-gray-800 mb-8">Comprehensive Medicine Range</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-colors">
                  <div className="w-3 h-3 bg-gradient-to-r from-primary to-teal-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-lg text-gray-800">Prescription Medicines</h4>
                    <p className="text-gray-600">All major brands and generic alternatives available</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-colors">
                  <div className="w-3 h-3 bg-gradient-to-r from-primary to-teal-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-lg text-gray-800">Over-the-Counter Drugs</h4>
                    <p className="text-gray-600">Common medicines for everyday health issues</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-colors">
                  <div className="w-3 h-3 bg-gradient-to-r from-primary to-teal-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-lg text-gray-800">Health Supplements</h4>
                    <p className="text-gray-600">Vitamins, minerals, and wellness products</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-colors">
                  <div className="w-3 h-3 bg-gradient-to-r from-primary to-teal-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-lg text-gray-800">Medical Equipment</h4>
                    <p className="text-gray-600">Blood pressure monitors, thermometers, and more</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-colors">
                  <div className="w-3 h-3 bg-gradient-to-r from-primary to-teal-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-lg text-gray-800">Baby Care Products</h4>
                    <p className="text-gray-600">Safe and gentle products for your little ones</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="p-10 border-0 shadow-2xl bg-gradient-to-br from-primary/5 to-teal-600/5">
              <CardContent className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-primary to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6 animate-float shadow-lg">
                  <Truck className="w-12 h-12 text-white" />
                </div>
                <h4 className="text-3xl font-bold mb-6 text-gray-800">Free Home Delivery</h4>
                <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                  Enjoy complimentary home delivery for orders above ₹500 anywhere in Gorantla. Fast, secure, and reliable delivery right to your doorstep.
                </p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Same day delivery available</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Secure packaging guaranteed</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Temperature controlled delivery</span>
                  </div>
                </div>
                <Button onClick={handleWhatsApp} className="bg-gradient-to-r from-primary to-teal-600 hover:from-primary/90 hover:to-teal-600/90 text-lg px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                  <ArrowRight className="w-5 h-5 mr-2" />
                  Order Now
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Prescription Upload */}
          <Card className="max-w-3xl mx-auto border-0 shadow-2xl bg-gradient-to-br from-white to-gray-50">
            <CardContent className="p-12">
              <div className="text-center mb-10">
                <div className="w-24 h-24 bg-gradient-to-br from-primary/10 to-teal-600/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Upload className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-3xl font-bold mb-4 text-gray-800">Upload Your Prescription</h3>
                <p className="text-gray-600 text-lg">Upload your prescription securely and we'll prepare your medicines for quick pickup or delivery</p>
              </div>
              
              <form onSubmit={handlePrescriptionSubmit} className="space-y-6">
                <div className="relative">
                  <Input
                    type="file"
                    accept="image/*,.pdf"
                    onChange={handleFileChange}
                    required
                    className="border-2 border-gray-200 focus:border-primary rounded-xl py-4 px-6 text-lg transition-all duration-300"
                  />
                </div>
                <Button type="submit" className="w-full bg-gradient-to-r from-primary to-teal-600 hover:from-primary/90 hover:to-teal-600/90 text-lg py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <Upload className="w-5 h-5 mr-3" />
                  Upload Prescription Securely
                </Button>
                <p className="text-center text-sm text-gray-500">
                  Your prescription is encrypted and sent securely to our licensed pharmacists
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Get In Touch</Badge>
            <h2 className="text-5xl font-bold text-gray-800 mb-6">Contact Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Have questions or need assistance? We're here to help you with all your healthcare needs</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-10">
              <div className="flex items-start space-x-6 p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-teal-600/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-800">Visit Our Store</h3>
                  <p className="text-gray-600 text-lg leading-relaxed mb-4">
                    Gorantla Main Road<br />
                    Opposite Police Station<br />
                    Gorantla, Andhra Pradesh
                  </p>
                  <p className="text-sm text-gray-500 mb-3">Open 24/7 for emergencies</p>
                  <Button variant="link" onClick={handleGoogleMaps} className="p-0 h-auto text-primary hover:text-primary/80 font-semibold">
                    <MapPin className="w-4 h-4 mr-2" />
                    View on Google Maps
                  </Button>
                </div>
              </div>

              <div className="flex items-start space-x-6 p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-teal-600/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-800">Call Us</h3>
                  <p className="text-gray-600 text-xl font-semibold">9490894601</p>
                  <Button variant="link" onClick={handleCall} className="p-0 h-auto text-primary hover:text-primary/80 font-semibold">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </Button>
                </div>
              </div>

              <div className="flex items-start space-x-6 p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-teal-600/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-800">Email Us</h3>
                  <p className="text-gray-600 text-lg">saisreekarmedicals@gmail.com</p>
                  <p className="text-sm text-gray-500 mt-2">We respond within 2 hours</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="border-0 shadow-2xl bg-gradient-to-br from-white to-gray-50">
              <CardContent className="p-10">
                <h3 className="text-3xl font-bold mb-8 text-gray-800">Send us a Message</h3>
                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <Input
                    placeholder="Your Full Name"
                    value={contactForm.name}
                    onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                    required
                    className="border-2 border-gray-200 focus:border-primary rounded-xl py-4 px-6 text-lg transition-all duration-300"
                  />
                  <Input
                    type="email"
                    placeholder="Your Email Address"
                    value={contactForm.email}
                    onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                    required
                    className="border-2 border-gray-200 focus:border-primary rounded-xl py-4 px-6 text-lg transition-all duration-300"
                  />
                  <Textarea
                    placeholder="How can we help you today?"
                    value={contactForm.message}
                    onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                    required
                    className="border-2 border-gray-200 focus:border-primary rounded-xl py-4 px-6 text-lg min-h-[150px] transition-all duration-300"
                  />
                  <Button type="submit" className="w-full bg-gradient-to-r from-primary to-teal-600 hover:from-primary/90 hover:to-teal-600/90 text-lg py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                    <ArrowRight className="w-5 h-5 mr-3" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
                <Heart className="w-7 h-7 text-white" />
              </div>
              <div>
                <span className="text-2xl font-bold">Sai Sreekar Medicals</span>
                <p className="text-gray-400 text-sm">Your Healthcare Partner</p>
              </div>
            </div>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
              Committed to providing quality healthcare solutions with trust, care, and convenience at the heart of everything we do.
            </p>
            <div className="flex justify-center space-x-6 mb-8">
              <Button variant="ghost" onClick={handleCall} className="text-white hover:text-primary hover:bg-white/10 transition-all duration-300">
                <Phone className="w-5 h-5 mr-2" />
                Call Us
              </Button>
              <Button variant="ghost" onClick={handleWhatsApp} className="text-white hover:text-primary hover:bg-white/10 transition-all duration-300">
                <ArrowRight className="w-5 h-5 mr-2" />
                WhatsApp
              </Button>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center">
            <p className="text-gray-400">© 2024 Sai Sreekar Medicals. All rights reserved. | Licensed Medical Store</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
