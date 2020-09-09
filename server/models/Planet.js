import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const Planet = new Schema(
  {
    name: { type: String, required: true },
    star: { type: ObjectId, ref: "Star" },
    life: { type: Boolean, required: true },
  },

  { timestamps: true, toJSON: { virtuals: true } }
);

export default Planet;
