import React, { useState } from 'react';

const latestBlogs = [
  {
    id: 1,
    title: 'Understanding React Hooks',
    thumbnail: "/images/blog3.jpg",
    summary:
      'React Hooks revolutionize the way we manage state and side effects in functional components. This article provides a beginner-friendly overview of useState, useEffect, and custom hooks, helping developers understand how to write cleaner, more reusable React code.',
  },
  {
    id: 2,
    title: 'Mastering Node.js APIs',
    thumbnail: "/images/blog3.jpg",
    summary: 'Learn how to build and secure REST APIs using Node.js and Express.',
  },
  {
    id: 3,
    title: 'Getting Started with Next.js',
    thumbnail: "/images/blog3.jpg",
    summary: 'Server-side rendering, routing, and deployment with Vercel.',
  },
];

const Home = () => {
  const [expanded, setExpanded] = useState(null);

  const handleReadMore = (id) => {
    setExpanded((prev) => (prev === id ? null : id));
  };

  return (
    <div className="mb-20 px-4">
      <div className="text-center py-12 px-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl shadow-sm mb-10">
  <h1 className="sm:text-5xl text-3xl font-extrabold text-gray-900 mb-4">
    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
      Welcome to My Tech Blog
    </span>
  </h1>
  <p className="text-lg text-gray-700 max-w-2xl mx-auto">
    Explore tutorials, tips, and insights on full-stack development. 🚀
  </p>
  <p className="italic text-sm text-gray-500 mt-2">
    Empowering developers to build smarter, faster, and better.
  </p>
      </div>
      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Latest Blogs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestBlogs.map((blog) => (
            <div
              key={blog.id}
              className="border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 ease-in-out bg-white overflow-hidden"
            >
              <img
                src={blog.thumbnail}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold text-gray-800">{blog.title}</h3>
                <p className="text-gray-600 mt-2">
                  {expanded === blog.id
                    ? blog.summary
                    : `${blog.summary.slice(0, 80)}...`}
                </p>
                <button
                  onClick={() => handleReadMore(blog.id)}
                  className="text-blue-500 mt-3 inline-block hover:text-blue-700 font-semibold transition-all duration-200"
                >
                  {expanded === blog.id ? 'Show Less' : 'Read more →'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
