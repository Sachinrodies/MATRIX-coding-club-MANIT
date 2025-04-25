import { Contest, Problem, Participant } from '../types/contest';

export const mockContests: Contest[] = [
  {
    id: 'contest-1',
    title: 'Weekly DSA Challenge #32',
    description: 'This week\'s challenge focuses on graph algorithms and dynamic programming. Solve problems of varying difficulty and improve your algorithmic skills!',
    date: '2025-01-15T18:00:00',
    duration: '3 hours',
    problemCount: 5,
    participantsCount: 120,
    status: 'completed'
  },
  {
    id: 'contest-2',
    title: 'Competitive Programming Contest',
    description: 'A regular competitive programming contest featuring algorithmic problems of various difficulty levels. Great for preparing for coding interviews!',
    date: '2025-01-30T17:00:00',
    duration: '2.5 hours',
    problemCount: 4,
    participantsCount: 85,
    status: 'completed'
  },
  {
    id: 'contest-3',
    title: 'Matrix Code Sprint',
    description: 'A fast-paced contest focusing on time complexity and optimization. Can you solve the problems efficiently within the time constraints?',
    date: '2025-02-20T19:00:00',
    duration: '2 hours',
    problemCount: 3,
    participantsCount: 56,
    status: 'upcoming'
  },
  {
    id: 'contest-4',
    title: 'Web Development Challenge',
    description: 'A challenge focused on web development skills, including JavaScript puzzles, DOM manipulation, and algorithm challenges relevant to frontend development.',
    date: '2025-03-05T16:00:00',
    duration: '4 hours',
    problemCount: 4,
    participantsCount: 42,
    status: 'upcoming'
  },
  {
    id: 'contest-5',
    title: 'Data Structures Deep Dive',
    description: 'Explore advanced data structures like segment trees, Fenwick trees, and more in this specialized contest for algorithm enthusiasts.',
    date: '2025-03-25T15:00:00',
    duration: '3 hours',
    problemCount: 4,
    participantsCount: 35,
    status: 'upcoming'
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