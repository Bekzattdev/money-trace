import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Login from "../components/Auth/Login/Login";
import Register from "../components/Auth/Register/Register";
import Me from "../components/Me/Me";
import IncomePage from "../components/Me/children/income/IncomePage";
import ExpensesPage from "../components/Me/children/expenses/ExpensesPage";
import MePage from "../components/Me/children/me/MePage";

const router = createBrowserRouter([
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
        path: "/",
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
]);

export default function BrowserRouters() {
  return <RouterProvider router={router} />;
}
