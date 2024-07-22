import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import "./index.css";
import App from "./components/routes/App";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Recipes from "./components/pages/Recipes";
import Mexican from "./components/Recipes/Mexican";
import Cocktail from "./components/Recipes/Cocktail";
import Chinese from "./components/Recipes/Chinese";
import Vegan from "./components/Recipes/Vegan";
import TryItOut from "./components/Recipes/TryItOut";
import RecipeDetails from "./components/Details/RecipeDetails";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="recipes" element={<Recipes />}>
        <Route index element={<Chinese />} />
        <Route path="mexican" element={<Mexican />} />
        <Route path="cocktail" element={<Cocktail />} />
        <Route path="vegan" element={<Vegan />} />
        <Route path="tryitout" element={<TryItOut />} />
      </Route>
      <Route path="recipes/:id" element={<RecipeDetails />} />
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
