import { createBrowserRouter } from "react-router-dom";
import { MainPage } from "@/pages";
import {
  LOGIN_ROUTE,
  MAIN_ROUTE,
  REGISTER_ROUTE,
} from "@/shared/router/paths.ts";

const isAuth = true;

const userRoutes = [
  {
    path: MAIN_ROUTE,
    element: <MainPage />,
  },
];

const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    element: <div>login</div>,
  },
  {
    path: REGISTER_ROUTE,
    element: <div>register</div>,
  },
  {
    path: "*",
    element: <div>404</div>,
  },
];

const routes = isAuth ? publicRoutes.concat(userRoutes) : publicRoutes;

export const router = createBrowserRouter(routes);
