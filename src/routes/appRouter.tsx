import { createBrowserRouter, Navigate } from "react-router-dom";
import PostLoginLayout from "../layout/PostLoginLayout";

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
        element: <h1>dashboard</h1>,
      },
      // future routes:
      { path: "analyse", element: <h1>Analyze</h1> },
      { path: "control", element: <h1>Control</h1> },
    ],
  },
]);
