import { useState } from 'react';
import { useParams, useSearchParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, Code, MessageSquare, Send } from 'lucide-react';
import { useContest } from '../contexts/ContestContext';
import { Problem } from '../types/contest';

const ProblemDetail = () => {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const contestId = searchParams.get('contest');
  const { getProblems } = useContest();
  
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const problems = getProblems(contestId || '');
  const problem = problems.find((p: Problem) => p.id === id);
  
  const handleSubmit = async () => {
    setIsSubmitting(true);
    // Simulate submission delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    setOutput('Submission successful! All test cases passed.');
    setIsSubmitting(false);
  };
  
  if (!problem) {
    return (
      <div className="container-custom py-12">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Problem not found</h2>
          <Link to="/contests" className="btn-primary">
            Back to Contests
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="py-12">
      <div className="container-custom">
        <Link 
          to={`/contests/${contestId}`}
          className="inline-flex items-center text-gray-400 hover:text-matrix-green-500 mb-6 transition-colors"
        >
          <ArrowLeft size={16} className="mr-1" />
          <span>Back to Contest</span>
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Problem Description */}
          <div className="lg:col-span-2 space-y-6">
            <div className="card">
              <div className="p-6 border-b border-matrix-dark-700">
                <div className="flex justify-between items-start mb-4">
                  <h1 className="text-2xl font-bold text-white">{problem.name}</h1>
                  <div className="flex items-center space-x-1">
                    <span className={`w-2 h-2 rounded-full ${
                      problem.difficulty === 'Easy' 
                        ? 'bg-success' 
                        : problem.difficulty === 'Medium' 
                          ? 'bg-warning' 
                          : 'bg-error'
                    }`}></span>
                    <span className={`text-sm ${
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
                
                <div className="flex items-center space-x-4 text-sm text-gray-400">
                  <div className="flex items-center">
                    <Clock size={14} className="mr-1 text-matrix-green-500" />
                    <span>Time Limit: {problem.timeLimit}</span>
                  </div>
                  <div className="flex items-center">
                    <Code size={14} className="mr-1 text-matrix-green-500" />
                    <span>{problem.submissions} submissions</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="prose prose-invert max-w-none">
                  <p className="text-gray-300">{problem.description}</p>
                  
                  <h3 className="text-lg font-semibold text-white mt-6 mb-2">Expected Output:</h3>
                  <pre className="bg-matrix-dark-900 p-4 rounded-lg overflow-x-auto">
                    <code className="text-gray-300">{problem.expectedOutput}</code>
                  </pre>
                </div>
              </div>
            </div>
            
            {/* Code Editor */}
            <div className="card">
              <div className="p-4 border-b border-matrix-dark-700 flex justify-between items-center">
                <h2 className="text-lg font-semibold text-white">Solution</h2>
                <select 
                  className="bg-matrix-dark-700 text-gray-300 rounded px-3 py-1 text-sm border border-matrix-dark-600 focus:outline-none focus:ring-2 focus:ring-matrix-green-500"
                  defaultValue="python"
                >
                  <option value="python">Python</option>
                  <option value="javascript">JavaScript</option>
                  <option value="cpp">C++</option>
                  <option value="java">Java</option>
                </select>
              </div>
              
              <div className="p-4">
                <textarea
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  className="w-full h-64 bg-matrix-dark-900 text-gray-300 p-4 rounded-lg font-code text-sm resize-none focus:outline-none focus:ring-2 focus:ring-matrix-green-500"
                  placeholder="Write your solution here..."
                />
                
                <div className="mt-4 flex justify-between items-center">
                  <button 
                    className="btn-secondary"
                    onClick={() => setCode('')}
                  >
                    Clear
                  </button>
                  <button 
                    className="btn-primary flex items-center"
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-2 border-white mr-2"></div>
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <>
                        <Send size={16} className="mr-2" />
                        <span>Submit Solution</span>
                      </>
                    )}
                  </button>
                </div>
                
                {output && (
                  <div className="mt-4 p-4 bg-success/10 text-success rounded-lg">
                    {output}
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="space-y-6">
            <div className="card">
              <div className="p-4 border-b border-matrix-dark-700">
                <h2 className="text-lg font-semibold text-white">Discussion</h2>
              </div>
              <div className="p-4">
                <Link 
                  to={`/discussions/${problem.id}`}
                  className="btn-outline w-full flex items-center justify-center"
                >
                  <MessageSquare size={16} className="mr-2" />
                  <span>View Discussions</span>
                </Link>
              </div>
            </div>
            
            <div className="card">
              <div className="p-4 border-b border-matrix-dark-700">
                <h2 className="text-lg font-semibold text-white">Similar Problems</h2>
              </div>
              <div className="p-4">
                <p className="text-gray-400 text-sm">
                  Coming soon...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemDetail;