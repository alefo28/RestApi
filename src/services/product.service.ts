import { response } from "express";
import { Client } from "../interfaces/client.interfaces";
import ClientModel from "../models/client";
import ProductModel from "../models/product";

const getProductsService = async () => {
  const responseProduct = await ProductModel.find({});
  return responseProduct;
};

export { getProductsService };
