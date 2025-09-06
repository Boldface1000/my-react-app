import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-image.jpg';

const Hero = () => {
  console.log('Hero component rendering...');
  
  return (
    <section className="relative bg-gradient-hero overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Modern blog platform"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-surface/80 to-surface-elevated/60" />
      </div>
      
      <div className="relative content-container py-24 md:py-32">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-6">
            <Sparkles className="w-5 h-5 text-accent" />
            <span className="text-sm font-medium text-accent uppercase tracking-wider">
              Modern Content Platform
            </span>
          </div>
          
          <h1 className="font-display text-5xl md:text-7xl font-bold text-content-primary mb-6 leading-tight">
            Where Ideas
            <span className="block text-brand">Take Flight</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-content-secondary mb-8 leading-relaxed max-w-2xl">
            Discover thought-provoking articles, share your insights, and connect with a community 
            of passionate writers and readers.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="btn-primary text-lg px-8 py-4 group">
              Start Reading
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button className="btn-secondary text-lg px-8 py-4">
              Join Community
            </Button>
          </div>
          
          <div className="flex items-center gap-8 mt-12 pt-8 border-t border-border-subtle">
            <div>
              <div className="text-2xl font-bold text-content-primary">10K+</div>
              <div className="text-sm text-content-tertiary">Articles Published</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-content-primary">5K+</div>
              <div className="text-sm text-content-tertiary">Active Writers</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-content-primary">50K+</div>
              <div className="text-sm text-content-tertiary">Monthly Readers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;