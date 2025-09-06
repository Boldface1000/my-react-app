// News API service for fetching location-based news
// Replace with your actual API keys and endpoints

export interface NewsArticle {
  id: string;
  title: string;
  description: string;
  url: string;
  publishedAt: string;
  source: string;
  category: string;
}

export interface NewsAPIResponse {
  status: string;
  totalResults: number;
  articles: {
    source: {
      id: string | null;
      name: string;
    };
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
  }[];
}

class NewsService {
  private apiKey: string;
  private baseUrl: string;

  constructor() {
    // In production, use environment variables
    this.apiKey = process.env.REACT_APP_NEWS_API_KEY || 'YOUR_NEWS_API_KEY';
    this.baseUrl = 'https://newsapi.org/v2';
  }

  // Fetch news by category and location
  async getLocalNews(category: string, location?: string): Promise<NewsArticle[]> {
    try {
      const query = location
        ? `${category} ${location}`
        : category;

      const url = `${this.baseUrl}/everything?q=${encodeURIComponent(query)}&apiKey=${this.apiKey}&pageSize=10&sortBy=publishedAt`;

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`News API error: ${response.status}`);
      }

      const data: NewsAPIResponse = await response.json();

      return data.articles.map(article => ({
        id: article.url, // Use URL as unique ID
        title: article.title,
        description: article.description,
        url: article.url,
        publishedAt: article.publishedAt,
        source: article.source.name,
        category: category
      }));
    } catch (error) {
      console.error('Error fetching news:', error);
      // Return empty array or cached data as fallback
      return [];
    }
  }

  // Fetch top headlines for a location
  async getTopHeadlines(location?: string): Promise<NewsArticle[]> {
    try {
      const country = this.getCountryCode(location);
      const url = `${this.baseUrl}/top-headlines?country=${country}&apiKey=${this.apiKey}&pageSize=20`;

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`News API error: ${response.status}`);
      }

      const data: NewsAPIResponse = await response.json();

      return data.articles.map(article => ({
        id: article.url,
        title: article.title,
        description: article.description,
        url: article.url,
        publishedAt: article.publishedAt,
        source: article.source.name,
        category: 'general'
      }));
    } catch (error) {
      console.error('Error fetching top headlines:', error);
      return [];
    }
  }

  // Get country code from location string
  private getCountryCode(location?: string): string {
    // Simple mapping - in production, use a more comprehensive geolocation service
    const countryMap: Record<string, string> = {
      'united states': 'us',
      'us': 'us',
      'united kingdom': 'gb',
      'uk': 'gb',
      'canada': 'ca',
      'australia': 'au',
      'germany': 'de',
      'france': 'fr',
      'japan': 'jp',
      'china': 'cn',
      'india': 'in'
    };

    if (!location) return 'us'; // Default to US

    const lowerLocation = location.toLowerCase();
    for (const [key, value] of Object.entries(countryMap)) {
      if (lowerLocation.includes(key)) {
        return value;
      }
    }

    return 'us'; // Default fallback
  }

  // Alternative: Use Bing News API
  async getBingNews(category: string, location?: string): Promise<NewsArticle[]> {
    try {
      const subscriptionKey = process.env.REACT_APP_BING_NEWS_KEY || 'YOUR_BING_API_KEY';
      const query = location ? `${category} ${location}` : category;

      const url = `https://api.bing.microsoft.com/v7.0/news/search?q=${encodeURIComponent(query)}&count=10&mkt=en-US`;

      const response = await fetch(url, {
        headers: {
          'Ocp-Apim-Subscription-Key': subscriptionKey
        }
      });

      if (!response.ok) {
        throw new Error(`Bing News API error: ${response.status}`);
      }

      const data = await response.json();

      return data.value.map((article: any) => ({
        id: article.url,
        title: article.name,
        description: article.description,
        url: article.url,
        publishedAt: article.datePublished,
        source: article.provider[0]?.name || 'Bing News',
        category: category
      }));
    } catch (error) {
      console.error('Error fetching Bing news:', error);
      return [];
    }
  }
}

// Export singleton instance
export const newsService = new NewsService();

// Utility functions for location-based content
export const getLocationBasedQuery = (category: string, location?: string): string => {
  if (!location) return category;

  // Add location-specific keywords
  const locationKeywords = location.toLowerCase().split(',').map(loc => loc.trim());

  return `${category} ${locationKeywords.join(' ')}`;
};

export const filterNewsByRecency = (articles: NewsArticle[], days: number = 7): NewsArticle[] => {
  const cutoffDate = new Date();
  cutoffDate.setDate(cutoffDate.getDate() - days);

  return articles.filter(article => {
    const articleDate = new Date(article.publishedAt);
    return articleDate >= cutoffDate;
  });
};

export const sortNewsByRelevance = (articles: NewsArticle[], location?: string): NewsArticle[] => {
  if (!location) return articles;

  const locationLower = location.toLowerCase();

  return articles.sort((a, b) => {
    const aRelevant = a.title.toLowerCase().includes(locationLower) ||
                     a.description.toLowerCase().includes(locationLower);
    const bRelevant = b.title.toLowerCase().includes(locationLower) ||
                     b.description.toLowerCase().includes(locationLower);

    if (aRelevant && !bRelevant) return -1;
    if (!aRelevant && bRelevant) return 1;
    return 0;
  });
};
