import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function Protected() {
  const { isAuthenticated } = getKindeServerSession();
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    (await isAuthenticated()) && (
      <div className="max-w-4xl mx-auto p-8">
        <h1 className="text-xl md:text-3xl text-gray-600 font-bold mb-8 text-left pt-5 md:pt-10 border-b pb-2">
          Welcome to your profile, {user?.given_name || user?.email}!
        </h1>

        <div className="bg-white shadow rounded-lg p-6">
          <div className="space-y-4 flex flex-col md:flex-row items-center gap-5">
            {user?.picture && (
              <div>
                <img
                  src={user?.picture}
                  alt="Profile picture"
                  className="w-20 h-20 rounded-full"
                />
              </div>
            )}
            <div>
              <h2 className="text-lg text-gray-600 font-semibold">
                Profile Information
              </h2>
              <p className="text-gray-600">Email: {user?.email}</p>
              <p className="text-gray-600">
                Name: {user?.given_name} {user?.family_name}
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
