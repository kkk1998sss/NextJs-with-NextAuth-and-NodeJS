import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  console.log("middleware executed");
  // const authToken = request.cookies.get('authToken');
  // console.log(authToken);
  const cookies = request.cookies.get("next-auth.session-token")?.value;
  const LoggiedInUser =
    request.nextUrl.pathname === "/login" ||
    request.nextUrl.pathname === "/Signup";
  console.log(cookies);
  if (LoggiedInUser) {
    if (cookies) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  } else {
    if (!cookies) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    "/",
    "/login",
    "/Signup",
    // "/products",
    // "/InStock",
    // "/NewArrival",
    // "/Sunmica",
    // "/Hardware",
    // "/Plywood",
    "/dashboard/:path*"
    // "/products/:path*",
    // "/api/:path*",
  ],
};
