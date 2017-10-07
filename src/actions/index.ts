import * as Redux from "redux";
import { Article, GlobalState } from "../reducers/index";

//
//  Types
//

export enum TypeKeys {
    RequestSearch = "REQUEST_SEND",
    RequestSuccess = "REQUEST_SUCCESS",
    RequestFailure = "REQUEST_FAILURE"
}

interface RequestSearch {
    type: TypeKeys.RequestSearch;
    searchQuery: string;
}

interface RequestSuccess {
    type: TypeKeys.RequestSuccess;
    searchQuery: string;
    response: Article[];
}

interface RequestFailure {
    type: TypeKeys.RequestFailure;
    searchQuery: string;
    error: string;
}

export type ActionTypes = RequestSearch | RequestSuccess | RequestFailure;

//
//  Actions
//

const requestSearch = (searchQuery: string): RequestSearch => ({
    type: TypeKeys.RequestSearch,
    searchQuery
});

const requestFailure = (searchQuery: string, error: string): RequestFailure => ({
    type: TypeKeys.RequestFailure,
    error,
    searchQuery
});

const requestSuccess = (searchQuery: string, response: Article[]): RequestSuccess => ({
    type: TypeKeys.RequestSuccess,
    searchQuery,
    response
});

export const searchArticles = (query: string) =>
    (dispatch: Redux.Dispatch<{}>, getState: () => GlobalState) => {
        dispatch(requestSearch(query));
        fetchArticle(query)
            .then(response => {
                if (query === getState().searchQuery) {
                    dispatch(requestSuccess(query, handleResponse(response)));
                }
            })
            .catch(err => {
                if (query === getState().searchQuery) {
                    dispatch(requestFailure(query, err));
                }
            });
    };

//
//  Helpers
//

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
        srsearch: encodeURI(srsearch)
    };
    const paramsLink = Object.keys(params).map(key => `${key}=${params[key]}`).join("&");

    return fetch(endPoint + paramsLink)
        .then(body => body.json);
};