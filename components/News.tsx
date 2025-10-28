import React from 'react';
import { NEWS_ARTICLES } from '../constants';
import type { NewsArticle } from '../types';

const NewsCard: React.FC<{ article: NewsArticle }> = ({ article }) => (
  <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2 flex flex-col border border-[#edeff7] hover:border-lime-400">
    <div className="relative">
      <img src={article.image} alt={article.title} className="w-full h-52 object-cover object-center" />
      <span className="absolute top-2 left-2 bg-[#2b2b5c] text-white rounded-full px-4 py-1 text-xs font-bold shadow">
        {article.category}
      </span>
    </div>
    <div className="p-6 flex flex-col flex-grow">
      <p className="text-xs text-gray-400 mb-2">{article.date}</p>
      <h3 className="text-xl font-extrabold mb-2 text-[#232345] flex-grow">{article.title}</h3>
      <p className="text-gray-600 mb-4 flex-grow">{article.summary}</p>
      <a
        href="#"
        className="font-bold text-lime-500 hover:text-lime-600 transition-all mt-auto rounded-full px-5 py-2 bg-[#f7fafc] hover:bg-lime-100 shadow-sm"
      >
        Read article →
      </a>
    </div>
  </div>
);

const News: React.FC = () => {
  return (
    <section className="py-24 bg-[#f7fafc]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <h2 className="text-4xl font-extrabold text-[#2b2b5c] mb-4">News & Updates</h2>
          <p className="text-md text-[#232345] opacity-80">Stay updated with the latest from ALC—events, innovations, and thought leadership in language learning and cross-cultural communication.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {NEWS_ARTICLES.map((article, index) => (
            <NewsCard key={index} article={article} />
          ))}
        </div>
        <div className="text-center mt-16">
          <a href="#" className="bg-[#2b2b5c] hover:bg-[#232345] text-white font-bold py-4 px-10 rounded-full text-lg shadow-xl transition-colors duration-300">
            View Full Blog
          </a>
        </div>
      </div>
    </section>
  );
};

export default News;
