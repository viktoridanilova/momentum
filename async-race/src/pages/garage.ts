import { CarModel } from './../interfaces';
import { Service } from './../service';

const service = new Service();

class GaragePage {
  private bodyWrapper: HTMLElement;

  constructor() {
    this.bodyWrapper = document.body;
  }

  public createGarageButtons() {
    const wrapper: HTMLElement = <HTMLElement>document.createElement('div');
    this.bodyWrapper.append(wrapper);
    wrapper.classList.add('wrapper');

    const garageButton: HTMLElement = <HTMLElement>document.createElement('button');
    wrapper.append(garageButton);
    garageButton.innerHTML = 'TO GARAGE';
    garageButton.classList.add('garage-button');

    const winnersButton: HTMLElement = <HTMLElement>document.createElement('button');
    wrapper.append(winnersButton);
    winnersButton.innerHTML = 'TO WINNERS';
    winnersButton.classList.add('winners-button');

    const wrapperCreateCar: HTMLElement = <HTMLElement>document.createElement('div');
    this.bodyWrapper.append(wrapperCreateCar);
    wrapperCreateCar.classList.add('wrapper');

    const nameCreateCar: HTMLElement = <HTMLElement>document.createElement('input');
    wrapperCreateCar.append(nameCreateCar);
    nameCreateCar.setAttribute('type', 'text');

    const colorCreateCar: HTMLElement = <HTMLElement>document.createElement('input');
    wrapperCreateCar.append(colorCreateCar);
    colorCreateCar.setAttribute('type', 'color');
    colorCreateCar.setAttribute('value', '#e66465');

    const buttonCreateCar: HTMLElement = <HTMLElement>document.createElement('button');
    wrapperCreateCar.append(buttonCreateCar);
    buttonCreateCar.innerHTML = 'CREATE';

    const wrapperUpdateCar: HTMLElement = <HTMLElement>document.createElement('div');
    this.bodyWrapper.append(wrapperUpdateCar);
    wrapperUpdateCar.classList.add('wrapper');

    const nameUpdateCar: HTMLElement = <HTMLElement>document.createElement('input');
    wrapperUpdateCar.append(nameUpdateCar);
    nameUpdateCar.setAttribute('type', 'text');

    const colorUpdateCar: HTMLElement = <HTMLElement>document.createElement('input');
    wrapperUpdateCar.append(colorUpdateCar);
    colorUpdateCar.setAttribute('type', 'color');
    colorUpdateCar.setAttribute('value', '#f6b73c');

    const buttonUpdateCar: HTMLElement = <HTMLElement>document.createElement('button');
    wrapperUpdateCar.append(buttonUpdateCar);
    buttonUpdateCar.innerHTML = 'UPDATE';

    const wrapperOptionalButtons: HTMLElement = <HTMLElement>document.createElement('div');
    this.bodyWrapper.append(wrapperOptionalButtons);
    wrapperOptionalButtons.classList.add('wrapper');

    const raceButton: HTMLElement = <HTMLElement>document.createElement('button');
    wrapperOptionalButtons.append(raceButton);
    raceButton.innerHTML = 'RACE';

    const resetButton: HTMLElement = <HTMLElement>document.createElement('button');
    wrapperOptionalButtons.append(resetButton);
    resetButton.innerHTML = 'RESET';

    const generateCarsButton: HTMLElement = <HTMLElement>document.createElement('button');
    wrapperOptionalButtons.append(generateCarsButton);
    generateCarsButton.innerHTML = 'GENERATE CARS';

    const titleGarage: HTMLElement = <HTMLElement>document.createElement('h1');
    this.bodyWrapper.append(titleGarage);
    titleGarage.innerHTML = 'Garage';

    const wrapperContent: HTMLElement = <HTMLElement>document.createElement('div');
    this.bodyWrapper.append(wrapperContent);
    wrapperContent.classList.add('wrapper-content');

    const page: HTMLElement = <HTMLElement>document.createElement('h2');
    wrapperContent.append(page);
    page.innerHTML = 'Page';

    this.createCar();
  }

  private async createCar(): Promise<void> {
    const wrapperCar: HTMLElement = <HTMLElement>document.createElement('div');
    this.bodyWrapper.append(wrapperCar);
    const cars: CarModel[] = await service.showGarage();
    cars.forEach((el, index: number) => {
      const isFirst = index === 0;

      if (isFirst) {
        this.fillCar(el, wrapperCar);
      } else {
        const carNode: HTMLElement = <HTMLElement>wrapperCar.cloneNode(true);
        this.fillCar(el, carNode);
        this.bodyWrapper.append(carNode);
      }
    });
    this.createButtonForPagination();
  }

  private fillCar(carModel: CarModel, carNode: HTMLElement) {
    const carButtonsOptions: HTMLElement = <HTMLElement>document.createElement('div');
    carNode.append(carButtonsOptions);
    carButtonsOptions.classList.add('buttons-options');

    const selectButton: HTMLElement = <HTMLElement>document.createElement('button');
    carButtonsOptions.append(selectButton);
    selectButton.innerHTML = 'SELECT';

    const removeButton: HTMLElement = <HTMLElement>document.createElement('button');
    carButtonsOptions.append(removeButton);
    removeButton.innerHTML = 'REMOVE';

    const carName: HTMLElement = <HTMLElement>document.createElement('span');
    carButtonsOptions.append(carName);
    carName.innerHTML = `${carModel.name}`;

    const raceWrapper: HTMLElement = <HTMLElement>document.createElement('div');
    carNode.append(raceWrapper);
    raceWrapper.classList.add('race-wrapper');

    const startAndStopButton: HTMLElement = <HTMLElement>document.createElement('div');
    raceWrapper.append(startAndStopButton);
    startAndStopButton.classList.add('start-and-stop-button');

    const startButton: HTMLElement = <HTMLElement>document.createElement('button');
    startAndStopButton.append(startButton);
    startButton.innerHTML = 'A';

    const stopButton: HTMLElement = <HTMLElement>document.createElement('button');
    startAndStopButton.append(stopButton);
    stopButton.innerHTML = 'B';

    const race: HTMLElement = <HTMLElement>document.createElement('div');
    raceWrapper.append(race);
    race.classList.add('race');

    const car: HTMLElement = <HTMLElement>document.createElement('span');
    race.append(car);
    car.style.backgroundColor = `${carModel.color}`;
    car.classList.add('car');

    const finishFlag: HTMLElement = <HTMLElement>document.createElement('img');
    race.append(finishFlag);
    finishFlag.setAttribute('src', './image/finish-flag.svg');
    finishFlag.classList.add('finish-flag');
  }

  public createButtonForPagination() {
    const buttonsPagination: HTMLElement = <HTMLElement>document.createElement('div');
    this.bodyWrapper.append(buttonsPagination);
    buttonsPagination.classList.add('button-pagination');

    const buttonPrev: HTMLElement = <HTMLElement>document.createElement('button');
    buttonsPagination.append(buttonPrev);
    buttonPrev.innerHTML = 'PREV';

    const buttonNext: HTMLElement = <HTMLElement>document.createElement('button');
    buttonsPagination.append(buttonNext);
    buttonNext.innerHTML = 'NEXT';
  }
}

export default GaragePage;
