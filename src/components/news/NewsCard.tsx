import { Clock, ExternalLink as External, Tag } from 'lucide-react';
import { NewsItem } from '../../types/news';

interface NewsCardProps {
  news: NewsItem;
}

const NewsCard: React.FC<NewsCardProps> = ({ news }) => {
  return (
    <div className="card h-full flex flex-col group">
      {news.imageUrl && (
        <div className="aspect-video overflow-hidden relative border-b border-matrix-dark-700">
          <img 
            src={news.imageUrl} 
            alt={news.title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-matrix-dark-900 to-transparent opacity-60"></div>
        </div>
      )}
      
      <div className="p-4 flex-grow flex flex-col">
        <div className="flex items-center space-x-3 mb-2 text-xs text-gray-400">
          <div className="flex items-center">
            <Clock size={12} className="mr-1 text-matrix-green-500" />
            <span>{news.date}</span>
          </div>
          {news.category && (
            <div className="flex items-center">
              <Tag size={12} className="mr-1 text-matrix-green-500" />
              <span>{news.category}</span>
            </div>
          )}
        </div>
        
        <h3 className="text-xl font-semibold text-white group-hover:text-matrix-green-400 transition-colors mb-2">
          {news.title}
        </h3>
        
        <p className="text-gray-300 line-clamp-3 mb-4 flex-grow">
          {news.summary}
        </p>
        
        <a 
          href={news.url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn-outline flex items-center justify-center space-x-2 mt-auto"
        >
          <span>Read Full Article</span>
          <External size={14} />
        </a>
      </div>
    </div>
  );
};

export default NewsCard;