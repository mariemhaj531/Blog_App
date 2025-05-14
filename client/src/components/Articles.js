import React from 'react'
import { Link } from 'react-router-dom'

const Articles = ({ articles }) => {
  return (
    <>
      {articles.map((article, index) => (
        <div
          key={index}
          className="bg-white rounded-xl shadow hover:shadow-md transition duration-300 overflow-hidden mb-6"
        >
          <Link to={`/article/${article.name}`}>
            <img
              className="w-full h-48 object-cover"
              src={article.thumbnail}
              alt={article.title}
            />
          </Link>
          <div className="p-4">
            <h3 className="text-base font-semibold text-gray-800 mb-2">
              {article.title}
            </h3>
            <p className="leading-relaxed mb-3">
              {article.content[0].substring(0, 110)}...
            </p>
            <div className="flex items-center flex-wrap">
              <Link
                className="text-indigo-500 inline-flex items-center"
                to={`/article/${article.name}`}
              >
                Learn more
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default Articles
