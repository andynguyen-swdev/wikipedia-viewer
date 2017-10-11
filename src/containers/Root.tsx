import * as React from "react";
import App from "./App";
import { Provider } from "mobx-react";
import AppState from "../reducers/mobx";

const Root: React.SFC<{}> = () => {
    return (
        <Provider appState={AppState}>
            <App/>
        </Provider>
    );
};

export default Root;