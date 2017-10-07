import { Provider } from "react-redux";
import * as React from "react";
import * as Redux from "redux";
import App from "./App";
import store from "../configureStore";

const Root: React.SFC<{store?: Redux.Store<{}>}> = () => {
    return (
        <Provider store={store}>
            <App/>
        </Provider>
    );
};

export default Root;