import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Calendar, Clock, Users, Trophy, ArrowLeft, MessageSquare, Code, ArrowRight } from 'lucide-react';
import { useContest } from '../contexts/ContestContext';
import ProblemCard from '../components/contests/ProblemCard';
import LeaderboardTable from '../components/contests/LeaderboardTable';

const ContestDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { getContest, getProblems, getParticipants } = useContest();
  
  const [activeTab, setActiveTab] = useState<'overview' | 'problems' | 'leaderboard'>('overview');
  
  const contest = getContest(id || '');
  const problems = getProblems(id || '');
  const participants = getParticipants(id || '');
  
  const isUpcoming = contest ? new Date(contest.date) > new Date() : false;
  
  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
    
    if (!contest) {
      navigate('/contests');
    }
  }, [contest, navigate]);
  
  if (!contest) {
    return null;
  }
  
  return (
    <div className="py-12">
      <div className="container-custom">
        <Link 
          to="/contests" 
          className="inline-flex items-center text-gray-400 hover:text-matrix-green-500 mb-6 transition-colors"
        >
          <ArrowLeft size={16} className="mr-1" />
          <span>Back to Contests</span>
        </Link>
        
        <div className={`rounded-lg overflow-hidden mb-8 border ${
          isUpcoming ? 'border-contest-purple/30 bg-contest-purple/10' : 'border-matrix-dark-700 bg-matrix-dark-800'
        }`}>
          <div className="p-6">
            <div className="flex flex-wrap justify-between gap-4 mb-4">
              <span className={`px-3 py-1 text-sm rounded-full ${
                isUpcoming ? 'bg-contest-purple/20 text-contest-purple' : 'bg-matrix-green-500/20 text-matrix-green-500'
              }`}>
                {isUpcoming ? 'Upcoming' : 'Past Contest'}
              </span>
              
              <div className="flex items-center space-x-1 text-gray-400 text-sm">
                <Users size={16} className="mr-1" />
                <span>{contest.participantsCount} participants</span>
              </div>
            </div>
            
            <h1 className="text-3xl font-bold text-white mb-4">{contest.title}</h1>
            
            <p className="text-gray-300 mb-6">{contest.description}</p>
            
            <div className="flex flex-wrap gap-8 mb-4">
              <div className="flex items-center space-x-2 text-gray-300">
                <Calendar size={18} className="text-matrix-green-500" />
                <span>Date: {new Date(contest.date).toLocaleDateString(undefined, {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}</span>
              </div>
              
              <div className="flex items-center space-x-2 text-gray-300">
                <Clock size={18} className="text-matrix-green-500" />
                <span>Time: {new Date(contest.date).toLocaleTimeString(undefined, {
                  hour: '2-digit',
                  minute: '2-digit'
                })}</span>
              </div>
              
              <div className="flex items-center space-x-2 text-gray-300">
                <Clock size={18} className="text-matrix-green-500" />
                <span>Duration: {contest.duration}</span>
              </div>
              
              <div className="flex items-center space-x-2 text-gray-300">
                <Code size={18} className="text-matrix-green-500" />
                <span>Problems: {contest.problemCount}</span>
              </div>
            </div>
            
            {isUpcoming && (
              <div className="mt-6">
                <button className="btn-primary">
                  Register for Contest
                </button>
              </div>
            )}
          </div>
        </div>
        
        <div className="mb-8">
          <div className="flex border-b border-matrix-dark-700">
            <button
              className={`px-4 py-3 font-medium text-sm transition-colors ${
                activeTab === 'overview'
                  ? 'text-matrix-green-500 border-b-2 border-matrix-green-500'
                  : 'text-gray-400 hover:text-gray-300'
              }`}
              onClick={() => setActiveTab('overview')}
            >
              Overview
            </button>
            <button
              className={`px-4 py-3 font-medium text-sm transition-colors ${
                activeTab === 'problems'
                  ? 'text-matrix-green-500 border-b-2 border-matrix-green-500'
                  : 'text-gray-400 hover:text-gray-300'
              }`}
              onClick={() => setActiveTab('problems')}
            >
              Problems
            </button>
            <button
              className={`px-4 py-3 font-medium text-sm transition-colors ${
                activeTab === 'leaderboard'
                  ? 'text-matrix-green-500 border-b-2 border-matrix-green-500'
                  : 'text-gray-400 hover:text-gray-300'
              }`}
              onClick={() => setActiveTab('leaderboard')}
            >
              {isUpcoming ? 'Participants' : 'Leaderboard'}
            </button>
          </div>
        </div>
        
        {/* Tab Content */}
        <div className="mb-8">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div className="bg-matrix-dark-800 rounded-lg p-6">
                <h2 className="text-xl font-semibold text-white mb-4">Contest Details</h2>
                <p className="text-gray-300 mb-4">
                  {contest.description}
                </p>
                
                <h3 className="text-lg font-medium text-white mb-2">Rules:</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-300 mb-4">
                  <li>Each participant must solve problems individually.</li>
                  <li>External resources and libraries may be used unless specified otherwise.</li>
                  <li>Solutions must be original and not copied from others.</li>
                  <li>Time-based scoring: earlier correct submissions receive more points.</li>
                  <li>Multiple submissions are allowed, but only the latest correct submission will be considered.</li>
                </ul>
                
                <h3 className="text-lg font-medium text-white mb-2">Judging Criteria:</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-300">
                  <li>Correctness: Solution passes all test cases.</li>
                  <li>Time Efficiency: Solutions must execute within the specified time limits.</li>
                  <li>Memory Usage: Solutions must use memory within the specified limits.</li>
                  <li>Code Quality: Clean, well-structured code may receive additional points.</li>
                </ul>
              </div>
              
              <div className="bg-matrix-dark-800 rounded-lg p-6">
                <h2 className="text-xl font-semibold text-white mb-4">Preparation Tips</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>Review fundamental data structures and algorithms.</li>
                  <li>Practice similar problems on platforms like LeetCode or HackerRank.</li>
                  <li>Familiarize yourself with time complexity analysis.</li>
                  <li>Prepare a coding environment that you're comfortable with.</li>
                  <li>Join our Discord server for last-minute tips and guidance.</li>
                </ul>
              </div>
              
              <div className="bg-matrix-dark-800 rounded-lg p-6">
                <h2 className="text-xl font-semibold text-white mb-4">Contact Information</h2>
                <p className="text-gray-300">
                  If you have any questions or face any issues during the contest, please contact:
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-300 mt-2">
                  <li>Email: matrix@manit.ac.in</li>
                  <li>Discord: Join our server at discord.gg/matrixcodingclub</li>
                </ul>
              </div>
            </div>
          )}
          
          {activeTab === 'problems' && (
            <div>
              {isUpcoming ? (
                <div className="bg-matrix-dark-800 rounded-lg p-6 text-center">
                  <Code size={48} className="mx-auto text-gray-500 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Problems will be revealed when the contest starts</h3>
                  <p className="text-gray-400 mb-4">
                    Problems will become available once the contest begins. Make sure to register and be ready!
                  </p>
                  <button className="btn-primary">
                    Register for Contest
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {problems.map(problem => (
                    <ProblemCard 
                      key={problem.id} 
                      problem={problem} 
                      contestId={contest.id} 
                    />
                  ))}
                </div>
              )}
            </div>
          )}
          
          {activeTab === 'leaderboard' && (
            <div>
              {isUpcoming ? (
                <div className="bg-matrix-dark-800 rounded-lg p-6 text-center">
                  <Users size={48} className="mx-auto text-gray-500 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {contest.participantsCount} Participants Registered
                  </h3>
                  <p className="text-gray-400 mb-6">
                    Join fellow coders in this exciting contest. Register now to participate!
                  </p>
                  <button className="btn-primary">
                    Register for Contest
                  </button>
                </div>
              ) : (
                <div className="bg-matrix-dark-800 rounded-lg overflow-hidden">
                  <div className="p-4 border-b border-matrix-dark-700 flex justify-between items-center">
                    <h3 className="text-lg font-medium text-white flex items-center">
                      <Trophy size={18} className="mr-2 text-yellow-400" />
                      Contest Leaderboard
                    </h3>
                    <span className="text-gray-400 text-sm">{participants.length} participants</span>
                  </div>
                  <LeaderboardTable participants={participants} />
                </div>
              )}
            </div>
          )}
        </div>
        
        {!isUpcoming && (
          <div className="bg-matrix-dark-800 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-white flex items-center">
                <MessageSquare size={18} className="mr-2 text-matrix-green-500" />
                Post-Contest Discussion
              </h2>
              <Link 
                to={`/discussions/${contest.id}`}
                className="text-matrix-green-500 hover:text-matrix-green-400 transition-colors flex items-center"
              >
                <span>View All Discussions</span>
                <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
            <p className="text-gray-300 mb-4">
              Join the discussion about this contest's problems, share your approaches, and learn from others.
            </p>
            <Link 
              to={`/discussions/${contest.id}`}
              className="btn-outline"
            >
              Participate in Discussion
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContestDetail;