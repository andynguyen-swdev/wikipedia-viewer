import { inject, observer } from "mobx-react";
import { AppState } from "../reducers/mobx";
import * as React from "react";
import ArticleView from "../components/ArticleView";

interface ArticleListProps {
    appState?: AppState;
}

@inject("appState")
@observer
class ArticleList extends React.Component<ArticleListProps, {}> {
    render() {
        const articles = this.props.appState!.response;

        return (
            <div>
                {articles.map((a, index) =>
                    <ArticleView article={a} key={index}/>
                )}
            </div>
        );
    }
}

export default ArticleList;