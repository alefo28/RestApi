import { Request, Response, Router } from "express";
import {
  deleteClient,
  getClient,
  getClients,
  postClient,
  updateClient,
} from "../controllers/client";
import { logMiddleware } from "../middleware/log";

const router = Router();

router.get("/", getClients);

router.get("/:id", logMiddleware ,getClient); 

router.post("/", postClient);

router.put("/:id", updateClient);

router.delete("/:id", deleteClient);
 
export { router };
