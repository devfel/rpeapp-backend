import { Router } from "express";
import Rpea from "../models/Rpea";

const rpeasRouter = Router();
const rpeas: Rpea[] = [];

rpeasRouter.post("/", (request, response) => {
  const { name } = request.body;

  let initial_secondary_data = "";
  let initial_seasonal_calendar = "";

  const rpea = new Rpea(name, initial_secondary_data, initial_seasonal_calendar);
  rpeas.push(rpea);
  return response.json(rpea);
});

export default rpeasRouter;
