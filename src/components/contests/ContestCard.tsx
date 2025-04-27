import { Calendar, Clock, Code, Users, ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Contest } from '../../types/contest';

interface ContestCardProps {
  contest: Contest;
}

const ContestCard: React.FC<ContestCardProps> = ({ contest }) => {
  const isUpcoming = new Date(contest.date) > new Date();
  
  return (
    <div className="card group h-full flex flex-col hover:border-matrix-green-500 transition-all duration-200">
      <div className={`p-4 border-b ${isUpcoming ? 'border-contest-purple/30 bg-contest-purple/10' : 'border-matrix-dark-700'}`}>
        <div className="flex justify-between items-start mb-2">
          <span className={`px-2 py-1 text-xs rounded-full ${
            isUpcoming ? 'bg-contest-purple/20 text-contest-purple' : 'bg-matrix-green-500/20 text-matrix-green-500'
          }`}>
            {isUpcoming ? 'Upcoming' : 'Past Contest'}
          </span>
          <div className="flex items-center text-gray-400 text-sm">
            <Users size={14} className="mr-1" />
            <span>{contest.participantsCount} participants</span>
          </div>
        </div>
        <h3 className="text-xl font-semibold text-white mt-2 group-hover:text-matrix-green-500 transition-colors duration-200">
          {contest.title}
        </h3>
      </div>
      
      <div className="p-4 flex-grow flex flex-col">
        <div className="mb-4 text-gray-300">
          <p className="line-clamp-2">{contest.description}</p>
        </div>
        
        <div className="space-y-2 mb-4 mt-auto">
          <div className="flex items-center text-gray-400">
            <Calendar size={16} className="mr-2 text-matrix-green-500" />
            <span>{contest.date}</span>
          </div>
          <div className="flex items-center text-gray-400">
            <Clock size={16} className="mr-2 text-matrix-green-500" />
            <span>{contest.duration}</span>
          </div>
          <div className="flex items-center text-gray-400">
            <Code size={16} className="mr-2 text-matrix-green-500" />
            <span>{contest.problemCount} problems</span>
          </div>
        </div>
        
        <div className="space-y-2">
          {isUpcoming && (
            <Link 
              to={`/contests/${contest.id}`}
              className="btn-outline w-full flex items-center justify-center hover:border-matrix-green-500 hover:text-white transition-colors"
              >
                <span>View on HackerRank(coming soon)</span>
              <ArrowRight size={16} className="ml-2" />
            </Link>
          )}
          
          {!isUpcoming && contest.externalLink && (
            <a 
              href={contest.externalLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline w-full flex items-center justify-center hover:border-matrix-green-500 hover:text-white transition-colors"
            >
              <span>View on HackerRank</span>
              <ExternalLink size={16} className="ml-2" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContestCard;