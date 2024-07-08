import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../components/Auth/Login/Login";
import Register from "../components/Auth/Register/Register";
import IncomePage from "../components/Me/children/income/IncomePage";
import ExpensesPage from "../components/Me/children/expenses/ExpensesPage";
import MePage from "../components/Me/children/me/MePage";
import App from "../App";
import Me from "../components/Me/Me";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/me",
        element: <Me />,
        children: [
          {
            path: "/me/income",
            element: <IncomePage />,
          },
          {
            path: "/me/expenses",
            element: <ExpensesPage />,
          },
          {
            path: "/me",
            element: <MePage />,
          },
        ],
      },
      {
        path: "/signIn",
        element: <Login />,
      },
      {
        path: "/signUp",
        element: <Register />,
      },
    ],
  },
]);

export default function BrowserRouters() {
  return <RouterProvider router={router} />;
}
