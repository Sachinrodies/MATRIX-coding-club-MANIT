import { useEffect, useState } from 'react';
import { GNewsArticle } from '../types/news';
import { fetchTechNews } from '../services/newsService';

const TechNews = () => {
  const [news, setNews] = useState<GNewsArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getNews = async () => {
      try {
        const response = await fetchTechNews();
        setNews(response.articles.slice(0, 5)); // Get only the first 5 articles
      } catch (err) {
        setError('Failed to fetch tech news');
      } finally {
        setLoading(false);
      }
    };

    getNews();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-matrix-green-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12 bg-matrix-dark-800 rounded-lg">
        <div className="text-error mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">Error Loading News</h3>
        <p className="text-gray-400">{error}</p>
      </div>
    );
  }

  return (
    <div className="tech-news-container">
      <h2 className="text-2xl font-bold mb-4">Latest in Tech</h2>
      <div className="space-y-6">
        {news.map((article) => (
          <div key={article.url} className="bg-matrix-dark-800 rounded-lg p-6 border border-matrix-dark-700">
            <h3 className="text-xl font-semibold text-white mb-2">
              <a 
                href={article.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-matrix-green-500 transition-colors"
              >
                {article.title}
              </a>
            </h3>
            <p className="text-gray-300 mb-4">{article.description}</p>
            <div className="flex items-center justify-between text-sm text-gray-400">
              <span>{article.source.name}</span>
              <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechNews; 