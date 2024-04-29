import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import { getOrCreateStore } from "./database.ts";
import { RouterProvider } from "react-router-dom";
import Routes from "./routes/index.tsx";
// getOrCreateStore("todoDB","todoSchema",'id')
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={Routes} />
    {/* <App /> */}
  </React.StrictMode>
);
