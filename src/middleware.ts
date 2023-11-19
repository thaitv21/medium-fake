import {NextRequest, NextResponse} from "next/server";

export function middleware(req: NextRequest) {
  const query = req.nextUrl.searchParams;
  const rewrite = query.get("rewrite");
  console.log("rewrite", rewrite);
  if (rewrite) {
    return NextResponse.rewrite(rewrite);
  }
  // return NextResponse.next();
}

export const config = {
  matcher: '/medium/:path*',
}