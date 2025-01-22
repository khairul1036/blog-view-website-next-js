const BlogDetails = async ({ params }) => {
  const { blogId } = await params;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${blogId}`
  );
  const singleBlog = await res.json();
  //   console.log(params.blogId);
  console.log(singleBlog);
  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-50">
      {/* Blog Card */}
      <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
        <h1 className="text-3xl font-semibold text-gray-800 mb-4">
          {singleBlog.title}
        </h1>
        <p className="text-sm text-gray-500 italic mb-6">
          By User {singleBlog.userId}
        </p>
        <div className="text-lg text-gray-700 leading-relaxed">
          <p>{singleBlog.body}</p>
        </div>
      </div>

      {/* Blog Details */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <p className="text-sm text-gray-500">
          <strong>Post ID:</strong> {singleBlog.id}
        </p>
        <p className="text-sm text-gray-500">
          <strong>User ID:</strong> {singleBlog.userId}
        </p>
      </div>
    </div>
  );
};

export default BlogDetails;
