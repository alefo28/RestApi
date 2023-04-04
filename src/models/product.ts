import { Schema, Types, model, Model } from "mongoose";
import { Product } from "../interfaces/product.interfaces ";

const ProductSchema = new Schema<Product>(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    cost: {
      type: String,
    },
    sale: {
      type: Float32Array,
      required: true,
    },
    profit: {
      type: Float32Array,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const ProductModel = model("Products", ProductSchema);
export default ProductModel;
