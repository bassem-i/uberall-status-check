import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import UberallStatus from "./UberallStatus";
import store from "./store";
import "./assets/css/main.css";

ReactDOM.render(
  <Provider store={store}>
    <UberallStatus />
  </Provider>,
  document.getElementById("root")
);
