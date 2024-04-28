import todolistfinal from "@/(models)/skeleton";
import { connectMongoDB } from "@/utils/mongoDB";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { task, status } = await request.json();
  await connectMongoDB();
  await todolistfinal.create({ task, status });
  console.log(task, status);
  return NextResponse.json(
    { message: "Todolistlast Created" },
    { status: 201 }
  );
}

export async function GET() {
  await connectMongoDB();
  const allTask = await Todolistlast.find();
  return NextResponse.json({ allTask });
}
