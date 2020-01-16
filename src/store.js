import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "./reducers/rootReducer";
const { createLogger } = require("redux-logger");

export default createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware,
    createLogger({ collapsed: true, duration: true, diff: true })
  )
);
