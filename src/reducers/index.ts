import {ActionTypes, TypeKeys} from "../actions/index";

export interface GlobalState {
    searchQuery: string;
    isFetching: boolean;
    error?: string;
    response: Article[];
}

export interface Article {
    title: string;
    pageid: number;
    snippet: string;
}

const articleApp = (state: GlobalState, action: ActionTypes) => {
    switch (action.type) {
        case TypeKeys.RequestSearch:
            return {
                ...state, searchQuery: action.searchQuery, error: null
            };

        case TypeKeys.RequestSuccess:
            return state.searchQuery === action.searchQuery ?
                {...state, searchQuery: action.searchQuery, response: action.response, error: null} :
                state;

        case TypeKeys.RequestFailure:
            return state.searchQuery === action.searchQuery ?
                {...state, error: action.error} :
                state;

        default:
            return state;
    }
};

export default articleApp;