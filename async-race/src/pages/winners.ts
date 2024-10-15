class WinnersPage {
  private bodyWrapper: HTMLElement;

  constructor() {
    this.bodyWrapper = document.body;
  }

  public createWinners() {
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

    const titleWinners: HTMLElement = <HTMLElement>document.createElement('h1');
    this.bodyWrapper.append(titleWinners);
    titleWinners.innerHTML = 'Winners';

    const wrapperContent: HTMLElement = <HTMLElement>document.createElement('div');
    this.bodyWrapper.append(wrapperContent);
    wrapperContent.classList.add('wrapper-content');

    const page: HTMLElement = <HTMLElement>document.createElement('h2');
    wrapperContent.append(page);
    page.innerHTML = 'Page';

    const tableNames: HTMLElement = <HTMLElement>document.createElement('div');
    wrapperContent.append(tableNames);
    tableNames.classList.add('table-names');

    const serialNumber: HTMLElement = <HTMLElement>document.createElement('div');
    tableNames.append(serialNumber);
    serialNumber.innerHTML = 'Number';

    const car: HTMLElement = <HTMLElement>document.createElement('div');
    tableNames.append(car);
    car.innerHTML = 'Car';

    const carName: HTMLElement = <HTMLElement>document.createElement('div');
    tableNames.append(carName);
    carName.innerHTML = 'Name';

    const wins: HTMLElement = <HTMLElement>document.createElement('div');
    tableNames.append(wins);
    wins.innerHTML = 'Wins &#9660;';

    const bestTime: HTMLElement = <HTMLElement>document.createElement('div');
    tableNames.append(bestTime);
    bestTime.innerHTML = 'Best time (second)';

    const buttonsPagination: HTMLElement = <HTMLElement>document.createElement('div');
    wrapperContent.append(buttonsPagination);
    buttonsPagination.classList.add('button-pagination');

    const buttonPrev: HTMLElement = <HTMLElement>document.createElement('button');
    buttonsPagination.append(buttonPrev);
    buttonPrev.innerHTML = 'PREV';

    const buttonNext: HTMLElement = <HTMLElement>document.createElement('button');
    buttonsPagination.append(buttonNext);
    buttonNext.innerHTML = 'NEXT';
  }
}

export default WinnersPage;
