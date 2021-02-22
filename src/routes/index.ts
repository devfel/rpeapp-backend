import { Router } from "express";
import rpeasRouter from "./rpeas.routes";

const routes = Router();

routes.use("/rpeas", rpeasRouter);

export default routes;
