import { NewsSources, NewsArticles } from '../models';
import { News } from './news/news';
import { Sources } from './sources/sources';

export class AppView {
    private news: News;
    private sources: Sources;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    public drawNews(data: NewsArticles): void {
        const values = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    public drawSources(data: NewsSources): void {
        const values = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}
