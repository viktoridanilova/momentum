import { CallbackType, NewsArticles, NewsSources } from './../models';
import { Endpoint, Options } from '../models';

export class Loader {
    private baseLink: string;
    private options: Options;

    constructor(baseLink: string, options: Options) {
        this.baseLink = baseLink;
        this.options = options;
    }

    public getResp(
        endpoint: Endpoint,
        callback = () => {
            console.error('No callback for GET response');
        }
    ) {
        this.load('GET', endpoint, callback);
    }

    private errorHandler(res: Response) {
        if (!res.ok) {
            if (res.status === 401 || res.status === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    private makeUrl(endpoint: Endpoint) {
        const urlOptions = { ...this.options, ...endpoint.options };
        let url = `${this.baseLink}${endpoint.endpoint}?`;

        Object.keys(urlOptions).forEach((key) => {
            url += `${key}=${urlOptions[key]}&`;
        });

        return url.slice(0, -1);
    }

    public load(method: string, endpoint: Endpoint, callback: CallbackType<NewsArticles | NewsSources>) {
        fetch(this.makeUrl(endpoint), { method })
            .then(this.errorHandler)
            .then((res) => res.json())
            .then((data: NewsArticles | NewsSources) => {
                callback(data);
            })
            .catch((err) => console.error(err));
    }
}
