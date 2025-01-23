import FetchBlogs from "@/components/FetchBlogs";
import React from "react";

const Home = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  return (
    <>
      <div>
        <h1 className="text-3xl font-bold mb-8 text-center pt-5 md:pt-10">
          Blog Title
        </h1>
        <p className="text-gray-500 text-center pb-3 md:pb-0">
          Click blog title to read
        </p>
        <div className="max-w-screen-xl mx-auto  px-5 md:py-5 grid grid-cols-1 gap-5">
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
