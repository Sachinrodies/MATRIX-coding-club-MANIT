import { Calendar, Clock, Info } from 'lucide-react';
import { Announcement } from '../../types/announcement';

interface AnnouncementCardProps {
  announcement: Announcement;
}

const AnnouncementCard: React.FC<AnnouncementCardProps> = ({ announcement }) => {
  return (
    <div className="card border-l-4 border-l-announce-orange animate-fade-in group hover:translate-y-[-2px] transition-all duration-300">
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <span className="px-2 py-1 text-xs rounded-full bg-announce-orange/20 text-announce-orange flex items-center">
            <Info size={12} className="mr-1" />
            Announcement
          </span>
          <span className="text-xs text-gray-400">{announcement.createdAt}</span>
        </div>
        
        <h3 className="text-xl font-semibold text-white mt-2 mb-2 group-hover:text-announce-orange transition-colors">
          {announcement.title}
        </h3>
        
        <p className="text-gray-300 mb-4">
          {announcement.content}
        </p>
        
        {announcement.contestDate && (
          <div className="flex flex-col sm:flex-row gap-4 text-sm text-gray-400">
            <div className="flex items-center">
              <Calendar size={14} className="mr-1 text-announce-orange" />
              <span>Date: {announcement.contestDate}</span>
            </div>
            {announcement.contestTime && (
              <div className="flex items-center">
                <Clock size={14} className="mr-1 text-announce-orange" />
                <span>Time: {announcement.contestTime}</span>
              </div>
            )}
          </div>
        )}
        
        {announcement.topics && announcement.topics.length > 0 && (
          <div className="mt-3 pt-3 border-t border-matrix-dark-700">
            <h4 className="text-sm font-medium text-gray-300 mb-2">Contest Topics:</h4>
            <div className="flex flex-wrap gap-2">
              {announcement.topics.map((topic, index) => (
                <span 
                  key={index} 
                  className="px-2 py-1 text-xs rounded-full bg-matrix-dark-700 text-gray-300"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AnnouncementCard;