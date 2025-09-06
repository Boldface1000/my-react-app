import { Calendar, Clock, Eye, MessageCircle } from 'lucide-react';

interface ArticleCardProps {
  id: string;
  title: string;
  excerpt: string;
  author: {
    name: string;
    avatar?: string;
  };
  publishedAt: string;
  readTime: string;
  views: number;
  comments: number;
  image?: string;
  category: string;
  featured?: boolean;
}

const ArticleCard = ({ 
  id, 
  title, 
  excerpt, 
  author, 
  publishedAt, 
  readTime, 
  views, 
  comments, 
  image, 
  category,
  featured = false 
}: ArticleCardProps) => {
  return (
    <article className={`card-elevated hover:shadow-lg transition-all duration-300 overflow-hidden group ${
      featured ? 'md:col-span-2 md:row-span-2' : ''
    }`}>
      {image && (
        <div className="relative overflow-hidden">
          <img
            src={image}
            alt={title}
            className={`w-full object-cover transition-transform duration-300 group-hover:scale-105 ${
              featured ? 'h-64 md:h-80' : 'h-48'
            }`}
          />
          <div className="absolute top-4 left-4">
            <span className="inline-flex items-center px-3 py-1 text-xs font-medium bg-brand text-content-inverse rounded-full">
              {category}
            </span>
          </div>
        </div>
      )}
      
      <div className={`p-6 ${featured ? 'md:p-8' : ''}`}>
        <div className="flex items-center gap-4 mb-4 text-sm text-content-tertiary">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span>{publishedAt}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{readTime}</span>
          </div>
        </div>

        <h2 className={`font-display font-semibold text-content-primary mb-3 line-clamp-2 hover:text-brand transition-colors duration-200 ${
          featured ? 'text-3xl md:text-4xl mb-4' : 'text-xl'
        }`}>
          <a href={`/article/${id}`} className="hover:underline">
            {title}
          </a>
        </h2>

        <p className={`text-content-secondary mb-4 line-clamp-3 ${
          featured ? 'text-lg leading-relaxed' : ''
        }`}>
          {excerpt}
        </p>

        <div className="flex items-center justify-between pt-4 border-t border-border-subtle">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-brand-subtle rounded-full flex items-center justify-center">
              <span className="text-sm font-medium text-brand">
                {author.name.charAt(0).toUpperCase()}
              </span>
            </div>
            <span className="text-sm font-medium text-content-primary">
              {author.name}
            </span>
          </div>

          <div className="flex items-center gap-4 text-sm text-content-tertiary">
            <div className="flex items-center gap-1">
              <Eye className="w-4 h-4" />
              <span>{views.toLocaleString()}</span>
            </div>
            <div className="flex items-center gap-1">
              <MessageCircle className="w-4 h-4" />
              <span>{comments}</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ArticleCard;