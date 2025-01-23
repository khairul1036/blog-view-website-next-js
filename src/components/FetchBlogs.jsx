import Link from "next/link";

const FetchBlogs = ({ id, title }) => {

  return (
    <>
      <Link href={`/blog/${id}`}>
        <h2 className="border border-gray-200 text-gray-700 hover:bg-teal-500 px-4 py-3 rounded-lg hover:text-white">
          {id}. {title}
        </h2>
      </Link>
    </>
  );
};

export default FetchBlogs;
