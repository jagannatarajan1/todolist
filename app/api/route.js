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
  const allTask = await todolistfinal.find();
  return NextResponse.json({ allTask });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await todolistfinal.findByIdAndDelete(id);
  return NextResponse.json({ message: "Topic deleted" }, { status: 200 });
}
