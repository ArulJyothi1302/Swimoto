import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Error from "./Components/Error";
import ContactUs from "./Components/ContactUs";
import ResMenu from "./Components/ResMenu";
import Shimmer from "./Components/Shimmer";
import UserContext from "./utils/UserContext";
const Grocery = lazy(() => import("./Components/Grocery"));

const About = lazy(() => import("./Components/About"));
const Main = () => {
  const [userName, setUserName] = useState();

  useEffect(() => {
    const data = {
      name: "Arul",
    };
    setUserName(data.name);
  }, []);

  return (
    <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
      <div className="Main">
        <Header />

        <Outlet />
      </div>
    </UserContext.Provider>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<Shimmer />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/ContactUs",
        element: <ContactUs />,
      },
      ,
      {
        path: "/menu/:resid",
        element: <ResMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
//('Main'*/)
