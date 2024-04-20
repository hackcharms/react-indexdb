import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/default";
import Todo from "../views/Todo";
import App from "../views/App";
import About from "../views/About";
import TodoDetails from "../views/TodoDetails";
export default createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        path: "",
        Component: App,
      },
      {
        path: "/todo",
        Component: Todo,
      },
      {
        path: "cards/:id",
        Component: TodoDetails,
      },
      {
        path: "about",
        Component: About,
      },
    ],
  },
]);
