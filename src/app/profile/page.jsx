import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

const Profile = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) {
    return redirect("/api/auth/login");
  }

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-50">
      <h1 className="text-3xl font-semibold text-gray-800 mb-4">
        Welcome to your profile, {user?.given_name}!
      </h1>
      <p className="text-lg text-gray-700">You are logged in.</p>
    </div>
  );
};

export default Profile;
