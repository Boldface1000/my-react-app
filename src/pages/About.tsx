import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-6xl mx-auto p-6">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-6 text-content-primary">About BlogSpace</h1>
          <p className="text-xl text-content-secondary max-w-3xl mx-auto">
            Your premier destination for insightful articles, community-driven content, and meaningful discussions.
          </p>
        </section>

        {/* Image Section */}
        <section className="mb-12">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
            alt="Team collaboration and writing"
            className="w-full h-96 object-cover rounded-lg shadow-lg"
          />
        </section>

        {/* Content Sections */}
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-4 text-content-primary">Our Mission</h2>
            <p className="text-content-secondary mb-4">
              Welcome to BlogSpace! We are passionate about sharing insightful articles and connecting a community of writers and readers. Our mission is to provide a platform where ideas take flight and knowledge is shared freely.
            </p>
            <p className="text-content-secondary">
              Our team is dedicated to curating high-quality content across various topics, ensuring that our readers stay informed and inspired. Join us on this journey to explore, learn, and grow together.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4 text-content-primary">What We Offer</h2>
            <ul className="space-y-3 text-content-secondary">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                High-quality, curated articles across multiple categories
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Community-driven content and discussions
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Location-based news and local insights
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Professional writing tools and resources
              </li>
            </ul>
          </div>
        </div>

        {/* Stats Section */}
        <section className="bg-surface-secondary rounded-lg p-8 mb-12">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">10K+</div>
              <div className="text-content-secondary">Articles Published</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">50K+</div>
              <div className="text-content-secondary">Active Readers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-content-secondary">Expert Writers</div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-4 text-content-primary">Join Our Community</h2>
          <p className="text-content-secondary mb-6 max-w-2xl mx-auto">
            Ready to start your writing journey or discover amazing content? Join thousands of writers and readers who call BlogSpace their home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup" className="btn-primary px-8 py-3 rounded-lg inline-block text-center">
              Start Writing
            </Link>
            <Link to="/categories" className="btn-secondary px-8 py-3 rounded-lg inline-block text-center">
              Explore Articles
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
