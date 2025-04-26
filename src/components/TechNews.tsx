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

  if (loading) return <div>Loading tech news...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="tech-news-container">
      <h2 className="text-2xl font-bold mb-4">Latest in Tech</h2>
      <div className="grid gap-4">
        {news.map((article, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-4">
            <div className="flex gap-4">
              {article.image && (
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-24 h-24 object-cover rounded"
                />
              )}
              <div>
                <h3 className="font-semibold text-lg">
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-600"
                  >
                    {article.title}
                  </a>
                </h3>
                <p className="text-gray-600 text-sm mt-1">{article.description}</p>
                <div className="flex items-center mt-2 text-sm text-gray-500">
                  <span>{article.source.name}</span>
                  <span className="mx-2">•</span>
                  <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechNews; 