import { handleHttp } from "../utils/error.handle";
import { Response, Request, response } from "express";
import {
  getClientsService,
  insertClient,
  getClientService,
  updateClientService,
  deleteClientService
} from "../services/client.service";

const getClient = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await getClientService(id);
    const data = response ? response : "NOT_FOUND"
    res.send(data);
  } catch (e) {
    handleHttp(res, "ERROR_GET_CLIENT");
  }
};
const getClients = async (req: Request, res: Response) => {
  try {
    const response = await getClientsService();
    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR_GET_CLIENTS");
  }
};


const updateClient = async ({params, body}: Request, res: Response) => {
  try {
    const {id} = params;
    const response = await updateClientService(id, body);
    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR_UPDATE_CLIENTS");
  }
};


const postClient = async ({ body }: Request, res: Response) => {
  try {
    const responseClient = await insertClient(body);
    res.send(responseClient);
  } catch (e) {
    handleHttp(res, "ERROR_POST_CLIENTS", e);
  }
};
const deleteClient = async ({params}: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await deleteClientService(id);
    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR_DELETE_CLIENTS");
  }
};

export { getClient, getClients, postClient, updateClient, deleteClient };
