import { TrendingUp, Clock, Users } from 'lucide-react';
import ArticleCard from './ArticleCard';

const FeaturedSection = () => {
  console.log('FeaturedSection component rendering...');
  
  // Mock data - in production this would come from your Supabase database
  const featuredArticles = [
    {
      id: '1',
      title: 'The Future of Web Development: Trends to Watch in 2024',
      excerpt: 'Exploring the latest innovations in web technology, from AI integration to advanced framework capabilities that are reshaping how we build digital experiences.',
      author: { name: 'Sarah Chen', avatar: '' },
      publishedAt: 'Dec 15, 2023',
      readTime: '8 min read',
      views: 12400,
      comments: 89,
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80',
      category: 'Technology',
      featured: true
    },
    {
      id: '2',
      title: 'Building Sustainable Design Systems',
      excerpt: 'How to create design systems that scale with your organization while maintaining consistency and developer productivity.',
      author: { name: 'Marcus Rodriguez', avatar: '' },
      publishedAt: 'Dec 14, 2023',
      readTime: '6 min read',
      views: 8900,
      comments: 45,
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&q=80',
      category: 'Design'
    },
    {
      id: '3',
      title: 'Remote Work Revolution: Lessons Learned',
      excerpt: 'Three years into the remote work experiment, what have we learned about productivity, collaboration, and work-life balance?',
      author: { name: 'Emily Watson', avatar: '' },
      publishedAt: 'Dec 13, 2023',
      readTime: '5 min read',
      views: 15600,
      comments: 124,
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80',
      category: 'Workplace'
    },
    {
      id: '4',
      title: 'The Art of Technical Writing',
      excerpt: 'Mastering the balance between technical accuracy and accessibility in documentation and educational content.',
      author: { name: 'David Park', avatar: '' },
      publishedAt: 'Dec 12, 2023',
      readTime: '7 min read',
      views: 6800,
      comments: 38,
      image: 'https://images.unsplash.com/photo-1456324504439-367cee3b3c32?w=800&q=80',
      category: 'Writing'
    }
  ];

  return (
    <section className="content-container py-16 md:py-24">
      {/* Section Header */}
      <div className="text-center mb-16">
        <div className="flex items-center justify-center gap-2 mb-4">
          <TrendingUp className="w-5 h-5 text-accent" />
          <span className="text-sm font-medium text-accent uppercase tracking-wider">
            Featured Content
          </span>
        </div>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-content-primary mb-4">
          Latest Insights
        </h2>
        <p className="text-lg text-content-secondary max-w-2xl mx-auto">
          Discover our most popular and thought-provoking articles, 
          curated by our editorial team and community.
        </p>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {featuredArticles.map((article, index) => (
          <ArticleCard key={article.id} {...article} featured={index === 0} />
        ))}
      </div>

      {/* Stats Section */}
      <div className="card-subtle p-8 md:p-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-brand-subtle rounded-2xl flex items-center justify-center mb-4">
              <TrendingUp className="w-8 h-8 text-brand" />
            </div>
            <h3 className="font-display text-2xl font-semibold text-content-primary mb-2">
              Growing Community
            </h3>
            <p className="text-content-secondary">
              Join thousands of writers and readers sharing knowledge and insights daily.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-accent-subtle rounded-2xl flex items-center justify-center mb-4">
              <Clock className="w-8 h-8 text-accent" />
            </div>
            <h3 className="font-display text-2xl font-semibold text-content-primary mb-2">
              Fresh Content
            </h3>
            <p className="text-content-secondary">
              New articles published daily covering technology, design, business, and more.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-brand-subtle rounded-2xl flex items-center justify-center mb-4">
              <Users className="w-8 h-8 text-brand" />
            </div>
            <h3 className="font-display text-2xl font-semibold text-content-primary mb-2">
              Expert Authors
            </h3>
            <p className="text-content-secondary">
              Learn from industry leaders and experienced practitioners sharing real insights.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;