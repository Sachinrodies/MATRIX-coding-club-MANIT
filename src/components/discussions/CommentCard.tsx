import { ThumbsUp, Reply, Flag, MoreVertical } from 'lucide-react';
import { useState } from 'react';
import { Comment } from '../../types/discussion';

interface CommentCardProps {
  comment: Comment;
  onReply: (commentId: string) => void;
}

const CommentCard: React.FC<CommentCardProps> = ({ comment, onReply }) => {
  const [showOptions, setShowOptions] = useState(false);
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(comment.likes);
  
  const toggleLike = () => {
    setLiked(!liked);
    setLikeCount(prevCount => liked ? prevCount - 1 : prevCount + 1);
  };
  
  return (
    <div className="bg-matrix-dark-800 rounded-lg p-4 mb-4 border border-matrix-dark-700">
      <div className="flex justify-between items-start mb-3">
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-matrix-green-700 flex items-center justify-center text-white font-medium">
            {comment.author.charAt(0).toUpperCase()}
          </div>
          <div className="ml-2">
            <div className="text-white font-medium">{comment.author}</div>
            <div className="text-xs text-gray-400">{comment.timestamp}</div>
          </div>
        </div>
        
        <div className="relative">
          <button 
            onClick={() => setShowOptions(!showOptions)}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <MoreVertical size={18} />
          </button>
          
          {showOptions && (
            <div className="absolute right-0 mt-1 w-36 rounded-md shadow-lg bg-matrix-dark-700 ring-1 ring-black ring-opacity-5 z-10">
              <div className="py-1">
                <button 
                  className="flex items-center px-4 py-2 text-sm text-gray-300 hover:bg-matrix-dark-600 w-full text-left"
                  onClick={() => {
                    setShowOptions(false);
                  }}
                >
                  <Flag size={14} className="mr-2 text-gray-400" />
                  Report
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      
      <div className="text-gray-200 mb-3">
        {comment.content}
      </div>
      
      <div className="flex items-center space-x-4 text-sm">
        <button 
          onClick={toggleLike}
          className={`flex items-center transition-colors ${
            liked ? 'text-matrix-green-500' : 'text-gray-400 hover:text-matrix-green-400'
          }`}
        >
          <ThumbsUp size={14} className="mr-1" />
          <span>{likeCount}</span>
        </button>
        
        <button 
          onClick={() => onReply(comment.id)}
          className="flex items-center text-gray-400 hover:text-matrix-green-400 transition-colors"
        >
          <Reply size={14} className="mr-1" />
          <span>Reply</span>
        </button>
      </div>
      
      {comment.replies?.length > 0 && (
        <div className="mt-3 ml-8 border-l-2 border-matrix-dark-700 pl-4 space-y-3">
          {comment.replies.map((reply) => (
            <div key={reply.id} className="bg-matrix-dark-800 rounded-lg p-3">
              <div className="flex items-center mb-2">
                <div className="w-6 h-6 rounded-full bg-matrix-green-800 flex items-center justify-center text-white text-xs font-medium">
                  {reply.author.charAt(0).toUpperCase()}
                </div>
                <div className="ml-2">
                  <div className="text-white text-sm font-medium">{reply.author}</div>
                  <div className="text-xs text-gray-400">{reply.timestamp}</div>
                </div>
              </div>
              <div className="text-gray-200 text-sm">
                {reply.content}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CommentCard;