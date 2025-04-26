export interface Contest {
  id: string;
  title: string;
  description: string;
  date: string;
  duration: string;
  problemCount: number;
  participantsCount: number;
  status: 'upcoming' | 'ongoing' | 'completed';
  externalLink?: string;
}

export interface Problem {
  id: string;
  contestId: string;
  name: string;
  description: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  tags: string[];
  submissions: number;
  expectedOutput: string;
  timeLimit: string;
  memoryLimit: string;
}

export interface Participant {
  id: string;
  contestId: string;
  username: string;
  rank: number;
  score: number;
  problemsSolved: number;
  totalProblems: number;
  time: string;
}