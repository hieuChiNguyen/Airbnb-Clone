import React from "react";
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import HostPage from "./pages/HostPage";
import DetailPage from "./pages/DetailPage";
import RentedPage from "./pages/RentedPage";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <HomePage />,
        },
        {
            path: "/login",
            element: <LoginPage />,
        },
        {
            path: "/signup",
            element: <SignUpPage />,
        },
        {
            path: "/hosts",
            element: <HostPage />,
        },
        {
          path: "/rented",
          element: <RentedPage />,
      },
        {
          path: "/details/*",
          element: <DetailPage />,
      },
        {
          path: "/*",
          element: <div>Blank Page</div>
        },
    ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
