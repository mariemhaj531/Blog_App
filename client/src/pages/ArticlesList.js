import React from 'react';
import articleContent from "./Article-content";

import Articles from '../components/Articles';
const ArticlesList = () => {
  return (
    <div className="px-4 py-8">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900">Articles</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
       <Articles articles={articleContent} /> 
      </div>
    </div>
  );
};

export default ArticlesList;
