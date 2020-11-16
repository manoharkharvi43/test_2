import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Accountpage from "./components/Select_account_page/Accountpage";
import { Provider } from "react-redux";
import reducer from "./Redux/Reducers/All_Reducer";
import { createStore, applyMiddleware } from "redux";
import App from "./App";
import Homepage from "./components/Homepage/Homepage";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const initialstate = [];
const middleware = [thunk];
const store = createStore(
  reducer,
  initialstate,
  composeWithDevTools(applyMiddleware(...middleware))
);

ReactDOM.render(
  <>
    <Provider store={store}>
      <BrowserRouter>
        {/* <Homepage/> */}
        <App />
      </BrowserRouter>
    </Provider>
  </>,
  document.getElementById("root")
);
