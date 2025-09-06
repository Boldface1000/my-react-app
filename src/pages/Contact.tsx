import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-4xl mx-auto p-6">
        <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
        <p>
          Have questions or want to get in touch? Reach out to us via email at contact@blogspace.com or use the contact form below.
        </p>
        <form className="mt-6 space-y-4">
          <div>
            <label htmlFor="name" className="block font-medium mb-1">Name</label>
            <input type="text" id="name" name="name" className="w-full border border-gray-300 rounded-md p-2" required />
          </div>
          <div>
            <label htmlFor="email" className="block font-medium mb-1">Email</label>
            <input type="email" id="email" name="email" className="w-full border border-gray-300 rounded-md p-2" required />
          </div>
          <div>
            <label htmlFor="message" className="block font-medium mb-1">Message</label>
            <textarea id="message" name="message" rows={5} className="w-full border border-gray-300 rounded-md p-2" required></textarea>
          </div>
          <button type="submit" className="btn-primary px-6 py-3 rounded-md">Send Message</button>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
