import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/default";
import Todo from "../views/todo/Todo.js";
import MotionIndex from "../views/motion/App.jsx";
import About from "../views/About";
import TodoDetails from "../views/todo/TodoDetails.js";
export default createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        path: "",
        Component: MotionIndex,
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
