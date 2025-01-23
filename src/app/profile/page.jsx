// import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
// import { redirect } from "next/navigation";

// const Profile = async () => {
//   const { getUser } = getKindeServerSession();
//   const user = await getUser();
//   // console.log(user);
//   if (!user) {
//     return redirect("/api/auth/login");
//   }

//   return (
//     <div className="max-w-3xl mx-auto p-6 bg-gray-50">
//       <h1 className="text-3xl font-semibold text-gray-800 mb-4">
//         Welcome to your profile, {user?.given_name}!
//       </h1>
//       <p className="text-lg text-gray-700">You are logged in.</p>
//       <p className="text-lg text-gray-700">Email: {user?.email}</p>
//     </div>
//   );
// };

// export default Profile;

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function Protected() {
  const { isAuthenticated } = getKindeServerSession();
  const { getUser } = getKindeServerSession();
  const user = await getUser();
//   console.log(user);

  return (
    (await isAuthenticated()) && (
      <div className="max-w-4xl mx-auto p-8">
        <h1 className="text-2xl font-bold mb-4">
          Welcome to your profile, {user?.given_name || user?.email}!
        </h1>

        <div className="bg-white shadow rounded-lg p-6">
          <div className="space-y-4">
            <div>
              <h2 className="text-lg text-gray-600 font-semibold">
                Profile Information
              </h2>
              <p className="text-gray-600">Email: {user?.email}</p>
              <p className="text-gray-600">
                Name: {user?.given_name} {user?.family_name}
              </p>
            </div>

            {user?.picture && (
              <div>
                <img
                  src={user?.picture}
                  alt="Profile picture"
                  className="w-20 h-20 rounded-full"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    )
  );
}
