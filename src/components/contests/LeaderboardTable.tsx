import { ArrowUp, ArrowDown, Medal } from 'lucide-react';
import { useState } from 'react';
import { Participant } from '../../types/contest';

interface LeaderboardTableProps {
  participants: Participant[];
}

const LeaderboardTable: React.FC<LeaderboardTableProps> = ({ participants }) => {
  const [sortField, setSortField] = useState<keyof Participant>('rank');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  
  const handleSort = (field: keyof Participant) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };
  
  const sortedParticipants = [...participants].sort((a, b) => {
    const fieldA = a[sortField];
    const fieldB = b[sortField];
    
    if (typeof fieldA === 'number' && typeof fieldB === 'number') {
      return sortDirection === 'asc' ? fieldA - fieldB : fieldB - fieldA;
    }
    
    if (typeof fieldA === 'string' && typeof fieldB === 'string') {
      return sortDirection === 'asc' 
        ? fieldA.localeCompare(fieldB) 
        : fieldB.localeCompare(fieldA);
    }
    
    return 0;
  });

  const SortIcon = ({ field }: { field: keyof Participant }) => {
    if (sortField !== field) return null;
    return sortDirection === 'asc' ? <ArrowUp size={14} /> : <ArrowDown size={14} />;
  };
  
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead className="bg-matrix-dark-800 text-white">
          <tr>
            <th 
              className="px-4 py-3 text-sm font-semibold cursor-pointer hover:bg-matrix-dark-700 transition-colors"
              onClick={() => handleSort('rank')}
            >
              <div className="flex items-center space-x-1">
                <span>Rank</span>
                <SortIcon field="rank" />
              </div>
            </th>
            <th 
              className="px-4 py-3 text-sm font-semibold cursor-pointer hover:bg-matrix-dark-700 transition-colors"
              onClick={() => handleSort('username')}
            >
              <div className="flex items-center space-x-1">
                <span>User</span>
                <SortIcon field="username" />
              </div>
            </th>
            <th 
              className="px-4 py-3 text-sm font-semibold cursor-pointer hover:bg-matrix-dark-700 transition-colors"
              onClick={() => handleSort('score')}
            >
              <div className="flex items-center space-x-1">
                <span>Score</span>
                <SortIcon field="score" />
              </div>
            </th>
            <th 
              className="px-4 py-3 text-sm font-semibold cursor-pointer hover:bg-matrix-dark-700 transition-colors"
              onClick={() => handleSort('problemsSolved')}
            >
              <div className="flex items-center space-x-1">
                <span>Problems Solved</span>
                <SortIcon field="problemsSolved" />
              </div>
            </th>
            <th 
              className="px-4 py-3 text-sm font-semibold cursor-pointer hover:bg-matrix-dark-700 transition-colors"
              onClick={() => handleSort('time')}
            >
              <div className="flex items-center space-x-1">
                <span>Time</span>
                <SortIcon field="time" />
              </div>
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-matrix-dark-700">
          {sortedParticipants.map((participant) => (
            <tr 
              key={participant.id} 
              className="hover:bg-matrix-dark-800/50 transition-colors"
            >
              <td className="px-4 py-3 text-sm">
                {participant.rank <= 3 ? (
                  <div className="flex items-center">
                    <Medal 
                      size={16} 
                      className={
                        participant.rank === 1 
                          ? 'text-yellow-400' 
                          : participant.rank === 2 
                            ? 'text-gray-300' 
                            : 'text-amber-600'
                      } 
                    />
                    <span className="ml-1">{participant.rank}</span>
                  </div>
                ) : participant.rank}
              </td>
              <td className="px-4 py-3 text-sm font-medium text-matrix-green-400">
                {participant.username}
              </td>
              <td className="px-4 py-3 text-sm">
                {participant.score}
              </td>
              <td className="px-4 py-3 text-sm">
                {participant.problemsSolved}/{participant.totalProblems}
              </td>
              <td className="px-4 py-3 text-sm text-gray-300">
                {participant.time}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeaderboardTable;