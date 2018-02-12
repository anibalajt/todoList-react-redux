import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import Items from "./reducers";
import './style/index.css';
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

let store = createStore(Items);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
