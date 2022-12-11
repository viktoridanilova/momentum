import Loader from './loader';

export class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: 'bd3921ba43574f31af73d14b3ec0129b', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
