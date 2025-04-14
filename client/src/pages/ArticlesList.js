import React from 'react';
import articleContent from "./Article-content";
import { Link } from 'react-router-dom';

const ArticlesList = () => {
  return (
    <div className="px-4 py-8">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900">Articles</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {articleContent.map((article, index) => (
          <Link
            key={index}
            to={`/article/${article.name}`}
            className="bg-white rounded-xl shadow hover:shadow-md transition duration-300 overflow-hidden"
          >
            <img
              className="w-full h-48 object-cover"
              src={article.thumbnail}
              alt={article.title}
            />
            <div className="p-4">
              <h3 className="text-base font-semibold text-gray-800">{article.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ArticlesList;
