import React from 'react';
import { ChevronDown, Play, CheckCircle, Clock, Video, FileText, Download, Smartphone, Award, Star } from 'lucide-react';

const Course = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <button className="text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              <span className="text-sm">Categories</span>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for anything"
                  className="bg-gray-800 text-white pl-4 pr-4 py-2 rounded-full text-sm w-64 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#" className="hover:text-gray-300">Business</a>
              <a href="#" className="hover:text-gray-300">Teach</a>
              <a href="#" className="hover:text-gray-300">My learning</a>
              <button className="hover:text-gray-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </button>
              <button className="border border-white px-4 py-2 rounded hover:bg-gray-800">Log in</button>
              <button className="bg-white text-gray-900 px-4 py-2 rounded hover:bg-gray-100">Sign up</button>
              <button className="hover:text-gray-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Course Header */}
      <header className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-48">
            <div className="lg:w-7/12">
              <div className="text-sm mb-4 text-purple-400">
                <span>Development</span> &gt; <span>Programming Languages</span> &gt; <span>Python</span>
              </div>
              <h1 className="text-3xl lg:text-4xl font-bold mb-4">
                The AI Engineer-Trainee 2025: Complete AI Engineer Course
              </h1>
              <p className="text-gray-300 mb-4 text-lg">
                The AI Engineer-Trainee Course: Python, NLP, Transformers, LLMs, LangChain, Hugging Face, and more!
              </p>
              <div className="flex items-center gap-4 mb-4">
                <span className="bg-yellow-400 text-gray-900 px-2 py-1 text-xs font-bold rounded">Bestseller</span>
                <div className="flex items-center gap-2">
                  <span className="text-yellow-400 font-bold">4.5</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="text-purple-400 underline">(2,889 ratings)</span>
                  <span>102,000 students</span>
                </div>
              </div>
              <div className="text-sm text-gray-300">
                Created by <a href="#" className="underline text-purple-400">Jose Portilla</a>, <a href="#" className="underline text-purple-400">Andrei Neagoie</a>
              </div>
              <div className="flex items-center gap-4 mt-2 text-sm text-gray-300">
                <span>● Last updated 7/2024</span>
                <span>🌐 English</span>
                <span>English, Arabic (Auto), 14 more</span>
              </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-40">
        <div className="lg:flex lg:gap-8 items-start">
            
            {/* Left Column: Course Details */}
            <div className="flex-1 min-w-0">
                {/* What you'll learn */}
                <div className="bg-white rounded-lg shadow-md p-8 mb-8">
                  <h2 className="text-2xl font-bold mb-6">What you will learn</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                    {[
                      'Master Python fundamentals and then use it to learn AI and Machine Learning from scratch',
                      'Gain a comprehensive understanding of how to apply AI and Machine Learning in practical, real-world scenarios',
                      'Become a top 10% AI Engineer by mastering both the theoretical knowledge and practical skills that employers seek',
                      'Understand the latest advancements in AI, including RAG, Transformers, LLMs, and Generative AI',
                      'Build and deploy your own AI applications with frameworks like LangChain and libraries like Hugging Face',
                      'Learn a wide variety of data-related problems with AI and ML'
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-gray-900 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Course content */}
                <div className="bg-white rounded-lg shadow-md p-8 mb-8">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold">Course content</h2>
                    <button className="text-purple-600 hover:underline text-sm font-semibold">Expand all sections</button>
                  </div>
                  <div className="text-sm text-gray-600 mb-4">
                    19 sections • 151 lectures • 21h 30m total length
                  </div>
                  
                  <div className="border rounded-lg">
                    <div className="border-b p-4 hover:bg-gray-50 cursor-pointer">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                          <ChevronDown className="w-5 h-5" />
                          <span className="font-semibold">Intro to AI Module: Getting started</span>
                        </div>
                        <span className="text-sm text-gray-600">4 lectures • 10min</span>
                      </div>
                    </div>
                    <div className="p-4 space-y-3 bg-gray-50">
                      <div className="flex justify-between items-center text-sm">
                        <div className="flex items-center gap-3">
                          <Play className="w-4 h-4" />
                          <span>Welcome to the course!</span>
                        </div>
                        <span className="text-gray-600">02:00</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <div className="flex items-center gap-3">
                          <Play className="w-4 h-4" />
                          <span>What is AI?</span>
                        </div>
                        <span className="text-gray-600">03:00</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Requirements */}
                <div className="bg-white rounded-lg shadow-md p-8 mb-8">
                  <h2 className="text-2xl font-bold mb-4">Requirements</h2>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>A computer (Windows, Mac, or Linux).</li>
                    <li>No prior knowledge is required! We will start from the very basics and you will learn everything you need to know.</li>
                  </ul>
                </div>

                {/* Description */}
                <div className="bg-white rounded-lg shadow-md p-8 mb-8">
                  <h2 className="text-2xl font-bold mb-4">Description</h2>
                  <p className="text-gray-700 mb-4">
                    Welcome to The AI Engineer-Trainee: The Complete AI Engineer Course, the only course you need to learn and 
                    master Artificial Intelligence. With over 100,000 ratings and a 4.5 average, this course is one of the most 
                    popular courses online.
                  </p>
                  <p className="text-gray-700">
                    This course is designed for students of all levels, from complete beginners to experienced programmers looking to 
                    level up. The course has been updated to 2024 and you will be learning the latest tools and technologies 
                    used at large companies.
                  </p>
                </div>

                {/* Instructors */}
                <div className="bg-white rounded-lg shadow-md p-8 mb-8">
                  <h2 className="text-2xl font-bold mb-6">Instructors</h2>
                  
                  <div className="mb-8">
                    <a href="#" className="text-purple-600 hover:underline text-lg font-semibold">Jose Portilla</a>
                    <p className="text-gray-600 text-sm mb-4">Head of Data Science, Pierian Training</p>
                    <div className="flex items-start gap-4">
                      <div className="w-24 h-24 bg-gray-300 rounded-full flex-shrink-0"></div>
                      <div className="flex-1">
                        <div className="grid grid-cols-2 gap-2 text-sm mb-4">
                          <div className="flex items-center gap-2"><Star className="w-4 h-4" /><span>4.6 Instructor Rating</span></div>
                          <div className="flex items-center gap-2"><Award className="w-4 h-4" /><span>819,930 Reviews</span></div>
                          <div className="flex items-center gap-2"><Video className="w-4 h-4" /><span>3,485,349 Students</span></div>
                          <div className="flex items-center gap-2"><Play className="w-4 h-4" /><span>79 Courses</span></div>
                        </div>
                        <p className="text-gray-700 text-sm">
                          Jose Marcial Portilla has a BS and MS in Mechanical Engineering from Santa Clara University and has 
                          years of experience as a professional instructor and trainer for Data Science and programming.
                        </p>
                      </div>
                    </div>
                    <button className="text-purple-600 hover:underline text-sm mt-4 font-semibold">Show more</button>
                  </div>

                  <div>
                    <a href="#" className="text-purple-600 hover:underline text-lg font-semibold">Andrei Neagoie</a>
                    <p className="text-gray-600 text-sm mb-4">Founder of ZTM, Senior Software Developer</p>
                    <div className="flex items-start gap-4">
                      <div className="w-24 h-24 bg-gray-300 rounded-full flex-shrink-0"></div>
                      <div className="flex-1">
                        <div className="grid grid-cols-2 gap-2 text-sm mb-4">
                          <div className="flex items-center gap-2"><Star className="w-4 h-4" /><span>4.6 Instructor Rating</span></div>
                          <div className="flex items-center gap-2"><Award className="w-4 h-4" /><span>251,789 Reviews</span></div>
                          <div className="flex items-center gap-2"><Video className="w-4 h-4" /><span>978,432 Students</span></div>
                          <div className="flex items-center gap-2"><Play className="w-4 h-4" /><span>22 Courses</span></div>
                        </div>
                        <p className="text-gray-700 text-sm">
                          Andrei is the instructor of some of the highest-rated development courses online. His mission 
                          is to help students learn to code and get hired.
                        </p>
                      </div>
                    </div>
                    <button className="text-purple-600 hover:underline text-sm mt-4 font-semibold">Show more</button>
                  </div>
                </div>

                {/* Reviews */}
                <div className="bg-white rounded-lg shadow-md p-8 mb-8">
                  <div className="flex items-center gap-4 mb-6">
                    <Star className="w-8 h-8 text-yellow-400 fill-current" />
                    <h2 className="text-2xl font-bold">4.5 course rating • 2.9K ratings</h2>
                  </div>

                  <h3 className="font-semibold mb-6">Reviews</h3>
                  
                  <div className="space-y-6">
                    <div className="border-b pb-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gray-300 rounded-full flex-shrink-0"></div>
                        <div className="flex-1">
                          <span className="font-semibold">M.</span>
                          <div className="flex items-center gap-2 my-2">
                            {[...Array(5)].map((_, i) => (<Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />))}
                            <span className="text-sm text-gray-600">a week ago</span>
                          </div>
                          <p className="text-gray-700 text-sm">
                            This course is really good for beginners who want to get into the field of AI and Machine Learning. The instructors are very knowledgeable and explain the concepts in a very clear and concise way.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="border-b pb-6">
                       <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gray-300 rounded-full flex-shrink-0"></div>
                        <div className="flex-1">
                          <span className="font-semibold">S.</span>
                          <div className="flex items-center gap-2 my-2">
                            {[...Array(5)].map((_, i) => (<Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />))}
                            <span className="text-sm text-gray-600">2 weeks ago</span>
                          </div>
                          <p className="text-gray-700 text-sm">
                            I am really enjoying this course. It is very comprehensive and covers all the important topics in AI. I would definitely recommend this course to anyone who wants to learn about AI.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <button className="w-full border border-gray-900 py-3 rounded font-semibold hover:bg-gray-50 mt-6">
                    Show all reviews
                  </button>
                </div>
            </div>

            {/* Right Column: Floating Course Card */}
            <div className="lg:w-96 lg:sticky lg:top-8 space-y-6 flex-shrink-0">
                <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                    <div className="relative h-56 bg-gradient-to-br from-green-300 to-green-500 flex items-center justify-center">
                        <div className="text-center text-white p-8">
                        <h3 className="text-2xl font-bold mb-2">COURSE</h3>
                        <p className="text-sm">Complete your learning path with comprehensive content</p>
                        </div>
                        <button className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md">
                            <Play className="w-8 h-8 text-gray-900 ml-1" />
                        </div>
                        </button>
                    </div>
                    <div className="p-6">
                        <div className="mb-4">
                        <div className="text-3xl font-bold text-gray-900">€529</div>
                        <div className="text-gray-500 line-through">€1,999</div>
                        <div className="text-red-500 font-semibold">74% off</div>
                        </div>
                        <div className="text-red-500 text-sm font-semibold mb-4">⏰ 1 day left at this price!</div>
                        <button className="w-full bg-purple-600 text-white py-3 rounded font-semibold hover:bg-purple-700 mb-2">
                        Add to cart
                        </button>
                        <button className="w-full border border-gray-900 text-gray-900 py-3 rounded font-semibold hover:bg-gray-50">
                        Buy now
                        </button>
                        <div className="text-center text-sm text-gray-500 mt-2">30-Day Money-Back Guarantee</div>

                        <div className="mt-6">
                        <h4 className="font-semibold mb-3 text-gray-900">This course includes:</h4>
                        <div className="space-y-2 text-sm text-gray-700">
                            <div className="flex items-center gap-2"><Video className="w-4 h-4" /><span>21.5 hours on-demand video</span></div>
                            <div className="flex items-center gap-2"><FileText className="w-4 h-4" /><span>12 coding exercises</span></div>
                            <div className="flex items-center gap-2"><Download className="w-4 h-4" /><span>141 downloadable resources</span></div>
                            <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>Full lifetime access</span></div>
                            <div className="flex items-center gap-2"><Smartphone className="w-4 h-4" /><span>Access on mobile and TV</span></div>
                            <div className="flex items-center gap-2"><Award className="w-4 h-4" /><span>Certificate of completion</span></div>
                        </div>
                        </div>

                        <div className="mt-6 flex justify-between text-sm">
                        <button className="text-purple-600 hover:underline font-semibold">Share</button>
                        <button className="text-purple-600 hover:underline font-semibold">Gift this course</button>
                        <button className="text-purple-600 hover:underline font-semibold">Apply Coupon</button>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                    <h4 className="font-semibold mb-3 text-gray-900">Subscribe to top courses</h4>
                    <p className="text-sm text-gray-600 mb-4">
                    Get this course, plus 8,000+ of our top-rated courses, with Personal Plan. 
                    <a href="#" className="text-purple-600 hover:underline font-semibold"> Learn more</a>
                    </p>
                    <button className="w-full border border-gray-900 text-gray-900 py-3 rounded font-semibold hover:bg-gray-50">
                    Try Personal Plan for free
                    </button>
                    <div className="text-center text-sm text-gray-500 mt-2">Starting at €12.99 per month after trial</div>
                </div>
            </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-sm text-gray-400">
            © 2024 Learning Platform, Inc.
          </div>
        </div>
      </footer>

      {/* Floating action button */}
      <button className="fixed bottom-8 right-8 bg-cyan-500 text-white w-14 h-14 rounded-full shadow-lg hover:bg-cyan-600 flex items-center justify-center">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      </button>
    </div>
  );
};

export default Course;
