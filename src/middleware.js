import { NextResponse, NextRequest } from "next/server";

export function middleware(req) {
  const path = req.nextUrl.pathname;
  const isPublicPath = path === "/login" || path === "register";
  const token = req.cookies.get("token")?.value || "";

  if (isPublicPath && token) {
    return NextResponse.redirect(new URL("/profile", req.nextUrl));
  }
  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }
}

export const config = {
  matcher: ["/", "/profile", "/login", "/register"],
};
