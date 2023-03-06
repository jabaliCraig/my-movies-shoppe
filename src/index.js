import React from "react";
import ReactDOM from "react-dom/client";
import "./index";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

// The ToastContainer helps us disaly the message evertime we add something in our cart
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Provider } from "react-redux";
import store from "./store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <ToastContainer />
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
);
