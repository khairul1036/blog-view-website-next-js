import Link from "next/link";

const Navbar = () => {
  return (
    <div className="bg-gray-100">
      <nav className="max-w-screen-xl mx-auto flex justify-between py-5">
        <div>
            Logo
        </div>
        <div className="flex gap-5">
            <Link href={"/"}>Home</Link>
            <Link href={"/profile"}>Profile</Link>
            <Link href={"/login"}>Login</Link>
            <Link href={"/blog"}>blog</Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
