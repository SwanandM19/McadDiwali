// 'use client';

// import React, { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import { Search, Star, Award, Users, BookOpen, Clock, CheckCircle, TrendingUp, ChevronDown, ChevronUp, Menu, X, Phone, MapPin, IndianRupee } from 'lucide-react';
// import axios from 'axios';
// import Image from 'next/image';
// import DiwaliOfferBanner from '@/components/DiwaliOfferBanner';

// // TypeScript interfaces and types
// interface Course {
//   id: string;
//   title: string;
//   desc: string;
//   price: string;
//   original: string;
//   discount: string;
//   videos: string;
//   duration: string;
//   image: string;
// }

// interface ComboCourse {
//   id: string;
//   title: string;
//   desc: string;
//   price: string;
//   original: string;
//   discount: string;
//   image: string;
// }

// interface FAQ {
//   question: string;
//   answer: string;
// }

// interface OfflineCourse {
//   id: string;
//   title: string;
//   description: string;
//   duration: string;
//   lectures: string;
//   batchSize: string;
//   fee: string;
//   feeNumeric: number;
//   discount: string;
//   skillLevel: string;
//   image: string;
//   features: string[];
//   detailedInfo: {
//     overview: string;
//     curriculum: string[];
//     certification: string;
//     placement: string;
//     prerequisites: string;
//   };
// }

// const Landing: React.FC = () => {
//   const router = useRouter();
//   const [searchQuery, setSearchQuery] = useState<string>('');
//   const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
//   const [showCourseMode, setShowCourseMode] = useState<'online' | 'offline'>('online');
//   const [showEnrollmentForm, setShowEnrollmentForm] = useState<boolean>(false);
//   const [selectedOfflineCourse, setSelectedOfflineCourse] = useState<OfflineCourse | null>(null);
//   const [showEnrollModal, setShowEnrollModal] = useState<boolean>(false);
//   const [showCourseDetails, setShowCourseDetails] = useState<string | null>(null);
//   const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

// const handleFormSubmit = async (): Promise<void> => {
//   const form = document.getElementById('enrollmentForm') as HTMLFormElement;

//   // Validate form
//   if (!form.checkValidity()) {
//     form.reportValidity();
//     return;
//   }

//   const fullName = (form.elements.namedItem('fullname') as HTMLInputElement).value;
//   const email = (form.elements.namedItem('email') as HTMLInputElement).value;
//   const phone = (form.elements.namedItem('phone') as HTMLInputElement).value;
//   const qualification = (form.elements.namedItem('qualification') as HTMLInputElement).value;
//   // FIX: Changed from 'batch_preference' to 'batchpreference' to match the form field name
//   const batchPreference = (form.elements.namedItem('batchpreference') as HTMLSelectElement).value;
//   const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value;

//   const enrollmentData = {
//     fullName,
//     email,
//     phone,
//     qualification,
//     batchPreference,
//     message,
//     courseId: selectedOfflineCourse?.id,
//     courseTitle: selectedOfflineCourse?.title,
//     courseFee: selectedOfflineCourse?.fee,
//     courseFeeNumeric: selectedOfflineCourse?.feeNumeric,
//   };

//   try {
//     const response = await axios.post('/api/enrollment', enrollmentData);
//     if (response.data.success) {
//       setFormSubmitted(true);
//       // Removed the payment alert message
//     } else {
//       alert('Failed to save form details. Please try again.');
//     }
//   } catch (error) {
//     console.error('Error submitting form:', error);
//     alert('Failed to save form details. Please try again.');
//   }
// };




//   const courses: Course[] = [
//     {
//       id: 'catia-v5-english',
//       title: 'CATIA V5 - English',
//       desc: 'Master CATIA V5 from scratch - Part Design, Assembly, Drafting & Surface Modeling',
//       price: '₹4,999',
//       original: '₹9,999',
//       discount: '50% OFF',
//       videos: '13 Videos',
//       duration: 'Lifetime Access',
//       image: '/catiaveng.png' // <-- local image from public folder
//     },
//     {
//       id: 'biw-fixture-3d-english',
//       title: 'BIW Fixture Design - 3D',
//       desc: 'Hands-on expertise in 3D modeling for automotive BIW fixtures with industry standards',
//       price: '₹20,999',
//       original: '₹39,999',
//       discount: '50% OFF',
//       videos: '38 Videos',
//       duration: '1 Year Access',
//       image: '/biwfixture.png'
//     },
//     {
//       id: 'biw-fixture-2d-english',
//       title: 'BIW Fixture Design - 2D Drafting',
//       desc: 'Production-ready 2D drawings with GD&T for automotive fixture applications',
//       price: '₹15,999',
//       original: '₹31,999',
//       discount: '50% OFF',
//       videos: '17 Videos',
//       duration: '1 Year Access',
//       image: '/biwfixture2d.png'
//     },
//     {
//       id: 'catia-v5-marathi',
//       title: 'CATIA V5 - Marathi',
//       desc: 'Industrial-based training in Marathi - Sketcher, Part Modelling, Assembly & Drafting',
//       price: '₹4,999',
//       original: '₹9,999',
//       discount: '50% OFF',
//       videos: '13 Videos',
//       duration: '1 Year Access',
//       image: '/catiav5marathi.png'
//     }
//   ];

//   const comboCourses: ComboCourse[] = [
//     {
//       id: 'catia-biw-english',
//       title: 'CATIA + BIW Fixture Design (English)',
//       desc: 'Complete package: CATIA V5 fundamentals + 2D & 3D BIW Fixture Design',
//       price: '₹38,999',
//       original: '₹59,999',
//       discount: '33% OFF',
//       image: '/catia+biwfixture.png'
//     },
//     {
//       id: 'catia-biw-marathi',
//       title: 'CATIA V5 + BIW Fixture Design (Marathi)',
//       desc: 'Full training bundle in Marathi - CATIA basics to advanced BIW design',
//       price: '₹38,999',
//       original: '₹59,999',
//       discount: '33% OFF',
//       image: '/catia+biwfixturemarathi.png'
//     }
//   ];


//   const offlineCourses: OfflineCourse[] = [
//     {
//       id: 'biw-fixture-offline',
//       title: 'BIW Fixture Design',
//       description: 'Master Body-in-White fixture design using CATIA V5 for automotive manufacturing',
//       duration: '3 Months',
//       lectures: '80+ Hours',
//       batchSize: '5 Students',
//       fee: '₹27,999',
//       feeNumeric: 27999,
//       discount: 'Limited Seats',
//       skillLevel: 'Intermediate to Advanced',
//       image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80',
//       features: [
//         'Live Industrial Projects',
//         'German & Indian Standards',
//         'GD&T Training',
//         '100% Job-Oriented',
//         'Lifetime Placement Support'
//       ],
//       detailedInfo: {
//         overview: 'India\'s 1st BIW Fixture Design Job Oriented course where we provide training on live/dummy projects. Learn in-depth knowledge and design approaches from basic to Advanced using CATIA V5 Software. Specialized in designing BIW fixtures for Automotive OEMs, Tier1, Tier2 suppliers.',
//         curriculum: [
//           'BIW Fixture Essentials: Types, terminology, and applications',
//           'Tool Station Expertise: Various tool stations and their functions',
//           'Complete Fixture Units: Simple Rest units, Clamp Units, Fixed Pin units',
//           'Advanced Units: Retracting Pin units, Combine Units, Pivot Point concept',
//           'Dump units, sliding units, and base units design',
//           '3D Concept Development and 3D Finish',
//           'Locating and clamping mechanisms design',
//           'Analysis of fixture forces and material selection',
//           '2D Detailing and drafting with GD&T',
//           'Industrial project implementation'
//         ],
//         certification: 'Dassault Systèmes Authorised Certificate of Attendance for CATIA training and M CAD Solutions Certificate of Completion for BIW Fixture Design Course',
//         placement: 'Students work on 2D detailing and 3D design of Fixtures on industrial projects. At the end of course, technical as well as Project oriented assessment. 100% placement assistance with network of automotive industry partners.',
//         prerequisites: 'Basic CATIA V5 knowledge recommended (Sketcher, Part Modeling, Assembly, Drafting). CATIA course can be taken separately if needed.'
//       }
//     },
//     {
//       id: 'catia-v5-offline',
//       title: 'CATIA V5 Complete',
//       description: 'Comprehensive CATIA V5 training from fundamentals to advanced surface modeling',
//       duration: '2 Months',
//       lectures: '60+ Hours',
//       batchSize: '5 Students',
//       fee: '₹9,999',
//       feeNumeric: 9999,
//       discount: 'Popular Course',
//       skillLevel: 'Beginner to Advanced',
//       image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80',
//       features: [
//         'Part Design & Assembly',
//         'Surface Modeling',
//         'Drafting & Sheet Metal',
//         'Hands-on Projects',
//         'Industry Standards'
//       ],
//       detailedInfo: {
//         overview: 'Complete CATIA V5 training designed for Mechanical Engineers and CAD professionals. Learn industrial-based training with hands-on approach covering all essential modules for automotive and manufacturing industries.',
//         curriculum: [
//           'Sketcher: 2D sketching fundamentals and constraints',
//           'Part Design: 3D solid modeling and advanced features',
//           'Assembly Design: Component assembly and constraints',
//           'Drafting/Detailing: 2D drawings and annotations',
//           'Surface Design: Advanced surfacing techniques',
//           'Sheet Metal Design: Sheet metal specific features',
//           'Generative Shape Design',
//           'Real-world automotive projects',
//           'Best practices and industry standards'
//         ],
//         certification: 'M CAD Solutions Certificate of Completion with hands-on project portfolio',
//         placement: 'Foundation course for all automotive design roles. Essential for pursuing advanced courses like BIW Fixture Design, Plastic Trims, and other domain courses.',
//         prerequisites: 'Basic computer knowledge. Fresh graduates from BE/B.Tech/Diploma in Mechanical Engineering can start from basics.'
//       }
//     },
//     {
//       id: 'plastic-trims-offline',
//       title: 'Automotive Interior Plastic Trims',
//       description: 'Complete plastic trim design for automotive interior & exterior applications',
//       duration: '3 Months',
//       lectures: '100+ Hours',
//       batchSize: '5 Students',
//       fee: '₹33,999',
//       feeNumeric: 33999,
//       discount: 'High Demand',
//       skillLevel: 'Intermediate to Advanced',
//       image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80',
//       features: [
//         'Design & Manufacturing Process',
//         'CATIA V5 Specialized Training',
//         'Indian & European Standards',
//         '2 Years Equivalent Experience',
//         'Cost Estimation & Testing'
//       ],
//       detailedInfo: {
//         overview: 'Comprehensive training in automotive plastic trim design for interior & exterior applications. Learn design methodologies, manufacturing processes, and industry standards used by leading automotive OEMs.',
//         curriculum: [
//           'Introduction to Automotive Plastic Trims',
//           'Material selection and properties',
//           'Design for Manufacturing (DFM) principles',
//           'Interior trim components: Dashboard, Door panels, Consoles',
//           'Exterior trim components: Bumpers, Grilles, Pillar trims',
//           'Molding processes: Injection molding, Blow molding',
//           'Surface finish and texture design',
//           'Cost estimation and optimization',
//           'Testing standards and validation',
//           'Complete project: Design to production'
//         ],
//         certification: 'M CAD Solutions Advanced Certificate with industry-recognized project portfolio equivalent to 2 years of hands-on experience',
//         placement: '100% placement support with focus on automotive Tier1 and Tier2 suppliers specializing in plastic components. High demand in industry.',
//         prerequisites: 'CATIA V5 knowledge required. Mechanical engineering background preferred. Understanding of basic design principles.'
//       }
//     },
//     {
//       id: 'interior-harness-offline',
//       title: 'Robotics simulation',
//       description: 'Electrical harness design and routing for automotive interior systems',
//       duration: '2 Months',
//       lectures: '60+ Hours',
//       batchSize: '5 Students',
//       fee: '₹33,999',
//       feeNumeric: 33999,
//       discount: 'Specialized Course',
//       skillLevel: 'Intermediate',
//       image: 'https://images.unsplash.com/photo-1552519507-704b5c2bb0fa?w=800&q=80',
//       features: [
//         'Harness Design Fundamentals',
//         'Routing & Optimization',
//         'Connector Selection',
//         'Industry Standards',
//         'Practical Applications'
//       ],
//       detailedInfo: {
//         overview: 'Specialized course in automotive electrical harness design focusing on interior wiring systems. Learn to design, route, and optimize electrical harnesses for modern vehicles.',
//         curriculum: [
//           'Introduction to automotive electrical systems',
//           'Harness design principles and standards',
//           'Connector and terminal selection',
//           'Wire sizing and specification',
//           'Routing strategies and optimization',
//           'Protection and shielding methods',
//           'Integration with vehicle architecture',
//           'Documentation and BOM creation',
//           'Testing and validation procedures',
//           'Industry-specific projects'
//         ],
//         certification: 'M CAD Solutions Certificate of Completion with project portfolio',
//         placement: 'Placement assistance for roles in automotive wiring harness design and electrical systems integration',
//         prerequisites: 'Basic automotive knowledge. CATIA V5 recommended but not mandatory. Electrical engineering background beneficial.'
//       }
//     },
//     // {
//     //   id: 'seating-design-offline',
//     //   title: 'Automotive Seating Design',
//     //   description: 'Complete vehicle seating system design and development training',
//     //   duration: '3 Months',
//     //   lectures: '90+ Hours',
//     //   batchSize: '5 Students',
//     //   fee: '₹30,000',
//     //   feeNumeric: 30000,
//     //   discount: 'Premium Course',
//     //   skillLevel: 'Advanced',
//     //   image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80',
//     //   features: [
//     //     'Complete Seating System',
//     //     'Ergonomics & Comfort',
//     //     'Safety Standards',
//     //     'Manufacturing Process',
//     //     'Testing & Validation'
//     //   ],
//     //   detailedInfo: {
//     //     overview: 'Advanced training in automotive seating system design covering ergonomics, safety, comfort, and manufacturing. Learn to design complete seating systems for various vehicle segments.',
//     //     curriculum: [
//     //       'Seating system architecture and components',
//     //       'Ergonomics and anthropometry',
//     //       'Comfort engineering and foam design',
//     //       'Frame structure and mechanism design',
//     //       'Safety requirements and crash standards',
//     //       'Adjustment mechanisms and controls',
//     //       'Trim and cover design',
//     //       'Manufacturing processes and assembly',
//     //       'Testing standards and validation',
//     //       'Cost optimization strategies'
//     //     ],
//     //     certification: 'M CAD Solutions Advanced Certificate with comprehensive seating design portfolio',
//     //     placement: 'High placement potential in seating system suppliers and automotive OEMs focusing on comfort and safety systems',
//     //     prerequisites: 'CATIA V5 proficiency required. Mechanical engineering background essential. Prior automotive design experience beneficial.'
//     //   }
//     // }
//   ];

//   const faqs: FAQ[] = [
//     {
//       question: 'What software do I need for the courses?',
//       answer: 'For CATIA V5 courses, you need CATIA V5 R19 or higher installed on your computer (Windows 7 or higher). We provide guidance on obtaining student versions. For BIW courses, CATIA V5 software is required along with basic understanding of 3D modeling.'
//     },
//     {
//       question: 'Are the courses available online and offline?',
//       answer: 'Yes! We offer both online and offline (classroom) training modes at our Karve Nagar, Pune center. Online courses include recorded lectures with lifetime access, and offline courses provide hands-on training with our instructors. You can choose based on your convenience.'
//     },
//     {
//       question: 'What is your placement record?',
//       answer: 'M CAD Solutions has an outstanding 98% placement record with 200+ students successfully placed in leading automotive companies like Tata Motors, Mahindra, and various international automotive suppliers. We provide lifetime placement assistance to all our students.'
//     },
//     {
//       question: 'Do you provide lifetime placement support?',
//       answer: 'Yes! We provide 100% lifetime placement support. Even after course completion, our placement team continues to assist you with job opportunities, interview preparation, resume building, and connecting you with our network of 50+ hiring partners in the automotive industry.'
//     },
//     {
//       question: 'What makes M CAD Solutions different from other institutes?',
//       answer: 'We are the Maharashtra Udyog Bhushan Award 2022 winner and NSDC authorized center. Our training is 100% job-oriented with project-based learning, 15+ years experienced industry expert instructors, real-world projects with German & Indian standards, and comprehensive GD&T training. We focus on both technical and soft skills development.'
//     },
//     {
//       question: 'Are the courses suitable for fresh graduates?',
//       answer: 'Absolutely! Our courses are designed for both fresh BE/B.Tech/Diploma graduates and working professionals. We start from basics and progress to advanced industry-level skills. No prior CAD experience is required for our foundational courses.'
//     }
//   ];

//   const handleCourseClick = (courseId: string): void => {
//     router.push(`/course/${courseId}`);
//   };

//   const handleSearch = (e: React.FormEvent<HTMLFormElement>): void => {
//     e.preventDefault();
//     if (searchQuery.trim()) {
//       const filtered = [...courses, ...comboCourses].filter(course =>
//         course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         course.desc.toLowerCase().includes(searchQuery.toLowerCase())
//       );
//       if (filtered.length > 0) {
//         const coursesElement = document.getElementById('courses');
//         if (coursesElement) {
//           coursesElement.scrollIntoView({ behavior: 'smooth' });
//         }
//       }
//     }
//   };

//   const toggleFaq = (index: number): void => {
//     setExpandedFaq(expandedFaq === index ? null : index);
//   };

//   const scrollToSection = (sectionId: string): void => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//       setMobileMenuOpen(false);
//     }
//   };

//   const handlePhoneCall = (): void => {
//     window.location.href = 'tel:+919172969859';
//   };

//   const handleWhatsApp = (): void => {
//     window.open('https://wa.me/919172969859?text=Hi, I want to know more about your courses', '_blank');
//   };


// return (
//   <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
//     {/* Course Details Modal - DARK MODE */}
//     {showCourseDetails && (
//       <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 overflow-y-auto">
//         <div className="bg-white dark:bg-gray-800 rounded-lg p-6 md:p-8 max-w-4xl w-full my-8 max-h-[90vh] overflow-y-auto">
//           {(() => {
//             const course = offlineCourses.find(c => c.id === showCourseDetails);
//             if (!course) return null;

//             return (
//               <>
//                 <div className="flex justify-between items-start mb-6">
//                   <div>
//                     <h2 className="text-2xl md:text-3xl font-bold text-orange-600 dark:text-orange-400">{course.title}</h2>
//                     <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm md:text-base">{course.description}</p>
//                   </div>
//                   <button
//                     onClick={() => setShowCourseDetails(null)}
//                     className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
//                   >
//                     <X className="w-6 h-6" />
//                   </button>
//                 </div>

//                 <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-6 bg-orange-50 dark:bg-gray-700 p-4 rounded-lg">
//                   <div className="text-center">
//                     <Clock className="w-5 h-5 md:w-6 md:h-6 text-orange-600 dark:text-orange-400 mx-auto mb-2" />
//                     <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300">Duration</p>
//                     <p className="font-semibold text-sm md:text-base dark:text-white">{course.duration}</p>
//                   </div>
//                   <div className="text-center">
//                     <BookOpen className="w-5 h-5 md:w-6 md:h-6 text-orange-600 dark:text-orange-400 mx-auto mb-2" />
//                     <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300">Training Hours</p>
//                     <p className="font-semibold text-sm md:text-base dark:text-white">{course.lectures}</p>
//                   </div>
//                   {/* <div className="text-center">
//                     <Users className="w-5 h-5 md:w-6 md:h-6 text-orange-600 dark:text-orange-400 mx-auto mb-2" />
//                     <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300">Batch Size</p>
//                     <p className="font-semibold text-sm md:text-base dark:text-white">{course.batchSize}</p>
//                   </div> */}
//                   <div className="text-center">
//                     <IndianRupee className="w-5 h-5 md:w-6 md:h-6 text-orange-600 dark:text-orange-400 mx-auto mb-2" />
//                     <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300">Course Fee</p>
//                     <p className="font-semibold text-sm md:text-base text-orange-600 dark:text-orange-400">{course.fee}</p>
//                   </div>
//                 </div>

//                 <div className="space-y-6">
//                   <div>
//                     <h3 className="text-lg md:text-xl font-bold mb-3 dark:text-white">Course Overview</h3>
//                     <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm md:text-base">{course.detailedInfo.overview}</p>
//                   </div>

//                   <div>
//                     <h3 className="text-lg md:text-xl font-bold mb-3 dark:text-white">What You&apos;ll Learn</h3>
//                     <ul className="space-y-2">
//                       {course.detailedInfo.curriculum.map((item, idx) => (
//                         <li key={idx} className="flex items-start gap-2">
//                           <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-500 dark:text-green-400 mt-0.5 flex-shrink-0" />
//                           <span className="text-gray-700 dark:text-gray-300 text-sm md:text-base">{item}</span>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>

//                   <div>
//                     <h3 className="text-lg md:text-xl font-bold mb-3 dark:text-white">Certification</h3>
//                     <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm md:text-base">{course.detailedInfo.certification}</p>
//                   </div>

//                   <div>
//                     <h3 className="text-lg md:text-xl font-bold mb-3 dark:text-white">Placement Support</h3>
//                     <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm md:text-base">{course.detailedInfo.placement}</p>
//                   </div>

//                   <div>
//                     <h3 className="text-lg md:text-xl font-bold mb-3 dark:text-white">Prerequisites</h3>
//                     <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm md:text-base">{course.detailedInfo.prerequisites}</p>
//                   </div>

//                   <div>
//                     <h3 className="text-lg md:text-xl font-bold mb-3 dark:text-white">Key Features</h3>
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
//                       {course.features.map((feature, idx) => (
//                         <div key={idx} className="flex items-center gap-2 bg-blue-50 dark:bg-gray-700 p-3 rounded">
//                           <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
//                           <span className="text-gray-700 dark:text-gray-300 text-sm md:text-base">{feature}</span>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </div>

//                 <div className="mt-8 flex flex-col sm:flex-row gap-3 md:gap-4">
//                   <button
//                     onClick={() => {
//                       setSelectedOfflineCourse(course);
//                       setShowEnrollmentForm(true);
//                       setShowCourseDetails(null);
//                     }}
//                     className="flex-1 bg-orange-600 text-white py-3 rounded-md hover:bg-orange-700 transition font-semibold text-sm md:text-base"
//                   >
//                     Enroll Now
//                   </button>
//                   <button
//                     onClick={handleWhatsApp}
//                     className="flex-1 border-2 border-green-500 text-green-600 dark:text-green-400 py-3 rounded-md hover:bg-green-50 dark:hover:bg-gray-700 transition font-semibold text-sm md:text-base"
//                   >
//                     Talk to Counselor
//                   </button>
//                 </div>
//               </>
//             );
//           })()}
//         </div>
//       </div>
//     )}

//     {/* Enrollment Form Modal - DARK MODE */}
//     {showEnrollmentForm && selectedOfflineCourse && (
//       <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 overflow-y-auto">
//         <div className="bg-white dark:bg-gray-800 rounded-lg p-6 md:p-8 max-w-2xl w-full my-8">
//           <div className="flex justify-between items-start mb-4">
//             <div>
//               <h2 className="text-xl md:text-2xl font-bold dark:text-white">{selectedOfflineCourse.title}</h2>
//               <p className="text-gray-600 dark:text-gray-300 text-xs md:text-sm mt-1">Fill the form to complete enrollment</p>
//             </div>
//             <button
//               onClick={() => {
//                 setShowEnrollmentForm(false);
//                 setSelectedOfflineCourse(null);
//                 setFormSubmitted(false);
//               }}
//               className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
//             >
//               <X className="w-6 h-6" />
//             </button>
//           </div>

//           <div className="bg-orange-50 dark:bg-gray-700 p-4 rounded-lg mb-6">
//             <div className="flex justify-between items-center flex-wrap gap-2">
//               <div>
//                 <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300">Course Fee</p>
//                 <p className="text-xl md:text-2xl font-bold text-orange-600 dark:text-orange-400">{selectedOfflineCourse.fee}</p>
//               </div>
//               <div className="text-right">
//                 <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300">Duration</p>
//                 <p className="font-semibold text-sm md:text-base dark:text-white">{selectedOfflineCourse.duration}</p>
//               </div>
//             </div>
//           </div>

//           {formSubmitted && (
//             <div className="mb-4 p-4 bg-green-50 dark:bg-green-900 border border-green-200 dark:border-green-700 rounded">
//               <p className="text-green-800 dark:text-green-200 font-semibold text-sm md:text-base">✓ Form details saved successfully!</p>
//               <p className="text-xs md:text-sm text-green-600 dark:text-green-300">Please talk to our counselor to complete your enrollment.</p>
//             </div>
//           )}

//           <form id="enrollmentForm">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mb-4">
//               <input
//                 name="fullname"
//                 type="text"
//                 placeholder="Full Name"
//                 className="px-4 py-2 border dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 text-sm md:text-base"
//                 required
//                 disabled={formSubmitted}
//               />
//               <input
//                 name="email"
//                 type="email"
//                 placeholder="Email Address"
//                 className="px-4 py-2 border dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 text-sm md:text-base"
//                 required
//                 disabled={formSubmitted}
//               />
//               <input
//                 name="phone"
//                 type="tel"
//                 placeholder="Phone Number"
//                 className="px-4 py-2 border dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 text-sm md:text-base"
//                 required
//                 disabled={formSubmitted}
//               />
//               <input
//                 name="qualification"
//                 type="text"
//                 placeholder="Qualification (BE/B.Tech/Diploma)"
//                 className="px-4 py-2 border dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 text-sm md:text-base"
//                 disabled={formSubmitted}
//               />
//             </div>

//             <select
//               name="batchpreference"
//               className="w-full mb-4 px-4 py-2 border dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm md:text-base"
//               required
//               disabled={formSubmitted}
//             >
//               <option value="">Select Batch Timing</option>
//               <option>Weekday Morning (10 AM - 1 PM)</option>
//               <option>Weekday Evening (6 PM - 9 PM)</option>
//               <option>Weekend Saturday (10 AM - 5 PM)</option>
//             </select>

//             <textarea
//               name="message"
//               placeholder="Any specific requirements or questions?"
//               className="w-full mb-4 px-4 py-2 border dark:border-gray-600 rounded h-20 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 text-sm md:text-base"
//               disabled={formSubmitted}
//             />

//             <div className="mb-4 p-4 bg-blue-50 dark:bg-gray-700 rounded">
//               <h4 className="font-semibold mb-2 text-sm dark:text-white">Enrollment Process</h4>
//               <div className="text-xs text-gray-700 dark:text-gray-300 space-y-1">
//                 <p>• Submit your details above</p>
//                 <p>• Talk to our counselor about course details and payment options</p>
//                 <p>• Complete enrollment with flexible payment plans available</p>
//               </div>
//             </div>

//             <div className="flex flex-col sm:flex-row gap-3">
//               {!formSubmitted ? (
//                 <>
//                   <button
//                     type="button"
//                     onClick={handleFormSubmit}
//                     className="flex-1 bg-blue-600 text-white py-3 rounded hover:bg-blue-700 font-semibold flex items-center justify-center gap-2 text-sm md:text-base"
//                   >
//                     <CheckCircle className="w-4 h-4 md:w-5 md:h-5" />
//                     Submit Details
//                   </button>
//                   <button
//                     type="button"
//                     onClick={handleWhatsApp}
//                     className="flex-1 border-2 border-green-500 text-green-600 dark:text-green-400 py-3 rounded hover:bg-green-50 dark:hover:bg-gray-700 font-semibold text-sm md:text-base"
//                   >
//                     Talk to Counselor
//                   </button>
//                 </>
//               ) : (
//                 <button
//                   type="button"
//                   onClick={handleWhatsApp}
//                   className="w-full bg-green-600 text-white py-4 rounded hover:bg-green-700 font-bold text-base md:text-lg animate-pulse shadow-lg hover:shadow-xl transition-all"
//                 >
//                   📞 Talk to Counselor Now
//                 </button>
//               )}
//             </div>
//           </form>

//           <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-4">
//             By enrolling, you agree to our terms and conditions. Contact: +91 91729 69859
//           </p>
//         </div>
//       </div>
//     )}

//     {/* Enroll Modal - DARK MODE */}
//     {showEnrollModal && (
//       <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
//         <div className="bg-white dark:bg-gray-800 rounded-lg p-6 md:p-8 max-w-md w-full">
//           <h2 className="text-xl md:text-2xl font-bold mb-4 dark:text-white">Enroll Now</h2>
//           <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm md:text-base">Choose your enrollment option:</p>
//           <div className="space-y-3">
//             <button onClick={handlePhoneCall} className="w-full bg-green-600 text-white py-3 rounded hover:bg-green-700 flex items-center justify-center gap-2 text-sm md:text-base">
//               <Phone className="w-4 h-4 md:w-5 md:h-5" />
//               Call: +91 91729 69859
//             </button>
//             <button onClick={handleWhatsApp} className="w-full bg-green-500 text-white py-3 rounded hover:bg-green-600 flex items-center justify-center gap-2 text-sm md:text-base">
//               <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
//               WhatsApp Us
//             </button>
//             <button onClick={() => router.push('/#courses')} className="w-full border border-orange-600 text-orange-600 dark:text-orange-400 dark:border-orange-400 py-3 rounded hover:bg-orange-50 dark:hover:bg-gray-700 text-sm md:text-base">
//               Browse Courses
//             </button>
//             <button onClick={() => setShowEnrollModal(false)} className="w-full border border-gray-300 dark:border-gray-600 py-2 rounded hover:bg-gray-50 dark:hover:bg-gray-700 dark:text-gray-300 text-sm md:text-base">
//               Close
//             </button>
//           </div>
//         </div>
//       </div>
//     )}

//     {/* Top Banner */}
//     <div className="bg-gradient-to-r from-orange-600 to-blue-600 text-center py-2 md:py-3 text-xs md:text-sm text-white px-2">
//       <DiwaliOfferBanner/>
//     </div>

//     {/* Navigation - DARK MODE */}
//     <nav className="bg-white dark:bg-gray-800 shadow-sm sticky top-0 z-40">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           <div className="flex items-center">
//             <Image
//               src="/mcadlogo.png"
//               alt="M CAD Solutions Logo"
//               width={200}
//               height={150}
//               className="h-8 md:h-10 cursor-pointer"
//               onClick={() => router.push('/')}
//             />
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex space-x-8">
//             <button onClick={() => scrollToSection('courses')} className="text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 transition text-sm lg:text-base">
//               Courses
//             </button>
//             <button onClick={() => scrollToSection('features')} className="text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 transition text-sm lg:text-base">
//               Why Choose Us
//             </button>
//             <button onClick={() => scrollToSection('testimonials')} className="text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 transition text-sm lg:text-base">
//               Reviews
//             </button>
//             <button onClick={() => scrollToSection('contact')} className="text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 transition text-sm lg:text-base">
//               Contact
//             </button>
//           </div>

//           <div className="hidden md:flex items-center space-x-4">
//             <button
//               onClick={() => setShowEnrollModal(true)}
//               className="bg-orange-600 text-white px-4 lg:px-6 py-2 rounded-md hover:bg-orange-700 transition text-sm lg:text-base"
//             >
//               Enroll Now
//             </button>
//             <button
//               onClick={handlePhoneCall}
//               className="text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 flex items-center gap-1 transition text-sm"
//             >
//               <Phone className="w-4 h-4" />
//               <span className="hidden lg:inline">+91 91729 69859</span>
//             </button>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//             className="md:hidden p-2 text-gray-700 dark:text-gray-300"
//           >
//             {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {mobileMenuOpen && (
//           <div className="md:hidden py-4 border-t dark:border-gray-700">
//             <button onClick={() => scrollToSection('courses')} className="block w-full text-left px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-700 dark:text-gray-300 text-sm">
//               Courses
//             </button>
//             <button onClick={() => scrollToSection('features')} className="block w-full text-left px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-700 dark:text-gray-300 text-sm">
//               Why Choose Us
//             </button>
//             <button onClick={() => scrollToSection('testimonials')} className="block w-full text-left px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-700 dark:text-gray-300 text-sm">
//               Reviews
//             </button>
//             <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-700 dark:text-gray-300 text-sm">
//               Contact
//             </button>
//             <button onClick={() => setShowEnrollModal(true)} className="block w-full text-left px-4 py-2 bg-orange-600 text-white mt-2 rounded text-sm">
//               Enroll Now
//             </button>
//             <button onClick={handlePhoneCall} className="block w-full text-left px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-700 flex items-center gap-2 dark:text-gray-300 text-sm">
//               <Phone className="w-4 h-4" /> +91 9172969859
//             </button>
//           </div>
//         )}
//       </div>
//     </nav>

//     {/* Hero Section */}
//     <div
//       className="relative h-64 md:h-80 lg:h-96 bg-cover bg-center"
//       style={{ backgroundImage: 'url(/background.png)' }}
//     >
//       <div className="absolute inset-0 bg-gradient-to-r from-orange-900/80 to-blue-900/80 flex items-center justify-center">
//         <div className="text-center text-white max-w-4xl px-4">
//           <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
//             Best Mechanical CAD Training in Pune
//           </h1>
//           <p className="text-base md:text-xl mb-1 md:mb-2">
//             Master CATIA V5 & BIW Fixture Design from Industry Experts
//           </p>
//           <p className="text-sm md:text-lg mb-4 md:mb-6 text-gray-200">
//             Your career starts here! From hands-on training to real project experience and 98% placement support
//           </p>
//           <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4">
//             <button
//               onClick={() => {
//                 setShowCourseMode('online');
//                 setTimeout(() => scrollToSection('courses'), 100);
//               }}
//               className="bg-white text-orange-600 px-6 md:px-8 py-2 md:py-3 rounded-md hover:bg-gray-100 transition font-semibold text-sm md:text-base"
//             >
//               View Online Courses
//             </button>
//             <button
//               onClick={() => {
//                 setShowCourseMode('offline');
//                 setTimeout(() => scrollToSection('courses'), 100);
//               }}
//               className="bg-orange-600 text-white px-6 md:px-8 py-2 md:py-3 rounded-md hover:bg-orange-700 transition font-semibold text-sm md:text-base"
//             >
//               View Offline Courses
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>

//     {/* Stats Section - DARK MODE */}
//     <div className="bg-white dark:bg-gray-800 py-6 md:py-8 shadow-md">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 text-center">
//           <div>
//             <div className="text-2xl md:text-3xl font-bold text-orange-600 dark:text-orange-400">98%</div>
//             <div className="text-gray-600 dark:text-gray-300 text-xs md:text-sm">Placement Record</div>
//           </div>
//           <div>
//             <div className="text-2xl md:text-3xl font-bold text-orange-600 dark:text-orange-400">255+</div>
//             <div className="text-gray-600 dark:text-gray-300 text-xs md:text-sm">Students Placed</div>
//           </div>
//           <div>
//             <div className="text-2xl md:text-3xl font-bold text-orange-600 dark:text-orange-400">15+</div>
//             <div className="text-gray-600 dark:text-gray-300 text-xs md:text-sm">Years Experience</div>
//           </div>
//           <div>
//             <div className="text-2xl md:text-3xl font-bold text-orange-600 dark:text-orange-400">100%</div>
//             <div className="text-gray-600 dark:text-gray-300 text-xs md:text-sm">Job-Oriented Training</div>
//           </div>
//         </div>
//       </div>
//     </div>

//     {/* Courses Section - DARK MODE */}
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12" id="courses">
//       <div className="text-center mb-6 md:mb-8">
//         <h2 className="text-2xl md:text-3xl font-bold mb-2 md:mb-3 dark:text-white">Industry-Focused Courses</h2>
//         <p className="text-gray-600 dark:text-gray-300 mb-4 md:mb-6 text-sm md:text-base px-2">Job-oriented programs designed to build strong careers in Automotive Design & CAD</p>

//         {/* Course Mode Toggle */}
//         {/* <div className="inline-flex rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 p-1 shadow-sm mb-6 md:mb-8">
//           <button
//             onClick={() => setShowCourseMode('online')}
//             className={`px-4 md:px-8 py-2 rounded-md font-semibold transition text-sm md:text-base ${showCourseMode === 'online'
//               ? 'bg-orange-600 text-white'
//               : 'text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400'
//               }`}
//           >
//             Online Courses
//           </button>
//           <button
//             onClick={() => setShowCourseMode('offline')}
//             className={`px-4 md:px-8 py-2 rounded-md font-semibold transition text-sm md:text-base ${showCourseMode === 'offline'
//               ? 'bg-orange-600 text-white'
//               : 'text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400'
//               }`}
//           >
//             Offline Courses
//           </button>
//         </div> */}
//       </div>

//       {showCourseMode === 'online' ? (
//         <>
//           {/* Search Bar - DARK MODE */}
//           <form onSubmit={handleSearch} className="relative mb-6 md:mb-8 max-w-2xl mx-auto">
//             <Search className="absolute left-3 top-2.5 md:top-3 text-gray-400 w-4 h-4 md:w-5 md:h-5" />
//             <input
//               type="text"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               placeholder="Search for CATIA, BIW, AutoCAD courses..."
//               className="w-full pl-9 md:pl-10 pr-4 py-2 md:py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 shadow-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 text-sm md:text-base"
//             />
//           </form>

//           {/* Online Courses Grid - DARK MODE */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-12">
//             {courses.map((course, idx) => (
//               <div
//                 key={idx}
//                 className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
//                 onClick={() => handleCourseClick(course.id)}
//               >
//                 <div className="h-40 md:h-48 relative">
//                   <Image
//                     src={course.image}
//                     alt={course.title}
//                     fill
//                     className="object-cover"
//                   />
//                 </div>
//                 <div className="p-4 md:p-5">
//                   <div className="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 text-xs font-semibold px-2 py-1 rounded inline-block mb-2">
//                     {course.discount}
//                   </div>
//                   <h3 className="font-bold text-base md:text-lg mb-2 dark:text-white">{course.title}</h3>
//                   <p className="text-gray-600 dark:text-gray-300 text-xs md:text-sm mb-3 line-clamp-2">{course.desc}</p>
//                   <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 mb-3">
//                     <span>📹 {course.videos}</span>
//                     <span>•</span>
//                     <span>⏱️ {course.duration}</span>
//                   </div>
//                   <div className="flex items-baseline gap-2 mb-4">
//                     <span className="text-xl md:text-2xl font-bold text-orange-600 dark:text-orange-400">{course.price}</span>
//                     <span className="text-gray-400 dark:text-gray-500 line-through text-xs md:text-sm">{course.original}</span>
//                   </div>
//                   <button
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       handleCourseClick(course.id);
//                     }}
//                     className="w-full bg-orange-600 text-white py-2 rounded-md hover:bg-orange-700 transition font-semibold text-sm md:text-base"
//                   >
//                     View Details
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Combo Courses - DARK MODE */}
//           <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 dark:text-white">Combo Packages</h3>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
//             {comboCourses.map((combo, idx) => (
//               <div
//                 key={idx}
//                 className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow border-2 border-orange-200 dark:border-orange-800 cursor-pointer"

//               >
//                 <div className="h-60 md:h-82 relative">
//                   <Image
//                     src={combo.image}
//                     alt={combo.title}
//                     fill
//                     className="object-cover"
//                   />
//                 </div>
//                 <div className="p-5 md:p-6">
//                   <div className="bg-orange-600 text-white text-xs font-bold px-3 py-1 rounded inline-block mb-3">
//                     BEST VALUE • {combo.discount}
//                   </div>
//                   <h3 className="font-bold text-lg md:text-xl mb-2 dark:text-white">{combo.title}</h3>
//                   <p className="text-gray-600 dark:text-gray-300 text-xs md:text-sm mb-4">{combo.desc}</p>
//                   <div className="flex items-baseline gap-3 mb-4">
//                     <span className="text-2xl md:text-3xl font-bold text-orange-600 dark:text-orange-400">{combo.price}</span>
//                     <span className="text-gray-400 dark:text-gray-500 line-through text-base md:text-lg">{combo.original}</span>
//                   </div>
//                   <button
//                     onClick={(e) => {
//                       if(combo.id === 'catia-biw-english'){
//                         e.stopPropagation();
//                         router.push('https://web.classplusapp.com/store/course/285654?section=overview');
//                       }else{
//                         e.stopPropagation();
//                         router.push('https://web.classplusapp.com/store/course/287042?section=overview');
//                       }
//                     }}
//                     className="w-full bg-orange-600 text-white py-2 md:py-3 rounded-md hover:bg-orange-700 transition font-bold text-sm md:text-base"
//                   >
//                     View Combo Details
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </>
//       ) : (
//         <>
//           {/* Offline Courses Info Banner - DARK MODE */}
//           <div className="bg-gradient-to-r from-orange-100 to-blue-100 dark:from-orange-900/30 dark:to-blue-900/30 p-4 md:p-6 rounded-lg mb-6 md:mb-8 text-center">
//             <div className="flex items-center justify-center gap-2 mb-2">
//               <MapPin className="w-4 h-4 md:w-5 md:h-5 text-orange-600 dark:text-orange-400" />
//               <p className="font-semibold text-gray-800 dark:text-gray-200 text-sm md:text-base">
//                 Classroom Training at Karve Nagar, Pune
//               </p>
//             </div>
//             <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300">
//               Kakade Plaza, 1st Floor, Office No. 138, Warje Malwadi Road, Karve Nagar, Pune - 411052
//             </p>
//             <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300 mt-1">
//               🕒 Monday to Saturday: 10:00 AM - 8:00 PM | Small Batches of 5 Students Only
//             </p>
//           </div>

//           {/* Offline Courses Grid - DARK MODE */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
//             {offlineCourses.map((course, idx) => (
//               <div key={idx} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
//                 <div className="p-4 md:p-5">
//                   <div className="bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 text-xs font-semibold px-2 py-1 rounded inline-block mb-2">
//                     {course.discount}
//                   </div>
//                   <h3 className="font-bold text-base md:text-lg mb-2 dark:text-white">{course.title}</h3>
//                   <p className="text-gray-600 dark:text-gray-300 text-xs md:text-sm mb-3 line-clamp-2">{course.description}</p>

//                   <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 mb-3">
//                     <span>⏱️ {course.duration}</span>
//                     {/* <span>•</span> */}
//                     {/* <span>👥 {course.batchSize}</span> */}
//                   </div>

//                   <div className="flex items-baseline gap-2 mb-2 md:mb-4">
//                     <span className="text-xl md:text-2xl font-bold text-orange-600 dark:text-orange-400">{course.fee}</span>
//                     <span className="text-gray-400 dark:text-gray-500 line-through text-xs md:text-sm">
//                       ₹{(course.feeNumeric + 10000).toLocaleString('en-IN')}
//                     </span>
//                   </div>

//                   <div className="mb-4">
//                     <span className="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 text-xs font-semibold px-2 py-1 rounded">
//                       {Math.round((10000 / (course.feeNumeric + 10000)) * 100)}% OFF
//                     </span>
//                   </div>

//                   <div className="space-y-2">
//                     <button
//                       onClick={() => setShowCourseDetails(course.id)}
//                       className="w-full border-2 border-orange-600 dark:border-orange-400 text-orange-600 dark:text-orange-400 py-2 rounded-md hover:bg-orange-50 dark:hover:bg-gray-700 transition font-semibold text-sm md:text-base"
//                     >
//                       View Details
//                     </button>
//                     <button
//                       onClick={() => {
//                         setSelectedOfflineCourse(course);
//                         setShowEnrollmentForm(true);
//                       }}
//                       className="w-full bg-orange-600 text-white py-2 rounded-md hover:bg-orange-700 transition font-semibold text-sm md:text-base"
//                     >
//                       Enroll Now
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Offline Benefits - DARK MODE */}
//           <div className="mt-8 md:mt-12 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 md:p-8">
//             <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-center dark:text-white">Why Choose Classroom Training?</h3>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
//               {[
//                 {
//                   icon: <Users className="w-6 h-6 md:w-8 md:h-8 text-orange-600 dark:text-orange-400" />,
//                   title: 'Small Batches',
//                   desc: 'Only 5 students per batch for personalized attention and hands-on guidance'
//                 },
//                 {
//                   icon: <Award className="w-6 h-6 md:w-8 md:h-8 text-orange-600 dark:text-orange-400" />,
//                   title: '98% Placement',
//                   desc: '200+ students successfully placed in top automotive companies with lifetime support'
//                 },
//                 {
//                   icon: <BookOpen className="w-6 h-6 md:w-8 md:h-8 text-orange-600 dark:text-orange-400" />,
//                   title: 'Industry Projects',
//                   desc: 'Work on real industrial projects with German & Indian automotive standards'
//                 }
//               ].map((benefit, idx) => (
//                 <div key={idx} className="text-center">
//                   <div className="flex justify-center mb-2 md:mb-3">{benefit.icon}</div>
//                   <h4 className="font-bold mb-1 md:mb-2 text-sm md:text-base dark:text-white">{benefit.title}</h4>
//                   <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300">{benefit.desc}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </>
//       )}
//     </div>

//     {/* Why Choose Section - DARK MODE */}
//     <div className="bg-white dark:bg-gray-800 py-8 md:py-12" id="features">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h2 className="text-2xl md:text-3xl font-bold mb-2 md:mb-3 text-center dark:text-white">Why Choose M CAD Solutions?</h2>
//         <p className="text-center text-gray-600 dark:text-gray-300 mb-6 md:mb-10 text-sm md:text-base px-2">Where Learning Meets Industry - Building Careers in Automotive Design</p>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
//           {[
//             {
//               icon: <Users className="w-8 h-8 md:w-10 md:h-10 text-orange-600 dark:text-orange-400" />,
//               title: 'Industry Expert Instructors',
//               desc: 'Learn from professionals with 13+ years of automotive industry experience'
//             },
//             {
//               icon: <Award className="w-8 h-8 md:w-10 md:h-10 text-orange-600 dark:text-orange-400" />,
//               title: 'Project-Based Learning',
//               desc: 'Work on real-world live/dummy projects with Indian and German standards'
//             },
//             {
//               icon: <TrendingUp className="w-8 h-8 md:w-10 md:h-10 text-orange-600 dark:text-orange-400" />,
//               title: '98% Placement Support',
//               desc: 'Lifetime placement assistance with 200+ students successfully placed'
//             },
//             {
//               icon: <Clock className="w-8 h-8 md:w-10 md:h-10 text-orange-600 dark:text-orange-400" />,
//               title: 'Flexible Learning Modes',
//               desc: 'Online & classroom options with lifetime access to recorded sessions'
//             },
//             {
//               icon: <CheckCircle className="w-8 h-8 md:w-10 md:h-10 text-orange-600 dark:text-orange-400" />,
//               title: 'GD&T Training',
//               desc: 'Complete coverage of Geometric Dimensioning & Tolerancing standards'
//             },
//             {
//               icon: <BookOpen className="w-8 h-8 md:w-10 md:h-10 text-orange-600 dark:text-orange-400" />,
//               title: 'Soft Skills Development',
//               desc: 'Interview preparation, communication skills & personal development sessions'
//             },
//             {
//               icon: <Award className="w-8 h-8 md:w-10 md:h-10 text-orange-600 dark:text-orange-400" />,
//               title: 'Award-Winning Excellence',
//               desc: 'Maharashtra Udyog Bhushan Award 2022 & NSDC authorized center'
//             },
//             {
//               icon: <Users className="w-8 h-8 md:w-10 md:h-10 text-orange-600 dark:text-orange-400" />,
//               title: '100% Job-Oriented',
//               desc: 'Domain-specific training designed for immediate employability in core mechanical field'
//             }
//           ].map((feature, idx) => (
//             <div key={idx} className="text-center p-4 md:p-6 rounded-lg hover:bg-orange-50 dark:hover:bg-gray-700 transition">
//               <div className="flex justify-center mb-3 md:mb-4">
//                 {feature.icon}
//               </div>
//               <h4 className="font-bold mb-1 md:mb-2 text-sm md:text-lg dark:text-white">{feature.title}</h4>
//               <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300">{feature.desc}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>

//     {/* Training Domains - DARK MODE */}
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
//       <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center dark:text-white">Specialized Training Domains</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
//         {[
//           { title: 'BIW Fixture Design', desc: 'Body-in-White fixture design for automotive manufacturing with welding assembly process' },
//           { title: 'CATIA V5 & 3DX (V6)', desc: 'Complete CAD software training from fundamentals to advanced surface modeling' },
//           { title: 'Automotive Plastic Trims', desc: 'Interior & exterior plastic trim design for automotive applications' },
//           { title: 'Solid-Works', desc: 'Comprehensive training in vehicle seating system design and development' },
//           { title: 'Robotics Simulation', desc: 'Advanced welding fixture design with assembly process optimization' },
//           // { title: 'Product Design & Development', desc: 'End-to-end product design for automotive industry applications' }
//         ].map((domain, idx) => (
//           <div key={idx} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 md:p-6 hover:shadow-xl transition-shadow border-l-4 border-orange-600 dark:border-orange-400">
//             <h3 className="font-bold text-base md:text-lg mb-1 md:mb-2 text-orange-600 dark:text-orange-400">{domain.title}</h3>
//             <p className="text-gray-600 dark:text-gray-300 text-xs md:text-sm">{domain.desc}</p>
//           </div>
//         ))}
//       </div>
//     </div>

//     {/* Testimonials - DARK MODE */}
//     <div className="bg-gray-100 dark:bg-gray-800 py-8 md:py-12" id="testimonials">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center dark:text-white">Student Success Stories</h2>
//         <div className="space-y-4 md:space-y-6">
//           {[
//             {
//               name: 'Shubham Indurkar',
//               role: 'Design Engineer',
//               college: 'Tulsiramji Gaikwad Patil College',
//               rating: 5,
//               text: 'M CAD Solutions played a crucial role in my career transition. Their BIW Simulation training program was top-notch, combining theoretical knowledge with hands-on projects that mirrored real-world challenges. The instructors were highly knowledgeable and supportive, and the placement team\'s assistance was invaluable. Thanks to their guidance, I secured a position at a leading company.',
//               image: '/student2.jpg'
//             },
//             {
//               name: 'Shraddha Sutar',
//               role: 'Design Engineer - Fresh Graduate',
//               college: 'Engineering Graduate',
//               rating: 5,
//               text: 'Thrilled to have landed a Design Engineer role right after graduating! The institute\'s curriculum was spot-on, especially the practical projects and CAD training, which directly prepared me for industry demands. The placement cell was incredibly supportive, guiding us through interviews and connecting us with top companies. Feeling well-equipped and excited to start my career!',
//               image: '/student3.jpg'
//             },
//             {
//               name: 'Vasudev Parab',
//               role: 'Design Engineer at Top MNC',
//               college: 'Sanjay Ghodawat Institute Kolhapur',
//               rating: 5,
//               text: 'The job-oriented domain training at M CAD Solutions transformed my skills. From GD&T to soft skills development and interview preparation by industry experts, everything was perfectly structured. The 100% lifetime placement support and access to all session recordings made learning flexible and effective. Highly recommend to all mechanical engineers!',
//               image: '/student1.jpg'
//             }
//           ].map((testimonial, idx) => (
//             <div key={idx} className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-4 md:p-6 hover:shadow-lg transition">
//               <div className="flex items-start flex-col sm:flex-row">
//                 <div className="w-12 h-12 md:w-16 md:h-16 rounded-full mb-3 sm:mr-4 sm:mb-0 flex items-center justify-center overflow-hidden flex-shrink-0">
//                   <Image
//                     src={testimonial.image}
//                     alt={testimonial.name}
//                     width={64}
//                     height={64}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//                 <div className="flex-1">
//                   <div className="flex justify-between items-start mb-2 flex-col sm:flex-row">
//                     <div>
//                       <h4 className="font-bold text-base md:text-lg dark:text-white">{testimonial.name}</h4>
//                       <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300">{testimonial.role}</p>
//                       <p className="text-xs text-gray-500 dark:text-gray-400">{testimonial.college}</p>
//                     </div>
//                   </div>
//                   <div className="flex mb-2 md:mb-3">
//                     {[...Array(5)].map((_, i) => (
//                       <Star
//                         key={i}
//                         className={`w-3 h-3 md:w-4 md:h-4 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300 dark:text-gray-600'}`}
//                       />
//                     ))}
//                   </div>
//                   <p className="text-gray-700 dark:text-gray-300 text-xs md:text-sm leading-relaxed">{testimonial.text}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="text-center mt-6 md:mt-8">
//           <button
//             onClick={() => window.open('https://www.instagram.com/mcadsolution/', '_blank')}
//             className="bg-orange-600 text-white px-6 md:px-8 py-2 md:py-3 rounded-md hover:bg-orange-700 transition font-semibold text-sm md:text-base"
//           >
//             View All Success Stories
//           </button>
//         </div>
//       </div>
//     </div>

//     {/* CTA Section */}
//     <div className="bg-gradient-to-r from-orange-600 to-blue-600 py-8 md:py-12">
//       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
//         <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Ready to Launch Your Career in Automotive Design?</h2>
//         <p className="text-base md:text-xl mb-6 md:mb-8">
//           Take the first step toward your career with M CAD Solutions. Our counselors will help you choose the right program.
//         </p>
//         <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4">
//           <button
//             onClick={() => {
//               setShowCourseMode('offline');
//               setTimeout(() => scrollToSection('courses'), 100);
//             }}
//             className="bg-white text-orange-600 px-6 md:px-8 py-2 md:py-3 rounded-md hover:bg-gray-100 transition font-bold text-sm md:text-lg"
//           >
//             Explore Offline Courses
//           </button>
//           <button
//             onClick={handleWhatsApp}
//             className="border-2 border-white text-white px-6 md:px-8 py-2 md:py-3 rounded-md hover:bg-white hover:text-orange-600 transition font-bold text-sm md:text-lg"
//           >
//             Talk to Counselor
//           </button>
//         </div>
//         <p className="mt-4 md:mt-6 text-sm md:text-lg flex items-center justify-center gap-2 flex-wrap px-2">
//           <Phone className="w-4 h-4 md:w-5 md:h-5" />
//           <span>Call:</span>
//           <a href="tel:+919172969859" className="hover:underline">+91 91729 69859</a>
//           <span>|</span>
//           <a href="tel:+919172969859" className="hover:underline">+91 9096708490</a>
//         </p>
//       </div>
//     </div>

//     {/* FAQ Section - DARK MODE */}
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
//       <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center dark:text-white">Frequently Asked Questions</h2>
//       <div className="space-y-3 md:space-y-4 max-w-3xl mx-auto">
//         {faqs.map((faq, idx) => (
//           <div key={idx} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
//             <button
//               onClick={() => toggleFaq(idx)}
//               className="w-full p-4 md:p-5 text-left flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-700 transition"
//             >
//               <h4 className="font-semibold text-gray-800 dark:text-gray-200 pr-4 text-sm md:text-base">{faq.question}</h4>
//               {expandedFaq === idx ? (
//                 <ChevronUp className="w-4 h-4 md:w-5 md:h-5 text-orange-600 dark:text-orange-400 flex-shrink-0" />
//               ) : (
//                 <ChevronDown className="w-4 h-4 md:w-5 md:h-5 text-orange-600 dark:text-orange-400 flex-shrink-0" />
//               )}
//             </button>
//             {expandedFaq === idx && (
//               <div className="px-4 md:px-5 pb-4 md:pb-5 text-gray-600 dark:text-gray-300 text-xs md:text-sm leading-relaxed border-t dark:border-gray-700 pt-4">
//                 {faq.answer}
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>

//     {/* Footer - DARK MODE */}
//     <footer className="bg-gray-900 text-white pt-8 md:pt-12 pb-4 md:pb-6" id="contact">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-6 md:mb-8">
//           <div>
//             <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">M CAD Solutions</h3>
//             <p className="text-gray-400 text-xs md:text-sm mb-3 md:mb-4">
//               Best Mechanical CAD Training Institute in Pune. Award-winning excellence in automotive design education.
//             </p>
//             <div className="flex gap-3 md:gap-4">
//   {/* Instagram */}
//   <a
//     href="https://www.instagram.com/mcadsolution/"
//     target="_blank"
//     rel="noopener noreferrer"
//     className="hover:text-orange-400 transition"
//   >
//     <svg
//       className="w-5 h-5 md:w-6 md:h-6"
//       fill="currentColor"
//       viewBox="0 0 24 24"
//     >
//       <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
//     </svg>
//   </a>

//   {/* LinkedIn */}
//   <a
//     href="https://in.linkedin.com/company/mcadsolutions"
//     target="_blank"
//     rel="noopener noreferrer"
//     className="hover:text-orange-400 transition"
//   >
//     <svg
//       className="w-5 h-5 md:w-6 md:h-6"
//       fill="currentColor"
//       viewBox="0 0 24 24"
//     >
//       <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
//     </svg>
//   </a>

//   {/* YouTube */}
//   <a
//     href="https://www.youtube.com/@mcadsolutionenglish"
//     target="_blank"
//     rel="noopener noreferrer"
//     className="hover:text-orange-400 transition"
//   >
//     <svg
//       className="w-5 h-5 md:w-6 md:h-6"
//       fill="currentColor"
//       viewBox="0 0 24 24"
//     >
//       <path d="M23.498 6.186a2.974 2.974 0 0 0-2.096-2.106C19.511 3.5 12 3.5 12 3.5s-7.511 0-9.402.58A2.974 2.974 0 0 0 .502 6.186 31.251 31.251 0 0 0 0 12a31.26 31.26 0 0 0 .502 5.814 2.974 2.974 0 0 0 2.096 2.106C4.489 20.5 12 20.5 12 20.5s7.511 0 9.402-.58a2.974 2.974 0 0 0 2.096-2.106A31.26 31.26 0 0 0 24 12a31.251 31.251 0 0 0-.502-5.814zM9.75 15.02V8.98l6.25 3.02-6.25 3.02z" />
//     </svg>
//   </a>

//   {/* Facebook */}
//   <a
//     href="https://www.facebook.com/mcadsolutions/"
//     target="_blank"
//     rel="noopener noreferrer"
//     className="hover:text-orange-400 transition"
//   >
//     <svg
//       className="w-5 h-5 md:w-6 md:h-6"
//       fill="currentColor"
//       viewBox="0 0 24 24"
//     >
//       <path d="M22.676 0H1.326C.594 0 0 .593 0 1.326v21.348C0 23.407.594 24 1.326 24h11.498v-9.294H9.691V11.01h3.133V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.794.716-1.794 1.763v2.31h3.588l-.467 3.696h-3.121V24h6.116C23.407 24 24 23.407 24 22.674V1.326C24 .593 23.407 0 22.676 0z" />
//     </svg>
//   </a>
// </div>

//           </div>
//           <div>
//             <h4 className="font-semibold mb-3 md:mb-4 text-sm md:text-base">Quick Links</h4>
//             <ul className="space-y-1 md:space-y-2 text-xs md:text-sm text-gray-400">
//               <li><button onClick={() => scrollToSection('courses')} className="hover:text-white transition">Courses</button></li>
//               <li><button onClick={() => scrollToSection('features')} className="hover:text-white transition">Why Choose Us</button></li>
//               <li><button onClick={() => scrollToSection('testimonials')} className="hover:text-white transition">Testimonials</button></li>
//               <li><a href="https://mcadsolution.com/blog/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Blog</a></li>
//             </ul>
//           </div>
//           <div>
//             <h4 className="font-semibold mb-3 md:mb-4 text-sm md:text-base">Programs</h4>
//             <ul className="space-y-1 md:space-y-2 text-xs md:text-sm text-gray-400">
//               <li><button onClick={() => handleCourseClick('catia-v5-english')} className="hover:text-white transition text-left">CATIA V5 </button></li>
//               <li><button onClick={() => handleCourseClick('biw-fixture-3d-english')} className="hover:text-white transition text-left">BIW Fixture Design 3d</button></li>
//               {/* <li><button onClick={() => handleCourseClick('catia-v5-english')} className="hover:text-white transition text-left">CATIA V5 Training</button></li> */}
//               <li><button onClick={() => handleCourseClick('biw-fixture-2d-english')} className="hover:text-white transition text-left">BIW Fixture Design 2d</button></li>
//               <li><button onClick={() => scrollToSection('courses')} className="hover:text-white transition text-left">Combo Packages</button></li>
//               <li><a href="https://mcadsolution.com/placement/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Placement Support</a></li>
//             </ul>
//           </div>
//           <div>
//             <h4 className="font-semibold mb-3 md:mb-4 text-sm md:text-base">Contact Info</h4>
//             <ul className="space-y-1 md:space-y-2 text-xs md:text-sm text-gray-400">
//               <li className="flex items-start gap-2">
//                 <MapPin className="w-3 h-3 md:w-4 md:h-4 mt-0.5 md:mt-1 flex-shrink-0" />
//                 <span>1st floor, FMCIII BUILDING, Marathwada Mitra Mandal College of Engineering Rd, above Kuka robotics lab, Hingane Home Colony, Karvenagar, Pune, Maharashtra 411052</span>
//               </li>
//               <li className="flex items-center gap-2">
//                 <Phone className="w-3 h-3 md:w-4 md:h-4" />
//                 <a href="tel:+919172969859" className="hover:text-white transition">+91 91729 69859</a>
//               </li>
//               <li className="flex items-center gap-2">
//                 <Phone className="w-3 h-3 md:w-4 md:h-4" />
//                 <a href="tel:+919096708490" className="hover:text-white transition">+91 9096708490</a>
//               </li>
//               <li className="flex items-center gap-2">
//                 <Clock className="w-3 h-3 md:w-4 md:h-4" />
//                 <span>Mon-Sat: 10:00 AM - 8:00 PM</span>
//               </li>
//             </ul>
//           </div>
//         </div>

//         <div className="border-t border-gray-800 pt-4 md:pt-6">
//           <div className="flex flex-col md:flex-row justify-between items-center text-xs md:text-sm text-gray-400 gap-3 md:gap-0">
//             <div className="flex flex-wrap justify-center gap-4 md:gap-6 md:mb-0">
//               <a href="https://mcadsolution.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Website</a>
//               <button onClick={handleWhatsApp} className="hover:text-white transition">WhatsApp</button>
//               <a href="mailto:mcadsolution@gmail.com" className="hover:text-white transition">Email Us</a>
//             </div>
//             <div className="text-center">
//               © 2025 M CAD Solutions. All rights reserved. | NSDC Authorized Center
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>

//     {/* Floating WhatsApp Button */}
//     <button
//       onClick={handleWhatsApp}
//       className="fixed bottom-4 right-4 md:bottom-6 md:right-6 bg-green-500 text-white w-12 h-12 md:w-14 md:h-14 rounded-full shadow-lg hover:bg-green-600 flex items-center justify-center z-40 transition"
//       aria-label="Contact on WhatsApp"
//     >
//       <svg className="w-6 h-6 md:w-8 md:h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
//     </button>
//   </div>
// );

// };

// export default Landing;


'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Search, Star, Award, Users, BookOpen, Clock, CheckCircle, TrendingUp, ChevronDown, ChevronUp, Menu, X, Phone, MapPin, IndianRupee } from 'lucide-react';
import axios from 'axios';
import Image from 'next/image';
import DiwaliOfferBanner from '@/components/DiwaliOfferBanner';

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
  image: string;
}

interface ComboCourse {
  id: string;
  title: string;
  desc: string;
  price: string;
  original: string;
  discount: string;
  image: string;
}

interface FAQ {
  question: string;
  answer: string;
}

interface OfflineCourse {
  id: string;
  title: string;
  description: string;
  duration: string;
  lectures: string;
  batchSize: string;
  fee: string;
  feeNumeric: number;
  discount: string;
  skillLevel: string;
  image: string;
  features: string[];
  detailedInfo: {
    overview: string;
    curriculum: string[];
    certification: string;
    placement: string;
    prerequisites: string;
  };
}

const Landing: React.FC = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [showCourseMode, setShowCourseMode] = useState<'online' | 'offline'>('online');
  const [showEnrollmentForm, setShowEnrollmentForm] = useState<boolean>(false);
  const [selectedOfflineCourse, setSelectedOfflineCourse] = useState<OfflineCourse | null>(null);
  const [showEnrollModal, setShowEnrollModal] = useState<boolean>(false);
  const [showCourseDetails, setShowCourseDetails] = useState<string | null>(null);
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [hasFilledOfflineForm, setHasFilledOfflineForm] = useState<boolean>(false);


  const handleFormSubmit = async (): Promise<void> => {
    const form = document.getElementById('enrollmentForm') as HTMLFormElement;

    // Validate form
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const fullName = (form.elements.namedItem('fullname') as HTMLInputElement).value;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value;
    const phone = (form.elements.namedItem('phone') as HTMLInputElement).value;
    const qualification = (form.elements.namedItem('qualification') as HTMLInputElement).value;
    // const batchPreference = (form.elements.namedItem('batchpreference') as HTMLSelectElement).value;
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value;

    const enrollmentData = {
      fullName,
      email,
      phone,
      qualification,
      // batchPreference,
      message,
      courseId: selectedOfflineCourse?.id || 'general-inquiry',
      courseTitle: selectedOfflineCourse?.title || 'General Inquiry',
      courseFee: selectedOfflineCourse?.fee || 'N/A',
      courseFeeNumeric: selectedOfflineCourse?.feeNumeric || 0,
    };

    try {
      const response = await axios.post('/api/enrollment', enrollmentData);
      if (response.data.success) {
        setFormSubmitted(true);
        setHasFilledOfflineForm(true); // Mark that user has filled the form
        setShowEnrollmentForm(false); // Close the modal
        setSelectedOfflineCourse(null); // Reset selected course
      } else {
        alert('Failed to save form details. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to save form details. Please try again.');
    }
  };





  const courses: Course[] = [
    {
      id: 'catia-v5-english',
      title: 'CATIA V5 - English',
      desc: 'Master CATIA V5 from scratch - Part Design, Assembly, Drafting & Surface Modeling',
      price: '₹2,499',
      original: '₹9,999',
      discount: '75% OFF',
      videos: '13 Videos',
      duration: 'Lifetime Access',
      image: '/catiaveng.png' // <-- local image from public folder
    },
    {
      id: 'biw-fixture-3d-english',
      title: 'BIW Fixture Design - 3D',
      desc: 'Hands-on expertise in 3D modeling for automotive BIW fixtures with industry standards',
      price: '₹19,999',
      original: '₹39,999',
      discount: '50% OFF',
      videos: '38 Videos',
      duration: '1 Year Access',
      image: '/biwfixture.png'
    },
    {
      id: 'biw-fixture-2d-english',
      title: 'BIW Fixture Design - 2D Drafting',
      desc: 'Production-ready 2D drawings with GD&T for automotive fixture applications',
      price: '₹15,999',
      original: '₹31,999',
      discount: '50% OFF',
      videos: '17 Videos',
      duration: '1 Year Access',
      image: '/biwfixture2d.png'
    },
    {
      id: 'catia-v5-marathi',
      title: 'CATIA V5 - Marathi',
      desc: 'Industrial-based training in Marathi - Sketcher, Part Modelling, Assembly & Drafting',
      price: '₹2,499',
      original: '₹9,999',
      discount: '75% OFF',
      videos: '13 Videos',
      duration: '1 Year Access',
      image: '/catiav5marathi.png'
    }
  ];

  const comboCourses: ComboCourse[] = [
    {
      id: 'catia-biw-english',
      title: 'CATIA + BIW Fixture Design (English)',
      desc: 'Complete package: CATIA V5 fundamentals + 2D & 3D BIW Fixture Design',
      price: '₹24,999',
      original: '₹50,000',
      discount: '50% OFF',
      image: '/catia+biwfixture.png'
    },
    {
      id: 'catia-biw-marathi',
      title: 'CATIA V5 + BIW Fixture Design (Marathi)',
      desc: 'Full training bundle in Marathi - CATIA basics to advanced BIW design',
      price: '₹24,999',
      original: '₹50,000',
      discount: '50% OFF',
      image: '/catia+biwfixturemarathi.png'
    }
  ];


  const offlineCourses: OfflineCourse[] = [
    {
      id: 'biw-fixture-offline',
      title: 'BIW Fixture Design',
      description: 'Master Body-in-White fixture design using CATIA V5 for automotive manufacturing',
      duration: '3 Months',
      lectures: '80+ Hours',
      batchSize: '5 Students',
      fee: '₹27,999',
      feeNumeric: 27999,
      discount: 'Limited Seats',
      skillLevel: 'Intermediate to Advanced',
      image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80',
      features: [
        'Live Industrial Projects',
        'German & Indian Standards',
        'GD&T Training',
        '100% Job-Oriented',
        'Lifetime Placement Support'
      ],
      detailedInfo: {
        overview: 'India\'s 1st BIW Fixture Design Job Oriented course where we provide training on live/dummy projects. Learn in-depth knowledge and design approaches from basic to Advanced using CATIA V5 Software. Specialized in designing BIW fixtures for Automotive OEMs, Tier1, Tier2 suppliers.',
        curriculum: [
          'BIW Fixture Essentials: Types, terminology, and applications',
          'Tool Station Expertise: Various tool stations and their functions',
          'Complete Fixture Units: Simple Rest units, Clamp Units, Fixed Pin units',
          'Advanced Units: Retracting Pin units, Combine Units, Pivot Point concept',
          'Dump units, sliding units, and base units design',
          '3D Concept Development and 3D Finish',
          'Locating and clamping mechanisms design',
          'Analysis of fixture forces and material selection',
          '2D Detailing and drafting with GD&T',
          'Industrial project implementation'
        ],
        certification: 'Dassault Systèmes Authorised Certificate of Attendance for CATIA training and M CAD Solutions Certificate of Completion for BIW Fixture Design Course',
        placement: 'Students work on 2D detailing and 3D design of Fixtures on industrial projects. At the end of course, technical as well as Project oriented assessment. 100% placement assistance with network of automotive industry partners.',
        prerequisites: 'Basic CATIA V5 knowledge recommended (Sketcher, Part Modeling, Assembly, Drafting). CATIA course can be taken separately if needed.'
      }
    },
    {
      id: 'catia-v5-offline',
      title: 'CATIA V5 Complete',
      description: 'Comprehensive CATIA V5 training from fundamentals to advanced surface modeling',
      duration: '2 Months',
      lectures: '60+ Hours',
      batchSize: '5 Students',
      fee: '₹9,999',
      feeNumeric: 9999,
      discount: 'Popular Course',
      skillLevel: 'Beginner to Advanced',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80',
      features: [
        'Part Design & Assembly',
        'Surface Modeling',
        'Drafting & Sheet Metal',
        'Hands-on Projects',
        'Industry Standards'
      ],
      detailedInfo: {
        overview: 'Complete CATIA V5 training designed for Mechanical Engineers and CAD professionals. Learn industrial-based training with hands-on approach covering all essential modules for automotive and manufacturing industries.',
        curriculum: [
          'Sketcher: 2D sketching fundamentals and constraints',
          'Part Design: 3D solid modeling and advanced features',
          'Assembly Design: Component assembly and constraints',
          'Drafting/Detailing: 2D drawings and annotations',
          'Surface Design: Advanced surfacing techniques',
          'Sheet Metal Design: Sheet metal specific features',
          'Generative Shape Design',
          'Real-world automotive projects',
          'Best practices and industry standards'
        ],
        certification: 'M CAD Solutions Certificate of Completion with hands-on project portfolio',
        placement: 'Foundation course for all automotive design roles. Essential for pursuing advanced courses like BIW Fixture Design, Plastic Trims, and other domain courses.',
        prerequisites: 'Basic computer knowledge. Fresh graduates from BE/B.Tech/Diploma in Mechanical Engineering can start from basics.'
      }
    },
    {
      id: 'plastic-trims-offline',
      title: 'Automotive Interior Plastic Trims',
      description: 'Complete plastic trim design for automotive interior & exterior applications',
      duration: '3 Months',
      lectures: '100+ Hours',
      batchSize: '5 Students',
      fee: '₹33,999',
      feeNumeric: 33999,
      discount: 'High Demand',
      skillLevel: 'Intermediate to Advanced',
      image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80',
      features: [
        'Design & Manufacturing Process',
        'CATIA V5 Specialized Training',
        'Indian & European Standards',
        '2 Years Equivalent Experience',
        'Cost Estimation & Testing'
      ],
      detailedInfo: {
        overview: 'Comprehensive training in automotive plastic trim design for interior & exterior applications. Learn design methodologies, manufacturing processes, and industry standards used by leading automotive OEMs.',
        curriculum: [
          'Introduction to Automotive Plastic Trims',
          'Material selection and properties',
          'Design for Manufacturing (DFM) principles',
          'Interior trim components: Dashboard, Door panels, Consoles',
          'Exterior trim components: Bumpers, Grilles, Pillar trims',
          'Molding processes: Injection molding, Blow molding',
          'Surface finish and texture design',
          'Cost estimation and optimization',
          'Testing standards and validation',
          'Complete project: Design to production'
        ],
        certification: 'M CAD Solutions Advanced Certificate with industry-recognized project portfolio equivalent to 2 years of hands-on experience',
        placement: '100% placement support with focus on automotive Tier1 and Tier2 suppliers specializing in plastic components. High demand in industry.',
        prerequisites: 'CATIA V5 knowledge required. Mechanical engineering background preferred. Understanding of basic design principles.'
      }
    },
    {
      id: 'interior-harness-offline',
      title: 'Robotics simulation',
      description: 'Electrical harness design and routing for automotive interior systems',
      duration: '2 Months',
      lectures: '60+ Hours',
      batchSize: '5 Students',
      fee: '₹33,999',
      feeNumeric: 33999,
      discount: 'Specialized Course',
      skillLevel: 'Intermediate',
      image: 'https://images.unsplash.com/photo-1552519507-704b5c2bb0fa?w=800&q=80',
      features: [
        'Harness Design Fundamentals',
        'Routing & Optimization',
        'Connector Selection',
        'Industry Standards',
        'Practical Applications'
      ],
      detailedInfo: {
        overview: 'Specialized course in automotive electrical harness design focusing on interior wiring systems. Learn to design, route, and optimize electrical harnesses for modern vehicles.',
        curriculum: [
          'Introduction to automotive electrical systems',
          'Harness design principles and standards',
          'Connector and terminal selection',
          'Wire sizing and specification',
          'Routing strategies and optimization',
          'Protection and shielding methods',
          'Integration with vehicle architecture',
          'Documentation and BOM creation',
          'Testing and validation procedures',
          'Industry-specific projects'
        ],
        certification: 'M CAD Solutions Certificate of Completion with project portfolio',
        placement: 'Placement assistance for roles in automotive wiring harness design and electrical systems integration',
        prerequisites: 'Basic automotive knowledge. CATIA V5 recommended but not mandatory. Electrical engineering background beneficial.'
      }
    },
    // {
    //   id: 'seating-design-offline',
    //   title: 'Automotive Seating Design',
    //   description: 'Complete vehicle seating system design and development training',
    //   duration: '3 Months',
    //   lectures: '90+ Hours',
    //   batchSize: '5 Students',
    //   fee: '₹30,000',
    //   feeNumeric: 30000,
    //   discount: 'Premium Course',
    //   skillLevel: 'Advanced',
    //   image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80',
    //   features: [
    //     'Complete Seating System',
    //     'Ergonomics & Comfort',
    //     'Safety Standards',
    //     'Manufacturing Process',
    //     'Testing & Validation'
    //   ],
    //   detailedInfo: {
    //     overview: 'Advanced training in automotive seating system design covering ergonomics, safety, comfort, and manufacturing. Learn to design complete seating systems for various vehicle segments.',
    //     curriculum: [
    //       'Seating system architecture and components',
    //       'Ergonomics and anthropometry',
    //       'Comfort engineering and foam design',
    //       'Frame structure and mechanism design',
    //       'Safety requirements and crash standards',
    //       'Adjustment mechanisms and controls',
    //       'Trim and cover design',
    //       'Manufacturing processes and assembly',
    //       'Testing standards and validation',
    //       'Cost optimization strategies'
    //     ],
    //     certification: 'M CAD Solutions Advanced Certificate with comprehensive seating design portfolio',
    //     placement: 'High placement potential in seating system suppliers and automotive OEMs focusing on comfort and safety systems',
    //     prerequisites: 'CATIA V5 proficiency required. Mechanical engineering background essential. Prior automotive design experience beneficial.'
    //   }
    // }
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
      answer: 'We are the Maharashtra Udyog Bhushan Award 2022 winner and NSDC authorized center. Our training is 100% job-oriented with project-based learning, 15+ years experienced industry expert instructors, real-world projects with German & Indian standards, and comprehensive GD&T training. We focus on both technical and soft skills development.'
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
    window.location.href = 'tel:+919172969859';
  };

  const handleWhatsApp = (): void => {
    window.open('https://wa.me/919172969859?text=Hi, I want to know more about your courses', '_blank');
  };


  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Course Details Modal - DARK MODE */}
      {showCourseDetails && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 md:p-8 max-w-4xl w-full my-8 max-h-[90vh] overflow-y-auto">
            {(() => {
              const course = offlineCourses.find(c => c.id === showCourseDetails);
              if (!course) return null;

              return (
                <>
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold text-orange-600 dark:text-orange-400">{course.title}</h2>
                      <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm md:text-base">{course.description}</p>
                    </div>
                    <button
                      onClick={() => setShowCourseDetails(null)}
                      className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-6 bg-orange-50 dark:bg-gray-700 p-4 rounded-lg">
                    <div className="text-center">
                      <Clock className="w-5 h-5 md:w-6 md:h-6 text-orange-600 dark:text-orange-400 mx-auto mb-2" />
                      <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300">Duration</p>
                      <p className="font-semibold text-sm md:text-base dark:text-white">{course.duration}</p>
                    </div>
                    <div className="text-center">
                      <BookOpen className="w-5 h-5 md:w-6 md:h-6 text-orange-600 dark:text-orange-400 mx-auto mb-2" />
                      <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300">Training Hours</p>
                      <p className="font-semibold text-sm md:text-base dark:text-white">{course.lectures}</p>
                    </div>
                    {/* <div className="text-center">
                    <Users className="w-5 h-5 md:w-6 md:h-6 text-orange-600 dark:text-orange-400 mx-auto mb-2" />
                    <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300">Batch Size</p>
                    <p className="font-semibold text-sm md:text-base dark:text-white">{course.batchSize}</p>
                  </div> */}
                    <div className="text-center">
                      <IndianRupee className="w-5 h-5 md:w-6 md:h-6 text-orange-600 dark:text-orange-400 mx-auto mb-2" />
                      <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300">Course Fee</p>
                      <p className="font-semibold text-sm md:text-base text-orange-600 dark:text-orange-400">{course.fee}</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg md:text-xl font-bold mb-3 dark:text-white">Course Overview</h3>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm md:text-base">{course.detailedInfo.overview}</p>
                    </div>

                    <div>
                      <h3 className="text-lg md:text-xl font-bold mb-3 dark:text-white">What You&apos;ll Learn</h3>
                      <ul className="space-y-2">
                        {course.detailedInfo.curriculum.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-500 dark:text-green-400 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700 dark:text-gray-300 text-sm md:text-base">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg md:text-xl font-bold mb-3 dark:text-white">Certification</h3>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm md:text-base">{course.detailedInfo.certification}</p>
                    </div>

                    <div>
                      <h3 className="text-lg md:text-xl font-bold mb-3 dark:text-white">Placement Support</h3>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm md:text-base">{course.detailedInfo.placement}</p>
                    </div>

                    <div>
                      <h3 className="text-lg md:text-xl font-bold mb-3 dark:text-white">Prerequisites</h3>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm md:text-base">{course.detailedInfo.prerequisites}</p>
                    </div>

                    <div>
                      <h3 className="text-lg md:text-xl font-bold mb-3 dark:text-white">Key Features</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {course.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2 bg-blue-50 dark:bg-gray-700 p-3 rounded">
                            <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                            <span className="text-gray-700 dark:text-gray-300 text-sm md:text-base">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 flex flex-col sm:flex-row gap-3 md:gap-4">
                    <button
                      onClick={() => {
                        setSelectedOfflineCourse(course);
                        setShowEnrollmentForm(true);
                        setShowCourseDetails(null);
                      }}
                      className="flex-1 bg-orange-600 text-white py-3 rounded-md hover:bg-orange-700 transition font-semibold text-sm md:text-base"
                    >
                      Enroll Now
                    </button>
                    <button
                      onClick={handleWhatsApp}
                      className="flex-1 border-2 border-green-500 text-green-600 dark:text-green-400 py-3 rounded-md hover:bg-green-50 dark:hover:bg-gray-700 transition font-semibold text-sm md:text-base"
                    >
                      Talk to Counselor
                    </button>
                  </div>
                </>
              );
            })()}
          </div>
        </div>
      )}

      {/* Enrollment Form Modal - DARK MODE */}
      {showEnrollmentForm && selectedOfflineCourse && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 md:p-8 max-w-2xl w-full my-8">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-xl md:text-2xl font-bold dark:text-white">{selectedOfflineCourse.title}</h2>
                <p className="text-gray-600 dark:text-gray-300 text-xs md:text-sm mt-1">Fill the form to complete enrollment</p>
              </div>
              <button
                onClick={() => {
                  setShowEnrollmentForm(false);
                  setSelectedOfflineCourse(null);
                  setFormSubmitted(false);
                }}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="bg-orange-50 dark:bg-gray-700 p-4 rounded-lg mb-6">
              <div className="flex justify-between items-center flex-wrap gap-2">
                <div>
                  <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300">Course Fee</p>
                  <p className="text-xl md:text-2xl font-bold text-orange-600 dark:text-orange-400">{selectedOfflineCourse.fee}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300">Duration</p>
                  <p className="font-semibold text-sm md:text-base dark:text-white">{selectedOfflineCourse.duration}</p>
                </div>
              </div>
            </div>

            {formSubmitted && (
              <div className="mb-4 p-4 bg-green-50 dark:bg-green-900 border border-green-200 dark:border-green-700 rounded">
                <p className="text-green-800 dark:text-green-200 font-semibold text-sm md:text-base">✓ Form details saved successfully!</p>
                <p className="text-xs md:text-sm text-green-600 dark:text-green-300">Please talk to our counselor to complete your enrollment.</p>
              </div>
            )}

            <form id="enrollmentForm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mb-4">
                <input
                  name="fullname"
                  type="text"
                  placeholder="Full Name"
                  className="px-4 py-2 border dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 text-sm md:text-base"
                  required
                  disabled={formSubmitted}
                />
                <input
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  className="px-4 py-2 border dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 text-sm md:text-base"
                  required
                  disabled={formSubmitted}
                />
                <input
                  name="phone"
                  type="tel"
                  placeholder="Phone Number"
                  className="px-4 py-2 border dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 text-sm md:text-base"
                  required
                  disabled={formSubmitted}
                />
                <input
                  name="qualification"
                  type="text"
                  placeholder="Qualification (BE/B.Tech/Diploma)"
                  className="px-4 py-2 border dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 text-sm md:text-base"
                  disabled={formSubmitted}
                />
              </div>

              <select
                name="batchpreference"
                className="w-full mb-4 px-4 py-2 border dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm md:text-base"
                required
                disabled={formSubmitted}
              >
                <option value="">Select Batch Timing</option>
                <option>Weekday Morning (10 AM - 1 PM)</option>
                <option>Weekday Evening (6 PM - 9 PM)</option>
                <option>Weekend Saturday (10 AM - 5 PM)</option>
              </select>

              <textarea
                name="message"
                placeholder="Any specific requirements or questions?"
                className="w-full mb-4 px-4 py-2 border dark:border-gray-600 rounded h-20 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 text-sm md:text-base"
                disabled={formSubmitted}
              />

              <div className="mb-4 p-4 bg-blue-50 dark:bg-gray-700 rounded">
                <h4 className="font-semibold mb-2 text-sm dark:text-white">Enrollment Process</h4>
                <div className="text-xs text-gray-700 dark:text-gray-300 space-y-1">
                  <p>• Submit your details above</p>
                  <p>• Talk to our counselor about course details and payment options</p>
                  <p>• Complete enrollment with flexible payment plans available</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                {!formSubmitted ? (
                  <>
                    <button
                      type="button"
                      onClick={handleFormSubmit}
                      className="flex-1 bg-blue-600 text-white py-3 rounded hover:bg-blue-700 font-semibold flex items-center justify-center gap-2 text-sm md:text-base"
                    >
                      <CheckCircle className="w-4 h-4 md:w-5 md:h-5" />
                      Submit Details
                    </button>
                    <button
                      type="button"
                      onClick={handleWhatsApp}
                      className="flex-1 border-2 border-green-500 text-green-600 dark:text-green-400 py-3 rounded hover:bg-green-50 dark:hover:bg-gray-700 font-semibold text-sm md:text-base"
                    >
                      Talk to Counselor
                    </button>
                  </>
                ) : (
                  <button
                    type="button"
                    onClick={handleWhatsApp}
                    className="w-full bg-green-600 text-white py-4 rounded hover:bg-green-700 font-bold text-base md:text-lg animate-pulse shadow-lg hover:shadow-xl transition-all"
                  >
                    📞 Talk to Counselor Now
                  </button>
                )}
              </div>
            </form>

            <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-4">
              By enrolling, you agree to our terms and conditions. Contact: +91 91729 69859
            </p>
          </div>
        </div>
      )}

      {/* Enroll Modal - DARK MODE */}
      {showEnrollModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 md:p-8 max-w-md w-full">
            <h2 className="text-xl md:text-2xl font-bold mb-4 dark:text-white">Enroll Now</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm md:text-base">Choose your enrollment option:</p>
            <div className="space-y-3">
              <button onClick={handlePhoneCall} className="w-full bg-green-600 text-white py-3 rounded hover:bg-green-700 flex items-center justify-center gap-2 text-sm md:text-base">
                <Phone className="w-4 h-4 md:w-5 md:h-5" />
                Call: +91 91729 69859
              </button>
              <button onClick={handleWhatsApp} className="w-full bg-green-500 text-white py-3 rounded hover:bg-green-600 flex items-center justify-center gap-2 text-sm md:text-base">
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
                WhatsApp Us
              </button>
              <button onClick={() => router.push('/#courses')} className="w-full border border-orange-600 text-orange-600 dark:text-orange-400 dark:border-orange-400 py-3 rounded hover:bg-orange-50 dark:hover:bg-gray-700 text-sm md:text-base">
                Browse Courses
              </button>
              <button onClick={() => setShowEnrollModal(false)} className="w-full border border-gray-300 dark:border-gray-600 py-2 rounded hover:bg-gray-50 dark:hover:bg-gray-700 dark:text-gray-300 text-sm md:text-base">
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Top Banner */}
      <div className="bg-gradient-to-r from-orange-600 to-blue-600 text-center py-2 md:py-3 text-xs md:text-sm text-white px-2">
        <DiwaliOfferBanner />
      </div>

      {/* Navigation - DARK MODE */}
      <nav className="bg-white dark:bg-gray-800 shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Image
                src="/mcadlogo.png"
                alt="M CAD Solutions Logo"
                width={140}
                height={110}
                className="h-8 md:h-10 cursor-pointer"
                onClick={() => router.push('/')}
              />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('courses')} className="text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 transition text-sm lg:text-base">
                Courses
              </button>
              <button onClick={() => scrollToSection('features')} className="text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 transition text-sm lg:text-base">
                Why Choose Us
              </button>
              <button onClick={() => scrollToSection('testimonials')} className="text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 transition text-sm lg:text-base">
                Reviews
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 transition text-sm lg:text-base">
                Contact
              </button>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <button
                onClick={() => {
                  setShowCourseMode('offline');
                  setHasFilledOfflineForm(false);
                  setTimeout(() => scrollToSection('courses'), 100);
                }}
                className="bg-orange-600 text-white px-4 lg:px-6 py-2 rounded-md hover:bg-orange-700 transition text-sm lg:text-base"
              >
                Enroll Now
              </button>

              <button
                onClick={handlePhoneCall}
                className="text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 flex items-center gap-1 transition text-sm"
              >
                <Phone className="w-4 h-4" />
                <span className="hidden lg:inline">+91 91729 69859</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-700 dark:text-gray-300"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t dark:border-gray-700">
              <button onClick={() => scrollToSection('courses')} className="block w-full text-left px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-700 dark:text-gray-300 text-sm">
                Courses
              </button>
              <button onClick={() => scrollToSection('features')} className="block w-full text-left px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-700 dark:text-gray-300 text-sm">
                Why Choose Us
              </button>
              <button onClick={() => scrollToSection('testimonials')} className="block w-full text-left px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-700 dark:text-gray-300 text-sm">
                Reviews
              </button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-700 dark:text-gray-300 text-sm">
                Contact
              </button>
              <button
                onClick={() => {
                  setShowCourseMode('offline');
                  setHasFilledOfflineForm(false);
                  setTimeout(() => scrollToSection('courses'), 100);
                  setMobileMenuOpen(false);
                }}
                className="block w-full text-left px-4 py-2 bg-orange-600 text-white mt-2 rounded text-sm"
              >
                Enroll Now
              </button>

              <button onClick={handlePhoneCall} className="block w-full text-left px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-700 flex items-center gap-2 dark:text-gray-300 text-sm">
                <Phone className="w-4 h-4" /> +91 9172969859
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      {/* Hero Section */}
      <div
  className="relative min-h-[400px] sm:min-h-[500px] md:min-h-[600px] bg-cover bg-center flex items-center"
  style={{ backgroundImage: "url('./background.png')" }}
>
  {/* Dark overlay to make text visible */}
  <div className="absolute inset-0 bg-black/50"></div>

  <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
    <div className="text-center text-white">
      <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 leading-tight">
        Best Mechanical CAD Training in Pune
      </h1>
      <p className="text-sm sm:text-base md:text-xl mb-2 md:mb-3 px-2">
        Master CATIA V5 & BIW Fixture Design from Industry Experts
      </p>
      <p className="text-xs sm:text-sm md:text-lg mb-6 md:mb-8 text-gray-200 px-2 max-w-3xl mx-auto">
        Your career starts here! From hands-on training to real project experience and 98% placement support
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4 px-4">
        <button
          onClick={() => {
            setShowCourseMode('online');
            setTimeout(() => scrollToSection('courses'), 100);
          }}
          className="w-full sm:w-auto bg-white text-orange-600 px-6 md:px-8 py-3 md:py-3.5 rounded-md hover:bg-gray-100 transition font-semibold text-sm md:text-base shadow-lg"
        >
          View Online Courses
        </button>
        <button
          onClick={() => {
            setShowCourseMode('offline');
            setHasFilledOfflineForm(false);
            setTimeout(() => scrollToSection('courses'), 100);
          }}
          className="w-full sm:w-auto bg-orange-600 text-white px-6 md:px-8 py-3 md:py-3.5 rounded-md hover:bg-orange-700 transition font-semibold text-sm md:text-base shadow-lg"
        >
          View Offline Courses
        </button>
      </div>
    </div>
  </div>
</div>



      {/* Stats Section - DARK MODE */}
      <div className="bg-white dark:bg-gray-800 py-6 md:py-8 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 text-center">
            <div>
              <div className="text-2xl md:text-3xl font-bold text-orange-600 dark:text-orange-400">98%</div>
              <div className="text-gray-600 dark:text-gray-300 text-xs md:text-sm">Placement Record</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-orange-600 dark:text-orange-400">255+</div>
              <div className="text-gray-600 dark:text-gray-300 text-xs md:text-sm">Students Placed</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-orange-600 dark:text-orange-400">15+</div>
              <div className="text-gray-600 dark:text-gray-300 text-xs md:text-sm">Years Experience</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-orange-600 dark:text-orange-400">100%</div>
              <div className="text-gray-600 dark:text-gray-300 text-xs md:text-sm">Job-Oriented Training</div>
            </div>
          </div>
        </div>
      </div>

      {/* Courses Section - DARK MODE */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12" id="courses">
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 md:mb-3 dark:text-white">Industry-Focused Courses</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4 md:mb-6 text-sm md:text-base px-2">Job-oriented programs designed to build strong careers in Automotive Design & CAD</p>

          {/* Course Mode Toggle */}
          {/* <div className="inline-flex rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 p-1 shadow-sm mb-6 md:mb-8">
          <button
            onClick={() => setShowCourseMode('online')}
            className={`px-4 md:px-8 py-2 rounded-md font-semibold transition text-sm md:text-base ${showCourseMode === 'online'
              ? 'bg-orange-600 text-white'
              : 'text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400'
              }`}
          >
            Online Courses
          </button>
          <button
            onClick={() => setShowCourseMode('offline')}
            className={`px-4 md:px-8 py-2 rounded-md font-semibold transition text-sm md:text-base ${showCourseMode === 'offline'
              ? 'bg-orange-600 text-white'
              : 'text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400'
              }`}
          >
            Offline Courses
          </button>
        </div> */}
        </div>
        {showCourseMode === 'online' ? (
          <>
            {/* Search Bar - DARK MODE */}
            <form onSubmit={handleSearch} className="relative mb-6 md:mb-8 max-w-2xl mx-auto">
              <Search className="absolute left-3 top-2.5 md:top-3 text-gray-400 w-4 h-4 md:w-5 md:h-5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for CATIA, BIW, AutoCAD courses..."
                className="w-full pl-9 md:pl-10 pr-4 py-2 md:py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 shadow-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 text-sm md:text-base"
              />
            </form>

            {/* Online Courses Grid - DARK MODE */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-12">
              {courses.map((course, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
                  onClick={() => handleCourseClick(course.id)}
                >
                  <div className="h-40 md:h-48 relative">
                    <Image
                      src={course.image}
                      alt={course.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4 md:p-5">
                    <div className="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 text-xs font-semibold px-2 py-1 rounded inline-block mb-2">
                      {course.discount}
                    </div>
                    <h3 className="font-bold text-base md:text-lg mb-2 dark:text-white">{course.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-xs md:text-sm mb-3 line-clamp-2">{course.desc}</p>
                    <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 mb-3">
                      <span>📹 {course.videos}</span>
                      <span>•</span>
                      <span>⏱️ {course.duration}</span>
                    </div>
                    <div className="flex items-baseline gap-2 mb-4">
                      <span className="text-xl md:text-2xl font-bold text-orange-600 dark:text-orange-400">{course.price}</span>
                      <span className="text-gray-400 dark:text-gray-500 line-through text-xs md:text-sm">{course.original}</span>
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCourseClick(course.id);
                      }}
                      className="w-full bg-orange-600 text-white py-2 rounded-md hover:bg-orange-700 transition font-semibold text-sm md:text-base"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Combo Courses - DARK MODE */}
            <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 dark:text-white">Combo Packages</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
  {comboCourses.map((combo, idx) => (
    <div
      key={idx}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow border-2 border-orange-200 dark:border-orange-800 cursor-pointer"
    >
      <div className="h-60 md:h-82 relative">
        <Image
          src={combo.image}
          alt={combo.title}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-5 md:p-6">
        <div className="bg-orange-600 text-white text-xs font-bold px-3 py-1 rounded inline-block mb-3">
          BEST VALUE • {combo.discount}
        </div>

        <h3 className="font-bold text-lg md:text-xl mb-2 dark:text-white">
          {combo.title}
        </h3>

        <p className="text-gray-600 dark:text-gray-300 text-xs md:text-sm mb-4">
          {combo.desc}
        </p>

        <div className="flex items-baseline gap-3 mb-4">
          <span className="text-2xl md:text-3xl font-bold text-orange-600 dark:text-orange-400">
            {combo.price}
          </span>
          <span className="text-gray-400 dark:text-gray-500 line-through text-base md:text-lg">
            {combo.original}
          </span>
        </div>

        {/* 🔶 Highlighted Org Code & Offer Coupon Section */}
        <div className="bg-orange-50 dark:bg-orange-900/30 border border-orange-300 dark:border-orange-700 rounded-md p-3 mb-4">
          <p className="text-sm md:text-base font-semibold text-gray-800 dark:text-gray-200">
            <span className="text-orange-700 dark:text-orange-400 font-bold">Org Code:</span> ECWYN
          </p>
          <p className="text-sm md:text-base font-semibold text-gray-800 dark:text-gray-200">
            <span className="text-orange-700 dark:text-orange-400 font-bold">Offer Coupon:</span> <span className="bg-orange-600 text-white px-2 py-0.5 rounded-md">MCAD50</span>
          </p>
        </div>

        <button
          onClick={(e) => {
            e.stopPropagation();
            if (combo.id === "catia-biw-english") {
              router.push("https://web.classplusapp.com/store/course/285654?section=overview");
            } else {
              router.push("https://web.classplusapp.com/store/course/287042?section=overview");
            }
          }}
          className="w-full bg-orange-600 text-white py-2 md:py-3 rounded-md hover:bg-orange-700 transition font-bold text-sm md:text-base"
        >
          View Combo Details
        </button>
      </div>
    </div>
  ))}
</div>

          </>
        ) : showCourseMode === 'offline' && !hasFilledOfflineForm ? (
          <>
            {/* Initial Form for Offline Courses */}
            <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 md:p-8">
              <div className="text-center mb-6">
                <h3 className="text-xl md:text-2xl font-bold dark:text-white mb-2">
                  Interested in Offline Courses?
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base">
                  Fill in your details to view our offline course offerings and get personalized guidance
                </p>
              </div>

              <form id="enrollmentForm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mb-4">
                  <input
                    name="fullname"
                    type="text"
                    placeholder="Full Name"
                    className="px-4 py-2 border dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 text-sm md:text-base"
                    required
                  />
                  <input
                    name="email"
                    type="email"
                    placeholder="Email Address"
                    className="px-4 py-2 border dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 text-sm md:text-base"
                    required
                  />
                  <input
                    name="phone"
                    type="tel"
                    placeholder="Phone Number"
                    className="px-4 py-2 border dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 text-sm md:text-base"
                    required
                  />
                 <input
  name="qualification"
  type="text"
  list="course-options"
  placeholder="Course"
  className="px-4 py-2 border dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 text-sm md:text-base"
/>

<datalist id="course-options">
  <option value="CATIA V5 - English" />
  <option value="BIW Fixture Design - 3D (English)" />
  <option value="BIW Fixture Design - 2D Drafting (English)" />
  <option value="CATIA V5 (Marathi)" />
</datalist>

                </div>

                <textarea
                  name="message"
                  placeholder="Any specific requirements or questions?"
                  className="w-full mb-4 px-4 py-2 border dark:border-gray-600 rounded h-20 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 text-sm md:text-base"
                />

                <div className="mb-4 p-4 bg-blue-50 dark:bg-gray-700 rounded">
                  <h4 className="font-semibold mb-2 text-sm dark:text-white">What happens next?</h4>
                  <div className="text-xs text-gray-700 dark:text-gray-300 space-y-1">
                    <p>• Submit your details above</p>
                    <p>• View all our offline course offerings</p>
                    <p>• Choose the course that fits your career goals</p>
                    <p>• Our counselor will contact you for enrollment</p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleFormSubmit}
                  className="w-full bg-orange-600 text-white py-3 rounded hover:bg-orange-700 font-semibold flex items-center justify-center gap-2 text-sm md:text-base"
                >
                  <CheckCircle className="w-4 h-4 md:w-5 md:h-5" />
                  Submit & View Courses
                </button>
              </form>

              <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-4">
                By submitting, you agree to our terms and conditions. Contact: +91 91729 69859
              </p>
            </div>
          </>
        ) : showCourseMode === 'offline' && hasFilledOfflineForm ? (
          <>
            {/* Success Message */}
            <div className="mb-6 p-4 bg-green-50 dark:bg-green-900 border border-green-200 dark:border-green-700 rounded text-center">
              <p className="text-green-800 dark:text-green-200 font-semibold text-sm md:text-base">
                ✓ Thank you for your interest! Here are our offline courses
              </p>
              <p className="text-xs md:text-sm text-green-600 dark:text-green-300">
                Our counselor will contact you soon to discuss enrollment
              </p>
            </div>

            {/* Offline Courses Info Banner - DARK MODE */}
            <div className="bg-gradient-to-r from-orange-100 to-blue-100 dark:from-orange-900/30 dark:to-blue-900/30 p-4 md:p-6 rounded-lg mb-6 md:mb-8 text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <MapPin className="w-4 h-4 md:w-5 md:h-5 text-orange-600 dark:text-orange-400" />
                <p className="font-semibold text-gray-800 dark:text-gray-200 text-sm md:text-base">
                  Classroom Training at Karve Nagar, Pune
                </p>
              </div>
              <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300">
                1st floor, FMCIII BUILDING, Marathwada Mitra Mandal College of Engineering Rd, above Kuka robotics lab, Hingane Home Colony, Karvenagar, Pune, Maharashtra 411052
              </p>
              <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300 mt-1">
                🕒 Monday to Saturday: 10:00 AM - 8:00 PM | Small Batches of 5 Students Only
              </p>
            </div>

            {/* Offline Courses Grid - DARK MODE */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {offlineCourses.map((course, idx) => (
                <div key={idx} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="p-4 md:p-5">
                    <div className="bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 text-xs font-semibold px-2 py-1 rounded inline-block mb-2">
                      {course.discount}
                    </div>
                    <h3 className="font-bold text-base md:text-lg mb-2 dark:text-white">{course.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-xs md:text-sm mb-3 line-clamp-2">{course.description}</p>

                    <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 mb-3">
                      <span>⏱️ {course.duration}</span>
                    </div>

                    <div className="flex items-baseline gap-2 mb-2 md:mb-4">
                      <span className="text-xl md:text-2xl font-bold text-orange-600 dark:text-orange-400">{course.fee}</span>
                      <span className="text-gray-400 dark:text-gray-500 line-through text-xs md:text-sm">
                        ₹{(course.feeNumeric + 10000).toLocaleString('en-IN')}
                      </span>
                    </div>

                    <div className="mb-4">
                      <span className="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 text-xs font-semibold px-2 py-1 rounded">
                        {Math.round((10000 / (course.feeNumeric + 10000)) * 100)}% OFF
                      </span>
                    </div>

                    <div className="space-y-2">
                      <button
                        onClick={() => setShowCourseDetails(course.id)}
                        className="w-full border-2 border-orange-600 dark:border-orange-400 text-orange-600 dark:text-orange-400 py-2 rounded-md hover:bg-orange-50 dark:hover:bg-gray-700 transition font-semibold text-sm md:text-base"
                      >
                        View Details
                      </button>
                      <button
                        onClick={() => {
                          setSelectedOfflineCourse(course);
                          setShowEnrollmentForm(true);
                        }}
                        className="w-full bg-orange-600 text-white py-2 rounded-md hover:bg-orange-700 transition font-semibold text-sm md:text-base"
                      >
                        Enroll Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Offline Benefits - DARK MODE */}
            <div className="mt-8 md:mt-12 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-center dark:text-white">Why Choose Classroom Training?</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                {[
                  {
                    icon: <Users className="w-6 h-6 md:w-8 md:h-8 text-orange-600 dark:text-orange-400" />,
                    title: 'Small Batches',
                    desc: 'Only 5 students per batch for personalized attention and hands-on guidance'
                  },
                  {
                    icon: <Award className="w-6 h-6 md:w-8 md:h-8 text-orange-600 dark:text-orange-400" />,
                    title: '98% Placement',
                    desc: '200+ students successfully placed in top automotive companies with lifetime support'
                  },
                  {
                    icon: <BookOpen className="w-6 h-6 md:w-8 md:h-8 text-orange-600 dark:text-orange-400" />,
                    title: 'Industry Projects',
                    desc: 'Work on real industrial projects with German & Indian automotive standards'
                  }
                ].map((benefit, idx) => (
                  <div key={idx} className="text-center">
                    <div className="flex justify-center mb-2 md:mb-3">{benefit.icon}</div>
                    <h4 className="font-bold mb-1 md:mb-2 text-sm md:text-base dark:text-white">{benefit.title}</h4>
                    <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300">{benefit.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : null}


      </div>

      {/* Why Choose Section - DARK MODE */}
      <div className="bg-white dark:bg-gray-800 py-8 md:py-12" id="features">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 md:mb-3 text-center dark:text-white">Why Choose M CAD Solutions?</h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-6 md:mb-10 text-sm md:text-base px-2">Where Learning Meets Industry - Building Careers in Automotive Design</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {[
              {
                icon: <Users className="w-8 h-8 md:w-10 md:h-10 text-orange-600 dark:text-orange-400" />,
                title: 'Industry Expert Instructors',
                desc: 'Learn from professionals with 13+ years of automotive industry experience'
              },
              {
                icon: <Award className="w-8 h-8 md:w-10 md:h-10 text-orange-600 dark:text-orange-400" />,
                title: 'Project-Based Learning',
                desc: 'Work on real-world live/dummy projects with Indian and German standards'
              },
              {
                icon: <TrendingUp className="w-8 h-8 md:w-10 md:h-10 text-orange-600 dark:text-orange-400" />,
                title: '98% Placement Support',
                desc: 'Lifetime placement assistance with 200+ students successfully placed'
              },
              {
                icon: <Clock className="w-8 h-8 md:w-10 md:h-10 text-orange-600 dark:text-orange-400" />,
                title: 'Flexible Learning Modes',
                desc: 'Online & classroom options with lifetime access to recorded sessions'
              },
              {
                icon: <CheckCircle className="w-8 h-8 md:w-10 md:h-10 text-orange-600 dark:text-orange-400" />,
                title: 'GD&T Training',
                desc: 'Complete coverage of Geometric Dimensioning & Tolerancing standards'
              },
              {
                icon: <BookOpen className="w-8 h-8 md:w-10 md:h-10 text-orange-600 dark:text-orange-400" />,
                title: 'Soft Skills Development',
                desc: 'Interview preparation, communication skills & personal development sessions'
              },
              {
                icon: <Award className="w-8 h-8 md:w-10 md:h-10 text-orange-600 dark:text-orange-400" />,
                title: 'Award-Winning Excellence',
                desc: 'Maharashtra Udyog Bhushan Award 2022 & NSDC authorized center'
              },
              {
                icon: <Users className="w-8 h-8 md:w-10 md:h-10 text-orange-600 dark:text-orange-400" />,
                title: '100% Job-Oriented',
                desc: 'Domain-specific training designed for immediate employability in core mechanical field'
              }
            ].map((feature, idx) => (
              <div key={idx} className="text-center p-4 md:p-6 rounded-lg hover:bg-orange-50 dark:hover:bg-gray-700 transition">
                <div className="flex justify-center mb-3 md:mb-4">
                  {feature.icon}
                </div>
                <h4 className="font-bold mb-1 md:mb-2 text-sm md:text-lg dark:text-white">{feature.title}</h4>
                <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Training Domains - DARK MODE */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center dark:text-white">Specialized Training Domains</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {[
            { title: 'BIW Fixture Design', desc: 'Body-in-White fixture design for automotive manufacturing with welding assembly process' },
            { title: 'CATIA V5 & 3DX (V6)', desc: 'Complete CAD software training from fundamentals to advanced surface modeling' },
            { title: 'Automotive Plastic Trims', desc: 'Interior & exterior plastic trim design for automotive applications' },
            { title: 'Solid-Works', desc: 'Comprehensive training in vehicle seating system design and development' },
            { title: 'Robotics Simulation', desc: 'Advanced welding fixture design with assembly process optimization' },
            // { title: 'Product Design & Development', desc: 'End-to-end product design for automotive industry applications' }
          ].map((domain, idx) => (
            <div key={idx} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 md:p-6 hover:shadow-xl transition-shadow border-l-4 border-orange-600 dark:border-orange-400">
              <h3 className="font-bold text-base md:text-lg mb-1 md:mb-2 text-orange-600 dark:text-orange-400">{domain.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-xs md:text-sm">{domain.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials - DARK MODE */}
      <div className="bg-gray-100 dark:bg-gray-800 py-8 md:py-12" id="testimonials">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center dark:text-white">Student Success Stories</h2>
          <div className="space-y-4 md:space-y-6">
            {[
              {
                name: 'Shubham Indurkar',
                role: 'Design Engineer',
                college: 'Tulsiramji Gaikwad Patil College',
                rating: 5,
                text: 'M CAD Solutions played a crucial role in my career transition. Their BIW Simulation training program was top-notch, combining theoretical knowledge with hands-on projects that mirrored real-world challenges. The instructors were highly knowledgeable and supportive, and the placement team\'s assistance was invaluable. Thanks to their guidance, I secured a position at a leading company.',
                image: '/student2.jpg'
              },
              {
                name: 'Shraddha Sutar',
                role: 'Design Engineer - Fresh Graduate',
                college: 'Engineering Graduate',
                rating: 5,
                text: 'Thrilled to have landed a Design Engineer role right after graduating! The institute\'s curriculum was spot-on, especially the practical projects and CAD training, which directly prepared me for industry demands. The placement cell was incredibly supportive, guiding us through interviews and connecting us with top companies. Feeling well-equipped and excited to start my career!',
                image: '/student3.jpg'
              },
              {
                name: 'Vasudev Parab',
                role: 'Design Engineer at Top MNC',
                college: 'Sanjay Ghodawat Institute Kolhapur',
                rating: 5,
                text: 'The job-oriented domain training at M CAD Solutions transformed my skills. From GD&T to soft skills development and interview preparation by industry experts, everything was perfectly structured. The 100% lifetime placement support and access to all session recordings made learning flexible and effective. Highly recommend to all mechanical engineers!',
                image: '/student1.jpg'
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-4 md:p-6 hover:shadow-lg transition">
                <div className="flex items-start flex-col sm:flex-row">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full mb-3 sm:mr-4 sm:mb-0 flex items-center justify-center overflow-hidden flex-shrink-0">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2 flex-col sm:flex-row">
                      <div>
                        <h4 className="font-bold text-base md:text-lg dark:text-white">{testimonial.name}</h4>
                        <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300">{testimonial.role}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{testimonial.college}</p>
                      </div>
                    </div>
                    <div className="flex mb-2 md:mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3 h-3 md:w-4 md:h-4 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300 dark:text-gray-600'}`}
                        />
                      ))}
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 text-xs md:text-sm leading-relaxed">{testimonial.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-6 md:mt-8">
            <button
              onClick={() => window.open('https://www.instagram.com/mcadsolution/', '_blank')}
              className="bg-orange-600 text-white px-6 md:px-8 py-2 md:py-3 rounded-md hover:bg-orange-700 transition font-semibold text-sm md:text-base"
            >
              View All Success Stories
            </button>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-orange-600 to-blue-600 py-8 md:py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Ready to Launch Your Career in Automotive Design?</h2>
          <p className="text-base md:text-xl mb-6 md:mb-8">
            Take the first step toward your career with M CAD Solutions. Our counselors will help you choose the right program.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4">
            <button
              onClick={() => {
                setShowCourseMode('offline');
                setHasFilledOfflineForm(false);
                setTimeout(() => scrollToSection('courses'), 100);
              }}
              className="bg-white text-orange-600 px-6 md:px-8 py-2 md:py-3 rounded-md hover:bg-gray-100 transition font-bold text-sm md:text-lg"
            >
              Explore Offline Courses
            </button>

            <button
              onClick={handleWhatsApp}
              className="border-2 border-white text-white px-6 md:px-8 py-2 md:py-3 rounded-md hover:bg-white hover:text-orange-600 transition font-bold text-sm md:text-lg"
            >
              Talk to Counselor
            </button>
          </div>
          <p className="mt-4 md:mt-6 text-sm md:text-lg flex items-center justify-center gap-2 flex-wrap px-2">
            <Phone className="w-4 h-4 md:w-5 md:h-5" />
            <span>Call:</span>
            <a href="tel:+919172969859" className="hover:underline">+91 91729 69859</a>
            <span>|</span>
            <a href="tel:+919172969859" className="hover:underline">+91 91729 69859</a>
          </p>
        </div>
      </div>

      {/* FAQ Section - DARK MODE */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center dark:text-white">Frequently Asked Questions</h2>
        <div className="space-y-3 md:space-y-4 max-w-3xl mx-auto">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full p-4 md:p-5 text-left flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-700 transition"
              >
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 pr-4 text-sm md:text-base">{faq.question}</h4>
                {expandedFaq === idx ? (
                  <ChevronUp className="w-4 h-4 md:w-5 md:h-5 text-orange-600 dark:text-orange-400 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-4 h-4 md:w-5 md:h-5 text-orange-600 dark:text-orange-400 flex-shrink-0" />
                )}
              </button>
              {expandedFaq === idx && (
                <div className="px-4 md:px-5 pb-4 md:pb-5 text-gray-600 dark:text-gray-300 text-xs md:text-sm leading-relaxed border-t dark:border-gray-700 pt-4">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Footer - DARK MODE */}
      <footer className="bg-gray-900 text-white pt-8 md:pt-12 pb-4 md:pb-6" id="contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-6 md:mb-8">
            <div>
              <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">M CAD Solutions</h3>
              <p className="text-gray-400 text-xs md:text-sm mb-3 md:mb-4">
                Best Mechanical CAD Training Institute in Pune. Award-winning excellence in automotive design education.
              </p>
              <div className="flex gap-3 md:gap-4">
                {/* Instagram */}
                <a
                  href="https://www.instagram.com/mcadsolution/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-400 transition"
                >
                  <svg
                    className="w-5 h-5 md:w-6 md:h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://in.linkedin.com/company/mcadsolutions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-400 transition"
                >
                  <svg
                    className="w-5 h-5 md:w-6 md:h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>

                {/* YouTube */}
                <a
                  href="https://www.youtube.com/@mcadsolutionenglish"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-400 transition"
                >
                  <svg
                    className="w-5 h-5 md:w-6 md:h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.498 6.186a2.974 2.974 0 0 0-2.096-2.106C19.511 3.5 12 3.5 12 3.5s-7.511 0-9.402.58A2.974 2.974 0 0 0 .502 6.186 31.251 31.251 0 0 0 0 12a31.26 31.26 0 0 0 .502 5.814 2.974 2.974 0 0 0 2.096 2.106C4.489 20.5 12 20.5 12 20.5s7.511 0 9.402-.58a2.974 2.974 0 0 0 2.096-2.106A31.26 31.26 0 0 0 24 12a31.251 31.251 0 0 0-.502-5.814zM9.75 15.02V8.98l6.25 3.02-6.25 3.02z" />
                  </svg>
                </a>

                {/* Facebook */}
                <a
                  href="https://www.facebook.com/mcadsolutions/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-400 transition"
                >
                  <svg
                    className="w-5 h-5 md:w-6 md:h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22.676 0H1.326C.594 0 0 .593 0 1.326v21.348C0 23.407.594 24 1.326 24h11.498v-9.294H9.691V11.01h3.133V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.794.716-1.794 1.763v2.31h3.588l-.467 3.696h-3.121V24h6.116C23.407 24 24 23.407 24 22.674V1.326C24 .593 23.407 0 22.676 0z" />
                  </svg>
                </a>
              </div>

            </div>
            <div>
              <h4 className="font-semibold mb-3 md:mb-4 text-sm md:text-base">Quick Links</h4>
              <ul className="space-y-1 md:space-y-2 text-xs md:text-sm text-gray-400">
                <li><button onClick={() => scrollToSection('courses')} className="hover:text-white transition">Courses</button></li>
                <li><button onClick={() => scrollToSection('features')} className="hover:text-white transition">Why Choose Us</button></li>
                <li><button onClick={() => scrollToSection('testimonials')} className="hover:text-white transition">Testimonials</button></li>
                <li><a href="https://mcadsolution.com/blog/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 md:mb-4 text-sm md:text-base">Programs</h4>
              <ul className="space-y-1 md:space-y-2 text-xs md:text-sm text-gray-400">
                <li><button onClick={() => handleCourseClick('catia-v5-english')} className="hover:text-white transition text-left">CATIA V5 </button></li>
                <li><button onClick={() => handleCourseClick('biw-fixture-3d-english')} className="hover:text-white transition text-left">BIW Fixture Design 3d</button></li>
                {/* <li><button onClick={() => handleCourseClick('catia-v5-english')} className="hover:text-white transition text-left">CATIA V5 Training</button></li> */}
                <li><button onClick={() => handleCourseClick('biw-fixture-2d-english')} className="hover:text-white transition text-left">BIW Fixture Design 2d</button></li>
                <li><button onClick={() => scrollToSection('courses')} className="hover:text-white transition text-left">Combo Packages</button></li>
                <li><a href="https://mcadsolution.com/placement/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Placement Support</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 md:mb-4 text-sm md:text-base">Contact Info</h4>
              <ul className="space-y-1 md:space-y-2 text-xs md:text-sm text-gray-400">
                <li className="flex items-start gap-2">
                  <MapPin className="w-3 h-3 md:w-4 md:h-4 mt-0.5 md:mt-1 flex-shrink-0" />
                  <span>1st floor, FMCIII BUILDING, Marathwada Mitra Mandal College of Engineering Rd, above Kuka robotics lab, Hingane Home Colony, Karvenagar, Pune, Maharashtra 411052</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-3 h-3 md:w-4 md:h-4" />
                  <a href="tel:+919172969859" className="hover:text-white transition">+91 91729 69859</a>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-3 h-3 md:w-4 md:h-4" />
                  <a href="tel:+919096708490" className="hover:text-white transition">+91 9096708490</a>
                </li>
                <li className="flex items-center gap-2">
                  <Clock className="w-3 h-3 md:w-4 md:h-4" />
                  <span>Mon-Sat: 10:00 AM - 8:00 PM</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-4 md:pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center text-xs md:text-sm text-gray-400 gap-3 md:gap-0">
              <div className="flex flex-wrap justify-center gap-4 md:gap-6 md:mb-0">
                <a href="https://mcadsolution.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Website</a>
                <button onClick={handleWhatsApp} className="hover:text-white transition">WhatsApp</button>
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
        className="fixed bottom-4 right-4 md:bottom-6 md:right-6 bg-green-500 text-white w-12 h-12 md:w-14 md:h-14 rounded-full shadow-lg hover:bg-green-600 flex items-center justify-center z-40 transition"
        aria-label="Contact on WhatsApp"
      >
        <svg className="w-6 h-6 md:w-8 md:h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
      </button>
    </div>
  );

};

export default Landing;
