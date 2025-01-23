import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

const Profile = async () => {
  let user;
  try {
    const { getUser } = getKindeServerSession();
    user = await getUser();  // Fetch the user data
  } catch (error) {
    console.error("Error fetching user session:", error);
    return redirect("/api/auth/login"); // Redirect if there's an error
  }

  // If no user is found, redirect them to the login page
  if (!user) {
    return redirect("/api/auth/login");
  }

  // If the user is logged in, display their profile information
  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-50">
      <h1 className="text-3xl font-semibold text-gray-800 mb-4">
        Welcome to your profile, {user?.given_name}!
      </h1>
      <p className="text-lg text-gray-700">You are logged in.</p>
      <p className="text-lg text-gray-700">Email: {user?.email}</p>
    </div>
  );
};

export default Profile;
