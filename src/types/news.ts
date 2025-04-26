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

export interface NewsArticle {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  source: {
    name: string;
  };
}

export interface NewsResponse {
  status: string;
  totalResults: number;
  articles: NewsArticle[];
}