import { NextResponse } from "next/server";

export function middleware(request) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get("token")?.value;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/favicon.ico") ||
    pathname.startsWith("/static") ||
    pathname.match(/\.(png|jpg|jpeg|gif|webp|css|js|ico|svg)$/)
  ) {
    return NextResponse.next();
  }

  if (pathname === "/dashboard" && !token) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if ((pathname === "/" || pathname === "/register") && token) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}
