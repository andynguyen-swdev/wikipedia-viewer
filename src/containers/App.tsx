import * as React from "react";
import RandomArticleLink from "../components/RandomArticleLink";
import ArticleSearchForm from "./ArticleSearchForm";
import { observer } from "mobx-react";
import DevTools from "mobx-react-devtools";
import ArticleList from "./ArticleList";

const App = observer(() => {
    return (
        <div>
            <DevTools/>
            <RandomArticleLink/>
            <ArticleSearchForm/>
            <ArticleList/>
        </div>
    );
});

export default App;
