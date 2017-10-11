import * as React from "react";
import * as ReactDOM from "react-dom";
import Root from "./containers/Root";

function render() {
    ReactDOM.render(
        <Root/>,
        document.getElementById("root")
    );
}

render();

if (module.hot) {
    module.hot.accept(
        "./containers/Root",
        () => { render(); });
}

declare namespace module {
    export let hot: any;
}
