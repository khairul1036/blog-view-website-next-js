import Link from "next/link";

const FetchBlogs = ({ id, title, body }) => {
  // .log(data);
  return (
    <>
      <Link href={`/blog/${id}`}>
        <h2 className="border border-gray-600 px-4 py-2 rounded-lg hover:text-blue-600">{id}. {title}</h2>
      </Link>
    </>
  );
};

export default FetchBlogs;
