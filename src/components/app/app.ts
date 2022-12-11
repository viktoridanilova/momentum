import AppController from '../controller/controller';
import { AppView } from '../view/appView';

export class App {
    private controller: AppController;
    private view: AppView;
    private sources: Element | null = document.querySelector(".sources");

    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
       
    }

    public start() {
        if (this.sources) {
            this.sources.addEventListener('click', (e: Event) => this.controller.getNews(e, (data: void) => this.view.drawNews(data)));
        }
       
        this.controller.getSources((data: void) => this.view.drawSources(data));
    }
}

export default App;
