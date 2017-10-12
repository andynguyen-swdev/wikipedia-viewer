import * as React from "react";
import { Article } from "../reducers/mobx";
import "./styles/ArticleView.css";

interface ArticleViewProps {
    article: Article;
}

const ArticleView: React.SFC<ArticleViewProps> = (props) => {
    return (
        <a href={`https://en.wikipedia.org/?curid=${props.article.pageid}`} target="_blank" className="article-view">
            <h3 className="article-view__title">{props.article.title}</h3>
            <p className="article-view__snippet" dangerouslySetInnerHTML={{__html: props.article.snippet}}/>
        </a>
    );
};

export default ArticleView;