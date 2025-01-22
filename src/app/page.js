import FetchBlogs from "@/components/FetchBlogs";
import React from "react";

const Home = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  // console.log(data);
  return (
    <>
      <div>
        <h1>Home</h1>
        <div className="grid grid-cols-3 gap-5 px-10">
          {data?.map((blog) => (
            <FetchBlogs key={blog.id} id={blog.id} title={blog.title} body={blog.body} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
