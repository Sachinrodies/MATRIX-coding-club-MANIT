import { GNewsResponse } from '../types/news';

const API_KEY = '43a4e3ea553ccee03e72308412b6c6f8';
const BASE_URL = 'https://gnews.io/api/v4';

export const fetchTechNews = async (): Promise<GNewsResponse> => {
  try {
    const response = await fetch(
      `${BASE_URL}/search?q=technology&token=${API_KEY}`
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