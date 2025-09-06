import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const NewArticle: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-4xl mx-auto p-6">
        <h1 className="text-4xl font-bold mb-6">Create a New Article</h1>
        <form className="space-y-6">
          <div>
            <label htmlFor="title" className="block text-lg font-medium mb-2">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="w-full border border-gray-300 rounded-md p-2"
              placeholder="Enter article title"
              required
            />
          </div>
          <div>
            <label htmlFor="author" className="block text-lg font-medium mb-2">
              Author
            </label>
            <input
              type="text"
              id="author"
              name="author"
              className="w-full border border-gray-300 rounded-md p-2"
              placeholder="Enter author name"
              required
            />
          </div>
          <div>
            <label htmlFor="content" className="block text-lg font-medium mb-2">
              Content
            </label>
            <textarea
              id="content"
              name="content"
              rows={10}
              className="w-full border border-gray-300 rounded-md p-2"
              placeholder="Write your article content here..."
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
          >
            Publish Article
          </button>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default NewArticle;
