import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware } from "redux";
import axios from "axios";
import reducers from "./models";
import { Provider } from "react-redux";
import rootSaga from "./models/sagas";
import "./styles/main.scss";

axios.defaults.baseURL = "https://pro.alphadevteam.com/api/tz";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
