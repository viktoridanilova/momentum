import { NewsArticlesData } from './../../models';
import './news.css';

export class News {
    public draw(data: Array<NewsArticlesData>): void {
        const news: Array<NewsArticlesData> = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;
        const newsElement: Element = <Element>document.querySelector('.news');
        const fragment: DocumentFragment = document.createDocumentFragment();
        const newsItemTemp: HTMLTemplateElement = <HTMLTemplateElement>document.querySelector('#newsItemTemp');

        news.forEach((item: NewsArticlesData, idx: number) => {
            const newsClone: Element = <Element>newsItemTemp.content.cloneNode(true);
            const newsCloneItem: Element = <Element>newsClone.querySelector('.news__item');
            const newsCloneMetaPhoto: HTMLElement = <HTMLElement>newsClone.querySelector('.news__meta-photo');
            const newsCloneMetaAuthor: Element = <Element>newsClone.querySelector('.news__meta-author');
            const newsCloneMetaDate: Element = <Element>newsClone.querySelector('.news__meta-date');
            const newsCloneDescriptionTitle: Element = <Element>newsClone.querySelector('.news__description-title');
            const newsCloneDescriptionSource: Element = <Element>newsClone.querySelector('.news__description-source');
            const newsCloneDescriptionContent: Element = <Element>newsClone.querySelector('.news__description-content');
            const newsCloneReadMore: Element = <Element>newsClone.querySelector('.news__read-more a');
            if (idx % 2) newsCloneItem.classList.add('alt');

            newsCloneMetaPhoto.style.backgroundImage = `url(${item.urlToImage || 'img/news_placeholder.jpg'})`;
            newsCloneMetaAuthor.textContent = item.author || item.source.name;
            newsCloneMetaDate.textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-');

            newsCloneDescriptionTitle.textContent = item.title;
            newsCloneDescriptionSource.textContent = item.source.name;
            newsCloneDescriptionContent.textContent = item.description;
            newsCloneReadMore.setAttribute('href', item.url);

            fragment.append(newsClone);
        });

        newsElement.innerHTML = '';
        newsElement.appendChild(fragment);
    }
}
