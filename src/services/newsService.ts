import { NewsResponse } from '../types/news';

const API_KEY = '1c8a75f1857d44949a8e2d203e167c60';
const BASE_URL = 'https://newsapi.org/v2';

export const fetchTechNews = async (): Promise<NewsResponse> => {
  try {
    const response = await fetch(
      `${BASE_URL}/top-headlines?category=technology&language=en&sortBy=publishedAt&apiKey=${API_KEY}`
    );

    if (!response.ok) {
      throw new Error('Failed to fetch tech news');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching tech news:', error);
    throw error;
  }
}; 