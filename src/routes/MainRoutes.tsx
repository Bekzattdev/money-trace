import { Route, Routes } from "react-router-dom";
import Login from "../components/Auth/Login/Login";
import Register from "../components/Auth/Register/Register";
import Me from "../components/Me/Me";

const MainRoutes = () => {
  let PUBLIC_ROUTES = [
    {
      id: 1,
      link: "/signIn",
      element: <Login />,
    },
    {
      id: 2,
      link: "/signUp",
      element: <Register />,
    },
    {
      id: 3,
      link: "/me",
      element: <Me />,
    },
  ];
  return (
    <Routes>
      {PUBLIC_ROUTES.map((route) => (
        <Route
          path={route.link}
          element={route.element}
          key={route.id}
        />
      ))}
    </Routes>
  );
};

export default MainRoutes;
