import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Contest, Problem, Participant } from '../types/contest';
import { mockContests, mockProblems, mockParticipants } from '../data/mockContestData';

interface ContestContextType {
  contests: Contest[];
  upcomingContests: Contest[];
  pastContests: Contest[];
  getContest: (id: string) => Contest | undefined;
  getProblems: (contestId: string) => Problem[];
  getParticipants: (contestId: string) => Participant[];
  isLoading: boolean;
}

const ContestContext = createContext<ContestContextType | null>(null);

export const useContest = () => {
  const context = useContext(ContestContext);
  if (!context) {
    throw new Error('useContest must be used within a ContestProvider');
  }
  return context;
};

interface ContestProviderProps {
  children: ReactNode;
}

export const ContestProvider = ({ children }: ContestProviderProps) => {
  const [contests, setContests] = useState<Contest[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const fetchContests = async () => {
      setIsLoading(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Load mock data
      setContests(mockContests);
      setIsLoading(false);
    };
    
    fetchContests();
  }, []);
  
  const getContest = (id: string) => {
    return contests.find(contest => contest.id === id);
  };
  
  const getProblems = (contestId: string) => {
    return mockProblems.filter(problem => problem.contestId === contestId);
  };
  
  const getParticipants = (contestId: string) => {
    return mockParticipants.filter(participant => participant.contestId === contestId);
  };
  
  const upcomingContests = contests.filter(
    contest => new Date(contest.date) > new Date()
  ).sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  
  const pastContests = contests.filter(
    contest => new Date(contest.date) <= new Date()
  ).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  
  return (
    <ContestContext.Provider
      value={{
        contests,
        upcomingContests,
        pastContests,
        getContest,
        getProblems,
        getParticipants,
        isLoading
      }}
    >
      {children}
    </ContestContext.Provider>
  );
};