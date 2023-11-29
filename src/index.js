import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { IndexRouters } from "./routes";

const router = createBrowserRouter([...IndexRouters]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App>
      <RouterProvider router={router}></RouterProvider>
    </App>
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
