import * as React from "react";
import * as ReactDOM from "react-dom";
import Root from "./components/Root";

function render() {
    ReactDOM.render(
        <Root/>,
        document.getElementById("root")
    );
}

render();

if (module.hot) {
    module.hot.accept(
        "./components/Root",
        () => { render(); });
}

declare namespace module {
    export let hot: any;
}
