import { Provider } from "react-redux";
import * as React from "react";
import * as Redux from "redux";
import App from "./App";

const Root: React.SFC<{store?: Redux.Store<{}>}> = () => {
    return (
        <Provider>
            <App/>
        </Provider>
    );
};

export default Root;