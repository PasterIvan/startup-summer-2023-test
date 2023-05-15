import React from "react";

import ReactDOM from "react-dom";
import "./src/index.css";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { App } from "./src/App";
import { store } from "./src/bll/store";
import reportWebVitals from "./src/reportWebVitals";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root"),
);

reportWebVitals();
