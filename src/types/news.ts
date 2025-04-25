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