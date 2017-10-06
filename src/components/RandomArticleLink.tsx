import * as React from "react";

const RandomArticleLink: React.SFC<{}> = () => {
    return (
        <a href="https://en.wikipedia.org/wiki/Special:Random" target="_blank">
            Click here for a random article
        </a>
    );
};

export default RandomArticleLink;