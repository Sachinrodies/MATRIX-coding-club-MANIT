import { ArrowRight, Check, Code } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Problem } from '../../types/contest';

interface ProblemCardProps {
  problem: Problem;
  contestId: string;
  isSolved?: boolean;
}

const ProblemCard: React.FC<ProblemCardProps> = ({ 
  problem, 
  contestId,
  isSolved = false
}) => {
  return (
    <div className="card hover:border-matrix-green-500 transition-all duration-200">
      <div className="p-4 border-b border-matrix-dark-700 flex justify-between items-center">
        <h3 className="text-lg font-medium text-white">
          {problem.name}
        </h3>
        <div className="flex items-center space-x-1">
          <span className={`w-2 h-2 rounded-full ${
            problem.difficulty === 'Easy' 
              ? 'bg-success' 
              : problem.difficulty === 'Medium' 
                ? 'bg-warning' 
                : 'bg-error'
          }`}></span>
          <span className={`text-xs ${
            problem.difficulty === 'Easy' 
              ? 'text-success' 
              : problem.difficulty === 'Medium' 
                ? 'text-warning' 
                : 'text-error'
          }`}>
            {problem.difficulty}
          </span>
        </div>
      </div>
      
      <div className="p-4">
        <p className="text-gray-300 line-clamp-2 mb-3">{problem.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {problem.tags.map((tag, index) => (
            <span 
              key={index}
              className="px-2 py-1 text-xs rounded-full bg-matrix-dark-700 text-gray-300"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
          <div className="flex items-center">
            <Code size={14} className="mr-1" />
            <span>{problem.submissions} submissions</span>
          </div>
          
          {isSolved && (
            <div className="flex items-center text-success">
              <Check size={14} className="mr-1" />
              <span>Solved</span>
            </div>
          )}
        </div>
        
        <Link 
          to={`/problems/${problem.id}?contest=${contestId}`}
          className="btn-outline w-full flex items-center justify-center"
        >
          <span>Solve Problem</span>
          <ArrowRight size={16} className="ml-2" />
        </Link>
      </div>
    </div>
  );
};

export default ProblemCard;