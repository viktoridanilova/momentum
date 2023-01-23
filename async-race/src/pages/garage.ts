import { CarModel, EngineData } from './../interfaces';
import { Service } from './../service';

class GaragePage {
  public service = new Service();

  private bodyWrapper: HTMLElement;

  private wrapperOptionalButtons: HTMLElement = <HTMLElement>document.createElement('div');

  private carsBlock: HTMLElement = <HTMLElement>document.createElement('div');

  private titleGarage: HTMLElement = <HTMLElement>document.createElement('h1');

  public formCreate: HTMLFormElement = <HTMLFormElement>document.createElement('form');

  public formUpdate: HTMLFormElement = <HTMLFormElement>document.createElement('form');

  private updatedCar: CarModel | null = null;

  private promiseArray: Array<Promise<EngineData>> = [];

  constructor() {
    this.bodyWrapper = document.body;
    this.startRace();
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
    this.formCreate.append(nameCreateCar);
    wrapperCreateCar.append(this.formCreate);
    this.formCreate.setAttribute('id', 'elemFormCreate');
    nameCreateCar.setAttribute('type', 'text');
    nameCreateCar.setAttribute('name', 'name');
    nameCreateCar.setAttribute('required', 'required');

    const colorCreateCar: HTMLElement = <HTMLElement>document.createElement('input');
    this.formCreate.append(colorCreateCar);
    colorCreateCar.setAttribute('type', 'color');
    colorCreateCar.setAttribute('value', '#e66465');
    colorCreateCar.setAttribute('name', 'color');
    colorCreateCar.setAttribute('required', 'required');

    const buttonCreateCar: HTMLElement = <HTMLElement>document.createElement('input');
    this.formCreate.append(buttonCreateCar);
    buttonCreateCar.setAttribute('type', 'submit');
    buttonCreateCar.setAttribute('value', 'CREATE');

    const wrapperUpdateCar: HTMLElement = <HTMLElement>document.createElement('div');
    this.bodyWrapper.append(wrapperUpdateCar);
    wrapperUpdateCar.classList.add('wrapper');

    const nameUpdateCar: HTMLElement = <HTMLElement>document.createElement('input');
    this.formUpdate.append(nameUpdateCar);
    wrapperUpdateCar.append(this.formUpdate);
    this.formUpdate.setAttribute('id', 'elemFormUpdate');
    nameUpdateCar.setAttribute('type', 'text');
    nameUpdateCar.setAttribute('name', 'name');
    nameUpdateCar.setAttribute('required', 'required');

    const colorUpdateCar: HTMLElement = <HTMLElement>document.createElement('input');
    this.formUpdate.append(colorUpdateCar);
    wrapperUpdateCar.append(this.formUpdate);
    colorUpdateCar.setAttribute('type', 'color');
    colorUpdateCar.setAttribute('value', '#f6b73c');
    colorUpdateCar.setAttribute('name', 'color');
    colorUpdateCar.setAttribute('required', 'required');

    const buttonUpdateCar: HTMLElement = <HTMLElement>document.createElement('input');
    this.formUpdate.append(buttonUpdateCar);
    wrapperUpdateCar.append(this.formUpdate);
    buttonUpdateCar.setAttribute('type', 'submit');
    buttonUpdateCar.setAttribute('value', 'UPDATE');

    this.bodyWrapper.append(this.wrapperOptionalButtons);
    this.wrapperOptionalButtons.classList.add('wrapper');
    this.wrapperOptionalButtons.classList.add('wrapper-race');

    const raceButton: HTMLButtonElement = <HTMLButtonElement>document.createElement('button');
    this.wrapperOptionalButtons.append(raceButton);
    raceButton.innerHTML = 'RACE';
    raceButton.classList.add('race__btn');

    const resetButton: HTMLButtonElement = <HTMLButtonElement>document.createElement('button');
    this.wrapperOptionalButtons.append(resetButton);
    resetButton.innerHTML = 'RESET';
    resetButton.classList.add('reset__btn');

    const generateCarsButton: HTMLButtonElement = <HTMLButtonElement>document.createElement('button');
    this.wrapperOptionalButtons.append(generateCarsButton);
    generateCarsButton.innerHTML = 'GENERATE CARS';
    generateCarsButton.classList.add('generate-cars__btn');

    this.bodyWrapper.append(this.titleGarage);
    this.titleGarage.innerHTML = 'Garage ';

    const wrapperContent: HTMLElement = <HTMLElement>document.createElement('div');
    this.bodyWrapper.append(wrapperContent);
    wrapperContent.classList.add('wrapper-content');

    const page: HTMLElement = <HTMLElement>document.createElement('h2');
    wrapperContent.append(page);
    page.innerHTML = 'Page';

    this.createCar();
  }

  private startRace() {
    this.wrapperOptionalButtons.addEventListener('click', (event) => {
      this.promiseArray = [];
      const cars: NodeListOf<Element> = document.querySelectorAll('.car-block');
      const target: Element = <Element>event.target;
      const status = 'started';

      cars.forEach((carWrapper) => {
        const carId = Number(carWrapper.getAttribute('id'));
        const engineObjectStart: Promise<EngineData> = this.service.getEngineData(carId, status);

        this.promiseArray.push(engineObjectStart);
      });

      if (target.className.includes('race__btn')) {
        Promise.all(this.promiseArray).then((data) => {
          data.forEach((el, i) => {
            const carImage: HTMLElement = <HTMLElement>cars[i].querySelector('.car');
            const finishImage: HTMLElement = <HTMLElement>cars[i].querySelector('.finish-flag');
            this.carAnimation(el, carImage, finishImage);
          });
        });
      }

      if (target.className.includes('reset__btn')) {
        cars.forEach((carWrapper) => {
          const carImage: HTMLElement = <HTMLElement>carWrapper.querySelector('.car');

          carImage.style.transform = 'none';
          carImage.style.transition = 'none';
        });
      }

      if (target.className.includes('generate-cars__btn')) {
      }
    });
  }

  private async createCar(): Promise<void> {
    this.bodyWrapper.append(this.carsBlock);
    const cars: CarModel[] = await this.service.showGarage();
    cars.forEach((el) => {
      this.fillCar(el, this.carsBlock);
    });
    const carCounter: HTMLElement = <HTMLElement>document.createElement('span');
    this.titleGarage.append(carCounter);
    carCounter.innerHTML = `${cars.length}`;
    this.createNewCar();
    this.createButtonForPagination();
  }

  private fillCar(carModel: CarModel, carNode: HTMLElement) {
    const carWrapper: HTMLElement = <HTMLElement>document.createElement('div');
    carWrapper.setAttribute('id', String(carModel.id));
    carWrapper.setAttribute('class', 'car-block');
    carNode.append(carWrapper);

    const carButtonsOptions: HTMLElement = <HTMLElement>document.createElement('div');
    carWrapper.append(carButtonsOptions);
    carButtonsOptions.classList.add('buttons-options');

    const selectButton: HTMLElement = <HTMLElement>document.createElement('button');
    carButtonsOptions.append(selectButton);
    selectButton.innerHTML = 'SELECT';
    selectButton.setAttribute('class', 'select');

    const removeButton: HTMLElement = <HTMLElement>document.createElement('button');
    carButtonsOptions.append(removeButton);
    removeButton.innerHTML = 'REMOVE';
    removeButton.setAttribute('class', 'remove');

    const carName: HTMLElement = <HTMLElement>document.createElement('span');
    carButtonsOptions.append(carName);
    carName.innerHTML = `${carModel.name}`;
    carName.classList.add('name');

    const raceWrapper: HTMLElement = <HTMLElement>document.createElement('div');
    carWrapper.append(raceWrapper);
    raceWrapper.classList.add('race-wrapper');

    const startAndStopButton: HTMLElement = <HTMLElement>document.createElement('div');
    raceWrapper.append(startAndStopButton);
    startAndStopButton.classList.add('start-and-stop-button');

    const startButton: HTMLElement = <HTMLElement>document.createElement('button');
    startAndStopButton.append(startButton);
    startButton.classList.add('started');
    startButton.innerHTML = 'A';

    const stopButton: HTMLElement = <HTMLElement>document.createElement('button');
    startAndStopButton.append(stopButton);
    stopButton.classList.add('stopped');
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

    this.selectAndRemoveCar(carButtonsOptions, carModel, carWrapper);
    this.engineStartAndStop(carWrapper);
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

  private createNewCar() {
    this.formCreate.addEventListener('submit', async (event) => {
      event.preventDefault();

      const carName: HTMLInputElement = <HTMLInputElement>this.formCreate.querySelector('input[type=text]');
      const carColor: HTMLInputElement = <HTMLInputElement>this.formCreate.querySelector('input[type=color]');

      const carObject: CarModel = {
        name: carName.value,
        color: carColor.value,
      };

      this.service.createNewCar(carObject);
      this.fillCar(carObject, this.carsBlock);
      this.formCreate.reset();
    });
  }

  private async selectAndRemoveCar(carButtonsOptions: HTMLElement, carModel: CarModel, carWrapper: HTMLElement) {
    carButtonsOptions.addEventListener('click', (event) => {
      const target: Element = <Element>event.target;
      if (target.className.includes('select')) {
        const formUpdate: HTMLFormElement = <HTMLFormElement>document.getElementById('elemFormUpdate');
        const carNameInput: HTMLInputElement = <HTMLInputElement>formUpdate.querySelector('input[type=text]');
        const carColorInput: HTMLInputElement = <HTMLInputElement>formUpdate.querySelector('input[type=color]');

        carNameInput.value = carModel.name;
        carColorInput.value = carModel.color;

        this.formUpdate.addEventListener('submit', async (e) => {
          e.preventDefault();
          carModel.name = carNameInput.value;
          carModel.color = carColorInput.value;

          this.updatedCar = await this.service.updateCar(carModel, <number>carModel.id);
          this.formUpdate.reset();
          this.updateCar();
        });
      }
      if (target.className.includes('remove')) {
        this.service.deleteCar(carModel, <number>carModel.id);
        carWrapper.innerHTML = '';
      }
    });
  }

  private updateCar() {
    if (this.updatedCar) {
      const carBlock: HTMLElement = <HTMLElement>document.getElementById(`${this.updatedCar.id}`);
      const updateNameCar: HTMLElement = <HTMLElement>carBlock.querySelector('.name');
      const updateColorCar: HTMLElement = <HTMLElement>carBlock.querySelector('.car');

      updateNameCar.innerText = this.updatedCar.name;
      updateColorCar.style.backgroundColor = this.updatedCar.color;
    }
  }

  private engineStartAndStop(carWrapper: HTMLElement) {
    carWrapper.addEventListener('click', async (event) => {
      const target: Element = <Element>event.target;
      const status: string = target.className;
      const carImage: HTMLElement = <HTMLElement>carWrapper.querySelector('.car');
      const finishImage: HTMLElement = <HTMLElement>carWrapper.querySelector('.finish-flag');
      const flagStart: HTMLButtonElement = <HTMLButtonElement>carWrapper.querySelector('.started');
      const flagStop: HTMLButtonElement = <HTMLButtonElement>carWrapper.querySelector('.stopped');
      flagStop.disabled = true;

      if (target.className.includes('started')) {
        const carId = Number(carWrapper.getAttribute('id'));
        const engineObjectStart: EngineData = await this.service.getEngineData(carId, status);
        this.carAnimation(engineObjectStart, carImage, finishImage);
        flagStart.disabled = true;
        flagStop.disabled = false;
      }
      if (target.className.includes('stopped')) {
        const carId = Number(carWrapper.getAttribute('id'));
        const engineObjectStop: EngineData = await this.service.getEngineData(carId, status);

        carImage.style.transform = 'none';
        carImage.style.transition = 'none';
        flagStart.disabled = false;
      }
    });
  }

  private carAnimation(engineObject: EngineData, carImage: HTMLElement, finishImage: HTMLElement) {
    carImage.style.transition = `linear ${engineObject.distance / engineObject.velocity}ms`;
    carImage.style.transform = `translateX(${finishImage.getBoundingClientRect().left}px)`;
  }
}

export default GaragePage;
