import { NewsSourcesData } from '../../models';
import './sources.css';

export class Sources {
    private sources: Element | null = document.querySelector('.sources');

    public draw(data: Array<NewsSourcesData>): void {
        const fragment: DocumentFragment = document.createDocumentFragment();
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const sourceItemTemp: HTMLTemplateElement = <HTMLTemplateElement>document.getElementById('sourceItemTemp');

        data.forEach((item: NewsSourcesData) => {
            const sourceClone: Element = <Element>sourceItemTemp.content.cloneNode(true);
            const sourceCloneItemName: Element = <Element>sourceClone.querySelector('.source__item-name');
            const sourceCloneItem: Element = <Element>sourceClone.querySelector('.source__item');

            sourceCloneItemName.textContent = item.name;
            sourceCloneItem.setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
        });

        if (this.sources) {
            this.sources.append(fragment);
        }
    }
}
