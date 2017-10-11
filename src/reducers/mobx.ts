import {action, observable} from "mobx";

export interface Article {
    title: string;
    pageid: number;
    snippet: string;
}

export class AppState {
    @observable searchQuery = "";
    @observable isFetching = false;
    @observable error: string | null = null;
    @observable response: Article[] = [];

    @action
    searchArticles = async (query: string) => {
        try {
            this.startRequest(query);
            const response = await fetchArticle(query);
            this.handleRequestSuccess(query, response);
        } catch (err) {
            this.handleRequestFailure(query, err);
        }
    }

    @action
    private handleRequestSuccess(query: string, response: Article[]) {
        if (query !== this.searchQuery) {
            return;
        }
        this.response = handleResponse(response);
        this.error = null;
        this.isFetching = false;
    }

    @action
    private handleRequestFailure(query: string, err: Error) {
        if (query === this.searchQuery) {
            console.log(err);
            this.error = err.message;
            this.isFetching = false;
        }
    }

    @action
    private startRequest(query: string) {
        this.setSearchQuery(query);
        this.isFetching = true;
    }

    @action private setSearchQuery = (query: string) => {
        this.searchQuery = query;
    }
}

export default new AppState();

const handleResponse = (respone: any): Article[] =>
    respone.query.search.map((item: any): Article => {
        return {
            title: item.title,
            pageid: item.pageid,
            snippet: item.snippet
        };
    });

const fetchArticle = async (srsearch: string) => {
    const endPoint = "https://en.wikipedia.org/w/api.php?";
    const params = {
        action: "query",
        list: "search",
        format: "json",
        srprop: "snippet",
        origin: "*",
        srsearch: encodeURI(srsearch)
    };
    const paramsLink = Object.keys(params).map(key => `${key}=${params[key]}`).join("&");

    return fetch(endPoint + paramsLink)
        .then(body => body.json());
};