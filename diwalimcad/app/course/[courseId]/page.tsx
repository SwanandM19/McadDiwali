'use client';

import React, { useState } from 'react';

// TypeScript interfaces and types
interface Lesson {
  id?: string;          // Made optional since lessons don't always have IDs
  title: string;
  duration: string;
  type?: string;
  free?: boolean;
  videoId?: string;
  thumbnail?: string;
  description?: string;
  locked?: boolean;
}

interface Section {
  title: string;
  lectures: number;
  duration: string;
  expanded: boolean;
  lessons: Lesson[];
}

interface Instructor {
  name: string;
  title: string;
  rating: number;
  reviewCount: number;
  studentCount: number;
  courseCount: number;
  bio: string;
}

interface CourseInclude {
  icon: React.ReactElement;
  text: string;
}

interface Course {
  title: string;
  subtitle: string;
  category: string[];
  rating: number;
  reviews: number;
  students: number;
  instructors: Instructor[];
  price: string;
  originalPrice: string;
  discount: string;
  lastUpdated: string;
  language: string;
  subtitles: string[];
  duration: string;
  videos: number;
  files: number;
  access: string;
  certificate: boolean;
  bestseller?: boolean;
  whatYouLearn: string[];
  sections: Section[];
  requirements?: string[];
  description?: string;
  includes?: CourseInclude[];
  youtubeChannel?: string;
  freeVideosAvailable?: number;
}

interface CoursesData {
  [key: string]: Course;
}

import { useRouter, useParams } from 'next/navigation';
import { ChevronDown, ChevronUp, Play, CheckCircle, Clock, Video, FileText, Download, Smartphone, Award, Star, ArrowLeft, Globe, Lock, ExternalLink, Phone, X } from 'lucide-react';
import Image from 'next/image';


// Course data with real YouTube videos
const coursesData: CoursesData = {
  'catia-v5-english': {
    title: 'CATIA V5 - English',
    subtitle: 'Master CATIA V5 from scratch and learn professional 3D CAD modeling techniques',
    category: ['CAD Software', 'Mechanical Design', 'CATIA V5'],
    rating: 4.8,
    reviews: 156,
    students: 1200,
    instructors: [
      {
        name: 'M CAD Solutions Team',
        title: 'Industry Expert - 13+ Years Experience',
        rating: 4.8,
        reviewCount: 156,
        studentCount: 1200,
        courseCount: 8,
        bio: 'Our expert instructors bring over 13 years of automotive industry experience in CATIA V5 design and development. Specialized in training mechanical engineers for core industry roles with hands-on project-based learning approach.'
      }
    ],
    price: '₹2,499',
    originalPrice: '₹9,999',
    discount: '50% OFF',
    lastUpdated: '10/2025',
    language: 'English',
    subtitles: ['English', 'Hindi'],
    duration: '49h 18m',
    videos: 50,
    files: 15,
    access: 'Lifetime',
    certificate: true,
    bestseller: true,
    whatYouLearn: [
      'Full coverage of Part Design, Assembly, Drafting, and Surface Modeling in CATIA V5',
      'Real-world industrial projects and practice files with German and Indian standards',
      'Tips to speed up design, improve accuracy, and prepare production-ready drawings',
      'Learn sketcher, part modeling, assembly design and drafting modules comprehensively',
      'Industry-level CATIA skills applicable to automotive and mechanical design roles',
      'Master advanced techniques used in leading automotive companies like Tata Motors, Mahindra'
    ],
    sections: [
      {
        title: 'Introduction to CATIA V5',
        lectures: 4,
        duration: '25min',
        expanded: false,
        lessons: [
          { 
            title: 'Welcome to CATIA V5 Course', 
            duration: '05:00', 
            type: 'video', 
            free: true,
            videoId: 'r4NQrjkv1QA',
            thumbnail: 'https://i.ytimg.com/vi/r4NQrjkv1QA/hqdefault.jpg',
            description: 'Introduction to CATIA V5 software, interface overview, and what you will learn in this comprehensive course.'
          },
          { 
            title: 'CATIA V5 Interface and Navigation', 
            duration: '08:00', 
            type: 'video', 
            free: true,
            videoId: 'etiT8jDDXYo',
            thumbnail: 'https://i.ytimg.com/vi/etiT8jDDXYo/hqdefault.jpg',
            description: 'Learn the CATIA V5 interface, workbenches, toolbars, and basic navigation techniques for efficient workflow.'
          },
          { 
            title: 'Setting up Your Workspace', 
            duration: '07:00', 
            type: 'video',
            locked: true,
            description: 'Customize your CATIA workspace, set preferences, and configure tools for optimal productivity.'
          },
          { 
            title: 'File Management and Best Practices', 
            duration: '05:00', 
            type: 'video',
            locked: true,
            description: 'Learn file management, saving strategies, backup methods, and industry best practices.'
          }
        ]
      },
      {
        title: 'Sketcher Module - 2D Drawing Fundamentals',
        lectures: 12,
        duration: '2h 30min',
        expanded: false,
        lessons: [
          { 
            title: 'Sketcher Basics and Constraints', 
            duration: '12:00', 
            type: 'video', 
            free: true,
            videoId: 'r4NQrjkv1QA',
            thumbnail: 'https://i.ytimg.com/vi/r4NQrjkv1QA/hqdefault.jpg',
            description: 'Master basic sketcher commands: circle, line, constraints, corner operations, and geometric relationships.'
          },
          { 
            title: 'Advanced Sketcher Techniques', 
            duration: '15:00', 
            type: 'video',
            videoId: 'etiT8jDDXYo',
            thumbnail: 'https://i.ytimg.com/vi/etiT8jDDXYo/hqdefault.jpg',
            free: true,
            description: 'Learn advanced sketcher operations including tangent circles, complex constraints, and pattern features.'
          },
          { 
            title: 'Sketcher Exercise 1 - Basic Shapes', 
            duration: '10:00', 
            type: 'video',
            locked: true,
            description: 'Hands-on exercise creating basic geometric shapes with proper constraints and dimensions.'
          },
          { 
            title: 'Sketcher Exercise 2 - Mechanical Parts', 
            duration: '12:00', 
            type: 'video',
            locked: true,
            description: 'Practice sketching mechanical components like flanges, brackets, and connecting parts.'
          },
          { 
            title: 'Profile Operations', 
            duration: '08:00', 
            type: 'video',
            locked: true,
            description: 'Learn profile operations, offset, trim, and symmetry operations in sketcher.'
          },
          { 
            title: 'Spline and Advanced Curves', 
            duration: '14:00', 
            type: 'video',
            locked: true,
            description: 'Master spline creation, curve editing, and working with complex curved profiles.'
          },
          { 
            title: 'Pattern and Mirror in Sketcher', 
            duration: '10:00', 
            type: 'video',
            locked: true,
            description: 'Use pattern, mirror, and reuse features to speed up sketching process.'
          },
          { 
            title: 'Sketcher Project 1', 
            duration: '18:00', 
            type: 'video',
            locked: true,
            description: 'Complete project: Design a mechanical assembly base plate using all sketcher techniques.'
          }
        ]
      },
      {
        title: 'Part Design - 3D Solid Modeling',
        lectures: 18,
        duration: '4h 15min',
        expanded: false,
        lessons: [
          { 
            title: 'Introduction to Part Design', 
            duration: '10:00', 
            type: 'video',
            free: true,
            videoId: 'QD8G7kbUfBQ',
            thumbnail: 'https://i.ytimg.com/vi/QD8G7kbUfBQ/hqdefault.jpg',
            description: 'Introduction to 3D part modeling, extrude, pad operations, and creating your first 3D part.'
          },
          { 
            title: 'Pad and Pocket Operations', 
            duration: '15:00', 
            type: 'video',
            free: true,
            videoId: 'TZL14fOBuAw',
            thumbnail: 'https://i.ytimg.com/vi/TZL14fOBuAw/hqdefault.jpg',
            description: 'Learn pad (extrude) and pocket (cut) operations with various end conditions and directions.'
          },
          { 
            title: 'Shaft and Revolution Features', 
            duration: '12:00', 
            type: 'video',
            locked: true,
            description: 'Create rotational parts using shaft (revolve) command for cylindrical components.'
          },
          { 
            title: 'Rib and Slot Features', 
            duration: '10:00', 
            type: 'video',
            locked: true,
            description: 'Design ribs for strengthening and slots for assembly connections.'
          },
          { 
            title: 'Holes and Threading', 
            duration: '14:00', 
            type: 'video',
            locked: true,
            description: 'Create various types of holes: simple, counterbore, countersink, and threaded holes.'
          },
          { 
            title: 'Fillet and Chamfer Operations', 
            duration: '12:00', 
            type: 'video',
            locked: true,
            description: 'Apply fillets and chamfers for edge blending and manufacturing considerations.'
          },
          { 
            title: 'Pattern Features - Rectangular and Circular', 
            duration: '15:00', 
            type: 'video',
            locked: true,
            description: 'Create rectangular and circular patterns for repetitive features like bolt holes.'
          },
          { 
            title: 'Mirror and Symmetry', 
            duration: '08:00', 
            type: 'video',
            locked: true,
            description: 'Use mirror operations to create symmetrical parts efficiently.'
          },
          { 
            title: 'Multi-Section Solid', 
            duration: '18:00', 
            type: 'video',
            locked: true,
            description: 'Advanced feature: Create complex shapes using multiple profiles and guides.'
          },
          { 
            title: 'Part Modeling Exercise 1 - Flange', 
            duration: '20:00', 
            type: 'video',
            locked: true,
            description: 'Complete exercise: Design a pipe flange with bolt holes and proper dimensions.'
          },
          { 
            title: 'Part Modeling Exercise 2 - Bracket', 
            duration: '22:00', 
            type: 'video',
            locked: true,
            description: 'Create a mounting bracket with ribs, holes, and complex geometry.'
          },
          { 
            title: 'Part Modeling Exercise 3 - Housing', 
            duration: '25:00', 
            type: 'video',
            locked: true,
            description: 'Design a complex housing part with internal features and mounting points.'
          }
        ]
      },
      {
        title: 'Assembly Design',
        lectures: 15,
        duration: '3h 30min',
        expanded: false,
        lessons: [
          { 
            title: 'Introduction to Assembly Design', 
            duration: '12:00', 
            type: 'video',
            free: true,
            videoId: 'zdhItUzUNxY',
            thumbnail: 'https://i.ytimg.com/vi/zdhItUzUNxY/hqdefault.jpg',
            description: 'Learn assembly workbench basics, inserting parts, and assembly structure management.'
          },
          { 
            title: 'Assembly Constraints - Part 1', 
            duration: '15:00', 
            type: 'video',
            locked: true,
            description: 'Master coincidence, contact, offset, and angle constraints for proper assembly.'
          },
          { 
            title: 'Assembly Constraints - Part 2', 
            duration: '15:00', 
            type: 'video',
            locked: true,
            description: 'Learn advanced constraints: fix, parallelism, perpendicular, and quick constraints.'
          },
          { 
            title: 'Assembly Exercise - Shaper Tool Head', 
            duration: '25:00', 
            type: 'video',
            locked: true,
            description: 'Complete assembly project: Shaper tool head with multiple components and constraints.'
          },
          { 
            title: 'Bill of Materials (BOM)', 
            duration: '10:00', 
            type: 'video',
            locked: true,
            description: 'Generate and manage BOM, assign part numbers, and organize assembly data.'
          }
        ]
      },
      {
        title: 'Drafting - 2D Drawing Creation',
        lectures: 10,
        duration: '2h 45min',
        expanded: false,
        lessons: [
          { 
            title: 'Drafting Basics and Standards', 
            duration: '12:00', 
            type: 'video',
            free: true,
            videoId: 'oqe-OJwPo6o',
            thumbnail: 'https://i.ytimg.com/vi/oqe-OJwPo6o/hqdefault.jpg',
            description: 'Master CATIA V5 Drafting workbench, create production-ready 2D drawings from 3D models.'
          },
          { 
            title: 'Creating Multiple Views', 
            duration: '15:00', 
            type: 'video',
            locked: true,
            description: 'Generate front, top, side views, and auxiliary views automatically from parts.'
          },
          { 
            title: 'Section Views and Detail Views', 
            duration: '18:00', 
            type: 'video',
            locked: true,
            description: 'Create section views to show internal features and detail views for complex areas.'
          },
          { 
            title: 'Dimensioning and Tolerancing', 
            duration: '20:00', 
            type: 'video',
            locked: true,
            description: 'Add dimensions, geometric tolerances, and surface finish symbols to drawings.'
          },
          { 
            title: 'Title Block and Drawing Templates', 
            duration: '12:00', 
            type: 'video',
            locked: true,
            description: 'Create custom title blocks and reusable drawing templates for your projects.'
          }
        ]
      },
      {
        title: 'Surface Design Basics',
        lectures: 8,
        duration: '2h 00min',
        expanded: false,
        lessons: [
          { 
            title: 'Introduction to Surface Modeling', 
            duration: '15:00', 
            type: 'video',
            locked: true,
            description: 'Learn surface modeling concepts and when to use surfaces vs solids.'
          },
          { 
            title: 'Basic Surface Creation', 
            duration: '18:00', 
            type: 'video',
            locked: true,
            description: 'Create basic surfaces: extrude, revolve, sweep, and fill operations.'
          },
          { 
            title: 'Advanced Surface Operations', 
            duration: '22:00', 
            type: 'video',
            locked: true,
            description: 'Master multi-section surface, blend, and loft operations for complex shapes.'
          }
        ]
      }
    ],
    requirements: [
      'A computer with Windows 7 or higher (CATIA V5 compatible system)',
      'Basic understanding of engineering drawings (helpful but not mandatory)',
      'No prior CAD experience required - we start from absolute basics',
      'Passion to learn mechanical design and automotive engineering',
      'Recommended: 8GB RAM, dedicated graphics card for smooth performance'
    ],
    description: `Master CATIA V5, one of the most powerful 3D CAD software used in automotive and aerospace industries. This comprehensive course by M CAD Solutions provides industry-oriented training that bridges the gap between academics and real-world applications.

With over 13 years of training experience and 98% placement record, M CAD Solutions has successfully trained 200+ students who are now working in leading automotive companies. This course includes hands-on projects, real industrial applications, and expert guidance from professionals currently working in the automotive sector.

You'll learn everything from basic sketching to advanced surface modeling, preparing you for roles as Mechanical Design Engineer, CAD Engineer, or Product Design Engineer in core mechanical industries. The course includes access to practice files, project templates, and lifetime doubt-solving support.`,
    includes: [
      { icon: <Video className="w-4 h-4" />, text: '50+ hours comprehensive video training' },
      { icon: <FileText className="w-4 h-4" />, text: '15 practice files and project resources' },
      { icon: <Download className="w-4 h-4" />, text: 'Downloadable exercise files and templates' },
      { icon: <Clock className="w-4 h-4" />, text: 'Full lifetime access with all updates' },
      { icon: <Smartphone className="w-4 h-4" />, text: 'Access on mobile, tablet and desktop' },
      { icon: <Award className="w-4 h-4" />, text: 'Certificate of completion from M CAD Solutions' }
    ],
    youtubeChannel: 'https://www.youtube.com/@mcadsolutionenglish',
    freeVideosAvailable: 6
  },
  
  'biw-fixture-3d-english': {
    title: 'BIW Fixture Design - 3D (English)',
    subtitle: 'Gain hands-on expertise in 3D modeling for Body-in-White (BIW) fixture design',
    category: ['Mechanical Engineering', 'Automotive Design', 'BIW Fixtures'],
    rating: 4.9,
    reviews: 89,
    students: 450,
    price: '₹20,999',
    originalPrice: '₹39,999',
    discount: '53% OFF',
    lastUpdated: '09/2025',
    language: 'English',
    subtitles: ['English', 'Hindi'],
    duration: '38+ hours',
    videos: 38,
    files: 12,
    access: '1 Year',
    certificate: true,
    bestseller: false,
    instructors: [
      {
        name: 'Manoj Potdar',
        title: 'BIW Design Specialist - Automotive Industry Expert',
        rating: 4.9,
        reviewCount: 89,
        studentCount: 450,
        courseCount: 5,
        bio: 'Specialized in BIW Fixture Design with extensive experience in automotive manufacturing. Expert in CATIA V5, fixture simulation, and production implementation with German automotive standards. Over 8 years of hands-on experience in designing fixtures for leading automotive OEMs.'
      }
    ],
    whatYouLearn: [
      'Learn complete 3D CAD techniques for automotive BIW fixtures from concept to finish',
      'Work with assembly design, part modeling, and detailed 3D visualization of fixtures',
      'Apply industry standards and GD&T (Geometric Dimensioning & Tolerancing) for accurate production',
      'Master different fixture types: Rest units, Clamp units, Pin units, Sliding units, Base units',
      'Understand tool stations, PLP study, Unit Zero, Part Zero concepts in BIW manufacturing',
      'Design complete fixtures with pneumatic calculations and diamond pin configurations',
      'Learn 3D concept development, simulation, modification and final fixture assembly',
      'Work on real automotive industry projects with German and Indian manufacturing standards'
    ],
    sections: [
      {
        title: 'Introduction to BIW Fixture Design',
        lectures: 5,
        duration: '45min',
        expanded: false,
        lessons: [
          { 
            title: 'What is BIW and Why Fixtures Matter', 
            duration: '08:00', 
            type: 'video', 
            free: true,
            videoId: 'r4NQrjkv1QA',
            thumbnail: 'https://i.ytimg.com/vi/r4NQrjkv1QA/hqdefault.jpg',
            description: 'Introduction to Body-in-White manufacturing, fixture importance in automotive assembly lines, and overview of welding processes.'
          },
          { 
            title: 'Types of BIW Fixtures and Applications', 
            duration: '10:00', 
            type: 'video', 
            free: true,
            videoId: 'QD8G7kbUfBQ',
            thumbnail: 'https://i.ytimg.com/vi/QD8G7kbUfBQ/hqdefault.jpg',
            description: 'Learn different fixture types: welding fixtures, assembly fixtures, checking fixtures, and their specific applications in automotive production.'
          },
          { 
            title: 'BIW Terminology and Nomenclature', 
            duration: '09:00', 
            type: 'video',
            locked: true,
            description: 'Master BIW industry terminology, part naming conventions, fixture component identification, and international standards.'
          },
          { 
            title: 'Tool Stations in BIW Manufacturing', 
            duration: '10:00', 
            type: 'video',
            locked: true,
            description: 'Understanding tool stations, production line layout, station sequencing, and fixture positioning in assembly lines.'
          },
          { 
            title: 'Fixture Study: Unit Zero & Part Zero', 
            duration: '08:00', 
            type: 'video',
            locked: true,
            description: 'Learn coordinate system setup, Unit Zero definition, Part Zero concepts, and datum reference frames for fixtures.'
          }
        ]
      },
      {
        title: 'Fixture Components and Basic Units',
        lectures: 8,
        duration: '2h 15min',
        expanded: false,
        lessons: [
          { 
            title: 'Introduction to Fixture Components', 
            duration: '12:00', 
            type: 'video',
            locked: true,
            description: 'Overview of standard fixture components: pins, blocks, clamps, supports, and their functions in BIW assembly.'
          },
          { 
            title: 'Base Plate Design and Standards', 
            duration: '18:00', 
            type: 'video',
            locked: true,
            description: 'Design base plates according to industry standards, material selection, mounting hole patterns, and structural calculations.'
          },
          { 
            title: 'Pin Design - Types and Applications', 
            duration: '15:00', 
            type: 'video',
            locked: true,
            description: 'Learn diamond pins, round pins, conical pins, and their specific applications for part locating and positioning.'
          },
          { 
            title: 'Pin Retainer Design', 
            duration: '14:00', 
            type: 'video',
            locked: true,
            description: 'Design pin retainers for secure pin mounting, spring-loaded mechanisms, and quick-change systems.'
          },
          { 
            title: 'Block and Support Design', 
            duration: '16:00', 
            type: 'video',
            locked: true,
            description: 'Create support blocks, L-blocks, V-blocks for part support and positioning with proper tolerancing.'
          },
          { 
            title: 'Clamp Unit Basics', 
            duration: '18:00', 
            type: 'video',
            locked: true,
            description: 'Introduction to clamp units, clamping force calculations, clamp arm design, and pneumatic cylinder selection.'
          },
          { 
            title: 'Bushing and Bearing Components', 
            duration: '14:00', 
            type: 'video',
            locked: true,
            description: 'Design bushings, bearings for pivot points, material selection, and lubrication considerations.'
          },
          { 
            title: 'Fasteners and Standard Parts', 
            duration: '08:00', 
            type: 'video',
            locked: true,
            description: 'Learn standard fasteners, bolts, screws, washers selection according to ISO/DIN standards for fixture assembly.'
          }
        ]
      },
      {
        title: 'Rest Units Design - Simple and Advanced',
        lectures: 6,
        duration: '2h 00min',
        expanded: false,
        lessons: [
          { 
            title: 'Simple Rest Unit Design', 
            duration: '20:00', 
            type: 'video',
            locked: true,
            description: 'Design basic rest units for flat surface support, height adjustment mechanisms, and contact pad design.'
          },
          { 
            title: 'Adjustable Rest Units', 
            duration: '22:00', 
            type: 'video',
            locked: true,
            description: 'Create adjustable height rest units with screw mechanisms, locking systems, and fine adjustment features.'
          },
          { 
            title: 'Spring-Loaded Rest Units', 
            duration: '18:00', 
            type: 'video',
            locked: true,
            description: 'Design spring-loaded rest units for automatic part support, spring calculations, and force distribution.'
          },
          { 
            title: 'Multi-Point Rest Systems', 
            duration: '20:00', 
            type: 'video',
            locked: true,
            description: 'Complex rest systems with multiple contact points for large parts, load balancing, and stability analysis.'
          },
          { 
            title: 'Rest Unit Assembly Exercise', 
            duration: '25:00', 
            type: 'video',
            locked: true,
            description: 'Complete hands-on exercise: Design a complete rest unit assembly with all components and proper GD&T.'
          },
          { 
            title: 'Rest Unit Stress Analysis', 
            duration: '15:00', 
            type: 'video',
            locked: true,
            description: 'Perform basic stress analysis on rest units, load calculations, and safety factor determination.'
          }
        ]
      },
      {
        title: 'Clamp Units and Pin Assemblies',
        lectures: 7,
        duration: '2h 30min',
        expanded: false,
        lessons: [
          { 
            title: 'Manual Clamp Design', 
            duration: '18:00', 
            type: 'video',
            locked: true,
            description: 'Design manual operated clamps with lever mechanisms, cam action, and force multiplication principles.'
          },
          { 
            title: 'Pneumatic Clamp Units', 
            duration: '25:00', 
            type: 'video',
            locked: true,
            description: 'Design pneumatic clamps with cylinder selection, valve integration, pressure calculations, and timing circuits.'
          },
          { 
            title: 'Swing Clamp Assemblies', 
            duration: '20:00', 
            type: 'video',
            locked: true,
            description: 'Create swing clamp assemblies with pivot mechanisms, clearance calculations, and automatic return features.'
          },
          { 
            title: 'Toggle Clamp Integration', 
            duration: '22:00', 
            type: 'video',
            locked: true,
            description: 'Integrate standard toggle clamps in fixtures, mounting arrangements, and force amplification systems.'
          },
          { 
            title: 'Pin Locator Assembly Design', 
            duration: '20:00', 
            type: 'video',
            locked: true,
            description: 'Complete pin locator assembly with diamond pins, spring return, position sensors, and wear compensation.'
          },
          { 
            title: 'Clamp Force Calculations', 
            duration: '18:00', 
            type: 'video',
            locked: true,
            description: 'Calculate required clamping forces, cylinder sizing, pressure requirements, and safety considerations.'
          },
          { 
            title: 'Clamp Assembly Project', 
            duration: '27:00', 
            type: 'video',
            locked: true,
            description: 'Complete project: Design a full clamp assembly with pneumatic actuation and sensor integration.'
          }
        ]
      },
      {
        title: 'Advanced Units: Sliding, Pivot, Dump',
        lectures: 6,
        duration: '2h 15min',
        expanded: false,
        lessons: [
          { 
            title: 'Sliding Unit Mechanism Design', 
            duration: '25:00', 
            type: 'video',
            locked: true,
            description: 'Design linear sliding units with guides, actuators, position control, and limit switches.'
          },
          { 
            title: 'Pivot Unit Design', 
            duration: '22:00', 
            type: 'video',
            locked: true,
            description: 'Create pivot units for rotary motion, bearing selection, angular positioning, and locking mechanisms.'
          },
          { 
            title: 'Dump Unit Assembly', 
            duration: '20:00', 
            type: 'video',
            locked: true,
            description: 'Design dump units for part removal, tilting mechanisms, safety interlocks, and operator ergonomics.'
          },
          { 
            title: 'Linear Actuator Integration', 
            duration: '18:00', 
            type: 'video',
            locked: true,
            description: 'Integrate electric and pneumatic linear actuators, stroke calculations, speed control, and positioning.'
          },
          { 
            title: 'Rotary Table Design', 
            duration: '23:00', 
            type: 'video',
            locked: true,
            description: 'Design rotary indexing tables for multi-station fixtures, indexing mechanisms, and position accuracy.'
          },
          { 
            title: 'Advanced Unit Project', 
            duration: '27:00', 
            type: 'video',
            locked: true,
            description: 'Complete advanced project: Design a fixture with sliding, pivot, and clamp units integrated.'
          }
        ]
      },
      {
        title: '3D Concept Development',
        lectures: 4,
        duration: '1h 40min',
        expanded: false,
        lessons: [
          { 
            title: 'Concept Design from 2D Drawings', 
            duration: '25:00', 
            type: 'video',
            locked: true,
            description: 'Convert 2D fixture concepts to 3D models, layout planning, component placement, and spatial analysis.'
          },
          { 
            title: 'Part Positioning Analysis', 
            duration: '22:00', 
            type: 'video',
            locked: true,
            description: 'Analyze part positioning in fixture, contact points, support locations, and stability verification.'
          },
          { 
            title: 'Clearance and Interference Check', 
            duration: '28:00', 
            type: 'video',
            locked: true,
            description: 'Perform clearance checks, interference detection, tool access analysis, and robot reach studies.'
          },
          { 
            title: 'Concept Review and Optimization', 
            duration: '25:00', 
            type: 'video',
            locked: true,
            description: 'Review 3D concept, optimize design for manufacturing, cost reduction, and improve accessibility.'
          }
        ]
      },
      {
        title: '3D Simulation and Modification',
        lectures: 3,
        duration: '1h 30min',
        expanded: false,
        lessons: [
          { 
            title: 'Fixture Simulation Setup', 
            duration: '30:00', 
            type: 'video',
            locked: true,
            description: 'Setup fixture simulation, part loading sequence, clamp activation order, and motion studies.'
          },
          { 
            title: 'Design Modification and Iteration', 
            duration: '32:00', 
            type: 'video',
            locked: true,
            description: 'Modify fixture design based on simulation results, improve clamping sequence, and resolve issues.'
          },
          { 
            title: 'Final Fixture Assembly', 
            duration: '28:00', 
            type: 'video',
            locked: true,
            description: 'Complete final 3D fixture assembly with all components, BOM generation, and assembly instructions.'
          }
        ]
      },
      {
        title: 'Complete BIW Fixture Project',
        lectures: 2,
        duration: '3h 00min',
        expanded: false,
        lessons: [
          { 
            title: 'Full Fixture Design Project - Part 1', 
            duration: '90:00', 
            type: 'video',
            locked: true,
            description: 'Complete real-world BIW fixture design project: concept to 3D modeling with all units and assemblies.'
          },
          { 
            title: 'Full Fixture Design Project - Part 2', 
            duration: '90:00', 
            type: 'video',
            locked: true,
            description: 'Project continuation: simulation, modification, final assembly, BOM, and documentation preparation.'
          }
        ]
      }
    ],
    requirements: [
      'Strong knowledge of CATIA V5 (Part Design, Assembly, Drafting modules)',
      'Understanding of basic mechanical engineering principles and manufacturing processes',
      'Familiarity with engineering drawings, GD&T symbols, and welding terminology',
      'Computer with CATIA V5 R19 or higher installed (8GB RAM recommended)',
      'Basic understanding of pneumatic systems and actuators is helpful'
    ],
    description: `Become a BIW Fixture Design expert with this comprehensive 3D modeling course by M CAD Solutions, Pune's premier automotive design training institute. This industry-focused program is designed for mechanical engineers who want to specialize in Body-in-White fixture design - one of the most in-demand skills in automotive manufacturing.

BIW fixtures are critical components in automotive production lines, ensuring precise positioning and welding of car body panels. This course covers everything from basic fixture terminology to advanced 3D design techniques, pneumatic calculations, and production-ready fixture assembly.

With M CAD Solutions' proven 98% placement record and strong industry connections, this course has helped 200+ students secure positions in leading automotive companies like Tata Motors, Mahindra, and international automotive suppliers. You'll work on real industrial projects and learn the exact methodologies used in German and Indian automotive manufacturing plants.

The course includes comprehensive coverage of all fixture types: rest units, clamp units, pin assemblies, sliding mechanisms, pivot units, and dump systems. You'll master pneumatic calculations, sensor integration, and create complete 3D assemblies ready for production implementation.`,
    includes: [
      { icon: <Video className="w-4 h-4" />, text: '38+ hours comprehensive video training' },
      { icon: <FileText className="w-4 h-4" />, text: 'Industrial BIW fixture project files' },
      { icon: <Download className="w-4 h-4" />, text: 'Standard fixture component library' },
      { icon: <Clock className="w-4 h-4" />, text: '1 Year access with doubt-solving support' },
      { icon: <Smartphone className="w-4 h-4" />, text: 'Access on all devices anytime' },
      { icon: <Award className="w-4 h-4" />, text: 'Industry-recognized certificate of completion' }
    ],
    youtubeChannel: 'https://www.youtube.com/@mcadsolutionenglish',
    freeVideosAvailable: 2
  },

  'biw-fixture-2d-english': {
    title: 'BIW Fixture Design - 2D Drafting (English)',
    subtitle: 'Learn production-ready 2D drawings for BIW fixtures with industry standards',
    category: ['Mechanical Engineering', 'Automotive Design', 'Technical Drafting'],
    rating: 4.8,
    reviews: 92,
    students: 520,
    price: '₹15,999',
    originalPrice: '₹31,999',
    discount: '50% OFF',
    lastUpdated: '09/2024',
    language: 'English',
    subtitles: ['English', 'Hindi', 'Marathi'],
    duration: '35+ hours',
    videos: 17,
    files: 8,
    access: '1 Year',
    certificate: true,
    bestseller: false,
    instructors: [
      {
        name: 'Vaishnavi Gore',
        title: '2D Drafting Specialists - Automotive Fixtures',
        rating: 4.8,
        reviewCount: 92,
        studentCount: 520,
        courseCount: 6,
        bio: 'Expert team specializing in automotive fixture 2D drafting with extensive experience in production documentation, GD&T application, and industry standards compliance. Combined 50+ years of experience in automotive drafting.'
      }
    ],
    whatYouLearn: [
      'Create production-ready 2D drawings for BIW fixtures with proper dimensioning',
      'Understand and apply industry standards and GD&T (Geometric Dimensioning & Tolerancing)',
      'Master GA (General Assembly), detail drawings, and component documentation',
      'Learn welding symbols, surface finish notations, and material specifications',
      'Create complete BOM (Bill of Materials) and parts lists for manufacturing',
      'Hands-on exercises for real automotive fixture applications',
      'Industry-standard drafting practices used in automotive manufacturing',
      'Prepare drawings that meet German and Indian automotive standards'
    ],
    sections: [
      {
        title: 'Introduction to BIW 2D Drafting',
        lectures: 3,
        duration: '40min',
        expanded: false,
        lessons: [
          { 
            title: 'Overview of BIW Fixture Drafting', 
            duration: '12:00', 
            type: 'video', 
            free: true,
            videoId: 'oqe-OJwPo6o',
            thumbnail: 'https://i.ytimg.com/vi/oqe-OJwPo6o/hqdefault.jpg',
            description: 'Introduction to BIW fixture 2D drafting, importance in manufacturing, drawing types, and documentation standards.'
          },
          { 
            title: 'Industry Standards and Conventions', 
            duration: '14:00', 
            type: 'video', 
            free: true,
            videoId: 'etiT8jDDXYo',
            thumbnail: 'https://i.ytimg.com/vi/etiT8jDDXYo/hqdefault.jpg',
            description: 'Learn ISO, DIN, ANSI drafting standards, projection methods, and automotive industry conventions.'
          },
          { 
            title: 'Drafting Software Setup and Tools', 
            duration: '14:00', 
            type: 'video',
            locked: true,
            description: 'Setup CATIA V5 Drafting workbench, configure standards, templates, and customize tools for efficiency.'
          }
        ]
      },
      {
        title: 'GD&T Fundamentals for BIW',
        lectures: 5,
        duration: '2h 00min',
        expanded: false,
        lessons: [
          { 
            title: 'Introduction to GD&T', 
            duration: '20:00', 
            type: 'video',
            locked: true,
            description: 'Fundamentals of Geometric Dimensioning and Tolerancing, datum systems, and tolerance zones.'
          },
          { 
            title: 'Form Tolerances - Flatness, Straightness', 
            duration: '22:00', 
            type: 'video',
            locked: true,
            description: 'Apply form tolerances: flatness, straightness, circularity, and cylindricity to fixture components.'
          },
          { 
            title: 'Orientation Tolerances', 
            duration: '25:00', 
            type: 'video',
            locked: true,
            description: 'Learn perpendicularity, parallelism, and angularity tolerances for critical fixture surfaces.'
          },
          { 
            title: 'Location Tolerances', 
            duration: '28:00', 
            type: 'video',
            locked: true,
            description: 'Apply position, concentricity, and symmetry tolerances for precise component location.'
          },
          { 
            title: 'GD&T Application Exercise', 
            duration: '25:00', 
            type: 'video',
            locked: true,
            description: 'Hands-on exercise: Apply complete GD&T to a fixture component drawing with datum references.'
          }
        ]
      },
      {
        title: 'Component Detail Drawings',
        lectures: 5,
        duration: '2h 30min',
        expanded: false,
        lessons: [
          { 
            title: 'Pin Detail Drawing', 
            duration: '28:00', 
            type: 'video',
            locked: true,
            description: 'Create complete detail drawing for diamond pins with dimensions, tolerances, and surface finish.'
          },
          { 
            title: 'Block and Plate Detailing', 
            duration: '32:00', 
            type: 'video',
            locked: true,
            description: 'Detail drawings for support blocks, base plates with hole patterns and mounting features.'
          },
          { 
            title: 'Clamp Component Drawing', 
            duration: '30:00', 
            type: 'video',
            locked: true,
            description: 'Create detail drawings for clamp arms, brackets with critical dimensions and GD&T.'
          },
          { 
            title: 'Machined Component Detailing', 
            duration: '28:00', 
            type: 'video',
            locked: true,
            description: 'Detail complex machined components with chamfers, fillets, and manufacturing notes.'
          },
          { 
            title: 'Sheet Metal Component Drawing', 
            duration: '32:00', 
            type: 'video',
            locked: true,
            description: 'Create drawings for sheet metal parts with bend allowance, material specifications, and forming notes.'
          }
        ]
      },
      {
        title: 'Assembly Drawings and GA',
        lectures: 4,
        duration: '2h 15min',
        expanded: false,
        lessons: [
          { 
            title: 'GA (General Assembly) Basics', 
            duration: '30:00', 
            type: 'video',
            locked: true,
            description: 'Create General Assembly drawings showing overall fixture layout, major components, and dimensions.'
          },
          { 
            title: 'Sub-Assembly Drawings', 
            duration: '35:00', 
            type: 'video',
            locked: true,
            description: 'Detail sub-assemblies: clamp assemblies, pin assemblies with exploded views and part identification.'
          },
          { 
            title: 'Assembly Views and Sections', 
            duration: '38:00', 
            type: 'video',
            locked: true,
            description: 'Create multiple views, section views, and detail views for complex assemblies showing internal features.'
          },
          { 
            title: 'Exploded Assembly Views', 
            duration: '32:00', 
            type: 'video',
            locked: true,
            description: 'Generate exploded views for assembly instructions, part identification, and assembly sequence.'
          }
        ]
      },
      {
        title: 'Welding and Fabrication Drawings',
        lectures: 4,
        duration: '2h 00min',
        expanded: false,
        lessons: [
          { 
            title: 'Welding Symbols and Standards', 
            duration: '25:00', 
            type: 'video',
            locked: true,
            description: 'Learn AWS and ISO welding symbols, weld types, sizes, and proper application on drawings.'
          },
          { 
            title: 'Weldment Detail Drawing', 
            duration: '35:00', 
            type: 'video',
            locked: true,
            description: 'Create complete weldment drawings with welding symbols, pre and post-weld machining notes.'
          },
          { 
            title: 'Fabrication Notes and Callouts', 
            duration: '28:00', 
            type: 'video',
            locked: true,
            description: 'Add fabrication notes, material callouts, heat treatment specifications, and painting instructions.'
          },
          { 
            title: 'Welding Assembly Project', 
            duration: '32:00', 
            type: 'video',
            locked: true,
            description: 'Complete project: Create welding assembly drawing for fixture base with all symbols and notes.'
          }
        ]
      },
      {
        title: 'BOM Creation and Documentation',
        lectures: 3,
        duration: '1h 30min',
        expanded: false,
        lessons: [
          { 
            title: 'BOM Structure and Format', 
            duration: '28:00', 
            type: 'video',
            locked: true,
            description: 'Create Bill of Materials with part numbers, descriptions, quantities, and material specifications.'
          },
          { 
            title: 'Parts List Generation', 
            duration: '32:00', 
            type: 'video',
            locked: true,
            description: 'Generate automatic parts lists from 3D models, customize format, and link to drawings.'
          },
          { 
            title: 'Drawing Package Preparation', 
            duration: '30:00', 
            type: 'video',
            locked: true,
            description: 'Prepare complete drawing package: title blocks, revision control, and document management.'
          }
        ]
      },
      {
        title: 'Title Blocks and Templates',
        lectures: 2,
        duration: '1h 15min',
        expanded: false,
        lessons: [
          { 
            title: 'Custom Title Block Design', 
            duration: '38:00', 
            type: 'video',
            locked: true,
            description: 'Design custom title blocks with company logo, standard fields, and automatic data linking.'
          },
          { 
            title: 'Drawing Template Creation', 
            duration: '37:00', 
            type: 'video',
            locked: true,
            description: 'Create reusable drawing templates with predefined views, dimensions styles, and annotations.'
          }
        ]
      },
      {
        title: 'Complete BIW Fixture Drafting Project',
        lectures: 2,
        duration: '3h 30min',
        expanded: false,
        lessons: [
          { 
            title: 'Full Fixture Drafting Project - Part 1', 
            duration: '105:00', 
            type: 'video',
            locked: true,
            description: 'Complete real-world project: Create all detail drawings for a BIW fixture with GD&T and dimensions.'
          },
          { 
            title: 'Full Fixture Drafting Project - Part 2', 
            duration: '105:00', 
            type: 'video',
            locked: true,
            description: 'Project completion: GA drawing, assembly drawings, BOM, welding details, and final documentation.'
          }
        ]
      }
    ],
    requirements: [
      'CATIA V5 Drafting module knowledge or AutoCAD experience',
      'Basic understanding of engineering drawings and orthographic projections',
      'Knowledge of mechanical engineering fundamentals and manufacturing processes',
      'Computer with CAD software (CATIA V5 R19 or higher / AutoCAD 2018+)',
      'Familiarity with metric and imperial measurement systems'
    ],
    description: `Master the art of BIW fixture 2D drafting with this comprehensive course designed for design engineers, CAD professionals, and mechanical engineering students. Learn to create professional, production-ready drawings that meet automotive industry standards.

2D drafting is a critical skill in automotive manufacturing - it's the bridge between 3D design and actual production. This course by M CAD Solutions teaches you the exact drafting techniques used in leading automotive companies, with emphasis on GD&T, welding documentation, and manufacturing specifications.

With M CAD Solutions' proven track record (98% placement, 200+ students placed, Maharashtra Udyog Bhushan Award 2022), this course provides industry-relevant skills that employers actively seek. You'll work on real fixture drawings and learn the standards used by companies like Tata Motors, Mahindra, and international automotive suppliers.

The course covers complete drafting workflow from detail drawings to assembly documentation, including GD&T application, welding symbols, BOM creation, and title block design. Perfect for those who want to specialize in automotive fixture documentation.`,
    includes: [
      { icon: <Video className="w-4 h-4" />, text: '35+ hours comprehensive drafting training' },
      { icon: <FileText className="w-4 h-4" />, text: 'Sample drawings and templates library' },
      { icon: <Download className="w-4 h-4" />, text: 'GD&T reference guides and standards' },
      { icon: <Clock className="w-4 h-4" />, text: '1 Year access with regular updates' },
      { icon: <Smartphone className="w-4 h-4" />, text: 'Access on mobile and desktop' },
      { icon: <Award className="w-4 h-4" />, text: 'Industry-recognized completion certificate' }
    ],
    youtubeChannel: 'https://www.youtube.com/@mcadsolutionenglish',
    freeVideosAvailable: 2
  },

'catia-v5-marathi': {
  title: 'CATIA V5 (Marathi)',
  subtitle: 'मराठी माध्यमातून CATIA V5 शिका - Industrial Based Training',
  category: ['CAD Software', 'Mechanical Design', 'CATIA Training'],
  rating: 4.6,
  reviews: 203,
  students: 1450,
  price: '₹2,499',
  originalPrice: '₹9,999',
  discount: '50% OFF',
  lastUpdated: '10/2025',
  language: 'Marathi',
  subtitles: ['Marathi', 'Hindi', 'English'],
  duration: '45+ hours',
  videos: 50,
  files: 15,
  access: '1 Year',
  certificate: true,
  bestseller: true,
  instructors: [
    {
      name: 'M CAD Solutions Marathi Team',
      title: 'CATIA तज्ञ - मराठी माध्यम प्रशिक्षक',
      rating: 4.6,
      reviewCount: 203,
      studentCount: 1450,
      courseCount: 7,
      bio: 'मराठी भाषेतील अनुभवी प्रशिक्षक जे automotive उद्योगात 10+ वर्षांचा अनुभव असलेले तज्ञ आहेत. विद्यार्थ्यांना मराठी माध्यमातून CATIA V5 शिकवण्यात विशेष कौशल्य.'
    }
  ],
  whatYouLearn: [
    'CATIA V5 सॉफ्टवेअर मधील Sketcher module संपूर्णपणे शिका',
    'Part Modelling - 3D solid parts बनवण्याची संपूर्ण प्रक्रिया',
    'Assembly Design - विविध parts एकत्र करून assembly तयार करा',
    'Drafting - Production-ready 2D drawings आणि detailed drawings',
    'Industry professionals कडून शिका practical industrial applications',
    'Real-world automotive आणि mechanical projects सोबत hands-on practice',
    'German आणि Indian standards प्रमाणे design techniques',
    'Job-oriented training जे तुम्हाला industry-ready बनवते'
  ],
  sections: [
    {
      title: 'CATIA V5 ची ओळख (Introduction)',
      lectures: 4,
      duration: '45min',
      expanded: false,
      lessons: [
        { 
          title: 'CATIA V5 ची ओळख आणि महत्व', 
          duration: '10:00', 
          type: 'video', 
          free: true,
          videoId: 'r4NQrjkv1QA',
          thumbnail: 'https://i.ytimg.com/vi/r4NQrjkv1QA/hqdefault.jpg',
          description: 'CATIA V5 software ची ओळख, automotive industry मध्ये वापर, आणि career opportunities.'
        },
        { 
          title: 'Interface आणि Basic Tools', 
          duration: '12:00', 
          type: 'video', 
          free: true,
          videoId: 'etiT8jDDXYo',
          thumbnail: 'https://i.ytimg.com/vi/etiT8jDDXYo/hqdefault.jpg',
          description: 'CATIA V5 चे interface, workbenches, toolbars, आणि basic navigation शिका.'
        },
        { 
          title: 'Workspace Setup आणि Customization', 
          duration: '11:00', 
          type: 'video',
          locked: true,
          description: 'तुमचा workspace customize करा, tools arrange करा, आणि efficient working setup तयार करा.'
        },
        { 
          title: 'File Management आणि Best Practices', 
          duration: '12:00', 
          type: 'video',
          locked: true,
          description: 'Files save करणे, backup करणे, version control, आणि project organization.'
        }
      ]
    },
    {
      title: 'Sketcher Module (स्केचर मॉड्यूल)',
      lectures: 12,
      duration: '3h 00min',
      expanded: false,
      lessons: [
        { 
          title: 'Sketcher Basics - Lines आणि Circles', 
          duration: '15:00', 
          type: 'video',
          free: true,
          videoId: 'QD8G7kbUfBQ',
          thumbnail: 'https://i.ytimg.com/vi/QD8G7kbUfBQ/hqdefault.jpg',
          description: 'Basic sketcher commands: line, circle, rectangle, arc काढण्याची पद्धत.'
        },
        { 
          title: 'Constraints आणि Dimensions', 
          duration: '18:00', 
          type: 'video',
          locked: true,
          description: 'Geometric constraints, dimensional constraints, आणि proper sketch तयार करणे.'
        },
        { 
          title: 'Profile Operations', 
          duration: '15:00', 
          type: 'video',
          locked: true,
          description: 'Corner, chamfer, trim, mirror operations वापरून complex profiles तयार करा.'
        },
        { 
          title: 'Advanced Sketcher Commands', 
          duration: '16:00', 
          type: 'video',
          locked: true,
          description: 'Offset, translate, rotate, pattern commands सोबत advanced sketching.'
        },
        { 
          title: 'Spline आणि Curves', 
          duration: '14:00', 
          type: 'video',
          locked: true,
          description: 'Spline curves, conic sections, आणि complex curved profiles काढणे.'
        },
        { 
          title: 'Sketcher Exercise 1', 
          duration: '12:00', 
          type: 'video',
          locked: true,
          description: 'व्यावहारिक सराव: Basic geometric shapes सोबत exercise.'
        },
        { 
          title: 'Sketcher Exercise 2', 
          duration: '14:00', 
          type: 'video',
          locked: true,
          description: 'व्यावहारिक सराव: Mechanical components ची sketches.'
        },
        { 
          title: 'Sketcher Exercise 3', 
          duration: '16:00', 
          type: 'video',
          locked: true,
          description: 'व्यावहारिक सराव: Complex profiles सोबत advanced exercise.'
        },
        { 
          title: 'Sketcher Exercise 4', 
          duration: '18:00', 
          type: 'video',
          locked: true,
          description: 'व्यावहारिक सराव: Complete project exercise with constraints.'
        },
        { 
          title: 'Pattern आणि Mirror', 
          duration: '15:00', 
          type: 'video',
          locked: true,
          description: 'Pattern आणि mirror operations वापरून repetitive features.'
        },
        { 
          title: 'Sketch Analysis', 
          duration: '12:00', 
          type: 'video',
          locked: true,
          description: 'Sketch quality check, constraint analysis, आणि optimization.'
        },
        { 
          title: 'Sketcher Final Project', 
          duration: '20:00', 
          type: 'video',
          locked: true,
          description: 'संपूर्ण project: Complex mechanical sketch with all features.'
        }
      ]
    },
    {
      title: 'Part Modelling (पार्ट मॉडेलिंग)',
      lectures: 16,
      duration: '4h 30min',
      expanded: false,
      lessons: [
        { 
          title: 'Part Design ची ओळख', 
          duration: '12:00', 
          type: 'video',
          locked: true,
          description: '3D part modeling, solid features, आणि design tree management.'
        },
        { 
          title: 'Pad आणि Pocket Operations', 
          duration: '18:00', 
          type: 'video',
          locked: true,
          description: 'Pad (extrude) आणि pocket (cut) operations सोबत 3D shapes तयार करा.'
        },
        { 
          title: 'Shaft आणि Groove', 
          duration: '15:00', 
          type: 'video',
          locked: true,
          description: 'Shaft (revolve) command सोबत cylindrical parts बनवा.'
        },
        { 
          title: 'Rib आणि Slot Features', 
          duration: '14:00', 
          type: 'video',
          locked: true,
          description: 'Rib features मजबुतीसाठी आणि slot features connection साठी.'
        },
        { 
          title: 'Hole आणि Threading', 
          duration: '16:00', 
          type: 'video',
          locked: true,
          description: 'विविध प्रकारचे holes: simple, counterbore, countersink, threaded holes.'
        },
        { 
          title: 'Fillet आणि Chamfer', 
          duration: '14:00', 
          type: 'video',
          locked: true,
          description: 'Edge blending सोबत fillet आणि chamfer operations.'
        },
        { 
          title: 'Pattern Features', 
          duration: '18:00', 
          type: 'video',
          locked: true,
          description: 'Rectangular आणि circular patterns सोबत repetitive features.'
        },
        { 
          title: 'Mirror Operations', 
          duration: '12:00', 
          type: 'video',
          locked: true,
          description: 'Mirror command वापरून symmetrical parts तयार करा.'
        },
        { 
          title: 'Multi-Section Solid', 
          duration: '20:00', 
          type: 'video',
          locked: true,
          description: 'Advanced feature: multiple profiles वापरून complex shapes.'
        },
        { 
          title: 'Shell Operation', 
          duration: '14:00', 
          type: 'video',
          locked: true,
          description: 'Shell command सोबत hollow parts तयार करा.'
        },
        { 
          title: 'Part Exercise 1 - Simple Parts', 
          duration: '20:00', 
          type: 'video',
          locked: true,
          description: 'व्यावहारिक सराव: Basic mechanical parts modeling.'
        },
        { 
          title: 'Part Exercise 2 - Flange', 
          duration: '22:00', 
          type: 'video',
          locked: true,
          description: 'व्यावहारिक सराव: Pipe flange सोबत holes आणि features.'
        },
        { 
          title: 'Part Exercise 3 - Bracket', 
          duration: '24:00', 
          type: 'video',
          locked: true,
          description: 'व्यावहारिक सराव: Mounting bracket with ribs.'
        },
        { 
          title: 'Part Exercise 4 - Housing', 
          duration: '26:00', 
          type: 'video',
          locked: true,
          description: 'व्यावहारिक सराव: Complex housing part with internal features.'
        },
        { 
          title: 'Advanced Features', 
          duration: '22:00', 
          type: 'video',
          locked: true,
          description: 'Advanced part design commands आणि techniques.'
        },
        { 
          title: 'Part Project - Complete Component', 
          duration: '30:00', 
          type: 'video',
          locked: true,
          description: 'संपूर्ण project: Industrial component ची complete modeling.'
        }
      ]
    },
    {
      title: 'Assembly Design (असेंब्ली डिझाईन)',
      lectures: 12,
      duration: '3h 15min',
      expanded: false,
      lessons: [
        { 
          title: 'Assembly Design ची ओळख', 
          duration: '15:00', 
          type: 'video',
          locked: true,
          description: 'Assembly workbench, parts insert करणे, आणि assembly structure.'
        },
        { 
          title: 'Assembly Constraints - भाग 1', 
          duration: '18:00', 
          type: 'video',
          locked: true,
          description: 'Coincidence, contact, offset constraints सोबत parts जोडणे.'
        },
        { 
          title: 'Assembly Constraints - भाग 2', 
          duration: '16:00', 
          type: 'video',
          locked: true,
          description: 'Advanced constraints: angle, fix, parallel, perpendicular.'
        },
        { 
          title: 'Quick Constraint', 
          duration: '12:00', 
          type: 'video',
          locked: true,
          description: 'Quick constraint वापरून fast assembly.'
        },
        { 
          title: 'Assembly Management', 
          duration: '14:00', 
          type: 'video',
          locked: true,
          description: 'Assembly tree management, part manipulation, आणि design updates.'
        },
        { 
          title: 'Part Manipulation', 
          duration: '12:00', 
          type: 'video',
          locked: true,
          description: 'Parts move करणे, rotate करणे, आणि reposition करणे.'
        },
        { 
          title: 'Exploded Views', 
          duration: '16:00', 
          type: 'video',
          locked: true,
          description: 'Exploded views तयार करा assembly instructions साठी.'
        },
        { 
          title: 'Bill of Materials (BOM)', 
          duration: '12:00', 
          type: 'video',
          locked: true,
          description: 'BOM generate करा, part numbers assign करा, आणि data manage करा.'
        },
        { 
          title: 'Assembly Analysis', 
          duration: '14:00', 
          type: 'video',
          locked: true,
          description: 'Interference check, clearance analysis, आणि assembly validation.'
        },
        { 
          title: 'Assembly Exercise 1', 
          duration: '25:00', 
          type: 'video',
          locked: true,
          description: 'व्यावहारिक सराव: Simple assembly सोबत constraints.'
        },
        { 
          title: 'Assembly Exercise 2', 
          duration: '28:00', 
          type: 'video',
          locked: true,
          description: 'व्यावहारिक सराव: Complex mechanical assembly.'
        },
        { 
          title: 'Assembly Project', 
          duration: '35:00', 
          type: 'video',
          locked: true,
          description: 'संपूर्ण project: Complete mechanical assembly design with BOM.'
        }
      ]
    },
    {
      title: 'Drafting Module (ड्राफ्टिंग मॉड्यूल)',
      lectures: 10,
      duration: '2h 45min',
      expanded: false,
      lessons: [
        { 
          title: 'Drafting Basics आणि Standards', 
          duration: '15:00', 
          type: 'video',
          locked: true,
          description: 'Drafting workbench, 2D drawing तयार करणे, आणि standards.'
        },
        { 
          title: 'Multiple Views Generation', 
          duration: '18:00', 
          type: 'video',
          locked: true,
          description: 'Front, top, side views automatically generate करा.'
        },
        { 
          title: 'Auxiliary Views', 
          duration: '14:00', 
          type: 'video',
          locked: true,
          description: 'Auxiliary views तयार करा angled surfaces साठी.'
        },
        { 
          title: 'Section Views', 
          duration: '16:00', 
          type: 'video',
          locked: true,
          description: 'Section views तयार करा internal features दाखवण्यासाठी.'
        },
        { 
          title: 'Detail Views', 
          duration: '12:00', 
          type: 'video',
          locked: true,
          description: 'Detail views small features magnify करण्यासाठी.'
        },
        { 
          title: 'Dimensioning', 
          duration: '20:00', 
          type: 'video',
          locked: true,
          description: 'Dimensions, tolerances, आणि annotations add करा.'
        },
        { 
          title: 'GD&T Symbols', 
          duration: '16:00', 
          type: 'video',
          locked: true,
          description: 'Geometric tolerancing symbols आणि datum references.'
        },
        { 
          title: 'Surface Finish आणि Welding Symbols', 
          duration: '14:00', 
          type: 'video',
          locked: true,
          description: 'Surface finish notations आणि welding symbols add करा.'
        },
        { 
          title: 'Title Block Design', 
          duration: '14:00', 
          type: 'video',
          locked: true,
          description: 'Custom title blocks आणि drawing templates तयार करा.'
        },
        { 
          title: 'Drafting Exercise', 
          duration: '22:00', 
          type: 'video',
          locked: true,
          description: 'व्यावहारिक सराव: Complete 2D drawing preparation with all views.'
        }
      ]
    }
  ],
  requirements: [
    'Windows 7 किंवा त्यापेक्षा नवीन Operating System असलेला संगणक',
    'CATIA V5 software (student version किंवा trial version चालेल)',
    'मराठी भाषेचे ज्ञान - सर्व lectures मराठीत असतील',
    'Engineering drawings चे basic knowledge (optional पण फायदेशीर)',
    '8GB RAM आणि dedicated graphics card recommended'
  ],
  description: `मराठी माध्यमातून CATIA V5 शिका! M CAD Solutions चा हा विशेष कोर्स पूर्णपणे मराठीत उपलब्ध आहे. आमच्या industry professionals कडून तुम्हाला practical आणि industrial-based training मिळेल.

या course मध्ये तुम्ही CATIA V5 चे सर्व modules शिकाल - Sketcher, Part Design, Assembly Design, आणि Drafting. प्रत्येक module मध्ये practical exercises आणि real-world projects असतील जे तुम्हाला industry-ready बनवतील.

M CAD Solutions ने 200+ विद्यार्थ्यांना 98% placement success सोबत प्रशिक्षित केले आहे. आमचे Marathi medium courses विशेषतः मराठी माध्यमाच्या engineering colleges मधील विद्यार्थ्यांसाठी यशस्वी ठरले आहेत.

Course मध्ये recorded lectures असतात self-paced learning साठी आणि doubt-solving sessions जिथे तुम्ही मराठीत तुमचे प्रश्न विचारू शकता. Live sessions नाहीत, पण comprehensive recorded content lifetime support सोबत.

हा course mechanical engineers, diploma students, आणि CAD शिकू इच्छिणाऱ्या सर्वांसाठी आहे. मराठी माध्यमातून शिकल्याने concepts अधिक सहज समजतील आणि तुम्ही confident होऊन industry मध्ये enter करू शकाल.`,
  includes: [
    { icon: <Video className="w-4 h-4" />, text: '45+ तास detailed video lectures मराठीत' },
    { icon: <FileText className="w-4 h-4" />, text: '15 practice files आणि project resources' },
    { icon: <Download className="w-4 h-4" />, text: 'Exercise files आणि templates download' },
    { icon: <Clock className="w-4 h-4" />, text: '1 वर्ष संपूर्ण access with doubt-solving' },
    { icon: <Smartphone className="w-4 h-4" />, text: 'Mobile, tablet आणि computer वर access' },
    { icon: <Award className="w-4 h-4" />, text: 'M CAD Solutions चे certificate' }
  ],
  youtubeChannel: 'https://www.youtube.com/@mcadsolutionenglish',
  freeVideosAvailable: 3
}

};


const CoursePage: React.FC = () => {
  const router = useRouter();
  const params = useParams();
  const courseId = Array.isArray(params.courseId) ? params.courseId[0] : params.courseId;
  const course = courseId ? coursesData[courseId] : undefined;

  const [expandedSection, setExpandedSection] = useState<number | null>(0);
  const [playingVideo, setPlayingVideo] = useState<Lesson | null>(null);

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4 text-gray-900">Course Not Found</h1>
          <p className="text-gray-600 mb-6">The course you&apos;re looking for doesn&apos;t exist.</p>
          <button 
            onClick={() => router.push('/landing')}
            className="bg-orange-600 text-white px-8 py-3 rounded-md hover:bg-orange-700 transition"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  const toggleSection = (index: number): void => {
    setExpandedSection(expandedSection === index ? null : index);
  };

  const handleVideoClick = (lesson: Lesson): void => {
    if (lesson.free && lesson.videoId) {
      setPlayingVideo(lesson);
    }
  };

  const handlePhoneCall = (): void => {
    window.location.href = 'tel:+919172969859';
  };

  const handleWhatsApp = (): void => {
    window.open('https://wa.me/+919172969859?text=Hi, I want to enroll in ' + course.title, '_blank');
  };

return (
  <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
    {/* Video Player Modal - DARK MODE */}
    {playingVideo && (
      <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
        <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden max-w-5xl w-full">
          <div className="flex justify-between items-center p-4 border-b dark:border-gray-700">
            <h3 className="font-bold text-base md:text-lg dark:text-white">{playingVideo.title}</h3>
            <button 
              onClick={() => setPlayingVideo(null)}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="aspect-video">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${playingVideo.videoId}?autoplay=1`}
              title={playingVideo.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-4 bg-gray-50 dark:bg-gray-700">
            <p className="text-sm text-gray-700 dark:text-gray-300">{playingVideo.description}</p>
            <div className="mt-3 flex gap-2">
              <a 
                href={course.youtubeChannel} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-orange-600 dark:text-orange-400 hover:underline flex items-center gap-1"
              >
                <ExternalLink className="w-4 h-4" />
                Watch more on YouTube
              </a>
            </div>
          </div>
        </div>
      </div>
    )}

    {/* Navigation - DARK MODE */}
    <nav className="bg-gray-900 dark:bg-gray-950 text-white sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4 md:space-x-8">
            <button 
              onClick={() => router.push('/')}
              className="flex items-center space-x-2 text-orange-400 hover:text-orange-300 transition text-sm md:text-base"
            >
              <ArrowLeft className="w-4 h-4 md:w-5 md:h-5" />
              <span>Back to Courses</span>
            </button>
            <span className="text-lg md:text-xl font-bold hidden sm:inline">M CAD Solutions</span>
          </div>
          <div className="flex items-center space-x-3 md:space-x-6">
            <a href={course.youtubeChannel} target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 text-xs md:text-sm hidden sm:inline">
              Free Videos
            </a>
           <button
  onClick={handlePhoneCall}
  className="flex items-center gap-2 border border-white px-3 py-1.5 md:px-4 md:py-2 rounded hover:bg-gray-800 text-xs md:text-sm"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-4 h-4 md:w-5 md:h-5"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M22.707 16.081l-4.194-1.797a1 1 0 0 0-1.021.147l-2.548 2.068a16.091 16.091 0 0 1-7.437-7.437l2.068-2.548a1 1 0 0 0 .147-1.021L7.925 1.293A1 1 0 0 0 6.87.675L2.935 1.623a1 1 0 0 0-.777.972c.003 11.046 8.946 19.989 19.992 19.992a1 1 0 0 0 .972-.777l.948-3.935a1 1 0 0 0-.363-.794z" />
  </svg>
  Call now
</button>

            <button className="bg-orange-600 text-white px-4 py-1.5 md:px-6 md:py-2 rounded   text-xs md:text-sm"
            onClick={() => router.push('https://web.classplusapp.com/login')}>
              Enroll Now (Org Code : ECWYN)
            </button>
          </div>
        </div>
      </div>
    </nav>

    {/* Course Header - DARK MODE */}
    <header className="bg-gray-900 dark:bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 md:pt-8 pb-32 md:pb-48">
        <div className="lg:w-7/12">
          <div className="text-xs md:text-sm mb-3 md:mb-4 text-orange-400">
            {course.category.map((cat, idx) => (
              <span key={idx}>
                <span>{cat}</span>
                {idx < course.category.length - 1 && <span> &gt; </span>}
              </span>
            ))}
          </div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
            {course.title}
          </h1>
          <p className="text-gray-300 mb-3 md:mb-4 text-base md:text-lg">
            {course.subtitle}
          </p>
          <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4 flex-wrap">
            {course.bestseller && (
              <span className="bg-yellow-400 text-gray-900 px-2 py-1 text-xs font-bold rounded">Bestseller</span>
            )}
            <div className="flex items-center gap-2">
              <span className="text-yellow-400 font-bold text-sm md:text-base">{course.rating}</span>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-3 h-3 md:w-4 md:h-4 ${i < Math.floor(course.rating) ? 'text-yellow-400 fill-current' : 'text-gray-400'}`} />
                ))}
              </div>
              <span className="text-orange-400 underline text-xs md:text-sm">({course.reviews} ratings)</span>
              <span className="text-xs md:text-sm">{course.students?.toLocaleString()} students</span>
            </div>
          </div>
          {course.freeVideosAvailable && (
            <div className="bg-green-600 bg-opacity-20 border border-green-400 rounded-lg px-3 md:px-4 py-2 mb-3 md:mb-4 inline-block">
              <span className="text-green-300 text-xs md:text-sm font-semibold">
                🎁 {course.freeVideosAvailable} Free Preview Videos Available!
              </span>
            </div>
          )}
          <div className="text-xs md:text-sm text-gray-300">
            Created by <span className="text-orange-400">M CAD Solutions</span>
          </div>
          <div className="flex items-center gap-3 md:gap-4 mt-2 text-xs md:text-sm text-gray-300 flex-wrap">
            <span>● Last updated {course.lastUpdated}</span>
            <span className="flex items-center gap-1"><Globe className="w-3 h-3 md:w-4 md:h-4" /> {course.language}</span>
            {course.subtitles && <span className="hidden sm:inline">Subtitles: {course.subtitles.join(', ')}</span>}
          </div>
        </div>
      </div>
    </header>

    {/* Main Content - DARK MODE */}
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 md:-mt-40">
      <div className="lg:flex lg:gap-8 items-start">
        
        {/* Left Column */}
        <div className="flex-1 min-w-0 mb-6 lg:mb-0">
          {/* What you'll learn - DARK MODE */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 md:p-8 mb-6 md:mb-8">
            <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 dark:text-white">What you will learn</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
              {course.whatYouLearn?.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-orange-600 dark:text-orange-400 flex-shrink-0 mt-0.5" />
                  <span className="text-xs md:text-sm dark:text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Course Content - DARK MODE */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 md:p-8 mb-6 md:mb-8">
            <div className="flex justify-between items-center mb-4 md:mb-6">
              <h2 className="text-xl md:text-2xl font-bold dark:text-white">Course content</h2>
              <button 
                onClick={() => setExpandedSection(expandedSection === null ? 0 : null)}
                className="text-orange-600 dark:text-orange-400 hover:underline text-xs md:text-sm font-semibold"
              >
                {expandedSection === null ? 'Expand all' : 'Collapse all'}
              </button>
            </div>
            <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400 mb-4">
              {course.sections?.length} sections • {course.videos} lectures • {course.duration} total length
            </div>
            
            <div className="border dark:border-gray-700 rounded-lg divide-y dark:divide-gray-700">
              {course.sections?.map((section, sectionIdx) => (
                <div key={sectionIdx}>
                  <button
                    onClick={() => toggleSection(sectionIdx)}
                    className="w-full p-3 md:p-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition flex justify-between items-center text-left"
                  >
                    <div className="flex items-center gap-2 md:gap-3 flex-1">
                      {expandedSection === sectionIdx ? (
                        <ChevronUp className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0 dark:text-gray-300" />
                      ) : (
                        <ChevronDown className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0 dark:text-gray-300" />
                      )}
                      <span className="font-semibold text-xs md:text-base dark:text-white">{section.title}</span>
                    </div>
                    <span className="text-xs md:text-sm text-gray-600 dark:text-gray-400">{section.lectures} lectures • {section.duration}</span>
                  </button>
                  
                  {expandedSection === sectionIdx && section.lessons && (
                    <div className="bg-gray-50 dark:bg-gray-700 divide-y dark:divide-gray-600">
                      {section.lessons.map((lesson, lessonIdx) => (
                        <div 
                          key={lessonIdx} 
                          className={`p-3 md:p-4 ${lesson.free && lesson.videoId ? 'cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600' : ''}`}
                          onClick={() => lesson.free && lesson.videoId && handleVideoClick(lesson)}
                        >
                          <div className="flex justify-between items-start gap-4">
                            <div className="flex items-start gap-2 md:gap-3 flex-1">
                              {lesson.locked ? (
                                <Lock className="w-4 h-4 md:w-5 md:h-5 text-gray-400 dark:text-gray-500 flex-shrink-0 mt-0.5" />
                              ) : (
                                <Play className="w-4 h-4 md:w-5 md:h-5 text-orange-600 dark:text-orange-400 flex-shrink-0 mt-0.5" />
                              )}
                              <div className="flex-1">
                                <div className="flex items-center gap-2 mb-1 flex-wrap">
                                  <span className="text-xs md:text-sm font-medium dark:text-white">{lesson.title}</span>
                                  {lesson.free && (
                                    <span className="text-xs bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 px-2 py-0.5 rounded font-semibold">
                                      FREE PREVIEW
                                    </span>
                                  )}
                                </div>
                                {lesson.description && (
                                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">{lesson.description}</p>
                                )}
                                {lesson.free && lesson.videoId && lesson.thumbnail && (
                                  <div className="mt-2">
                                    {/* <Image
                                      src={lesson.thumbnail}
                                      alt={lesson.title}
                                      width={320}
                                      height={180}
                                      className="w-full max-w-xs rounded border border-gray-200 dark:border-gray-600 hover:border-orange-400 dark:hover:border-orange-400 transition"
                                    /> */}
                                  </div>
                                )}
                              </div>
                            </div>
                            <span className="text-xs md:text-sm text-gray-600 dark:text-gray-400 flex-shrink-0">{lesson.duration}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* YouTube Channel Link - DARK MODE */}
            
          </div>

          {/* Requirements - DARK MODE */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 md:p-8 mb-6 md:mb-8">
            <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 dark:text-white">Requirements</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 text-sm md:text-base">
              {course.requirements?.map((req, idx) => (
                <li key={idx}>{req}</li>
              ))}
            </ul>
          </div>

          {/* Description - DARK MODE */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 md:p-8 mb-6 md:mb-8">
            <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 dark:text-white">Description</h2>
            {course.description?.split('\n\n').map((para, idx) => (
              <p key={idx} className="text-gray-700 dark:text-gray-300 mb-4 text-sm md:text-base">{para}</p>
            ))}
          </div>

          {/* Instructors - DARK MODE */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 md:p-8 mb-6 md:mb-8">
            <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 dark:text-white">Instructors</h2>
            
            {course.instructors?.map((instructor, idx) => (
              <div key={idx} className="mb-6 md:mb-8 last:mb-0">
                <h3 className="text-orange-600 dark:text-orange-400 text-base md:text-lg font-semibold">{instructor.name}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-xs md:text-sm mb-3 md:mb-4">{instructor.title}</p>
                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-orange-400 to-blue-500 rounded-full flex-shrink-0 flex items-center justify-center text-white text-2xl md:text-3xl font-bold">
                    {instructor.name.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <div className="grid grid-cols-2 gap-2 text-xs md:text-sm mb-3 md:mb-4">
                      <div className="flex items-center gap-2 dark:text-gray-300">
                        <Star className="w-3 h-3 md:w-4 md:h-4 text-yellow-400" />
                        <span>{instructor.rating} Instructor Rating</span>
                      </div>
                      <div className="flex items-center gap-2 dark:text-gray-300">
                        <Award className="w-3 h-3 md:w-4 md:h-4" />
                        <span>{instructor.reviewCount?.toLocaleString()} Reviews</span>
                      </div>
                      <div className="flex items-center gap-2 dark:text-gray-300">
                        <Video className="w-3 h-3 md:w-4 md:h-4" />
                        <span>{instructor.studentCount?.toLocaleString()} Students</span>
                      </div>
                      {instructor.courseCount && (
                        <div className="flex items-center gap-2 dark:text-gray-300">
                          <Play className="w-3 h-3 md:w-4 md:h-4" />
                          <span>{instructor.courseCount} Courses</span>
                        </div>
                      )}
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 text-xs md:text-sm">
                      {instructor.bio}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Reviews - DARK MODE */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 md:p-8 mb-6 md:mb-8">
            <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
              <Star className="w-6 h-6 md:w-8 md:h-8 text-yellow-400 fill-current" />
              <h2 className="text-xl md:text-2xl font-bold dark:text-white">{course.rating} course rating • {course.reviews} ratings</h2>
            </div>
            <h3 className="font-semibold mb-4 md:mb-6 dark:text-white text-sm md:text-base">Student Reviews</h3>
            
            <div className="space-y-4 md:space-y-6">
              <div className="border-b dark:border-gray-700 pb-4 md:pb-6">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-orange-400 to-blue-500 rounded-full flex-shrink-0 flex items-center justify-center text-white font-bold text-sm md:text-base">
                    R
                  </div>
                  <div className="flex-1">
                    <span className="font-semibold dark:text-white text-sm md:text-base">Rahul P.</span>
                    <div className="flex items-center gap-2 my-2">
                      {[...Array(5)].map((_, i) => (<Star key={i} className="w-3 h-3 md:w-4 md:h-4 text-yellow-400 fill-yellow-400" />))}
                      <span className="text-xs md:text-sm text-gray-600 dark:text-gray-400">2 weeks ago</span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 text-xs md:text-sm">
                      Excellent course by M CAD Solutions! The free preview videos helped me understand the teaching style. The instructors are industry experts and the practical projects really helped me. Got placed in a leading automotive company within 2 months. Highly recommended!
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-b dark:border-gray-700 pb-4 md:pb-6">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-orange-400 to-blue-500 rounded-full flex-shrink-0 flex items-center justify-center text-white font-bold text-sm md:text-base">
                    P
                  </div>
                  <div className="flex-1">
                    <span className="font-semibold dark:text-white text-sm md:text-base">Priya S.</span>
                    <div className="flex items-center gap-2 my-2">
                      {[...Array(5)].map((_, i) => (<Star key={i} className="w-3 h-3 md:w-4 md:h-4 text-yellow-400 fill-yellow-400" />))}
                      <span className="text-xs md:text-sm text-gray-600 dark:text-gray-400">1 month ago</span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 text-xs md:text-sm">
                      The course content is very well structured and covers everything from basics to advanced topics. The video thumbnails and descriptions helped me choose the right course. The lifetime access and doubt-solving support is a great feature!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Sticky Card - DARK MODE */}
        <div className="lg:w-96 lg:sticky lg:top-24 space-y-4 md:space-y-6 flex-shrink-0">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden">
            <div className="relative h-48 md:h-56 bg-gradient-to-br from-orange-500 to-blue-600 flex items-center justify-center overflow-hidden">
  {/* Course Image */}
  <div className="absolute inset-0">
    <Image
      src={
        courseId === 'catia-v5-english' ? '/catiaveng.png' :
        courseId === 'catia-v5-marathi' ? '/catiav5marathi.png' :
        courseId === 'biw-fixture-3d-english' ? '/biwfixture.png' :
        courseId === 'biw-fixture-2d-english' ? '/biwfixture2d.png' :
        '/catiaveng.png' // default fallback
      }
      alt={course.title}
      fill
      className="object-cover opacity-80"
      priority
    />
    {/* Gradient Overlay */}
    {/* <div className="absolute inset-0 bg-gradient-to-br from-orange-500/50 to-blue-600/50"></div> */}
  </div>
  
  {/* Text Content */}
  <div className="relative z-10 text-center text-white p-6 md:p-8">
    <h3 className="text-xl md:text-2xl font-bold mb-2 drop-shadow-lg">
      {/* {course.title.split(' - ')[0]} */}
    </h3>
    <p className="text-xs md:text-sm drop-shadow-md">
      {/* {course.language} • {course.access} */}
    </p>
  </div>
</div>

            <div className="p-5 md:p-6">
              <div className="mb-4">
                <div className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">{course.price}</div>
                <div className="text-gray-500 dark:text-gray-400 line-through text-sm md:text-base">{course.originalPrice}</div>
                <div className="text-red-500 dark:text-red-400 font-semibold text-sm md:text-base">{course.discount}</div>
              </div>
              <div className="text-red-500 dark:text-red-400 text-xs md:text-sm font-semibold mb-4">⏰ Limited time offer!</div>
              
                <button 
                  className="w-full bg-orange-600 text-white py-3 rounded font-semibold mb-2  opacity-70 text-sm md:text-base"
                  onClick={() => router.push('https://web.classplusapp.com/login')}
                >
                  Enroll Now (Org Code : ECWYN)
                </button>
              
              <button 
                onClick={handleWhatsApp}
                className="w-full bg-green-500 text-white py-3 rounded font-semibold hover:bg-green-600 transition mb-2 text-sm md:text-base"
              >
                Contact on WhatsApp
              </button>
              
              <button 
                onClick={handlePhoneCall}
                className="w-full border border-gray-900 dark:border-gray-600 text-gray-900 dark:text-gray-200 py-3 rounded font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition text-sm md:text-base"
              >
                Call: +91 91729 69859
              </button>
              
              {/* <div className="text-center text-xs md:text-sm text-gray-500 dark:text-gray-400 mt-2">100% Money-Back Guarantee</div> */}

              <div className="mt-4 md:mt-6">
                <h4 className="font-semibold mb-3 text-gray-900 dark:text-white text-sm md:text-base">This course includes:</h4>
                <div className="space-y-2 text-xs md:text-sm text-gray-700 dark:text-gray-300">
                  {course.includes?.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      {item.icon}
                      <span>{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 md:mt-6 pt-4 md:pt-6 border-t dark:border-gray-700">
                <h4 className="font-semibold mb-3 text-gray-900 dark:text-white text-sm md:text-base">Special Features:</h4>
                <div className="space-y-2 text-xs md:text-sm text-gray-700 dark:text-gray-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-green-600 dark:text-green-400" />
                    <span>98% Placement Support</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-green-600 dark:text-green-400" />
                    <span>Industry Expert Instructors</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-green-600 dark:text-green-400" />
                    <span>Real Industrial Projects</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-green-600 dark:text-green-400" />
                    <span>Lifetime Doubt Solving</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-5 md:p-6">
            <h4 className="font-semibold mb-3 text-gray-900 dark:text-white text-sm md:text-base">Award-Winning Institute</h4>
            <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300 mb-4">
              Maharashtra Udyog Bhushan Award 2022 Winner. Join 255+ successfully placed students.
            </p>
            <div className="text-xs md:text-sm space-y-2">
              <div className="flex items-center gap-2 text-orange-600 dark:text-orange-400">
                <Phone className="w-3 h-3 md:w-4 md:h-4" />
                  <button >
                <span className="font-semibold" onClick={handlePhoneCall}>+91 91729 69859</span>
                </button>
               
              </div>
              <div className="flex items-center gap-2 text-orange-600 dark:text-orange-400">
                <Phone className="w-3 h-3 md:w-4 md:h-4"  />
                <span className="font-semibold" onClick={handlePhoneCall}>+91 9096708490</span>
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

    {/* Footer - DARK MODE */}
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-6 md:py-8 mt-8 md:mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-xs md:text-sm text-gray-400">
          © 2025 M CAD Solutions, Pune. All rights reserved. | NSDC Authorized Center
        </div>
      </div>
    </footer>
  </div>
);

}


export default CoursePage;