// React and react-related imports
import { createBrowserRouter, Navigate } from "react-router-dom";
// components
import PostLoginLayout from "../layout/PostLoginLayout";
import DashboardPage from "../pages/dashboard/DashboardPage";

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
      { path: "analyse", element: <h1>Analyze</h1> },
      { path: "control", element: <h1>Control</h1> },
    ],
  },
]);
