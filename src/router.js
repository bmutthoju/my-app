import React, { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Lazily load route components
const Home = lazy(() =>
  import(/* webpackChunkName: "Home" */ "./components/Home")
);
const About = lazy(() =>
  import(/* webpackChunkName: "About" */ "./components/About")
);
const Contact = lazy(() =>
  import(/* webpackChunkName: "Contact" */ "./components/Contact")
);

// Create route configuration
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<div>Loading Home...</div>}>
        <Home />
      </Suspense>
    ),
  },
  {
    path: "/about",
    element: (
      <Suspense fallback={<div>Loading About...</div>}>
        <About />
      </Suspense>
    ),
  },
  {
    path: "/contact",
    element: (
      <Suspense fallback={<div>Loading Contact...</div>}>
        <Contact />
      </Suspense>
    ),
  },
]);

// Wrap everything in RouterProvider
const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
