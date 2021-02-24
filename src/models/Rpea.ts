import { v4 as uuid } from "uuid";

class Rpea {
  id: string;

  name: string;

  secondary_data: string;

  constructor(name: string, secondary_data: string) {
    this.id = uuid();
    this.name = name;
    this.secondary_data = secondary_data;
  }
}

export default Rpea;
