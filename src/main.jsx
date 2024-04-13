import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

import MainRoute from "./routes/mainRoute/MainRoute";
import SeEntenda from "./routes/seEntenda/SeEntenda";
import Pesquisa from "./routes/pesquisa/Pesquisa";
import SaudeGeral from "./routes/saudeGeral/SaudeGeral";

const router = createHashRouter([
  {
    path: "/",
    element: <MainRoute />,
  },
  {
    path: "/se-entenda",
    element: <SeEntenda />,
  },
  {
    path: "/se-entenda-pesquisa",
    element: <Pesquisa />,
  },
  {
    path: "/saude-geral",
    element: <SaudeGeral />
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);