import { CallbackType, Endpoint, NewsArticles, NewsSources } from './../models';
import { AppLoader } from './appLoader';
export class AppController extends AppLoader {
    private endpoint: Endpoint = {
        endpoint: 'sources',
    };

    public getSources(callback: CallbackType<NewsSources>): void {
        super.getResp(this.endpoint, callback);
    }

    public getNews(e: Event, callback: CallbackType<NewsArticles>): void {
        let target = <Element>e.target;
        const newsContainer = <Element>e.currentTarget;

        while (target && target !== newsContainer) {
            if (target.classList.contains('source__item')) {
                const sourceId = <string>target.getAttribute('data-source-id');
                if (newsContainer.getAttribute('data-source') !== sourceId) {
                    newsContainer.setAttribute('data-source', sourceId);
                    super.getResp(
                        <Endpoint>{
                            endpoint: 'everything',
                            options: {
                                sources: sourceId,
                            },
                        },
                        callback
                    );
                }
                return;
            }
            target = <Element>target.parentNode;
        }
    }
}
