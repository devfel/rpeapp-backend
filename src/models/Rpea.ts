import { v4 as uuid } from "uuid";

class Rpea {
  id: string;

  name: string;

  secondary_data: string;

  seasonal_calendar: string;

  constructor(name: string, secondary_data: string, seasonal_calendar: string) {
    this.id = uuid();
    this.name = name;
    this.secondary_data = secondary_data;
    this.seasonal_calendar = seasonal_calendar;
  }
}

export default Rpea;
