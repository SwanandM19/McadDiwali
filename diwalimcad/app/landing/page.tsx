import React from 'react';
import { Search, Star } from 'lucide-react';

const Landing = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Banner */}
      <div className="bg-cyan-100 text-center py-3 text-sm">
        <p>
          <strong>Courses as low as ₹519</strong> | Succeed with skills that live on the leading-edge.
        </p>
        <p className="font-semibold">3 days left!</p>
      </div>

      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold">▲ DesignVerse</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-gray-900">Courses</a>
              <a href="#" className="text-gray-700 hover:text-gray-900">Categories</a>
              <a href="#" className="text-gray-700 hover:text-gray-900">About Us</a>
              <a href="#" className="text-gray-700 hover:text-gray-900">Contact</a>
            </div>
            <div className="flex space-x-4">
              <button className="bg-cyan-500 text-white px-4 py-2 rounded-md hover:bg-cyan-600">
                Get Started
              </button>
              <button className="text-gray-700 hover:text-gray-900">Login</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative h-96 bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200')"}}>
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center text-white max-w-3xl px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Master AutoCAD and Design Soft
            </h1>
            <p className="text-lg mb-6">
              Unlock your creative potential with comprehensive courses. Learn from industry experts 
              that empower your skills.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-cyan-500 text-white px-6 py-3 rounded-md hover:bg-cyan-600">
                Explore Courses
              </button>
              <button className="bg-white text-gray-900 px-6 py-3 rounded-md hover:bg-gray-100">
                Free Trial
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Courses */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold mb-6">Featured Courses</h2>
        
        <div className="relative mb-8">
          <Search className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search for courses"
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { title: 'AutoCAD Essentials', desc: 'Learn the fundamentals of AutoCAD', price: '₹191 ₹79' },
            { title: 'Advanced 3D Modeling', desc: 'Master advanced 3D modeling techniques', price: '₹143 ₹119' },
            { title: 'Architectural Design with Software', desc: 'Complete architectural projects', price: '₹550 ₹500' },
            { title: 'Product Design with Software', desc: 'Create innovative product designs', price: '₹143 ₹99' }
          ].map((course, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
              <div className="h-48 bg-gray-300"></div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">{course.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{course.desc}</p>
                <p className="text-cyan-600 font-semibold">{course.price}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Course Categories */}
        <h2 className="text-2xl font-bold mb-6">Course Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { title: 'Architecture', desc: 'Design and visualize architectural projects' },
            { title: 'Product Design', desc: 'Create innovative product designs' },
            { title: 'Interior Design', desc: 'Design and visualize interior spaces' },
            { title: 'Mechanical Engineering', desc: 'Design and analyze mechanical systems' }
          ].map((cat, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition cursor-pointer">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">{cat.title}</h3>
                <p className="text-gray-600 text-sm">{cat.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Why Choose Section */}
        <h2 className="text-2xl font-bold mb-6">Why Choose DesignVerse?</h2>
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h3 className="text-xl font-bold mb-4">Your Path to Design Mastery</h3>
          <p className="text-gray-600 mb-6">
            At DesignVerse, we are committed to providing the highest quality education and support to 
            help you achieve your design goals. Our courses are designed to be engaging, practical, and 
            relevant to the industry&apos;s demands.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Expert Instructors', desc: 'Learn from industry-leading experts with years of experience' },
              { title: 'Hands-on Projects', desc: 'Apply your skills on real-world projects and assignments' },
              { title: 'Flexible Learning', desc: 'Study at your own pace with our flexible online learning platform' },
              { title: 'Career Support', desc: 'Get personalized career support to level your dream career' }
            ].map((feature, idx) => (
              <div key={idx} className="text-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full mx-auto mb-3"></div>
                <h4 className="font-semibold mb-2">{feature.title}</h4>
                <p className="text-sm text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <h2 className="text-2xl font-bold mb-6">Testimonials</h2>
        <div className="space-y-6 mb-12">
          {[
            { name: 'Ethan Clarke', role: 'UI/UX Designer', rating: 5, text: 'DesignVerse transformed my career! The AutoCAD Essentials course was incredibly comprehensive and easy to follow. The instructor&apos;s expertise and the hands-on projects helped me gain the confidence to tackle real-world design challenges. I highly recommend DesignVerse to anyone looking to enhance their design skills.' },
            { name: 'Olivia Bennett', role: 'Interior Designer', rating: 4, text: 'I took the Advanced 3D Modeling course and was impressed with the depth of the content. The projects were challenging but rewarding, and the instructor provided excellent feedback. While the course was demanding, it significantly improved my 3D modeling abilities.' },
            { name: 'Noah Foster', role: 'Architect', rating: 5, text: 'The Architectural Design with Software course exceeded my expectations. The curriculum was well-structured, and the projects were relevant to the industry. The instructor&apos;s guidance and the support from the DesignVerse team were invaluable. I now feel more confident in my ability to design and visualize architectural projects.' }
          ].map((testimonial, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < testimonial.rating ? 'text-cyan-500 fill-cyan-500' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 text-sm">{testimonial.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4 mb-12">
          {[
            'What software do I need for the courses?',
            'Are the courses self-paced?',
            'Do you offer career support?'
          ].map((question, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-md p-4 cursor-pointer hover:shadow-lg transition">
              <div className="flex justify-between items-center">
                <h4 className="font-semibold">{question}</h4>
                <span className="text-gray-400">∨</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex justify-between items-center">
            <a href="#" className="text-gray-600 hover:text-gray-900">Privacy Policy</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Terms of Service</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Contact Us</a>
          </div>
          <div className="text-center mt-6 text-sm text-gray-500">
            ©2024 DesignVerse. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;