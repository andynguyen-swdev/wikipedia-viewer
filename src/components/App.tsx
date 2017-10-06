import * as React from "react";
import RandomArticleLink from "./RandomArticleLink";
import ArticleSearchForm from "./ArticleSearchForm";

const App: React.SFC<{}> = () => {
    return (
        <div>
            <RandomArticleLink/>
            <ArticleSearchForm/>
        </div>
    );
};

export default App;
