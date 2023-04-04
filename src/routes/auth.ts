import { Request, Response, Router } from "express";
import { registerCtrl, loginCtrl } from "../controllers/auth";
import { logMiddleware } from "../middleware/log";

const router = Router();
//TODO http://localhost:3002/auth/register [POST]

router.post("/register", registerCtrl);
router.post("/login", loginCtrl);

export { router };
