import { redirect } from "next/navigation";

const Profile = ({ user }) => {
  console.log("user======> ", user);

  if (!user) {
    return redirect("/api/auth/login");
  }

  return <div>profile</div>;
};

export default Profile;
