import { Router } from "express";
import { v4 as uuid } from "uuid";

const rpeasRouter = Router();
const rpeas = [];

rpeasRouter.post("/", (request, response) => {
  const { name } = request.body;

  const rpea = {
    id: uuid(),
    name,
  };

  rpeas.push(rpea);
  return response.json(rpea);
});

export default rpeasRouter;
