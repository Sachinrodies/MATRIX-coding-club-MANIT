export interface Reply {
  id: string;
  author: string;
  content: string;
  timestamp: string;
}

export interface Comment {
  id: string;
  author: string;
  content: string;
  timestamp: string;
  likes: number;
  replies?: Reply[];
}

export interface Discussion {
  id: string;
  problemId: string;
  title: string;
  description: string;
  createdAt: string;
  author: string;
  comments: Comment[];
}