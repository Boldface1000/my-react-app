import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const ArticleDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const article = location.state?.article;

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-8">
        <p className="text-content-secondary mb-4">No article data available.</p>
        <Button onClick={() => navigate(-1)}>Go Back</Button>
      </div>
    );
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <div className="min-h-screen bg-surface-elevated p-8">
      <Button variant="ghost" size="icon" onClick={() => navigate(-1)} className="mb-6">
        <ArrowLeft className="h-5 w-5" />
      </Button>
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center justify-between mb-4">
          <Badge variant="outline" className="capitalize">
            {article.category}
          </Badge>
          <span className="text-sm text-content-tertiary flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            {formatDate(article.publishedAt)}
          </span>
        </div>
        <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
        {article.urlToImage && (
          <img
            src={article.urlToImage}
            alt={article.title}
            className="w-full h-auto rounded-md mb-6"
          />
        )}
        <p className="text-content-secondary mb-6 leading-relaxed">{article.description}</p>
        <Button asChild>
          <a href={article.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
            Read Full Article on Source
            <ExternalLink className="w-4 h-4" />
          </a>
        </Button>
      </div>
    </div>
  );
};

export default ArticleDetail;
