import { createBrowserRouter, Navigate } from "react-router-dom";

import PostLoginLayout from "../layout/PostLoginLayout";
import DashboardPage from "../pages/dashboard/DashboardPage";
import Analyze from "../pages/analyse/Analyze";
import Control from "../pages/control/Control";
import NotFoundPage from "../pages/not-found/NotFoundPage";
import LoginPage from "../pages/login/LoginPage";
import ProtectedRoute from "./ProtectedRoute";

export const appRouter = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },

  {
    element: <ProtectedRoute />,
    children: [
      {
        path: "/",
        element: <PostLoginLayout />,
        children: [
          {
            index: true,
            element: <Navigate to="/dashboard" replace />,
          },
          {
            path: "dashboard",
            element: <DashboardPage />,
          },
          {
            path: "analyse",
            element: <Analyze />,
          },
          {
            path: "control",
            element: <Control />,
          },
        ],
      },
    ],
  },

  // 404
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);
