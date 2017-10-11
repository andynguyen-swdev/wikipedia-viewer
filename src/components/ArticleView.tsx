import * as React from "react";
import { Article } from "../reducers/index";

interface ArticleViewProps {
    article: Article;
}

const ArticleView: React.SFC<ArticleViewProps> = (props) => {
    return (
        <div>
            <h2>{props.article.title}</h2>
            <p dangerouslySetInnerHTML={{__html: props.article.snippet}}/>
        </div>
    );
};

export default ArticleView;