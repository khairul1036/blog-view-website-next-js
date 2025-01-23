import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import {LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";
import Link from "next/link";

const Navbar = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <div className="bg-gray-100">
      <nav className="max-w-screen-xl mx-auto flex justify-between px-5 py-5">
        <div>
          <Link href={"/"} className="text-lg md:text-2xl font-bold">Blog<span className="text-teal-600">Nest</span></Link>
        </div>
        <div className="flex gap-1 md:gap-5">
          <Link
            href={"/"}
            className="text-sm md:text-base border border-gray-300 hover:bg-teal-500 hover:text-white rounded-lg px-2 py-1"
          >
            Home
          </Link>
          <Link
            href={user ? "/profile" : "/api/auth/login"}
            className="text-sm md:text-base border border-gray-300 hover:bg-teal-500 hover:text-white rounded-lg px-2 py-1"
          >
            Profile
          </Link>
          {user ? (
            <LogoutLink className="text-sm md:text-base border border-gray-300 hover:bg-teal-500 hover:text-white rounded-lg px-2 py-1 bg-red-500 text-white">Logout </LogoutLink>
          ) : (
            <Link
              href={"/api/auth/login"}
              className="text-sm md:text-base border border-gray-300 hover:bg-teal-500 hover:text-white rounded-lg px-2 py-1 bg-teal-500 text-white"
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
