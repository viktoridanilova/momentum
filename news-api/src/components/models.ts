export type CallbackType<T> = (data?: T) => void;
export interface Options {
    apiKey: string;
    [key: string]: string;
}

export interface Endpoint {
    endpoint: string;
    options?: {
        [key: string]: string;
    };
}

export interface NewsSources {
    sources: Array<NewsSourcesData>;
}
export interface NewsSourcesData {
    category: string;
    country: string;
    description: string;
    id: string;
    language: string;
    name: string;
    url: string;
}

export interface NewsArticles {
    articles: Array<NewsArticlesData>;
}

export interface NewsArticlesData {
    author: string;
    content: string;
    description: string;
    publishedAt: string;
    source: {
        id: string;
        name: string;
    };
    title: string;
    url: string;
    urlToImage: string;
}
