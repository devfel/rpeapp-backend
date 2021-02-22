import { v4 as uuid } from "uuid";

class Rpea {
  id: string;

  name: string;

  constructor(name: string) {
    this.id = uuid();
    this.name = name;
  }
}

export default Rpea;
