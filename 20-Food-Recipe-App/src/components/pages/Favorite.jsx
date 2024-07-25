import { GrFavorite } from 'react-icons/gr';

const Favorite = () => {
  const favoriteRecipes = [
    {
      id: 1,
      title: "Mediterranean Grilled Chicken",
      description:
        "A delicious and healthy grilled chicken recipe with Mediterranean flavors.",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      title: "Spicy Tuna Sushi Roll",
      description: "A popular sushi roll with spicy tuna and creamy avocado.",
      image: "https://via.placeholder.com/150",
    },
    // Add more favorite recipes here
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 font-noto-sans">
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
              <button className="px-4 py-2 bg-orange-500 text-white rounded-md shadow-md hover:bg-orange-600">
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
