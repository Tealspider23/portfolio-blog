// components/LatestBlogs.jsx
import React, { useEffect, useState } from "react";
import Link from "next/link";

const mockBlogs = [
  {
    id: 1,
    title: "Understanding React Hooks",
    summary: "A deep dive into the world of React Hooks...",
    link: "/blog/react-hooks",
    imageUrl: "/pf.png",
  },
  {
    id: 2,
    title: "Getting Started with Next.js",
    summary: "A comprehensive guide to getting started with Next.js...",
    link: "/blog/nextjs-guide",
    imageUrl: "/pf.png",
  },
  {
    id: 3,
    title: "JavaScript ES2021 Features",
    summary: "An overview of the new features introduced in ES2021...",
    link: "/blog/js-es2021",
    imageUrl: "/pf.png",
  },
];

const LatestBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    setBlogs(mockBlogs);
  }, []);

  return (
    <section id="latest-blogs" className="py-16 ">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">Latest Blogs</h2>
        <div className="flex flex-wrap gap-8 justify-center">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="max-w-sm w-full border border-white hover:border-accent shadow-md rounded-lg overflow-hidden relative"
            >
              {/* Blog Content */}
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{blog.title}</h3>
                <p className="text-white mb-4">{blog.summary}</p>
                <Link href={blog.link}>
                  <p className="text-accent hover:underline">Read more</p>
                </Link>
              </div>

              {/* Image Overlay */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestBlogs;
