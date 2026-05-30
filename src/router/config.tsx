import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import About from "../pages/about/page";
import Services from "../pages/services/page";
import Contact from "../pages/contact/page";
import Quote from "../pages/quote/page";
import SiteManager from "../pages/site-manager/page";
import AdminPage from "../pages/admin/page";
import AuthCallback from "../pages/auth/callback/page";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/quote",
    element: <Quote />,
  },
  {
    path: "/site-manager",
    element: <SiteManager />,
  },
  {
    path: "/admin",
    element: <AdminPage />,
  },
  {
    path: "/auth/callback",
    element: <AuthCallback />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;