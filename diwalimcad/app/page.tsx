'use client';

import React, { useState } from 'react';

// TypeScript interfaces and types
interface Course {
  id: string;
  title: string;
  desc: string;
  price: string;
  original: string;
  discount: string;
  videos: string;
  duration: string;
}

interface ComboCourse {
  id: string;
  title: string;
  desc: string;
  price: string;
  original: string;
  discount: string;
}

interface FAQ {
  question: string;
  answer: string;
}

// Removed unused interfaces


import { useRouter } from 'next/navigation';
import { Search, Star, Award, Users, BookOpen, Clock, CheckCircle, TrendingUp, ChevronDown, ChevronUp, Menu, X, Phone, MapPin } from 'lucide-react';

const Landing: React.FC = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [showDemoModal, setShowDemoModal] = useState<boolean>(false);
  const [showEnrollModal, setShowEnrollModal] = useState<boolean>(false);

  const courses: Course[] = [
    { 
      id: 'catia-v5-english',
      title: 'CATIA V5 - English', 
      desc: 'Master CATIA V5 from scratch - Part Design, Assembly, Drafting & Surface Modeling', 
      price: '₹3,092',
      original: '₹9,542',
      discount: '70% OFF',
      videos: '13 Videos',
      duration: 'Lifetime Access'
    },
    { 
      id: 'biw-fixture-3d-english',
      title: 'BIW Fixture Design - 3D', 
      desc: 'Hands-on expertise in 3D modeling for automotive BIW fixtures with industry standards', 
      price: '₹20,009',
      original: '₹35,010',
      discount: '43% OFF',
      videos: '38 Videos',
      duration: '1 Year Access'
    },
    { 
      id: 'biw-fixture-2d-english',
      title: 'BIW Fixture Design - 2D Drafting', 
      desc: 'Production-ready 2D drawings with GD&T for automotive fixture applications', 
      price: '₹13,009',
      original: '₹25,010',
      discount: '48% OFF',
      videos: '17 Videos',
      duration: '1 Year Access'
    },
    { 
      id: 'catia-v5-marathi',
      title: 'CATIA V5 - Marathi', 
      desc: 'Industrial-based training in Marathi - Sketcher, Part Modelling, Assembly & Drafting', 
      price: '₹2,509',
      original: '₹10,010',
      discount: '75% OFF',
      videos: '13 Videos',
      duration: '1 Year Access'
    }
  ];

  const comboCourses: ComboCourse[] = [
    { 
      id: 'catia-biw-english',
      title: 'CATIA + BIW Fixture Design (English)', 
      desc: 'Complete package: CATIA V5 fundamentals + 2D & 3D BIW Fixture Design', 
      price: '₹28,010',
      original: '₹45,010',
      discount: '38% OFF'
    },
    { 
      id: 'catia-biw-marathi',
      title: 'CATIA V5 + BIW Fixture Design (Marathi)', 
      desc: 'Full training bundle in Marathi - CATIA basics to advanced BIW design', 
      price: '₹30,010',
      original: '₹45,010',
      discount: '33% OFF'
    }
  ];

  const faqs: FAQ[] = [
    {
      question: 'What software do I need for the courses?',
      answer: 'For CATIA V5 courses, you need CATIA V5 R19 or higher installed on your computer (Windows 7 or higher). We provide guidance on obtaining student versions. For BIW courses, CATIA V5 software is required along with basic understanding of 3D modeling.'
    },
    {
      question: 'Are the courses available online and offline?',
      answer: 'Yes! We offer both online and offline (classroom) training modes at our Karve Nagar, Pune center. Online courses include recorded lectures with lifetime access, and offline courses provide hands-on training with our instructors. You can choose based on your convenience.'
    },
    {
      question: 'What is your placement record?',
      answer: 'M CAD Solutions has an outstanding 98% placement record with 200+ students successfully placed in leading automotive companies like Tata Motors, Mahindra, and various international automotive suppliers. We provide lifetime placement assistance to all our students.'
    },
    {
      question: 'Do you provide lifetime placement support?',
      answer: 'Yes! We provide 100% lifetime placement support. Even after course completion, our placement team continues to assist you with job opportunities, interview preparation, resume building, and connecting you with our network of 50+ hiring partners in the automotive industry.'
    },
    {
      question: 'What makes M CAD Solutions different from other institutes?',
      answer: 'We are the Maharashtra Udyog Bhushan Award 2022 winner and NSDC authorized center. Our training is 100% job-oriented with project-based learning, 13+ years experienced industry expert instructors, real-world projects with German & Indian standards, and comprehensive GD&T training. We focus on both technical and soft skills development.'
    },
    {
      question: 'Are the courses suitable for fresh graduates?',
      answer: 'Absolutely! Our courses are designed for both fresh BE/B.Tech/Diploma graduates and working professionals. We start from basics and progress to advanced industry-level skills. No prior CAD experience is required for our foundational courses.'
    }
  ];

  const handleCourseClick = (courseId: string): void => {
    router.push(`/course/${courseId}`);
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Filter courses based on search
      const filtered = [...courses, ...comboCourses].filter(course =>
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.desc.toLowerCase().includes(searchQuery.toLowerCase())
      );
      if (filtered.length > 0) {
        const coursesElement = document.getElementById('courses');
        if (coursesElement) {
          coursesElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  const toggleFaq = (index: number): void => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const scrollToSection = (sectionId: string): void => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const handlePhoneCall = (): void => {
    window.location.href = 'tel:+917030999500';
  };

  const handleWhatsApp = (): void => {
    window.open('https://wa.me/917030999500?text=Hi, I want to know more about your courses', '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Demo Modal */}
      {showDemoModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-8 max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4">Book Free Demo Class</h2>
            <form onSubmit={(e) => { e.preventDefault(); alert('Thank you! We will contact you shortly.'); setShowDemoModal(false); }}>
              <input type="text" placeholder="Your Name" className="w-full mb-3 px-4 py-2 border rounded" required />
              <input type="email" placeholder="Email Address" className="w-full mb-3 px-4 py-2 border rounded" required />
              <input type="tel" placeholder="Phone Number" className="w-full mb-3 px-4 py-2 border rounded" required />
              <select className="w-full mb-4 px-4 py-2 border rounded" required>
                <option value="">Select Course</option>
                <option>CATIA V5</option>
                <option>BIW Fixture Design</option>
                <option>Combo Package</option>
              </select>
              <div className="flex gap-3">
                <button type="submit" className="flex-1 bg-orange-600 text-white py-2 rounded hover:bg-orange-700">
                  Submit
                </button>
                <button type="button" onClick={() => setShowDemoModal(false)} className="flex-1 border border-gray-300 py-2 rounded hover:bg-gray-50">
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Enroll Modal */}
      {showEnrollModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-8 max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4">Enroll Now</h2>
            <p className="text-gray-600 mb-4">Choose your enrollment option:</p>
            <div className="space-y-3">
              <button onClick={handlePhoneCall} className="w-full bg-green-600 text-white py-3 rounded hover:bg-green-700 flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />
                Call: +91 7030999500
              </button>
              <button onClick={handleWhatsApp} className="w-full bg-green-500 text-white py-3 rounded hover:bg-green-600 flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                WhatsApp Us
              </button>
              <button onClick={() => router.push('/#courses')} className="w-full border border-orange-600 text-orange-600 py-3 rounded hover:bg-orange-50">
                Browse Courses
              </button>
              <button onClick={() => setShowEnrollModal(false)} className="w-full border border-gray-300 py-2 rounded hover:bg-gray-50">
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Top Banner */}
      <div className="bg-gradient-to-r from-orange-600 to-blue-600 text-center py-3 text-sm text-white">
        <p>
          <strong>🎓 Award-Winning Training Institute</strong> | Maharashtra Udyog Bhushan Award 2022 Winner
        </p>
        <p className="font-semibold">Join 200+ Successfully Placed Students!</p>
      </div>

      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span 
                className="text-2xl font-bold text-orange-600 cursor-pointer" 
                onClick={() => router.push('/')}
              >
                M CAD Solutions
              </span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('courses')} className="text-gray-700 hover:text-orange-600 transition">
                Courses
              </button>
              <button onClick={() => scrollToSection('features')} className="text-gray-700 hover:text-orange-600 transition">
                Why Choose Us
              </button>
              <button onClick={() => scrollToSection('testimonials')} className="text-gray-700 hover:text-orange-600 transition">
                Reviews
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-orange-600 transition">
                Contact
              </button>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <button 
                onClick={() => setShowEnrollModal(true)}
                className="bg-orange-600 text-white px-6 py-2 rounded-md hover:bg-orange-700 transition"
              >
                Enroll Now
              </button>
              <button 
                onClick={handlePhoneCall}
                className="text-gray-700 hover:text-orange-600 flex items-center gap-1 transition"
              >
                <Phone className="w-4 h-4" />
                +91 7030999500
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <button onClick={() => scrollToSection('courses')} className="block w-full text-left px-4 py-2 hover:bg-gray-50">
                Courses
              </button>
              <button onClick={() => scrollToSection('features')} className="block w-full text-left px-4 py-2 hover:bg-gray-50">
                Why Choose Us
              </button>
              <button onClick={() => scrollToSection('testimonials')} className="block w-full text-left px-4 py-2 hover:bg-gray-50">
                Reviews
              </button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-4 py-2 hover:bg-gray-50">
                Contact
              </button>
              <button onClick={() => setShowEnrollModal(true)} className="block w-full text-left px-4 py-2 bg-orange-600 text-white mt-2 rounded">
                Enroll Now
              </button>
              <button onClick={handlePhoneCall} className="block w-full text-left px-4 py-2 hover:bg-gray-50 flex items-center gap-2">
                <Phone className="w-4 h-4" /> +91 7030999500
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative h-96 bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200')"}}>
        <div className="absolute inset-0 bg-gradient-to-r from-orange-900 to-blue-900 bg-opacity-80 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Best Mechanical CAD Training in Pune
            </h1>
            <p className="text-xl mb-2">
              Master CATIA V5 & BIW Fixture Design from Industry Experts
            </p>
            <p className="text-lg mb-6 text-gray-200">
              Your career starts here! From hands-on training to real project experience and 98% placement support
            </p>
            <div className="flex justify-center space-x-4">
              <button 
                onClick={() => setShowDemoModal(true)}
                className="bg-orange-600 text-white px-8 py-3 rounded-md hover:bg-orange-700 transition font-semibold"
              >
                Book Free Demo
              </button>
              <button 
                onClick={() => scrollToSection('courses')}
                className="bg-white text-orange-600 px-8 py-3 rounded-md hover:bg-gray-100 transition font-semibold"
              >
                View Courses
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-8 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-orange-600">98%</div>
              <div className="text-gray-600 text-sm">Placement Record</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600">200+</div>
              <div className="text-gray-600 text-sm">Students Placed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600">13+</div>
              <div className="text-gray-600 text-sm">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600">100%</div>
              <div className="text-gray-600 text-sm">Job-Oriented Training</div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Courses */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" id="courses">
        <h2 className="text-3xl font-bold mb-3 text-center">Industry-Focused Domain Courses</h2>
        <p className="text-center text-gray-600 mb-8">Job-oriented programs designed to build strong careers in Automotive Design & CAD</p>
        
        <form onSubmit={handleSearch} className="relative mb-8 max-w-2xl mx-auto">
          <Search className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for CATIA, BIW, AutoCAD courses..."
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 shadow-sm"
          />
        </form>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {courses.map((course, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow cursor-pointer" 
              onClick={() => handleCourseClick(course.id)}
            >
              <div className="h-48 bg-gradient-to-br from-orange-400 to-blue-500 flex items-center justify-center">
                <BookOpen className="w-20 h-20 text-white opacity-80" />
              </div>
              <div className="p-5">
                <div className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2 py-1 rounded inline-block mb-2">
                  {course.discount}
                </div>
                <h3 className="font-bold text-lg mb-2">{course.title}</h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">{course.desc}</p>
                <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                  <span>📹 {course.videos}</span>
                  <span>•</span>
                  <span>⏱️ {course.duration}</span>
                </div>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-2xl font-bold text-orange-600">{course.price}</span>
                  <span className="text-gray-400 line-through text-sm">{course.original}</span>
                </div>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCourseClick(course.id);
                  }}
                  className="w-full bg-orange-600 text-white py-2 rounded-md hover:bg-orange-700 transition font-semibold"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Combo Courses */}
        <h3 className="text-2xl font-bold mb-6">Combo Packages</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {comboCourses.map((combo, idx) => (
            <div 
              key={idx} 
              className="bg-gradient-to-r from-orange-50 to-blue-50 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow border-2 border-orange-200 cursor-pointer"
              onClick={() => handleCourseClick(combo.id)}
            >
              <div className="p-6">
                <div className="bg-orange-600 text-white text-xs font-bold px-3 py-1 rounded inline-block mb-3">
                  BEST VALUE • {combo.discount}
                </div>
                <h3 className="font-bold text-xl mb-2">{combo.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{combo.desc}</p>
                <div className="flex items-baseline gap-3 mb-4">
                  <span className="text-3xl font-bold text-orange-600">{combo.price}</span>
                  <span className="text-gray-400 line-through text-lg">{combo.original}</span>
                </div>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCourseClick(combo.id);
                  }}
                  className="w-full bg-orange-600 text-white py-3 rounded-md hover:bg-orange-700 transition font-bold"
                >
                  View Combo Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Section */}
      <div className="bg-white py-12" id="features">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-3 text-center">Why Choose M CAD Solutions?</h2>
          <p className="text-center text-gray-600 mb-10">Where Learning Meets Industry - Building Careers in Automotive Design</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                icon: <Users className="w-10 h-10 text-orange-600" />,
                title: 'Industry Expert Instructors', 
                desc: 'Learn from professionals with 13+ years of automotive industry experience'
              },
              { 
                icon: <Award className="w-10 h-10 text-orange-600" />,
                title: 'Project-Based Learning', 
                desc: 'Work on real-world live/dummy projects with Indian and German standards'
              },
              { 
                icon: <TrendingUp className="w-10 h-10 text-orange-600" />,
                title: '98% Placement Support', 
                desc: 'Lifetime placement assistance with 200+ students successfully placed'
              },
              { 
                icon: <Clock className="w-10 h-10 text-orange-600" />,
                title: 'Flexible Learning Modes', 
                desc: 'Online & classroom options with lifetime access to recorded sessions'
              },
              { 
                icon: <CheckCircle className="w-10 h-10 text-orange-600" />,
                title: 'GD&T Training', 
                desc: 'Complete coverage of Geometric Dimensioning & Tolerancing standards'
              },
              { 
                icon: <BookOpen className="w-10 h-10 text-orange-600" />,
                title: 'Soft Skills Development', 
                desc: 'Interview preparation, communication skills & personal development sessions'
              },
              { 
                icon: <Award className="w-10 h-10 text-orange-600" />,
                title: 'Award-Winning Excellence', 
                desc: 'Maharashtra Udyog Bhushan Award 2022 & NSDC authorized center'
              },
              { 
                icon: <Users className="w-10 h-10 text-orange-600" />,
                title: '100% Job-Oriented', 
                desc: 'Domain-specific training designed for immediate employability in core mechanical field'
              }
            ].map((feature, idx) => (
              <div key={idx} className="text-center p-6 rounded-lg hover:bg-orange-50 transition">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h4 className="font-bold mb-2 text-lg">{feature.title}</h4>
                <p className="text-sm text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Training Domains */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Specialized Training Domains</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: 'BIW Fixture Design', desc: 'Body-in-White fixture design for automotive manufacturing with welding assembly process' },
            { title: 'CATIA V5 & 3DX (V6)', desc: 'Complete CAD software training from fundamentals to advanced surface modeling' },
            { title: 'Automotive Plastic Trims', desc: 'Interior & exterior plastic trim design for automotive applications' },
            { title: 'Automotive Seating Design', desc: 'Comprehensive training in vehicle seating system design and development' },
            { title: 'Welding Fixture Design', desc: 'Advanced welding fixture design with assembly process optimization' },
            { title: 'Product Design & Development', desc: 'End-to-end product design for automotive industry applications' }
          ].map((domain, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow border-l-4 border-orange-600">
              <h3 className="font-bold text-lg mb-2 text-orange-600">{domain.title}</h3>
              <p className="text-gray-600 text-sm">{domain.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-gray-100 py-12" id="testimonials">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Student Success Stories</h2>
          
          <div className="space-y-6">
            {[
              { 
                name: 'Shubham Indurkar', 
                role: 'Design Engineer', 
                college: 'Tulsiramji Gaikwad Patil College',
                rating: 5, 
                text: 'M CAD Solutions played a crucial role in my career transition. Their BIW Simulation training program was top-notch, combining theoretical knowledge with hands-on projects that mirrored real-world challenges. The instructors were highly knowledgeable and supportive, and the placement team\'s assistance was invaluable. Thanks to their guidance, I secured a position at a leading company.'
              },
              { 
                name: 'Shraddha Sutar', 
                role: 'Design Engineer - Fresh Graduate', 
                college: 'Engineering Graduate',
                rating: 5, 
                text: 'Thrilled to have landed a Design Engineer role right after graduating! The institute\'s curriculum was spot-on, especially the practical projects and CAD training, which directly prepared me for industry demands. The placement cell was incredibly supportive, guiding us through interviews and connecting us with top companies. Feeling well-equipped and excited to start my career!'
              },
              { 
                name: 'Vasudev Parab', 
                role: 'Design Engineer at Top MNC', 
                college: 'Sanjay Ghodawat Institute Kolhapur',
                rating: 5, 
                text: 'The job-oriented domain training at M CAD Solutions transformed my skills. From GD&T to soft skills development and interview preparation by industry experts, everything was perfectly structured. The 100% lifetime placement support and access to all session recordings made learning flexible and effective. Highly recommend to all mechanical engineers!'
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
                <div className="flex items-start">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-blue-500 rounded-full mr-4 flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-bold text-lg">{testimonial.name}</h4>
                        <p className="text-sm text-gray-600">{testimonial.role}</p>
                        <p className="text-xs text-gray-500">{testimonial.college}</p>
                      </div>
                    </div>
                    <div className="flex mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                        />
                      ))}
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">{testimonial.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button 
              onClick={() => window.open('https://www.instagram.com/mcadsolution/', '_blank')}
              className="bg-orange-600 text-white px-8 py-3 rounded-md hover:bg-orange-700 transition font-semibold"
            >
              View All Success Stories
            </button>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-orange-600 to-blue-600 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Launch Your Career in Automotive Design?</h2>
          <p className="text-xl mb-8">
            Take the first step toward your career with M CAD Solutions. Our counselors will help you choose the right program.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={() => setShowDemoModal(true)}
              className="bg-white text-orange-600 px-8 py-3 rounded-md hover:bg-gray-100 transition font-bold text-lg"
            >
              Book Free Demo Class
            </button>
            <button 
              onClick={handleWhatsApp}
              className="border-2 border-white text-white px-8 py-3 rounded-md hover:bg-white hover:text-orange-600 transition font-bold text-lg"
            >
              Talk to Counselor
            </button>
          </div>
          <p className="mt-6 text-lg flex items-center justify-center gap-2 flex-wrap">
            <Phone className="w-5 h-5" />
            <span>Call:</span>
            <a href="tel:+917030999500" className="hover:underline">+91 7030999500</a>
            <span>|</span>
            <a href="tel:+919096708490" className="hover:underline">+91 9096708490</a>
          </p>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4 max-w-3xl mx-auto">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-md overflow-hidden">
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full p-5 text-left flex justify-between items-center hover:bg-gray-50 transition"
              >
                <h4 className="font-semibold text-gray-800 pr-4">{faq.question}</h4>
                {expandedFaq === idx ? (
                  <ChevronUp className="w-5 h-5 text-orange-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-orange-600 flex-shrink-0" />
                )}
              </button>
              {expandedFaq === idx && (
                <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed border-t pt-4">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-12 pb-6" id="contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">M CAD Solutions</h3>
              <p className="text-gray-400 text-sm mb-4">
                Best Mechanical CAD Training Institute in Pune. Award-winning excellence in automotive design education.
              </p>
              <div className="flex gap-4">
                <a href="https://www.instagram.com/mcadsolution/" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
                <a href="https://in.linkedin.com/company/mcadsolutions" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><button onClick={() => scrollToSection('courses')} className="hover:text-white transition">Courses</button></li>
                <li><button onClick={() => scrollToSection('features')} className="hover:text-white transition">Why Choose Us</button></li>
                <li><button onClick={() => scrollToSection('testimonials')} className="hover:text-white transition">Testimonials</button></li>
                <li><a href="https://mcadsolution.com/blog/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Programs</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><button onClick={() => handleCourseClick('catia-v5-english')} className="hover:text-white transition text-left">CATIA V5 Training</button></li>
                <li><button onClick={() => handleCourseClick('biw-fixture-3d-english')} className="hover:text-white transition text-left">BIW Fixture Design</button></li>
                <li><button onClick={() => scrollToSection('courses')} className="hover:text-white transition text-left">Combo Packages</button></li>
                <li><a href="https://mcadsolution.com/placement/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Placement Support</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                  <span>Kakade Plaza, 1st Floor, Office No. 138, Warje Malwadi Road, Karve Nagar, Pune - 411052</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <a href="tel:+917030999500" className="hover:text-white transition">+91 7030999500</a>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <a href="tel:+919096708490" className="hover:text-white transition">+91 9096708490</a>
                </li>
                <li className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>Mon-Sat: 10:00 AM - 8:00 PM</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
              <div className="mb-4 md:mb-0">
                <a href="https://mcadsolution.com" target="_blank" rel="noopener noreferrer" className="hover:text-white mr-6 transition">Website</a>
                <button onClick={handleWhatsApp} className="hover:text-white mr-6 transition">WhatsApp</button>
                <a href="mailto:mcadsolution@gmail.com" className="hover:text-white transition">Email Us</a>
              </div>
              <div className="text-center">
                © 2025 M CAD Solutions. All rights reserved. | NSDC Authorized Center
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <button 
        onClick={handleWhatsApp}
        className="fixed bottom-6 right-6 bg-green-500 text-white w-14 h-14 rounded-full shadow-lg hover:bg-green-600 flex items-center justify-center z-40 transition"
        aria-label="Contact on WhatsApp"
      >
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
      </button>
    </div>
  );
};

export default Landing;