import { handleHttp } from "../utils/error.handle";
import { Response, Request } from "express";
import { RequestExt } from "../interfaces/req-ext";


const getProducts = (req: RequestExt, res: Response) => {
  try {
    res.send({
      data: "ESTE SOLO LO VE LAS PERSONAS CON SESSION / JWT",
      user: req.user,
    });
  } catch (e) {
    handleHttp(res, "ERROR_GET_PRODUCTS");
  }
};

export { getProducts };
