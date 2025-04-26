import { Announcement } from '../types/announcement';

export const mockAnnouncements: Announcement[] = [
  {
    id: 'announcement-1',
    title: 'Upcoming Contest: DSA Sprint #2.5',
    content: 'We are excited to announce our next coding contest: Matrix Code Sprint! This will be a fast-paced contest focusing on time complexity and optimization. Register now to participate and improve your competitive programming skills.',
    createdAt: 'May 05, 2025',
    contestDate: 'May 05, 2025',
    contestTime: '9:00 PM IST',
    topics: ['Recursion', 'Time Complexity', 'Optimization', 'Problem Solving']
  },
  {
    id: 'announcement-3',
    title: 'Open Source Contribution Drive',
    content: 'Join our month-long open source contribution drive! We\'ll be helping students make their first open-source contributions, understand Git workflows, and collaborate on real-world projects. Mentors will be available to guide participants.',
    createdAt: 'May 15, 2025',
    contestDate: 'May 1-31, 2025',
    topics: ['Open Source', 'Git', 'Collaboration', 'Software Development']
  },
  {
    id: 'announcement-4',
    title: 'Results: Weekly DSA Challenge #32',
    content: 'The results for Weekly DSA Challenge #32 are now available! Congratulations to all participants, especially our top performers. Check the contest page for the full leaderboard and problem solutions.',
    createdAt: 'May 16, 2025'
  }
];