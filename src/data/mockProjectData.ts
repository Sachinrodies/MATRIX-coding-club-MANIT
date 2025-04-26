import { ProjectIdea } from '../types/project';

export const mockProjects: ProjectIdea[] = [
  {
    id: 'project-7',
    title: 'Library QR Code Entry-Exit System',
    description: 'A digital solution to replace manual library attendance tracking. Students can scan QR codes to record their entry and exit times automatically. The system provides daily, weekly, and monthly progress reports, while faculty can analyze attendance data with various filters.',
    difficulty: 'Intermediate',
    category: 'Web Development',
    tags: ['QR Code', 'Authentication', 'Data Analytics', 'Admin Dashboard'],
    githubUrl: 'https://github.com/matrix-coding-club/library-attendance',
    websiteUrl: 'https://att-lib.manit.ac.in/',
    requirements: [
      'QR code generation and scanning functionality',
      'Student authentication using Scholar ID',
      'Automatic time recording for entry and exit',
      'Progress reports and analytics dashboard',
      'Admin panel for faculty access',
      'Data export and visualization features',
      'Real-time attendance monitoring'
    ]
  },
  {
    id: 'project-8',
    title: 'NIT Bhopal Automated Placement System',
    description: 'A comprehensive placement management system designed specifically for NIT Bhopal, revolutionizing the job application and placement experience. The system offers automated features for both students and coordinators, streamlining the entire placement process.',
    difficulty: 'Advanced',
    category: 'Web Development',
    tags: ['Placement', 'Automation', 'Job Portal', 'Student Management'],
    githubUrl: 'https://github.com/priya-tripathi/Placement-Management-System',
    requirements: [
      'Real-time job posting and management',
      'Student profile and resume management',
      'Automated scheduling system for recruitment rounds',
      'Personalized calendar for students',
      'Application tracking and progress monitoring',
      'Offer acceptance and application closure system',
      'Data export and reporting features',
      'Conflict-free scheduling for coordinators'
    ]
  }
];