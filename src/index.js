import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import thunkMiddleware from 'redux-thunk';
import { createStore,applyMiddleware,combineReducers } from "redux";
import "./index.css";
import App from "./containers/App";
import "tachyons";
import {createLogger} from 'redux-logger';
import { searchRobots,requestRobots } from "./reducers";
import * as serviceWorker from "./serviceWorker";

const logger = createLogger();
const rootReducer = combineReducers({searchRobots,requestRobots});
const store = createStore(rootReducer,applyMiddleware(thunkMiddleware,logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
