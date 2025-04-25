export interface ProjectIdea {
  id: string;
  title: string;
  description: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  category: string;
  tags: string[];
  githubUrl?: string;
  requirements: string[];
}