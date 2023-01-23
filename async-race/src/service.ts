import { CarModel, EngineData } from './interfaces';

export class Service {
  public async showGarage(): Promise<CarModel[]> {
    const response = await fetch('http://127.0.0.1:3000/garage');
    const data = await response.json();
    return data;
  }

  public async getCar(id: number): Promise<CarModel> {
    const response = await fetch(`http://127.0.0.1:3000/garage/${id}`);
    const data = await response.json();
    return data;
  }

  public async createNewCar(carObject: CarModel): Promise<CarModel[]> {
    const response = await fetch('http://127.0.0.1:3000/garage', {
      method: 'POST',
      body: JSON.stringify(carObject),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    return data;
  }

  public async updateCar(carObject: CarModel, id: number): Promise<CarModel> {
    const response = await fetch(`http://127.0.0.1:3000/garage/${id}`, {
      method: 'PUT',
      body: JSON.stringify(carObject),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    return data;
  }

  public deleteCar(carObject: CarModel, id: number): void {
    fetch(`http://127.0.0.1:3000/garage/${id}`, {
      method: 'DELETE',
    });
  }

  public async getEngineData(id: number, status: string): Promise<EngineData> {
    const response = await fetch(`http://127.0.0.1:3000/engine?id=${id}&status=${status}`, {
      method: 'PATCH',
    });
    const data = await response.json();
    return data;
  }
}
