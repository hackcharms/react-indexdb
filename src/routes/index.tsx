import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../layouts/default";
import App from "../views/App";
export default createBrowserRouter([
  {
    path: "/",
    Component: DefaultLayout,
    children: [
      {
        path: "",
        Component: App,
      },
    ],
  },
]);
