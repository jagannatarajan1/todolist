import Todolistlast from "@/(modal)/page";
import { connectMongoDB } from "@/utils/mongoDB";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    await connectMongoDB();
    const TodolistData = body.todoData;
    await Todolistlast.create(TodolistData);
    return NextResponse.json({ message: "success", TodolistData });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}

export async function GET() {
  await connectMongoDB();
  const allTask = await Todolistlast.find();
  return NextResponse.json({ allTask });
}
