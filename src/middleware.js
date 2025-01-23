// import { withAuth } from "@kinde-oss/kinde-auth-nextjs/middleware";

// export const config = {
//   matcher: [
//     /*
//      * Match all request paths except for the ones starting with:
//      * - api (API routes)
//      * - _next/static (static files)
//      * - _next/image (image optimization files)
//      * - favicon.ico, sitemap.xml, robots.txt (metadata files)
//      */
//     '/((?!api|about|privacypolicy|termsofservice|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|$).*)',
//   ],
// }

// export default withAuth;

// import { withAuth } from "@kinde-oss/kinde-auth-nextjs/middleware";

// export default function middleware() {
//   return withAuth();
// }
// export const config = {
//   matcher: ["/profile"],
// };

import { withAuth } from "@kinde-oss/kinde-auth-nextjs/middleware";

// export default withAuth({
//   matcher: ['/profile'],
// });

export const config = {
  matcher: ["/profile"],
};

export default withAuth;
