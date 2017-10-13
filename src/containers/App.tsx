import * as React from "react";
import RandomArticleLink from "../components/RandomArticleLink";
import ArticleSearchForm from "./ArticleSearchForm";
import {inject, observer} from "mobx-react";
import DevTools from "mobx-react-devtools";
import ArticleList from "./ArticleList";
import "./styles/App.css";
import {AppState} from "../reducers/mobx";

const App: React.SFC<{ appState?: AppState }> = ({appState}) => {
    let className = "app";
    if (appState!.searchQuery || appState!.isFocusingOnInput) className += " app--focus";

    return (
        <div className={className}>
            {(process.env.NODE_ENV === "development") ? <DevTools/> : ""}
            <RandomArticleLink/>
            <ArticleSearchForm/>
            <ArticleList/>
        </div>
    );
};

export default inject("appState")(observer(App));
