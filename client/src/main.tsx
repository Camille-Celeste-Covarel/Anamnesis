import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// @ts-ignore
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import App from "./App";
import AdminDashboard from "./pages/AdminDashboard.tsx";
import ForgotPassword from "./pages/ForgotPassword.tsx";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ResetPassword from "./pages/ResetPassword.tsx";
import AdminRoute from "./utils/AdminRoute.tsx";
// @ts-ignore
import ProtectedRoute from "./utils/ProtectedRoute";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: "/login",
        element: <LoginPage />,
        handle: { isOverlay: true },
      },
      {
        path: "/register",
        element: <RegisterPage />,
        handle: { isOverlay: true },
      },
      {
        path: "/forgot-password",
        element: <ForgotPassword />,
        handle: { isOverlay: true },
      },
      {
        path: "/reset-password",
        element: <ResetPassword />,
        handle: { isOverlay: true },
      },
      {
        path: "/admin/dashboard",
        element: (
          <AdminRoute>
            <AdminDashboard />
          </AdminRoute>
        ),
        handle: { isOverlay: true },
      },
      /*      {
        path: "/exemple",
        element: (
          <ProtectedRoute>
            <Exemple />
          </ProtectedRoute>
        ),
        handle: { isOverlay: true }, // if it doesn't use, delete this
      },*/
    ],
  },
]);

const rootElement = document.getElementById("root");
if (rootElement == null) {
  throw new Error(`Your HTML Document should contain a <div id="root"></div>`);
}

const queryClient = new QueryClient();

createRoot(rootElement).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
  </StrictMode>,
);
