import * as React from "react";
import {observer} from "mobx-react";
import "./styles/Loader.css";

const Loader: React.SFC<{}> = () => {
    return <div className="loader"/>;
};

export default observer(Loader);