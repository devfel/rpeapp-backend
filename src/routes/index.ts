import { Router } from "express";
import rpeasRouter from "./rpeas.routes2";

const routes = Router();

routes.use("/rpeas", rpeasRouter);

export default routes;
