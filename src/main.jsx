import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from "./layout/Main.jsx";
import Home from "./components/Home.jsx";
import Login from "./login/Login.jsx";
import SignUp from "./SignUp/SignUp.jsx";
import Error from "./components/Error.jsx";
import PackLightDetails from "./components/Section/PackLightDetails.jsx";
import Authprovider from "./components/Provider/Authprovider.jsx";
import AdventureDetail from "./components/AdventureDetail.jsx";
import PrivateRoute from "./components/PrivateRoute";
import ForgetPassword from "./components/ForgetPassword.jsx";
import UpdateProfile from "./components/UpdateProfile.jsx"; 
import MyProfile from "./components/MyProfile.jsx";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Main />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "section/pack-light",
          element: <PackLightDetails />,
        },
        {
          path: "/forgetPassword", 
          element: <ForgetPassword />,
        },
        {
          path: "adventure/:id", 
          element: (
            <PrivateRoute>
              <AdventureDetail />
            </PrivateRoute>
          ),
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "signUp",
          element: <SignUp />,
        },
        {
          path: "/my-profile", 
          element: (
            <PrivateRoute>
              <MyProfile />
            </PrivateRoute>
          ),
        },
        {
          path: "/update-profile", 
          element: (
            <PrivateRoute>
              <UpdateProfile />
            </PrivateRoute>
          ),
        },
        {
          path: "*",
          element: <Error />,
        },
      ],
    },
  ],
  {
    future: {
      v7_skipActionErrorRevalidation: true,
      v7_partialHydration: true,
      v7_normalizeFormMethod: true,
    },
  }
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Authprovider>
      <RouterProvider router={router} />
    </Authprovider>
  </StrictMode>
);
