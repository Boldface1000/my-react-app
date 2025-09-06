import { Link } from 'react-router-dom';
import { Tag, TrendingUp, Code, Palette, Briefcase, PenTool, MapPin, RefreshCw, Newspaper } from 'lucide-react';
import { useLocation } from '@/hooks/useLocation';
import { useLocalNews } from '@/hooks/useLocalNews';

const CategorySection = () => {
  console.log('CategorySection component rendering...');

  const { location, loading: locationLoading, error: locationError, requestLocation } = useLocation();
  const { news: localNews, loading: newsLoading, error: newsError, refreshNews } = useLocalNews(
    location ? `${location.city}, ${location.region}` : undefined
  );

  const getCategoriesWithNews = () => {
    const baseCategories = [
      {
        name: 'Business',
        description: 'Local business news, market updates, and economic insights',
        icon: Briefcase,
        color: 'bg-green-500',
        key: 'business'
      },
      {
        name: 'Technology',
        description: 'Latest tech innovations, gadgets, and digital trends',
        icon: Code,
        color: 'bg-blue-500',
        key: 'technology'
      },
      {
        name: 'Science',
        description: 'Scientific discoveries, research breakthroughs, and innovations',
        icon: TrendingUp,
        color: 'bg-purple-500',
        key: 'science'
      },
      {
        name: 'Health',
        description: 'Health tips, medical news, and wellness information',
        icon: PenTool,
        color: 'bg-red-500',
        key: 'health'
      },
      {
        name: 'Entertainment',
        description: 'Movies, music, celebrity news, and cultural events',
        icon: Palette,
        color: 'bg-orange-500',
        key: 'entertainment'
      }
    ];

    return baseCategories.map(category => ({
      ...category,
      articleCount: localNews[category.key]?.length || 0
    }));
  };

  const categories = getCategoriesWithNews();

  return (
    <section className="content-container py-16 md:py-24 bg-surface-elevated">
      <div className="text-center mb-16">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Tag className="w-5 h-5 text-accent" />
          <span className="text-sm font-medium text-accent uppercase tracking-wider">
            Explore Topics
          </span>
        </div>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-content-primary mb-4">
          Article Categories
        </h2>
        <p className="text-lg text-content-secondary max-w-2xl mx-auto">
          Discover articles organized by topic. Find exactly what you're looking for.
        </p>

        {/* Location Indicator */}
        <div className="flex items-center justify-center gap-2 mt-6">
          <MapPin className="w-4 h-4 text-accent" />
          {locationLoading ? (
            <span className="text-sm text-content-tertiary">Detecting location...</span>
          ) : location ? (
            <div className="flex items-center gap-2">
              <span className="text-sm text-content-secondary">
                Content for {location.city || 'your area'}
                {location.region && `, ${location.region}`}
              </span>
              <button
                onClick={requestLocation}
                className="text-accent hover:text-brand transition-colors"
                title="Refresh location"
              >
                <RefreshCw className="w-4 h-4" />
              </button>
            </div>
          ) : locationError ? (
            <div className="flex items-center gap-2">
              <span className="text-sm text-red-500">Location unavailable</span>
              <button
                onClick={requestLocation}
                className="text-accent hover:text-brand transition-colors text-sm"
              >
                Try again
              </button>
            </div>
          ) : (
            <button
              onClick={requestLocation}
              className="text-accent hover:text-brand transition-colors text-sm"
            >
              Enable location services
            </button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {categories.map((category) => {
          const IconComponent = category.icon;
          return (
            <Link
              key={category.name}
              to={`/categories?category=${category.key}`}
              className="group card-subtle p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex flex-col items-center text-center">
                <div className={`w-12 h-12 ${category.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-display text-xl font-semibold text-content-primary mb-2 group-hover:text-brand transition-colors">
                  {category.name}
                </h3>
                <p className="text-content-secondary text-sm mb-3 leading-relaxed">
                  {category.description}
                </p>
                <div className="flex items-center gap-1 text-accent text-sm font-medium">
                  <TrendingUp className="w-4 h-4" />
                  {category.articleCount} articles
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default CategorySection;
