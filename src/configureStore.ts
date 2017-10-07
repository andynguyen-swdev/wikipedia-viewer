import logger from "redux-logger";
import { applyMiddleware, createStore } from "redux";
import articleApp from "./reducers/index";
import thunk from "redux-thunk";

const store = createStore(articleApp, applyMiddleware(thunk, logger));

export default store;