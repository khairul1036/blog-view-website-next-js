import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

const Profile = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  console.log(user);

  if (!user) {
    // Redirect unauthenticated users to login
    return redirect("/api/auth/login");
  }

  return <div>Welcome to your profile, {user.given_name}!</div>; // Show user's name or info if available
};

export default Profile;
