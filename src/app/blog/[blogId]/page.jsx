const BlogDetails = async ({ params }) => {
  const { blogId } = await params;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${blogId}`
  );

  if (!res.ok) {
    return <div>Error fetching blog details.</div>;
  }

  const singleBlog = await res.json();

  return (
    <div className="max-w-3xl mx-auto px-6">
      <h1 className="text-3xl text-gray-600 font-bold mb-8 text-center pt-5 md:pt-10 border-b pb-2">
        Blog Details
      </h1>
      <div className="mb-8">
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

      <div className="flex gap-5">
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
