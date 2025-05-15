import { Router } from "express";
import { ApiController } from "../controller/api.controller.js";

const apiRouter = Router();

apiRouter.get("/data_externa", ApiController.apiConsume);

export { apiRouter };
