import React, { useState } from 'react';

const latestBlogs = [
  {
    id: 1,
    title: 'Understanding React Hooks',
    summary:
      'React Hooks revolutionize the way we manage state and side effects in functional components. This article provides a beginner-friendly overview of useState, useEffect, and custom hooks, helping developers understand how to write cleaner, more reusable React code.',
  },
  {
    id: 2,
    title: 'Mastering Node.js APIs',
    summary: 'Learn how to build and secure REST APIs using Node.js and Express.',
  },
  {
    id: 3,
    title: 'Getting Started with Next.js',
    summary: 'Server-side rendering, routing, and deployment with Vercel.',
  },
];

const Home = () => {
  const [expanded, setExpanded] = useState(null);

  const handleReadMore = (id) => {
    setExpanded((prev) => (prev === id ? null : id)); 
  };

  return (
    <div className="mb-20">
      <h1 className="sm:text-4xl text-2xl font-bold my-6 text-gray-900">
        Welcome to My Tech Blog
      </h1>
      <p className="text-lg">
        Explore tutorials, tips, and insights on full-stack development. 🚀
      </p>
      {/* UseEffect + Fetch or Axios (API) */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">📌 Latest Blogs</h2>
        <div className="flex gap-6">
          {latestBlogs.map((blog) => (
            <div
              key={blog.id}
              className="border border-gray-200 p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 ease-in-out w-1/3"
            >
              <h3 className="text-xl font-bold text-blue-600">{blog.title}</h3>
              <p className="text-gray-600 mt-2">
                {expanded === blog.id
                  ? blog.summary
                  : `${blog.summary.slice(0, 50)}...`}
              </p>
              <button
                onClick={() => handleReadMore(blog.id)}
                className="text-blue-500 mt-3 inline-block hover:text-blue-700 font-semibold transition-all duration-200"
              >
                {expanded === blog.id ? 'Show Less' : 'Read more →'}
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
