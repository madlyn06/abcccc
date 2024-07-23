import { Home, Profile, SignIn, SignUp } from "@/pages";
import EcommerceSection12 from "./components/product";
import Product from "./pages/Products";
import Admin from "./pages/Admin";

export const routes = [
  {
    name: "home",
    path: "/home",
    element: <Home />,
  },
  {
    name: "profile",
    path: "/profile",
    element: <Profile />,
  },
  {
    name: "Sign In",
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    name: "Sign Up",
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    name: "Product",
    path: "/product",
    element: <Product />,
  },
  {
    name: "Admin",
    path: "/admin",
    element: <Admin />,
  },
];

export default routes;
