import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";

const Navbar = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  //   console.log(user);
  return (
    <div className="bg-gray-100">
      <nav className="max-w-screen-xl mx-auto flex justify-between py-5">
        <div>Logo</div>
        <div className="flex gap-5">
          <Link
            href={"/"}
            className="border border-gray-700 rounded-lg px-2 py-1"
          >
            Home
          </Link>
          <Link
            href={user ? "/profile" : "/api/auth/login"}
            className="border border-gray-700 rounded-lg px-2 py-1"
          >
            Profile
          </Link>
          {user ? (
            <Link
              href={"/api/auth/logout"}
              className="border border-gray-700 rounded-lg px-2 py-1"
            >
              Logout
            </Link>
          ) : (
            <Link
              href={"/api/auth/login"}
              className="border border-gray-700 rounded-lg px-2 py-1"
            >
              Login
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
