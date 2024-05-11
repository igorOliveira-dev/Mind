import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import CookieBanner from './cookies/CookieBanner';

import AuthVerification from "./AuthVerification";
import MainRoute from "./routes/mainRoute/MainRoute";
import SeEntenda from "./routes/seEntenda/SeEntenda";
import Pesquisa from "./routes/pesquisa/Pesquisa";
import SaudeGeral from "./routes/saudeGeral/SaudeGeral";
import CondicoesMentais from "./routes/condicoesMentais/CondicoesMentais";
import Login from "./routes/authentication/Login";
import Register from "./routes/authentication/Register";
import MyAccount from "./routes/myAccount/MyAccount";
import Comunity from "./routes/comunity/Comunity";
import Support from "./routes/support/Support";

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
  {
    path: "/condicoes-mentais",
    element: <CondicoesMentais />
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/my-account",
    element: <MyAccount />,
  },
  {
    path: "/comunity",
    element: <AuthVerification><Comunity /></AuthVerification>,
  },
  {
    path: "/support",
    element: <Support />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <CookieBanner />
  </React.StrictMode>
);