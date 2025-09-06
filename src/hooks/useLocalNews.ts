import { useState, useEffect } from 'react';

interface NewsArticle {
  id: string;
  title: string;
  description: string;
  url: string;
  publishedAt: string;
  source: string;
  category: string;
}

interface LocalNewsHook {
  news: Record<string, NewsArticle[]>;
  loading: boolean;
  error: string | null;
  refreshNews: (location?: string) => void;
}

// Mock news data - in production, replace with real API calls
const mockNewsData: Record<string, NewsArticle[]> = {
  business: [
    {
      id: '1',
      title: 'Local Tech Startup Raises $5M in Funding',
      description: 'A promising local startup has secured significant investment for expansion.',
      url: '#',
      publishedAt: new Date().toISOString(),
      source: 'Local Business Journal',
      category: 'business'
    },
    {
      id: '2',
      title: 'Downtown Retail District Shows Signs of Recovery',
      description: 'Local businesses report increased foot traffic and sales in recent months.',
      url: '#',
      publishedAt: new Date().toISOString(),
      source: 'City Commerce News',
      category: 'business'
    }
  ],
  technology: [
    {
      id: '3',
      title: 'New AI Research Center Opens in City',
      description: 'State-of-the-art facility dedicated to artificial intelligence research and development.',
      url: '#',
      publishedAt: new Date().toISOString(),
      source: 'Tech Daily',
      category: 'technology'
    }
  ],
  science: [
    {
      id: '4',
      title: 'Local University Breakthrough in Renewable Energy',
      description: 'Researchers develop new solar panel technology with 40% efficiency improvement.',
      url: '#',
      publishedAt: new Date().toISOString(),
      source: 'Science Today',
      category: 'science'
    }
  ],
  health: [
    {
      id: '5',
      title: 'New Community Health Center Opens',
      description: 'State-of-the-art medical facility provides comprehensive healthcare services.',
      url: '#',
      publishedAt: new Date().toISOString(),
      source: 'Health News Network',
      category: 'health'
    }
  ],
  entertainment: [
    {
      id: '6',
      title: 'Local Theater Festival Announces Lineup',
      description: 'Annual arts festival features performances from regional and international artists.',
      url: '#',
      publishedAt: new Date().toISOString(),
      source: 'Arts & Entertainment Weekly',
      category: 'entertainment'
    }
  ]
};

export const useLocalNews = (location?: string): LocalNewsHook => {
  const [news, setNews] = useState<Record<string, NewsArticle[]>>({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchNewsForCategory = async (category: string, userLocation?: string): Promise<NewsArticle[]> => {
    // In production, replace with real API calls
    // Example: NewsAPI, Google News API, etc.

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));

    // For demo purposes, return mock data
    // In production, you would fetch from:
    // `https://newsapi.org/v2/everything?q=${category}+${userLocation}&apiKey=YOUR_API_KEY`

    const categoryNews = mockNewsData[category] || [];

    // Add location context to titles/descriptions if location is provided
    if (userLocation) {
      return categoryNews.map(article => ({
        ...article,
        title: `${userLocation}: ${article.title}`,
        description: article.description
      }));
    }

    return categoryNews;
  };

  const refreshNews = async (userLocation?: string) => {
    setLoading(true);
    setError(null);

    try {
      const categories = ['business', 'technology', 'science', 'health', 'entertainment'];
      const newsPromises = categories.map(category =>
        fetchNewsForCategory(category, userLocation)
      );

      const results = await Promise.all(newsPromises);

      const newsData: Record<string, NewsArticle[]> = {};
      categories.forEach((category, index) => {
        newsData[category] = results[index];
      });

      setNews(newsData);
    } catch (err) {
      setError('Failed to fetch local news');
      console.error('News fetch error:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    refreshNews(location);
  }, [location]);

  return { news, loading, error, refreshNews };
};
