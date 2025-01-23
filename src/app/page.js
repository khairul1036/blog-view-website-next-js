import FetchBlogs from "@/components/FetchBlogs";
import React from "react";

const Home = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  return (
    <>
      <div>
        <h1 className="text-3xl font-bold mb-8">Blog Posts</h1>
        <div className="grid grid-cols-1 gap-5 px-10">
          {data?.length > 0 ? (
            data.map((blog) => (
              <FetchBlogs
                key={blog.id}
                id={blog.id}
                title={blog.title}
                body={blog.body}
              />
            ))
          ) : (
            <p>No blogs available</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
