export interface NewsItem {
  id: string;
  title: string;
  summary: string;
  content: string;
  date: string;
  category?: string;
  url: string;
  imageUrl?: string;
}

export interface GNewsArticle {
  title: string;
  description: string;
  content: string;
  url: string;
  image: string;
  publishedAt: string;
  source: {
    name: string;
    url: string;
  };
}

export interface GNewsResponse {
  totalArticles: number;
  articles: GNewsArticle[];
}