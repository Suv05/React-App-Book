import { GrFavorite } from "react-icons/gr";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";

const Favorite = () => {
  const favoriteRecipes = useSelector((state) => state.favorite);
  const location = useLocation();
  console.log("favorite:", location);

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 font-noto-sans">
      <Link
        className="flex items-center px-5 mb-3 font-noto-sans"
        to="/recipes"
        relative="path"
      >
        <IoIosArrowRoundBack size={35} className="text-orange" />
        <span className="text-lg font-medium hover:underline hover:scale-105 active:scale-75">
          {" "}
          Back to <span className="text-orange">Recipes</span>
        </span>
      </Link>
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold flex items-center justify-center">
          <span className="mr-3">I</span>
          <span className="mr-3">
            <GrFavorite size={40} className="text-red-600" />
          </span>
          <span className="text-orange underline">Recipes</span>
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {favoriteRecipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-2xl font-semibold mb-2">{recipe.title}</h2>
              <p className="text-gray-600 mb-4">{recipe.description}</p>
              <button className="px-4 py-2 bg-orange text-white rounded-md shadow-md hover:bg-orange-600">
                View Recipe
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorite;
