import * as React from "react";
import { Article } from "../reducers/mobx";

interface ArticleViewProps {
    article: Article;
}

const ArticleView: React.SFC<ArticleViewProps> = (props) => {
    return (
        <a href={`https://en.wikipedia.org/?curid=${props.article.pageid}`} target="_blank">
            <h2>{props.article.title}</h2>
            <p dangerouslySetInnerHTML={{__html: props.article.snippet}}/>
        </a>
    );
};

export default ArticleView;