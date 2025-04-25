import { useState, useEffect } from 'react';
import { Filter, Calendar, Trophy, Clock } from 'lucide-react';
import { useContest } from '../contexts/ContestContext';
import ContestCard from '../components/contests/ContestCard';

type FilterType = 'all' | 'upcoming' | 'past';

const isUpcomingFilter = (filter: FilterType): filter is 'upcoming' => filter === 'upcoming';
const isPastFilter = (filter: FilterType): filter is 'past' => filter === 'past';

const Contests = () => {
  const { upcomingContests, pastContests, isLoading } = useContest();
  const [filter, setFilter] = useState<FilterType>('all');
  const [searchTerm, setSearchTerm] = useState('');
  
  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);
  
  const filteredContests = (() => {
    const allContests = [...upcomingContests, ...pastContests];
    const filterByStatus = 
      filter === 'all' 
        ? allContests 
        : isUpcomingFilter(filter)
          ? upcomingContests 
          : pastContests;
    
    if (!searchTerm) return filterByStatus;
    
    return filterByStatus.filter(contest => 
      contest.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contest.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  })();
  
  return (
    <div className="py-12">
      <div className="container-custom">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-4">Contests</h1>
          <p className="text-gray-300 max-w-3xl">
            Participate in our coding contests to challenge yourself, improve your problem-solving skills, and compete with fellow students. Browse upcoming and past contests below.
          </p>
        </div>
        
        <div className="bg-matrix-dark-800 rounded-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <div className="flex-grow">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search contests..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-matrix-dark-700 border border-matrix-dark-600 rounded-lg py-2 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-matrix-green-500 focus:border-transparent"
                />
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <Filter size={18} className="text-gray-400" />
              <span className="text-gray-400">Filter:</span>
              <div className="flex rounded-md overflow-hidden">
                <button
                  onClick={() => setFilter('all')}
                  className={`px-4 py-2 text-sm font-medium ${
                    filter === 'all' 
                      ? 'bg-matrix-green-500 text-matrix-dark-900' 
                      : 'bg-matrix-dark-700 text-gray-300 hover:bg-matrix-dark-600'
                  } transition-colors`}
                >
                  All
                </button>
                <button
                  onClick={() => setFilter('upcoming')}
                  className={`px-4 py-2 text-sm font-medium ${
                    isUpcomingFilter(filter)
                      ? 'bg-matrix-green-500 text-matrix-dark-900' 
                      : 'bg-matrix-dark-700 text-gray-300 hover:bg-matrix-dark-600'
                  } transition-colors`}
                >
                  Upcoming
                </button>
                <button
                  onClick={() => setFilter('past')}
                  className={`px-4 py-2 text-sm font-medium ${
                    isPastFilter(filter)
                      ? 'bg-matrix-green-500 text-matrix-dark-900' 
                      : 'bg-matrix-dark-700 text-gray-300 hover:bg-matrix-dark-600'
                  } transition-colors`}
                >
                  Past
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {isLoading ? (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-matrix-green-500"></div>
          </div>
        ) : filteredContests.length === 0 ? (
          <div className="text-center py-12 bg-matrix-dark-800 rounded-lg">
            <Trophy size={48} className="mx-auto text-gray-500 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">No contests found</h3>
            <p className="text-gray-400">
              {searchTerm 
                ? 'No contests matching your search criteria. Try a different search term.'
                : isUpcomingFilter(filter)
                  ? 'No upcoming contests at the moment. Check back soon!'
                  : isPastFilter(filter)
                    ? 'No past contests are available.'
                    : 'No contests are available.'}
            </p>
          </div>
        ) : (
          <>
            {isUpcomingFilter(filter) && upcomingContests.length > 0 && (
              <div className="mb-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Calendar size={18} className="text-matrix-green-500" />
                  <h2 className="text-xl font-semibold text-white">Upcoming Contests</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  {upcomingContests
                    .filter(contest => 
                      !searchTerm || 
                      contest.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                      contest.description.toLowerCase().includes(searchTerm.toLowerCase())
                    )
                    .map(contest => (
                      <ContestCard key={contest.id} contest={contest} />
                    ))}
                </div>
              </div>
            )}
            
            {isPastFilter(filter) && pastContests.length > 0 && (
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <Clock size={18} className="text-matrix-green-500" />
                  <h2 className="text-xl font-semibold text-white">Past Contests</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {pastContests
                    .filter(contest => 
                      !searchTerm || 
                      contest.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                      contest.description.toLowerCase().includes(searchTerm.toLowerCase())
                    )
                    .map(contest => (
                      <ContestCard key={contest.id} contest={contest} />
                    ))}
                </div>
              </div>
            )}
            
            {filter === 'all' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredContests.map(contest => (
                  <ContestCard key={contest.id} contest={contest} />
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Contests;