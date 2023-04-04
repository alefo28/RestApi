import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { registerUpload } from "../services/storage.service";
import { RequestExt } from "../interfaces/req-ext";
import { Storage } from "../interfaces/storage.interface";

const getFile = async (req: RequestExt, res: Response) => {
  try {
    const { user, file } = req;
    //console.log(user);
    const dataToRegister:Storage = {
      fileName: `${file?.filename}`,
      idUser: `${user?.id}`,
      path: `${file?.path}`

    };
    const response = await registerUpload(dataToRegister);
    res.send("AQUI:DEBE:LLEGAR_FILE");
  } catch (e) {
    handleHttp(res, "ERROR_GET_PRODUCTS");
  }
};

export { getFile };
