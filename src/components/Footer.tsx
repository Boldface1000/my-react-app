import { Github, Twitter, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface border-t border-border-subtle">
      <div className="content-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="/" className="font-display text-2xl font-bold text-brand mb-4 block">
              BlogSpace
            </a>
            <p className="text-content-secondary mb-6">
              A modern platform for writers and readers to share knowledge, 
              insights, and stories that matter.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-brand-subtle hover:bg-brand text-brand hover:text-content-inverse rounded-lg flex items-center justify-center transition-all duration-200"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-brand-subtle hover:bg-brand text-brand hover:text-content-inverse rounded-lg flex items-center justify-center transition-all duration-200"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-brand-subtle hover:bg-brand text-brand hover:text-content-inverse rounded-lg flex items-center justify-center transition-all duration-200"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-brand-subtle hover:bg-brand text-brand hover:text-content-inverse rounded-lg flex items-center justify-center transition-all duration-200"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Content */}
          <div>
            <h4 className="font-semibold text-content-primary mb-4">Content</h4>
            <ul className="space-y-3 text-content-secondary">
              <li>
                <a href="/articles" className="hover:text-content-primary transition-colors duration-200">
                  Latest Articles
                </a>
              </li>
              <li>
                <a href="/categories" className="hover:text-content-primary transition-colors duration-200">
                  Categories
                </a>
              </li>
              <li>
                <a href="/authors" className="hover:text-content-primary transition-colors duration-200">
                  Featured Authors
                </a>
              </li>
              <li>
                <a href="/trending" className="hover:text-content-primary transition-colors duration-200">
                  Trending
                </a>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="font-semibold text-content-primary mb-4">Community</h4>
            <ul className="space-y-3 text-content-secondary">
              <li>
                <a href="/write" className="hover:text-content-primary transition-colors duration-200">
                  Write for Us
                </a>
              </li>
              <li>
                <a href="/guidelines" className="hover:text-content-primary transition-colors duration-200">
                  Guidelines
                </a>
              </li>
              <li>
                <a href="/newsletter" className="hover:text-content-primary transition-colors duration-200">
                  Newsletter
                </a>
              </li>
              <li>
                <a href="/events" className="hover:text-content-primary transition-colors duration-200">
                  Events
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-content-primary mb-4">Support</h4>
            <ul className="space-y-3 text-content-secondary">
              <li>
                <a href="/help" className="hover:text-content-primary transition-colors duration-200">
                  Help Center
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-content-primary transition-colors duration-200">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/privacy" className="hover:text-content-primary transition-colors duration-200">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="hover:text-content-primary transition-colors duration-200">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border-subtle flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-content-tertiary text-sm">
            © {currentYear} BlogSpace. All rights reserved.
          </p>
          <p className="text-content-tertiary text-sm flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-accent fill-current" /> for the community
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;