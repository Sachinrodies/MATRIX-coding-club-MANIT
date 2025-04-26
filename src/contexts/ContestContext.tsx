import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
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
  setContests: (contests: Contest[]) => void;
}

const ContestContext = createContext<ContestContextType | undefined>(undefined);

export const useContest = () => {
  const context = useContext(ContestContext);
  if (context === undefined) {
    throw new Error('useContest must be used within a ContestProvider');
  }
  return context;
};

interface ContestProviderProps {
  children: ReactNode;
}

export const ContestProvider: React.FC<ContestProviderProps> = ({ children }) => {
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
    contest => contest.status === 'upcoming'
  ).sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  
  const pastContests = contests.filter(
    contest => contest.status === 'completed'
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
        isLoading,
        setContests
      }}
    >
      {children}
    </ContestContext.Provider>
  );
};

export { ContestContext };