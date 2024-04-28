import mongoose, { Schema } from "mongoose";

const todolistSchema = new Schema(
  {
    task: String,
  },
  {
    timestamps: true,
  }
);
const Todolistlast =
  mongoose.models.Todolistlast ||
  mongoose.model("Todolistlast", todolistSchema);
export default Todolistlast;
