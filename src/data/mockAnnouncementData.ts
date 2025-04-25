import { Announcement } from '../types/announcement';

export const mockAnnouncements: Announcement[] = [
  {
    id: 'announcement-1',
    title: 'Upcoming Contest: Matrix Code Sprint',
    content: 'We are excited to announce our next coding contest: Matrix Code Sprint! This will be a fast-paced contest focusing on time complexity and optimization. Register now to participate and improve your competitive programming skills.',
    createdAt: 'April 5, 2025',
    contestDate: 'April 20, 2025',
    contestTime: '7:00 PM IST',
    topics: ['Algorithms', 'Time Complexity', 'Optimization', 'Problem Solving']
  },
  {
    id: 'announcement-2',
    title: 'Web Development Workshop Series',
    content: 'Matrix Coding Club is organizing a series of workshops on modern web development technologies. The workshops will cover React, Next.js, GraphQL, and more. Open to all MCA students regardless of experience level.',
    createdAt: 'April 25, 2025',
    contestDate: 'April 10-15, 2025',
    contestTime: '5:00 PM - 7:00 PM IST',
    topics: ['React', 'Next.js', 'GraphQL', 'Web Development']
  },
  {
    id: 'announcement-3',
    title: 'Open Source Contribution Drive',
    content: 'Join our month-long open source contribution drive! We\'ll be helping students make their first open-source contributions, understand Git workflows, and collaborate on real-world projects. Mentors will be available to guide participants.',
    createdAt: 'April 15, 2025',
    contestDate: 'April 1-31, 2025',
    topics: ['Open Source', 'Git', 'Collaboration', 'Software Development']
  },
  {
    id: 'announcement-4',
    title: 'Results: Weekly DSA Challenge #32',
    content: 'The results for Weekly DSA Challenge #32 are now available! Congratulations to all participants, especially our top performers. Check the contest page for the full leaderboard and problem solutions.',
    createdAt: 'April 16, 2025'
  }
];