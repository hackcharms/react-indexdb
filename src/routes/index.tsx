import { createBrowserRouter } from "react-router-dom";
import MotionLayout from "../layouts/motion";
import DefaultLayout from "../layouts/default";
import Todo from "../views/todo/Todo.js";
import MotionApp from "../views/motion/App.jsx";
import About from "../views/About";
import TodoDetails from "../views/todo/TodoDetails.js";
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
  {
    path: "/motion",
    Component: MotionLayout,
    children: [
      {
        path: "",
        Component: MotionApp,
      },
      {
        path: "todo",
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
