import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import broadcasts from "./redux/broadcasts";
import records from "./redux/records";

const logger = createLogger({
  collapse: true,
  diff: true,
});

const rootReducer = combineReducers({ broadcasts, records });

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
