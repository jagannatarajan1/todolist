import mongoose from "mongoose";
import { Schema } from "mongoose";
const todoschema = new Schema(
  {
    task: String,
    status: String,
  },
  {
    timestamps: true,
  }
);
const todolistfinal =
  mongoose.models.todolistfinal || mongoose.model("todolistfinal", todoschema);
export default todolistfinal;
