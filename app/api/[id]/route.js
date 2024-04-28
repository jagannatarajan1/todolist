import { connectMongoDB } from "@/utils/mongoDB";
import todolistfinal from "@/(models)/skeleton";

import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { id } = params;
  const { task, status } = await request.json();
  await connectMongoDB();
  await todolistfinal.findByIdAndUpdate(id, { task, status });
  return NextResponse.json({ message: "Topic updated" }, { status: 200 });
}

export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const todolist = await todolistfinal.findOne({ _id: id });
  return NextResponse.json({ todolist }, { status: 200 });
}
