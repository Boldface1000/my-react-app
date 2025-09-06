import { useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { MapPin, Calendar, ExternalLink, Filter, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { useLocation } from '@/hooks/useLocation';
import { useLocalNews } from '@/hooks/useLocalNews';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Categories = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const { location, loading: locationLoading, error: locationError, requestLocation } = useLocation();
  const { news: localNews, loading: newsLoading, error: newsError, refreshNews } = useLocalNews(
    location ? `${location.city}, ${location.region}` : undefined
  );
  const navigate = useNavigate();

  const selectedCategory = searchParams.get('category') || 'all';

  const categories = [
    { id: 'business', name: 'Business', color: 'bg-green-500' },
    { id: 'technology', name: 'Technology', color: 'bg-blue-500' },
    { id: 'science', name: 'Science', color: 'bg-purple-500' },
    { id: 'health', name: 'Health', color: 'bg-red-500' },
    { id: 'entertainment', name: 'Entertainment', color: 'bg-orange-500' }
  ];

  const getFilteredNews = () => {
    if (selectedCategory === 'all') {
      // Combine all categories
      return Object.values(localNews).flat();
    }
    return localNews[selectedCategory] || [];
  };

  const filteredNews = getFilteredNews();

  const handleCategoryChange = (categoryId: string) => {
    setSearchParams({ category: categoryId });
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-surface-elevated">
      <Header />
      <div className="content-container py-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <div>
              <h1 className="font-display text-3xl md:text-4xl font-bold text-content-primary">
                Categories
              </h1>
              <p className="text-content-secondary mt-2">
                Explore location-based news and articles
              </p>
            </div>
          </div>

          {/* Location Info */}
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-accent" />
            {locationLoading ? (
              <span className="text-sm text-content-tertiary">Detecting location...</span>
            ) : location ? (
              <span className="text-sm text-content-secondary">
                {location.city}, {location.region}
              </span>
            ) : (
              <Button
                variant="outline"
                size="sm"
                onClick={requestLocation}
                className="text-xs"
              >
                Enable Location
              </Button>
            )}
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          <Button
            variant={selectedCategory === 'all' ? 'default' : 'outline'}
            size="sm"
            onClick={() => handleCategoryChange('all')}
            className="flex items-center gap-2"
          >
            <Filter className="w-4 h-4" />
            All Categories
          </Button>
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? 'default' : 'outline'}
              size="sm"
              onClick={() => handleCategoryChange(category.id)}
              className="flex items-center gap-2"
            >
              <div className={`w-3 h-3 rounded-full ${category.color}`} />
              {category.name}
              <Badge variant="secondary" className="ml-1 text-xs">
                {localNews[category.id]?.length || 0}
              </Badge>
            </Button>
          ))}
        </div>

        {/* News Articles */}
        <div className="space-y-6">
          {newsLoading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-brand mx-auto mb-4"></div>
              <p className="text-content-secondary">Loading location-based news...</p>
            </div>
          ) : newsError ? (
            <div className="text-center py-12">
              <p className="text-red-500 mb-4">Failed to load news</p>
              <Button onClick={() => refreshNews(location ? `${location.city}, ${location.region}` : undefined)}>
                Try Again
              </Button>
            </div>
          ) : filteredNews.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-content-secondary">
                {selectedCategory === 'all'
                  ? 'No news articles available for your location.'
                  : `No ${selectedCategory} news available for your location.`
                }
              </p>
              <Button
                variant="outline"
                onClick={() => refreshNews(location ? `${location.city}, ${location.region}` : undefined)}
                className="mt-4"
              >
                Refresh News
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredNews.map((article) => (
                <Card key={article.id} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <Badge
                        variant="outline"
                        className="mb-2 capitalize"
                      >
                        {article.category}
                      </Badge>
                      <div className={`w-3 h-3 rounded-full ${categories.find(c => c.id === article.category)?.color || 'bg-gray-500'}`} />
                    </div>
                    <CardTitle className="text-lg leading-tight">
                      {article.title}
                    </CardTitle>
                    <CardDescription className="flex items-center gap-2 text-sm">
                      <Calendar className="w-4 h-4" />
                      {formatDate(article.publishedAt)}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-content-secondary text-sm mb-4 leading-relaxed">
                      {article.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-content-tertiary">
                        {article.source}
                      </span>
                    <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-border-subtle">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => {
                          setSelectedArticle(article);
                          setIsPreviewOpen(true);
                        }}
                        className="text-primary hover:text-primary-dark"
                      >
                        <Eye className="w-3 h-3 mr-1" />
                        Preview
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => {
                          navigate('/article-detail', { state: { article } });
                        }}
                        className="text-primary hover:text-primary-dark"
                      >
                        Read More
                      </Button>
                    </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>

        {/* Location Context Info */}
        {location && (
          <div className="mt-12 p-6 bg-surface-secondary rounded-lg">
            <h3 className="font-semibold text-content-primary mb-2 flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Location-Based Content
            </h3>
            <p className="text-content-secondary text-sm">
              All articles shown are tailored for <strong>{location.city}, {location.region}</strong>.
              The content is automatically updated based on your current location to provide
              the most relevant local news and information for your area.
            </p>
            <div className="mt-4 flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={requestLocation}
              >
                Update Location
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => refreshNews(`${location.city}, ${location.region}`)}
              >
                Refresh News
              </Button>
            </div>
          </div>
        )}

        {/* Article Preview Dialog */}
        <Dialog open={isPreviewOpen} onOpenChange={setIsPreviewOpen}>
          <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
            {selectedArticle && (
              <>
                <DialogHeader>
                  <div className="flex items-start justify-between">
                    <Badge
                      variant="outline"
                      className="mb-2 capitalize"
                    >
                      {selectedArticle.category}
                    </Badge>
                    <div className={`w-3 h-3 rounded-full ${categories.find(c => c.id === selectedArticle.category)?.color || 'bg-gray-500'}`} />
                  </div>
                  <DialogTitle className="text-2xl leading-tight pr-8">
                    {selectedArticle.title}
                  </DialogTitle>
                  <DialogDescription className="flex items-center gap-4 text-sm">
                    <span className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {formatDate(selectedArticle.publishedAt)}
                    </span>
                    <span className="text-content-tertiary">
                      Source: {selectedArticle.source}
                    </span>
                  </DialogDescription>
                </DialogHeader>

                <div className="space-y-4">
                  <div className="prose prose-sm max-w-none">
                    <p className="text-content-secondary text-base leading-relaxed">
                      {selectedArticle.description}
                    </p>
                  </div>

                  <div className="flex gap-3 pt-4 border-t">
                    <Button
                      asChild
                      className="flex-1"
                    >
                      <a
                        href={selectedArticle.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        Read Full Article
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => setIsPreviewOpen(false)}
                    >
                      Close Preview
                    </Button>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
      <Footer />
    </div>
  );
};

export default Categories;
