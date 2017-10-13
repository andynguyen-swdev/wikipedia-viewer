import {inject, observer} from "mobx-react";
import {AppState} from "../reducers/mobx";
import * as React from "react";
import ArticleView from "../components/ArticleView";
import "./styles/ArticleList.css";
import Loader from "../components/Loader";

interface ArticleListProps {
    appState?: AppState;
}

@inject("appState")
@observer
class ArticleList extends React.Component<ArticleListProps, {}> {
    render() {
        const articles = this.props.appState!.response;
        const isFetching = this.props.appState!.isFetching;
        const err = this.props.appState!.error;
        const query = this.props.appState!.searchQuery;

        if (isFetching) return (
            <div className="article-list">
                <Loader/>
            </div>
        );

        if (err) return (
            <div className="article-list">
                <h3 className="article-list__message">{err}</h3>
            </div>
        );

        if (!articles.length && query) return (
            <div className="article-list">
                <h3 className="article-list__message">No result</h3>
            </div>
        );

        return (
            <div className="article-list">
                {articles.map((a, index) =>
                    <ArticleView article={a} key={index}/>
                )}
            </div>
        );
    }
}

export default ArticleList;