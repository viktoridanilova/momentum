import { CarModel } from './interfaces';

export class Service {
  public async showGarage(): Promise<CarModel[]> {
    const response = await fetch('http://127.0.0.1:3000/garage');
    const data = await response.json();
    return data;
  }
}
