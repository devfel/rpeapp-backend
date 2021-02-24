import { Router } from "express";
import Rpea from "../models/Rpea";

const rpeasRouter = Router();
const rpeas: Rpea[] = [];

rpeasRouter.post("/", (request, response) => {
  const { name } = request.body;

  const rpea = new Rpea(name, "");
  rpeas.push(rpea);
  return response.json(rpea);
});

export default rpeasRouter;
