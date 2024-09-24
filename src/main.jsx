import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from "./App";
import AddBooks from "./Components/AddBooks";
import UpdateBooks from "./Components/UpdateBooks";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: ()=> fetch('http://localhost:5000/books')
  },
  {
    path : '/addBooks',
    element: <AddBooks></AddBooks>
  },
  {
    path:"/updateBooks/:id",
    element:<UpdateBooks></UpdateBooks>,
    loader: ({params})=> fetch(`http://localhost:5000/books/${params.id}`)
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);