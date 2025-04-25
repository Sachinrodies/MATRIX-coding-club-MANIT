import { ProjectIdea } from '../types/project';

export const mockProjects: ProjectIdea[] = [
  {
    id: 'project-1',
    title: 'Smart Campus Navigation System',
    description: 'Develop a mobile application that helps students navigate the MANIT campus efficiently. The app should include features like shortest path finding, classroom locator, event notifications, and crowd density predictions for various campus locations.',
    difficulty: 'Intermediate',
    category: 'Mobile Development',
    tags: ['React Native', 'Maps API', 'Backend', 'Pathfinding Algorithms'],
    githubUrl: 'https://github.com/matrix-coding-club/campus-navigation',
    requirements: [
      'User authentication system',
      'Interactive campus map with building information',
      'Shortest path calculation between two points',
      'Real-time updates for events and announcements',
      'Admin panel for managing locations and events'
    ]
  },
  {
    id: 'project-2',
    title: 'Code Review and Collaboration Platform',
    description: 'Create a platform specifically designed for code reviews and collaborative coding. The platform should allow students to share code snippets, receive feedback, and collaborate on programming assignments and projects.',
    difficulty: 'Advanced',
    category: 'Web Development',
    tags: ['Full Stack', 'Real-time Collaboration', 'Code Syntax Highlighting'],
    githubUrl: 'https://github.com/matrix-coding-club/code-collab',
    requirements: [
      'User profiles with coding statistics',
      'Code editor with syntax highlighting',
      'Real-time collaborative editing',
      'Version control integration',
      'Comment and review system',
      'Code execution environment'
    ]
  },
  {
    id: 'project-3',
    title: 'Automated Competitive Programming Judge',
    description: 'Build a lightweight, self-hosted competitive programming judge system that can be used for local contests within MANIT. The system should be able to evaluate submissions against test cases, provide detailed feedback, and maintain a leaderboard.',
    difficulty: 'Advanced',
    category: 'Systems Programming',
    tags: ['Docker', 'Backend', 'Programming Languages', 'Algorithms'],
    githubUrl: 'https://github.com/matrix-coding-club/contest-judge',
    requirements: [
      'Secure code execution environment',
      'Support for multiple programming languages',
      'Efficient test case evaluation',
      'Time and memory constraints enforcement',
      'Detailed feedback on submissions',
      'Contest management system',
      'Real-time leaderboard'
    ]
  },
  {
    id: 'project-4',
    title: 'Tech Event Management System',
    description: 'Develop a comprehensive event management system specifically designed for technical events like hackathons, workshops, and coding competitions. The system should handle registrations, team formation, event scheduling, and result announcements.',
    difficulty: 'Intermediate',
    category: 'Web Development',
    tags: ['Full Stack', 'Database Design', 'UI/UX', 'Authentication'],
    githubUrl: 'https://github.com/matrix-coding-club/event-manager',
    requirements: [
      'User and team registration',
      'Event creation and management',
      'Schedule builder with notifications',
      'Resource allocation for venues and equipment',
      'Result calculation and announcement',
      'Certificate generation',
      'Feedback collection and analysis'
    ]
  },
  {
    id: 'project-5',
    title: 'AI-Powered Code Mentor',
    description: 'Create an AI-based code mentoring tool that can analyze student code, identify potential issues or improvements, and provide personalized learning recommendations based on the student\'s coding patterns and mistakes.',
    difficulty: 'Advanced',
    category: 'Artificial Intelligence',
    tags: ['Machine Learning', 'NLP', 'Static Analysis', 'Education Tech'],
    githubUrl: 'https://github.com/matrix-coding-club/ai-code-mentor',
    requirements: [
      'Code analysis engine for multiple languages',
      'Pattern recognition for common mistakes',
      'Personalized feedback generation',
      'Learning resource recommendations',
      'Progress tracking and skill assessment',
      'Integration with popular IDEs'
    ]
  },
  {
    id: 'project-6',
    title: 'Algorithm Visualization Platform',
    description: 'Build an interactive web platform for visualizing algorithms and data structures. The platform should allow users to see step-by-step execution of various algorithms, modify inputs, and understand the underlying concepts through visual representations.',
    difficulty: 'Intermediate',
    category: 'Educational Tools',
    tags: ['Interactive Visualization', 'Algorithms', 'Frontend', 'Educational'],
    githubUrl: 'https://github.com/matrix-coding-club/algo-viz',
    requirements: [
      'Interactive visualization of common algorithms',
      'Step-by-step execution with explanations',
      'User-configurable inputs and parameters',
      'Performance comparison between algorithms',
      'Saving and sharing capabilities',
      'Comprehensive library of algorithms and data structures'
    ]
  }
];