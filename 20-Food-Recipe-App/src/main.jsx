import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import "./index.css";
import Spinner from "./components/pages/Spinner";
import App from "./components/routes/App";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Recipes from "./components/pages/Recipes";
import Mexican from "./components/Recipes/Mexican";
import Cocktail from "./components/Recipes/Cocktail";
import Chinese, { loader as chineseLoader } from "./components/Recipes/Chinese";
import Vegan from "./components/Recipes/Vegan";
import TryItOut, {
  loader as tryItOutLoader,
} from "./components/tryitout/TryItOut";
import RecipeDetails from "./components/Details/RecipeDetails";
import VeganDetails from "./components/Details/VeganDetails";
import MexicanDetails from "./components/Details/MexicanDetails";
import CocktailDetails from "./components/Details/CocktailDetails";
import TryitoutDetails, {
  loader as tryitoutDetailsLoader,
} from "./components/tryitout/TryitoutDetails";

// Main.jsx
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="recipes" element={<Recipes />}>
        <Route
          index
          element={
            <Suspense fallback={<Spinner />}>
              <Chinese />
            </Suspense>
          }
          loader={chineseLoader}
        />
        <Route path="mexican" element={<Mexican />} />
        <Route path="cocktail" element={<Cocktail />} />
        <Route path="vegan" element={<Vegan />} />
        <Route
          path="tryitout"
          element={
            <Suspense fallback={<Spinner />}>
              <TryItOut />
            </Suspense>
          }
          loader={tryItOutLoader}
        />
      </Route>
      <Route path="recipes/:id" element={<RecipeDetails />} />
      <Route path="recipes/mexican/:id" element={<MexicanDetails />} />
      <Route path="recipes/cocktail/:id" element={<CocktailDetails />} />
      <Route path="recipes/vegan/:id" element={<VeganDetails />} />
      <Route
        path="recipes/tryitout/:id"
        element={
          <Suspense fallback={<Spinner />}>
            <TryitoutDetails />
          </Suspense>
        }
        loader={tryitoutDetailsLoader}
      />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
