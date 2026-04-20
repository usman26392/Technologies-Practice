import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const {email, password} = await request.json();

//   console.log(email, password);

  if (email !== "admin@mail.com" || password !== "admin") {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  const response = NextResponse.json({
    message: "Login successful",
    user: { id: "1", name: "admin" },
  });

  return response;
}


