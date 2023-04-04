import { Router } from "express";
import { getProducts } from "../controllers/product";
import { checkJwt } from "../middleware/session";

//todo Esta ruta solo pueden acceder las peronas que tienen la sesio activa!

const router = Router();

router.get("/", checkJwt, getProducts);

export { router };
