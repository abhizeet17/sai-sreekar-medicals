
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

  const handleWhatsAppPrescription = () => {
    window.open('https://wa.me/919490894601?text=Hello, I have uploaded my prescription. Please check and let me know about availability and pricing.', '_blank');
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
    
    toast.success("Prescription uploaded successfully! Redirecting to WhatsApp...");
    setPrescriptionFile(null);
    (e.target as HTMLFormElement).reset();
    
    // Redirect to WhatsApp after a short delay
    setTimeout(() => {
      handleWhatsAppPrescription();
    }, 1500);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // FormSubmit.io will handle the actual submission
    toast.success("Message sent successfully! We'll get back to you soon.");
    setContactForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-teal-50/30 font-poppins">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200/50 shadow-sm">
        <div className="container mx-auto px-3 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-primary to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
              <Heart className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
            </div>
            <div>
              <span className="text-sm sm:text-xl font-bold text-gray-800">Sai Sreekar Medicals</span>
              <p className="text-xs text-gray-500 -mt-1 hidden sm:block">Your Healthcare Partner</p>
            </div>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-600 hover:text-primary transition-all duration-300 font-medium relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full">Home</a>
            <a href="#about" className="text-gray-600 hover:text-primary transition-all duration-300 font-medium relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full">About</a>
            <a href="#services" className="text-gray-600 hover:text-primary transition-all duration-300 font-medium relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full">Services</a>
            <a href="#contact" className="text-gray-600 hover:text-primary transition-all duration-300 font-medium relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full">Contact</a>
          </div>
          <Button onClick={handleCall} className="bg-gradient-to-r from-primary to-teal-600 hover:from-primary/90 hover:to-teal-600/90 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 text-xs sm:text-sm px-3 sm:px-4 py-2">
            <Phone className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
            Call Now
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 sm:pt-32 pb-10 sm:pb-20 px-3 sm:px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-teal-600/5"></div>
        <div className="container mx-auto text-center relative z-10">
          <div className="animate-fade-in">
            <Badge className="mb-4 sm:mb-8 bg-white/90 backdrop-blur-sm text-primary border-2 border-primary/30 hover:bg-white hover:border-primary/50 px-4 sm:px-8 py-2 sm:py-3 text-sm sm:text-base font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              ⭐ Your Trusted Healthcare Partner Since 2001
            </Badge>
            <h1 className="text-3xl sm:text-6xl md:text-7xl font-bold text-gray-800 mb-4 sm:mb-8 leading-tight">
              Quality Medicines,
              <span className="block bg-gradient-to-r from-primary to-teal-600 bg-clip-text text-transparent">
                Care You Deserve
              </span>
            </h1>
            <p className="text-base sm:text-xl text-gray-600 mb-6 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-2">
              Located in the heart of Gorantla, we provide premium quality medicines and healthcare products with doorstep delivery. Your health is our mission, your trust is our foundation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-8 sm:mb-16 px-2">
              <Button size="lg" onClick={handleCall} className="bg-gradient-to-r from-primary to-teal-600 hover:from-primary/90 hover:to-teal-600/90 text-base sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" />
                Call 9490894601
              </Button>
              <Button size="lg" variant="outline" onClick={handleWhatsApp} className="border-2 border-primary text-primary hover:bg-primary hover:text-white text-base sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" />
                WhatsApp Us
              </Button>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 max-w-4xl mx-auto px-2">
              <div className="text-center">
                <div className="text-xl sm:text-3xl font-bold text-primary mb-1 sm:mb-2">5000+</div>
                <div className="text-sm sm:text-base text-gray-600">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-3xl font-bold text-primary mb-1 sm:mb-2">24/7</div>
                <div className="text-sm sm:text-base text-gray-600">Emergency Service</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-3xl font-bold text-primary mb-1 sm:mb-2">4.9★</div>
                <div className="text-sm sm:text-base text-gray-600">Customer Rating</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-3xl font-bold text-primary mb-1 sm:mb-2">Free</div>
                <div className="text-sm sm:text-base text-gray-600">Home Delivery</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-8 sm:py-16 px-3 sm:px-6 bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-4 sm:gap-8">
            <div className="flex items-center space-x-3 sm:space-x-4 p-4 sm:p-6 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100">
              <CheckCircle className="w-8 h-8 sm:w-12 sm:h-12 text-green-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-sm sm:text-base text-gray-800">Licensed & Certified</h3>
                <p className="text-xs sm:text-sm text-gray-600">Government approved</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 sm:space-x-4 p-4 sm:p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100">
              <Shield className="w-8 h-8 sm:w-12 sm:h-12 text-blue-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-sm sm:text-base text-gray-800">100% Genuine</h3>
                <p className="text-xs sm:text-sm text-gray-600">Authentic medicines</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 sm:space-x-4 p-4 sm:p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-violet-50 border border-purple-100">
              <Clock className="w-8 h-8 sm:w-12 sm:h-12 text-purple-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-sm sm:text-base text-gray-800">Fast Delivery</h3>
                <p className="text-xs sm:text-sm text-gray-600">Same day service</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 sm:space-x-4 p-4 sm:p-6 rounded-2xl bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-100">
              <Heart className="w-8 h-8 sm:w-12 sm:h-12 text-orange-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-sm sm:text-base text-gray-800">Care & Support</h3>
                <p className="text-xs sm:text-sm text-gray-600">Expert guidance</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legacy Story Section */}
      <section className="py-10 sm:py-20 px-3 sm:px-6 bg-gradient-to-br from-primary/5 via-white to-teal-50/30">
        <div className="container mx-auto">
          <div className="text-center mb-8 sm:mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Our Legacy</Badge>
            <h2 className="text-3xl sm:text-5xl font-bold text-gray-800 mb-4 sm:mb-6">23+ Years of Healthcare Excellence</h2>
            <p className="text-base sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-2">
              From a small neighborhood pharmacy to Gorantla's most trusted healthcare destination, our journey has been one of unwavering commitment to your health and wellbeing.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-16 items-center mb-8 sm:mb-16">
            <div className="space-y-6 sm:space-y-8">
              <div className="relative">
                <div className="absolute left-3 sm:left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-teal-600"></div>
                <div className="space-y-8 sm:space-y-12 pl-8 sm:pl-12">
                  <div className="relative">
                    <div className="absolute -left-7 sm:-left-10 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-primary to-teal-600 rounded-full flex items-center justify-center shadow-lg">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-white rounded-full"></div>
                    </div>
                    <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg border-l-4 border-primary">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">2001 - The Beginning</h3>
                      <p className="text-sm sm:text-base text-gray-600">Started as a small family pharmacy with a vision to serve the Gorantla community with genuine medicines and personalized care.</p>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="absolute -left-7 sm:-left-10 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-primary to-teal-600 rounded-full flex items-center justify-center shadow-lg">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-white rounded-full"></div>
                    </div>
                    <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg border-l-4 border-teal-600">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">2010 - Expanding Services</h3>
                      <p className="text-sm sm:text-base text-gray-600">Introduced home delivery services and expanded our medicine inventory to include specialized treatments and health supplements.</p>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="absolute -left-7 sm:-left-10 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-primary to-teal-600 rounded-full flex items-center justify-center shadow-lg">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-white rounded-full"></div>
                    </div>
                    <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg border-l-4 border-primary">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">2020 - Digital Transformation</h3>
                      <p className="text-sm sm:text-base text-gray-600">Embraced technology with online prescription uploads, WhatsApp ordering, and 24/7 emergency services during the pandemic.</p>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="absolute -left-7 sm:-left-10 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-primary to-teal-600 rounded-full flex items-center justify-center shadow-lg">
                      <Users className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                    </div>
                    <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg border-l-4 border-teal-600">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">2024 - Community Pillar</h3>
                      <p className="text-sm sm:text-base text-gray-600">Today, we proudly serve over 5000+ families, maintaining the same values of trust, quality, and care that started our journey.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Card className="p-6 sm:p-10 border-0 shadow-2xl bg-gradient-to-br from-white to-gray-50">
              <CardContent className="text-center">
                <div className="w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-br from-primary/10 to-teal-600/10 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <Award className="w-8 h-8 sm:w-12 sm:h-12 text-primary" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-gray-800">Legacy of Trust</h3>
                <p className="text-gray-600 mb-6 sm:mb-8 text-base sm:text-lg leading-relaxed">
                  Over two decades of serving the Gorantla community has taught us that healthcare is not just about medicines - it's about building relationships, understanding needs, and being there when you need us most.
                </p>
                <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
                  <div className="text-center p-3 sm:p-4 bg-gradient-to-br from-primary/5 to-teal-600/5 rounded-xl">
                    <div className="text-xl sm:text-2xl font-bold text-primary mb-1">23+</div>
                    <div className="text-xs sm:text-sm text-gray-600">Years of Service</div>
                  </div>
                  <div className="text-center p-3 sm:p-4 bg-gradient-to-br from-primary/5 to-teal-600/5 rounded-xl">
                    <div className="text-xl sm:text-2xl font-bold text-primary mb-1">3</div>
                    <div className="text-xs sm:text-sm text-gray-600">Generations Served</div>
                  </div>
                </div>
                <div className="flex justify-center space-x-1 sm:space-x-2 text-yellow-500 mb-3 sm:mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 sm:w-6 sm:h-6 fill-current" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-gray-500">Trusted by generations of families in Gorantla</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-10 sm:py-20 px-3 sm:px-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto">
          <div className="text-center mb-8 sm:mb-16 animate-fade-in-up">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Our Story</Badge>
            <h2 className="text-3xl sm:text-5xl font-bold text-gray-800 mb-4 sm:mb-6">About Sai Sreekar Medicals</h2>
            <p className="text-base sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-2">
              Established with a mission to provide accessible, reliable, and quality healthcare products to the Gorantla community. We believe healthcare should be convenient, trustworthy, and always within reach.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 sm:gap-10">
            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-white to-gray-50 hover:-translate-y-2">
              <CardContent className="p-6 sm:p-8 text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-primary/10 to-teal-600/10 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-800">Quality Assured</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">All medicines are sourced from licensed distributors, stored in optimal conditions, and checked for authenticity before delivery.</p>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-white to-gray-50 hover:-translate-y-2">
              <CardContent className="p-6 sm:p-8 text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-primary/10 to-teal-600/10 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Clock className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-800">Quick Service</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">Lightning-fast prescription processing with same-day delivery service across Gorantla and surrounding areas.</p>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-white to-gray-50 hover:-translate-y-2">
              <CardContent className="p-6 sm:p-8 text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-primary/10 to-teal-600/10 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Heart className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-800">Caring Service</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">Personalized healthcare guidance, medicine consultations, and dedicated support for all your medical needs.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-10 sm:py-20 px-3 sm:px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-8 sm:mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">What We Offer</Badge>
            <h2 className="text-3xl sm:text-5xl font-bold text-gray-800 mb-4 sm:mb-6">Our Services</h2>
            <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto px-2">Complete healthcare solutions designed around your needs and convenience</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-16 items-center mb-10 sm:mb-20">
            <div className="space-y-6 sm:space-y-8">
              <h3 className="text-2xl sm:text-4xl font-bold text-gray-800 mb-6 sm:mb-8">Comprehensive Medicine Range</h3>
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-xl hover:bg-gray-50 transition-colors">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-primary to-teal-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-base sm:text-lg text-gray-800">Prescription Medicines</h4>
                    <p className="text-sm sm:text-base text-gray-600">All major brands and generic alternatives available</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-xl hover:bg-gray-50 transition-colors">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-primary to-teal-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-base sm:text-lg text-gray-800">Over-the-Counter Drugs</h4>
                    <p className="text-sm sm:text-base text-gray-600">Common medicines for everyday health issues</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-xl hover:bg-gray-50 transition-colors">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-primary to-teal-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-base sm:text-lg text-gray-800">Health Supplements</h4>
                    <p className="text-sm sm:text-base text-gray-600">Vitamins, minerals, and wellness products</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-xl hover:bg-gray-50 transition-colors">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-primary to-teal-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-base sm:text-lg text-gray-800">Medical Equipment</h4>
                    <p className="text-sm sm:text-base text-gray-600">Blood pressure monitors, thermometers, and more</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-xl hover:bg-gray-50 transition-colors">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-primary to-teal-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-base sm:text-lg text-gray-800">Baby Care Products</h4>
                    <p className="text-sm sm:text-base text-gray-600">Safe and gentle products for your little ones</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="p-6 sm:p-10 border-0 shadow-2xl bg-gradient-to-br from-white to-gray-50">
              <CardContent className="text-center">
                <div className="w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-br from-primary/10 to-teal-600/10 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 animate-float shadow-lg">
                  <Truck className="w-8 h-8 sm:w-12 sm:h-12 text-primary" />
                </div>
                <h4 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-gray-800">Free Home Delivery</h4>
                <p className="text-gray-600 mb-6 sm:mb-8 text-base sm:text-lg leading-relaxed">
                  Enjoy complimentary home delivery for orders above ₹500 anywhere in Gorantla. Fast, secure, and reliable delivery right to your doorstep.
                </p>
                <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                  <div className="flex items-center justify-center space-x-2 text-xs sm:text-sm text-gray-600">
                    <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-500" />
                    <span>Same day delivery available</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-xs sm:text-sm text-gray-600">
                    <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-500" />
                    <span>Secure packaging guaranteed</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-xs sm:text-sm text-gray-600">
                    <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-500" />
                    <span>Temperature controlled delivery</span>
                  </div>
                </div>
                <Button onClick={handleWhatsApp} className="bg-gradient-to-r from-primary to-teal-600 hover:from-primary/90 hover:to-teal-600/90 text-base sm:text-lg px-6 sm:px-8 py-2 sm:py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Order Now
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Prescription Upload */}
          <Card className="max-w-3xl mx-auto border-0 shadow-2xl bg-gradient-to-br from-white to-gray-50">
            <CardContent className="p-6 sm:p-12">
              <div className="text-center mb-6 sm:mb-10">
                <div className="w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-br from-primary/10 to-teal-600/10 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <Upload className="w-8 h-8 sm:w-12 sm:h-12 text-primary" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-gray-800">Upload Your Prescription</h3>
                <p className="text-gray-600 text-base sm:text-lg px-2">Upload your prescription securely and we'll prepare your medicines for quick pickup or delivery</p>
              </div>
              
              <form onSubmit={handlePrescriptionSubmit} className="space-y-4 sm:space-y-6">
                <div className="relative">
                  <Input
                    type="file"
                    accept="image/*,.pdf"
                    onChange={handleFileChange}
                    required
                    className="border-2 border-gray-200 focus:border-primary rounded-xl py-3 sm:py-4 px-4 sm:px-6 text-base sm:text-lg transition-all duration-300"
                  />
                </div>
                <Button type="submit" className="w-full bg-gradient-to-r from-primary to-teal-600 hover:from-primary/90 hover:to-teal-600/90 text-base sm:text-lg py-3 sm:py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <Upload className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" />
                  Upload Prescription Securely
                </Button>
                <p className="text-center text-xs sm:text-sm text-gray-500 px-2">
                  Your prescription is encrypted and sent securely to our licensed pharmacists
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-10 sm:py-20 px-3 sm:px-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto">
          <div className="text-center mb-8 sm:mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Get In Touch</Badge>
            <h2 className="text-3xl sm:text-5xl font-bold text-gray-800 mb-4 sm:mb-6">Contact Us</h2>
            <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto px-2">Have questions or need assistance? We're here to help you with all your healthcare needs</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-16">
            {/* Contact Info */}
            <div className="space-y-6 sm:space-y-10">
              <div className="flex items-start space-x-4 sm:space-x-6 p-4 sm:p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-primary/10 to-teal-600/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-gray-800">Visit Our Store</h3>
                  <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-3 sm:mb-4">
                    Gorantla Main Road<br />
                    Opposite Police Station<br />
                    Gorantla, Andhra Pradesh
                  </p>
                  <p className="text-xs sm:text-sm text-gray-500 mb-2 sm:mb-3">Open 24/7 for emergencies</p>
                  <Button variant="link" onClick={handleGoogleMaps} className="p-0 h-auto text-primary hover:text-primary/80 font-semibold text-sm sm:text-base">
                    <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                    View on Google Maps
                  </Button>
                </div>
              </div>

              <div className="flex items-start space-x-4 sm:space-x-6 p-4 sm:p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-primary/10 to-teal-600/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-gray-800">Call Us</h3>
                  <p className="text-gray-600 text-lg sm:text-xl font-semibold">9490894601</p>
                  <Button variant="link" onClick={handleCall} className="p-0 h-auto text-primary hover:text-primary/80 font-semibold text-sm sm:text-base">
                    <Phone className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                    Call Now
                  </Button>
                </div>
              </div>

              <div className="flex items-start space-x-4 sm:space-x-6 p-4 sm:p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-primary/10 to-teal-600/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-gray-800">Email Us</h3>
                  <p className="text-gray-600 text-base sm:text-lg">saisreekarmedicals@gmail.com</p>
                  <p className="text-xs sm:text-sm text-gray-500 mt-1 sm:mt-2">We respond within 2 hours</p>
                </div>
              </div>
            </div>

            {/* Contact Form with FormSubmit.io */}
            <Card className="border-0 shadow-2xl bg-gradient-to-br from-white to-gray-50">
              <CardContent className="p-6 sm:p-10">
                <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-gray-800">Send us a Message</h3>
                <form action="https://formsubmit.co/saisreekarmedicals@gmail.com" method="POST" onSubmit={handleContactSubmit} className="space-y-4 sm:space-y-6">
                  <input type="hidden" name="_subject" value="New contact from Sai Sreekar Medicals website" />
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_template" value="table" />
                  
                  <Input
                    name="name"
                    placeholder="Your Full Name"
                    value={contactForm.name}
                    onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                    required
                    className="border-2 border-gray-200 focus:border-primary rounded-xl py-3 sm:py-4 px-4 sm:px-6 text-base sm:text-lg transition-all duration-300"
                  />
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email Address"
                    value={contactForm.email}
                    onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                    required
                    className="border-2 border-gray-200 focus:border-primary rounded-xl py-3 sm:py-4 px-4 sm:px-6 text-base sm:text-lg transition-all duration-300"
                  />
                  <Textarea
                    name="message"
                    placeholder="How can we help you today?"
                    value={contactForm.message}
                    onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                    required
                    className="border-2 border-gray-200 focus:border-primary rounded-xl py-3 sm:py-4 px-4 sm:px-6 text-base sm:text-lg min-h-[120px] sm:min-h-[150px] transition-all duration-300"
                  />
                  <input type="file" name="attachment" accept="image/*,.pdf" className="border-2 border-gray-200 focus:border-primary rounded-xl py-3 sm:py-4 px-4 sm:px-6 text-base sm:text-lg transition-all duration-300 w-full" />
                  <Button type="submit" className="w-full bg-gradient-to-r from-primary to-teal-600 hover:from-primary/90 hover:to-teal-600/90 text-base sm:text-lg py-3 sm:py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-8 sm:py-16 px-3 sm:px-6">
        <div className="container mx-auto">
          <div className="text-center mb-6 sm:mb-12">
            <div className="flex items-center justify-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
              <div className="w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-br from-primary to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
                <Heart className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
              </div>
              <div>
                <span className="text-lg sm:text-2xl font-bold">Sai Sreekar Medicals</span>
                <p className="text-gray-400 text-xs sm:text-sm">Your Healthcare Partner</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto text-base sm:text-lg px-2">
              Committed to providing quality healthcare solutions with trust, care, and convenience at the heart of everything we do.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-6 mb-6 sm:mb-8">
              <Button variant="ghost" onClick={handleCall} className="text-white hover:text-primary hover:bg-white/10 transition-all duration-300">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Call Us
              </Button>
              <Button variant="ghost" onClick={handleWhatsApp} className="text-white hover:text-primary hover:bg-white/10 transition-all duration-300">
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                WhatsApp
              </Button>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-6 sm:pt-8 text-center">
            <p className="text-gray-400 text-sm sm:text-base">© 2025 Sai Sreekar Medicals. All rights reserved. | Licensed Medical Store</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
