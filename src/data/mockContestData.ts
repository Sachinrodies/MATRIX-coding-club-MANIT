import { Contest, Problem, Participant } from '../types/contest';

export const mockContests: Contest[] = [
  {
    id: 'contest-14',
    title: 'DSA Sprint #2.5',
    description: 'A competitive programming contest focusing on Data Structures and Algorithms. Test your skills in solving complex problems efficiently.',
    date: '2025-05-05T21:00:00',
    duration: '60 minutes',
    problemCount: 6,
    participantsCount: 0,
    status: 'upcoming',
    externalLink: 'https://www.hackerrank.com/contests/dsa-sprint-2-5'
  },
  {
    id: 'contest-13',
    title: 'DSA Sprint #2.4',
    description: 'A competitive programming contest focusing on Data Structures and Algorithms. Test your skills in solving complex problems efficiently.',
    date: '2025-04-25T09:30:00',
    duration: '60 minutes',
    problemCount: 6,
    participantsCount:12,
    status: 'completed',
    externalLink: 'https://www.hackerrank.com/contests/dsa-sprint-2-4'
  },
  {
    id: 'contest-12',
    title: 'DSA Sprint #2.3',
    description: 'A competitive programming contest focusing on Data Structures and Algorithms. Test your skills in solving complex problems efficiently.',
    date: '2025-04-13T10:00:00',
    duration: '60 minutes',
    problemCount: 6,
    participantsCount:10,
    status: 'completed',
    externalLink: 'https://www.hackerrank.com/dsa-sprint-2-3'
  },
  {
    id: 'contest-12',
    title: 'DSA Sprint #2.3',
    description: 'A competitive programming contest focusing on Data Structures and Algorithms. Test your skills in solving complex problems efficiently.',
    date: '2025-04-13T10:00:00',
    duration: '60 minutes',
    problemCount: 6,
    participantsCount:10,
    status: 'completed',
    externalLink: 'https://www.hackerrank.com/dsa-sprint-2-3'
  },
  {
    id: 'contest-12',
    title: 'DSA Sprint #2.2',
    description: 'A competitive programming contest focusing on Data Structures and Algorithms. Test your skills in solving complex problems efficiently.',
    date: '2025-03-27T10:00:00',
    duration: '60 minutes',
    problemCount: 4,
    participantsCount:12,
    status: 'completed',
    externalLink: 'https://www.hackerrank.com/dsa-sprint-2-2'
  },
  {
    id: 'contest-11',
    title: 'DSA Sprint #2.1',
    description: 'A competitive programming contest focusing on Data Structures and Algorithms. Test your skills in solving complex problems efficiently.',
    date: '2025-03-03T09:00:00',
    duration: '60 minutes',
    problemCount: 3,
    participantsCount:27,
    status: 'completed',
    externalLink: 'https://www.hackerrank.com/dsa-sprint-2-1'
  },
  {
    id: 'contest-10',
    title: 'DSA Sprint #2.0',
    description: 'A competitive programming contest focusing on Data Structures and Algorithms. Test your skills in solving complex problems efficiently.',
    date: '2025-02-15T09:00:00',
    duration: '60 minutes',
    problemCount: 7,
    participantsCount:25,
    status: 'completed',
    externalLink: 'https://www.hackerrank.com/dsa-sprint-2-0'
  },
  {
    id: 'contest-9',
    title: 'DSA Sprint #1.9',
    description: 'A competitive programming contest focusing on Data Structures and Algorithms. Test your skills in solving complex problems efficiently.',
    date: '2025-02-07T09:00:00',
    duration: '60 minutes',
    problemCount: 5,
    participantsCount:35,
    status: 'completed',
    externalLink: 'https://www.hackerrank.com/dsa-sprint-1-9'
  },
  {
    id: 'contest-8',
    title: 'DSA Sprint #1.8',
    description: 'A competitive programming contest focusing on Data Structures and Algorithms. Test your skills in solving complex problems efficiently.',
    date: '2025-01-30T09:00:00',
    duration: '60 minutes',
    problemCount: 5,
    participantsCount:22,
    status: 'completed',
    externalLink: 'https://www.hackerrank.com/dsa-sprint-1-8'
  },
  {
    id: 'contest-7',
    title: 'DSA Sprint #1.7',
    description: 'A competitive programming contest focusing on Data Structures and Algorithms. Test your skills in solving complex problems efficiently.',
    date: '2025-01-20T09:00:00',
    duration: '60 minutes',
    problemCount: 4,
    participantsCount:37,
    status: 'completed',
    externalLink: 'https://www.hackerrank.com/dsa-sprint-1-7'
  },
  {
    id: 'contest-6',
    title: 'DSA Sprint #1.6',
    description: 'A competitive programming contest focusing on Data Structures and Algorithms. Test your skills in solving complex problems efficiently.',
    date: '2025-01-11T10:00:00',
    duration: '60 minutes',
    problemCount: 5,
    participantsCount:30,
    status: 'completed',
    externalLink: 'https://www.hackerrank.com/dsa-sprint-1-6'
  },
  {
    id: 'contest-5',
    title: 'DSA Sprint #1.5',
    description: 'A competitive programming contest focusing on Data Structures and Algorithms. Test your skills in solving complex problems efficiently.',
    date: '2024-12-26T09:03:00',
    duration: '60 minutes',
    problemCount: 8,
    participantsCount:27,
    status: 'completed',
    externalLink: 'https://www.hackerrank.com/dsa-sprint-1-5'
  },
  {
    id: 'contest-5',
    title: 'DSA Sprint #1.4',
    description: 'A competitive programming contest focusing on Data Structures and Algorithms. Test your skills in solving complex problems efficiently.',
    date: '2024-12-19T09:03:00',
    duration: '60 minutes',
    problemCount: 5,
    participantsCount:29,
    status: 'completed',
    externalLink: 'https://www.hackerrank.com/dsa-sprint-1-4'
  },
  {
    id: 'contest-4',
    title: 'DSA Sprint #1.3',
    description: 'A competitive programming contest focusing on Data Structures and Algorithms. Test your skills in solving complex problems efficiently.',
    date: '2024-12-12T09:03:00',
    duration: '60 minutes',
    problemCount: 6,
    participantsCount:37,
    status: 'completed',
    externalLink: 'https://www.hackerrank.com/dsa-sprint-1-3'
  },
  {
    id: 'contest-3',
    title: 'DSA Sprint #1.2',
    description: 'A competitive programming contest focusing on Data Structures and Algorithms. Test your skills in solving complex problems efficiently.',
    date: '2024-12-03T09:00:00',
    duration: '60 minutes',
    problemCount: 5,
    participantsCount:22,
    status: 'completed',
    externalLink: 'https://www.hackerrank.com/dsa-sprint-1-2'
  },
  {
    id: 'contest-2',
    title: 'DSA Sprint #1.1',
    description: 'A competitive programming contest focusing on Data Structures and Algorithms. Test your skills in solving complex problems efficiently.',
    date: '2024-11-15T09:00:00',
    duration: '55 minutes',
    problemCount: 6,
    participantsCount:69,
    status: 'completed',
    externalLink: 'https://www.hackerrank.com/dsa-sprint-1-1'
  },
  {
    id: 'contest-1',
    title: 'DSA Sprint #1.0',
    description: 'A competitive programming contest focusing on Data Structures and Algorithms. Test your skills in solving complex problems efficiently.',
    date: '2024-11-07T09:00:00',
    duration: '45 minutes',
    problemCount: 6,
    participantsCount:77,
    status: 'completed',
    externalLink: 'https://www.hackerrank.com/dsa-sprint-mca27'
  }
];

export const mockProblems: Problem[] = [
  {
    id: 'problem-1',
    contestId: 'contest-1',
    name: 'Connected Components',
    description: 'Find the number of connected components in an undirected graph.',
    difficulty: 'Medium',
    tags: ['Graphs', 'DFS', 'Connected Components'],
    submissions: 98,
    expectedOutput: '3',
    timeLimit: '1 second',
    memoryLimit: '256 MB'
  },
  {
    id: 'problem-2',
    contestId: 'contest-1',
    name: 'Maximum Subarray Sum',
    description: 'Find the contiguous subarray within an array which has the largest sum.',
    difficulty: 'Easy',
    tags: ['Dynamic Programming', 'Array', 'Kadane\'s Algorithm'],
    submissions: 112,
    expectedOutput: '6',
    timeLimit: '1 second',
    memoryLimit: '256 MB'
  },
  {
    id: 'problem-3',
    contestId: 'contest-1',
    name: 'Shortest Path in Maze',
    description: 'Find the shortest path from top-left to bottom-right in a maze with obstacles.',
    difficulty: 'Hard',
    tags: ['Graphs', 'BFS', 'Shortest Path'],
    submissions: 76,
    expectedOutput: '12',
    timeLimit: '2 seconds',
    memoryLimit: '512 MB'
  },
  {
    id: 'problem-4',
    contestId: 'contest-1',
    name: 'String Permutations',
    description: 'Generate all permutations of a given string.',
    difficulty: 'Medium',
    tags: ['Strings', 'Recursion', 'Backtracking'],
    submissions: 89,
    expectedOutput: '["abc", "acb", "bac", "bca", "cab", "cba"]',
    timeLimit: '1 second',
    memoryLimit: '256 MB'
  },
  {
    id: 'problem-5',
    contestId: 'contest-1',
    name: 'Minimum Spanning Tree',
    description: 'Find the minimum spanning tree of a weighted undirected graph.',
    difficulty: 'Hard',
    tags: ['Graphs', 'MST', 'Kruskal', 'Prim'],
    submissions: 64,
    expectedOutput: '10',
    timeLimit: '2 seconds',
    memoryLimit: '512 MB'
  },
  {
    id: 'problem-6',
    contestId: 'contest-2',
    name: 'Longest Increasing Subsequence',
    description: 'Find the length of the longest subsequence of a given sequence such that all elements of the subsequence are sorted in increasing order.',
    difficulty: 'Medium',
    tags: ['Dynamic Programming', 'Binary Search'],
    submissions: 78,
    expectedOutput: '4',
    timeLimit: '1 second',
    memoryLimit: '256 MB'
  },
  {
    id: 'problem-7',
    contestId: 'contest-2',
    name: 'Binary Tree Level Order Traversal',
    description: 'Given a binary tree, return the level order traversal of its nodes\' values (from left to right, level by level).',
    difficulty: 'Easy',
    tags: ['Tree', 'BFS'],
    submissions: 92,
    expectedOutput: '[[3], [9, 20], [15, 7]]',
    timeLimit: '1 second',
    memoryLimit: '256 MB'
  },
  {
    id: 'problem-8',
    contestId: 'contest-2',
    name: 'Merge K Sorted Lists',
    description: 'Merge k sorted linked lists into a single sorted linked list.',
    difficulty: 'Hard',
    tags: ['Linked List', 'Divide and Conquer', 'Heap'],
    submissions: 65,
    expectedOutput: '[1, 1, 2, 3, 4, 4, 5, 6]',
    timeLimit: '2 seconds',
    memoryLimit: '512 MB'
  },
  {
    id: 'problem-9',
    contestId: 'contest-2',
    name: 'Palindromic Substrings',
    description: 'Given a string, count the number of palindromic substrings in it.',
    difficulty: 'Medium',
    tags: ['String', 'Dynamic Programming'],
    submissions: 72,
    expectedOutput: '6',
    timeLimit: '1 second',
    memoryLimit: '256 MB'
  }
];

export const mockParticipants: Participant[] = [
  {
    id: 'user-1',
    contestId: 'contest-1',
    username: 'codingChampion',
    rank: 1,
    score: 500,
    problemsSolved: 5,
    totalProblems: 5,
    time: '2:15:30'
  },
  {
    id: 'user-2',
    contestId: 'contest-1',
    username: 'algorithmWizard',
    rank: 2,
    score: 485,
    problemsSolved: 5,
    totalProblems: 5,
    time: '2:30:12'
  },
  {
    id: 'user-3',
    contestId: 'contest-1',
    username: 'matrixCoder',
    rank: 3,
    score: 430,
    problemsSolved: 4,
    totalProblems: 5,
    time: '2:50:45'
  },
  {
    id: 'user-4',
    contestId: 'contest-1',
    username: 'debugMaster',
    rank: 4,
    score: 410,
    problemsSolved: 4,
    totalProblems: 5,
    time: '2:55:20'
  },
  {
    id: 'user-5',
    contestId: 'contest-1',
    username: 'byteDancer',
    rank: 5,
    score: 380,
    problemsSolved: 4,
    totalProblems: 5,
    time: '2:59:01'
  },
  {
    id: 'user-6',
    contestId: 'contest-1',
    username: 'codeNinja',
    rank: 6,
    score: 320,
    problemsSolved: 3,
    totalProblems: 5,
    time: '2:20:15'
  },
  {
    id: 'user-7',
    contestId: 'contest-1',
    username: 'logicLegend',
    rank: 7,
    score: 290,
    problemsSolved: 3,
    totalProblems: 5,
    time: '2:40:33'
  },
  {
    id: 'user-8',
    contestId: 'contest-1',
    username: 'recursionRookie',
    rank: 8,
    score: 240,
    problemsSolved: 2,
    totalProblems: 5,
    time: '2:10:05'
  },
  {
    id: 'user-9',
    contestId: 'contest-1',
    username: 'syntaxSage',
    rank: 9,
    score: 220,
    problemsSolved: 2,
    totalProblems: 5,
    time: '2:25:18'
  },
  {
    id: 'user-10',
    contestId: 'contest-1',
    username: 'compileCommander',
    rank: 10,
    score: 195,
    problemsSolved: 2,
    totalProblems: 5,
    time: '2:45:52'
  },
  {
    id: 'user-11',
    contestId: 'contest-2',
    username: 'codingChampion',
    rank: 1,
    score: 400,
    problemsSolved: 4,
    totalProblems: 4,
    time: '2:05:15'
  },
  {
    id: 'user-12',
    contestId: 'contest-2',
    username: 'algorithmAce',
    rank: 2,
    score: 390,
    problemsSolved: 4,
    totalProblems: 4,
    time: '2:15:30'
  },
  {
    id: 'user-13',
    contestId: 'contest-2',
    username: 'binaryBard',
    rank: 3,
    score: 360,
    problemsSolved: 3,
    totalProblems: 4,
    time: '2:30:45'
  },
  {
    id: 'user-14',
    contestId: 'contest-2',
    username: 'pythonPioneer',
    rank: 4,
    score: 340,
    problemsSolved: 3,
    totalProblems: 4,
    time: '2:40:20'
  },
  {
    id: 'user-15',
    contestId: 'contest-2',
    username: 'machineLearner',
    rank: 5,
    score: 310,
    problemsSolved: 3,
    totalProblems: 4,
    time: '2:50:10'
  }
];