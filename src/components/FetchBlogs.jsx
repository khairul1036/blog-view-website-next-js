import Link from "next/link";

const FetchBlogs = ({ id, title, body }) => {
  // .log(data);
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{body}</p>
        <div className="card-actions justify-end">
          <Link href={`/blog/${id}`}><button className="btn btn-primary">View Details</button></Link>
        </div>
      </div>
    </div>
  );
};

export default FetchBlogs;
