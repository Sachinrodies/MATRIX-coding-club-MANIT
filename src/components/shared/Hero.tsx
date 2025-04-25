import { ArrowRight, Code, Trophy, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useContest } from '../../contexts/ContestContext';

const Hero = () => {
  const { upcomingContests } = useContest();
  const [charIndex, setCharIndex] = useState(0);
  const codeText = '# MANIT Coding Club\ndef solve_problem(skill):\n    return skill * practice + teamwork\n\n# Join our next contest!';
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCharIndex(prevIndex => {
        if (prevIndex < codeText.length) {
          return prevIndex + 1;
        }
        return prevIndex;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-matrix-dark-900 matrix-grid">
      <div className="absolute inset-0 matrix-rain opacity-20"></div>
      <div className="container-custom relative z-10 py-16 md:py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              <span className="text-matrix-green-500">Matrix</span> Coding Club
              <span className="block mt-2 text-xl md:text-2xl font-medium text-gray-300">
                Maulana Azad National Institute of Technology
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
              Join our community of passionate MCA students and coding enthusiasts. Participate in contests, collaborate on projects, and grow your technical skills with us.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contests" className="btn-primary flex items-center justify-center space-x-2 text-base">
                <span>Explore Contests</span>
                <ArrowRight size={18} />
              </Link>
              <Link to="/register" className="btn-outline flex items-center justify-center space-x-2 text-base">
                <span>Join Our Community</span>
                <Users size={18} />
              </Link>
            </div>
            
            <div className="flex flex-wrap gap-8 mt-4 pt-4 border-t border-matrix-dark-700">
              <div className="flex items-center space-x-2">
                <Trophy className="text-matrix-green-500" size={24} />
                <span className="text-gray-300">Weekly Contests</span>
              </div>
              <div className="flex items-center space-x-2">
                <Code className="text-matrix-green-500" size={24} />
                <span className="text-gray-300">Coding Challenges</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="text-matrix-green-500" size={24} />
                <span className="text-gray-300">Tech Community</span>
              </div>
            </div>
          </div>
          
          <div className="bg-matrix-dark-800 rounded-lg border border-matrix-dark-700 shadow-lg shadow-matrix-green-500/10 p-4 lg:p-6 animate-fade-in">
            <div className="flex items-center justify-between mb-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-error"></div>
                <div className="w-3 h-3 rounded-full bg-warning"></div>
                <div className="w-3 h-3 rounded-full bg-success"></div>
              </div>
              <span className="text-xs text-gray-400">matrix_terminal.py</span>
            </div>
            
            <pre className="font-code text-sm lg:text-base overflow-x-auto p-4 bg-matrix-dark-900 rounded">
              <code className="text-gray-300">
                <span className="text-matrix-green-500">{codeText.substring(0, charIndex)}</span>
                <span className="animate-pulse">|</span>
              </code>
            </pre>

            {upcomingContests.length > 0 && (
              <div className="mt-4 p-4 rounded-md bg-matrix-dark-900/50 border border-matrix-dark-700">
                <h3 className="text-lg font-medium text-matrix-green-400 mb-2 flex items-center">
                  <Trophy size={18} className="mr-2" />
                  Next Contest
                </h3>
                <p className="text-white">{upcomingContests[0].title}</p>
                <div className="flex justify-between items-center mt-2 text-sm text-gray-300">
                  <span>{upcomingContests[0].date}</span>
                  <Link 
                    to={`/contests/${upcomingContests[0].id}`} 
                    className="text-matrix-green-400 hover:text-matrix-green-300 flex items-center"
                  >
                    Details <ArrowRight size={14} className="ml-1" />
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;