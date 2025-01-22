import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

const Profile = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
//   console.log("user======> ", user);

  if (!user) {
    return redirect("/api/auth/login");
  }

  return <div>Welcome to your profile!</div>;
};

export default Profile;
