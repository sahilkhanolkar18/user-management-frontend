import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import usersReducer from "./store/usersSlice";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
