// React and react-related imports
import { createBrowserRouter, Navigate } from "react-router-dom";
// components
import PostLoginLayout from "../layout/PostLoginLayout";
import DashboardPage from "../pages/dashboard/DashboardPage";
import Analyze from "../pages/analyse/Analyze";
import Control from "../pages/control/Control";

export const appRouter = createBrowserRouter([
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
      // future routes:
      { path: "analyse", element: <Analyze /> },
      { path: "control", element: <Control /> },
    ],
  },
]);
