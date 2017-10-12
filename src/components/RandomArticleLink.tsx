import * as React from "react";
import "./styles/RandomArticleLink.css";

const RandomArticleLink: React.SFC<{}> = () => {
    return (
        <a href="https://en.wikipedia.org/wiki/Special:Random" target="_blank" className="Random-Article-Link">
            Click here for a random article
        </a>
    );
};

export default RandomArticleLink;