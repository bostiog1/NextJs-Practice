import { headers, cookies } from "next/headers";
import { type NextResponse } from "next/server";

export async function GET(request: NextResponse) {
  const requestHeaders = new Headers(request.headers);
  const headerList = headers();

  cookies().set("resultsPerPage", "20");
  const theme = request.cookies.get("theme");

  console.log(requestHeaders.get("Authorization"));
  console.log(headerList.get("Authorization"));
  console.log(cookies().get("resultsPerPage"));

  return new Response("<h1>Profile API data</h>", {
    headers: {
      "Content-Type": "text/html",
      "Set-Cookie": "theme=dark",
    },
  });
}
