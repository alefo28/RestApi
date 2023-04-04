import { response } from "express";
import { Client } from "../interfaces/client.interfaces";
import ClientModel from "../models/client";

const insertClient = async (client: Client) => {
  const ResponseInsert = await ClientModel.create(client);
  return ResponseInsert;
};

const getClientsService = async () => {
  const responseClient = await ClientModel.find({});
  return responseClient;
};

const getClientService = async (id: string) => {
  const responseClient = await ClientModel.findOne({ _id: id });
  return responseClient;
};

const updateClientService = async (id: string, data: Client) => {
  const responseClient = await ClientModel.findOneAndUpdate({ _id: id }, data, {
    new: true,
  });
  return responseClient;
};

const deleteClientService = async (id: string) => {
  const responseClient = await ClientModel.findOneAndRemove({ _id: id });
  return responseClient;
};

export {
  insertClient,
  getClientsService,
  getClientService,
  updateClientService,
  deleteClientService,
};
