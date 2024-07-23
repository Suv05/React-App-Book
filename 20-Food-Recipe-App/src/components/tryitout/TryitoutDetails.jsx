import { Link } from "react-router-dom";
import { IoIosArrowRoundBack, IoIosMan } from "react-icons/io";
import { RiBowlLine } from "react-icons/ri";
import { PiChefHatLight } from "react-icons/pi";
import { CiClock1 } from "react-icons/ci";
import {
  FaCheckCircle,
  FaAppleAlt,
  FaBreadSlice,
  FaDrumstickBite,
  FaCheese,
  FaLeaf,
  FaEgg,
  FaFish,
} from "react-icons/fa";
const item = {
  id: "ce327a1e-0d55-4cb2-8f69-a2d977b79bc3",
  name: "Keto Corn Dog Bites",
  tags: [
    "meal-plan-ok",
    "kid-friendly",
    "dairy-free",
    "gluten-free",
    "wheat-free",
    "peanut-free",
    "fish-free",
    "shellfish-free",
    "pork-free",
    "chicken-free",
    "keto",
    "lchf",
    "relevant-meal--snacks",
    "snacks",
  ],
  description:
    "Looking for keto sides and snacks to add to your summer barbecues or meal plans? Corn dog bites are perfect for adults and kiddos! Despite the batter being non-traditional, you really can’t tell the difference in taste. They taste even better dipped in your favorite hot dog condiments! Jessica L.",
  prepareTime: 17,
  cookTime: 28,
  ingredients: [
    {
      name: "Raw Egg",
      servingSize: {
        units: "large",
        desc: "4 large",
        qty: 4,
        grams: 200,
        scale: 4,
      },
    },
    {
      name: "Almond Flour",
      servingSize: {
        units: "cup",
        desc: "1 cup",
        qty: 1,
        grams: 112,
        scale: 1,
      },
    },
    {
      name: "Almond Milk, Plain Or Original, Unsweetened",
      servingSize: {
        units: "cup",
        desc: "½ cup",
        qty: 0.5,
        grams: 120,
        scale: 0.5,
      },
    },
    {
      name: "Salt",
      servingSize: {
        units: "teaspoon",
        desc: "¼ teaspoon",
        qty: 0.25,
        grams: 2,
        scale: 0.25,
      },
    },
    {
      name: "Hot Dog, Beef (Kosher), Plain",
      servingSize: {
        units: "regular - 10 per pound",
        desc: "3 regular - 10 per pound",
        qty: 3,
        grams: 135,
        scale: 4.762,
      },
    },
  ],
  steps: [
    "Preheat an oven to 350 degrees. Separate HALF your total eggs. Set the egg whites into a stand mixer with a whip attachment and set the egg yolks aside for later. Whip the egg white to stiff peaks and set them aside in a small bowl.",
    "Wipe your mixing bowl clean. Place in the egg yolks set aside earlier and whip them until they thicken and become a light, opaque yellow (this can take up to 5 minutes). Then, whip in the almond flour until you have a crumbly paste.",
    "Whip into the mixing bowl your remaining whole eggs, almond milk, and salt. Once fully mixed, remove your bowl from your stand mixer. Use a spatula or hand whisk to gently fold in the stiff egg whites you set aside earlier.",
    "Line a 12-count muffin tin with cupcake liners. Remove the rounded ends of your hot dogs. Slice each hot dog into 4 pieces (one piece for each muffin tin). Place each piece of hot dog standing up in the center of each muffin tin.",
    "Use a spoon or scoop to transfer the liquid batter over each hot dog, filling each cupcake liner about ¾ full.",
    "Bake the corn dog bites for 25-28 minutes, until you seen golden brown tops. Enjoy with your favorite mustard or a squirt of ketchup!",
  ],
  servings: 6,
  servingSizes: [
    {
      scale: 1,
      qty: 1,
      grams: 74,
      units: "2 corn dog bites",
    },
  ],
  nutrients: {
    caloriesKCal: 232.535,
    caloriesKJ: 972.927,
    totalCarbs: 4.809,
    diabetesCarbsADA: 4.809,
    netCarbs: 2.726,
    diabetesCarbs: 2.755,
    fiber: 2.025,
    starch: 0.16,
    sugar: 1.46,
    addedSugar: 0.668,
    sugarAlcohols: 0.058,
    protein: 10.835,
    fat: 19.47,
    transFat: 0.377,
    monousatFat: 10.507,
    polyunsatFat: 3.024,
    omega3Fat: 0.046,
    omega6Fat: 2.979,
    saturatedFat: 4.379,
    cholesterol: 137.383,
    vitaminA: 62.894,
    vitaminC: 0,
    vitaminD: 1.137,
    vitaminE: 5.516,
    vitaminK: 1.158,
    vitaminB1: 0.077,
    vitaminB2: 0.38,
    vitaminB3: 1.186,
    vitaminB5: 0.601,
    vitaminB6: 0.095,
    vitaminB12: 0.586,
    potassium: 273.321,
    magnesium: 56.388,
    calcium: 105.155,
    iron: 1.355,
    zinc: 1.372,
    copper: 0.208,
    phosphorus: 177.449,
    sodium: 350.392,
    selenium: 13.284,
    folate: 23.416,
    choline: 114.639,
    alcohol: 0,
    caffeine: 0,
    gluten: 0,
    manganese: 0.388,
    conjugatedLinoleicAcid: 0.04,
    phyticAcid: 176.61,
    xylitol: 0,
    isomalt: 0,
    sorbitol: 0,
    maltitol: 0,
    lactitol: 0,
    erythritol: 0,
    pinitol: 0,
    inositol: 0.058,
    mannitol: 0,
  },
  image:
    "https://tinyurl.com/2p82zzca/ce327a1e-0d55-4cb2-8f69-a2d977b79bc3.png",
};
//const url = 'https://low-carb-recipes.p.rapidapi.com/recipes/ce327a1e-0d55-4cb2-8f69-a2d977b79bc3';

function TryitoutDetails({}) {
  return (
    <>
      <div className="px-5">
        <div className="myDetailsImg rounded-xl mb-4">
          <div>
            <h1 className="px-12 text-3xl font-extrabold pt-12">
              Mediterranea <span className="text-orange">Grilled</span>{" "}
              <span className="text-zinc-500">Chicken</span>
            </h1>
            <p className="text-small font-medium mt-4 px-12 pb-10 ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusamus pariatur repudiandae quae🤤Repellendus maiores error
              accusantium facilis aliquid. Itaque cumque accusamus
              necessitatibus.
            </p>
            <div className="flex flex-1 px-12 pb-14 text-zinc-400">
              <p className="flex me-8">
                <CiClock1 size={25} className="text-bold text-orange me-2" />
                <span>45 minutes</span>
              </p>
              <p className="flex">
                <PiChefHatLight
                  size={25}
                  className="text-bold text-orange me-2"
                />
                <span>Chef Erik parker</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Link
        className="flex items-center px-5 mb-3 font-noto-sans"
        to=".."
        relative="path"
      >
        <IoIosArrowRoundBack size={35} className="text-orange" />
        <span className="text-lg font-medium hover:underline hover:scale-105 active:scale-75">
          {" "}
          Back to <span className="text-orange">Recipes</span>
        </span>
      </Link>
      <div className="mb-12 px-7">
        <div className="font-noto-sans rounded-xl recipebox mb-6">
          <div className="flex justify-between items-center px-3">
            <div>
              <h1 className="text-2xl px-3 font-bold capitalize mb-3 pt-3">
                {item.name}
              </h1>
            </div>
            <div className="flex space-x-6">
              <p className="flex items-center">
                <span className="px-1 py-1 rounded-full bg-slate-200 me-2">
                  <IoIosMan size={25} className="text-bold text-orange mr-1" />
                </span>
                <p>
                  <p className="text-zinc-400 text-sm font-medium">Servings</p>
                  <p className="font-semibold">{item.servings} Persons</p>
                </p>
              </p>
              <p className="flex items-center">
                <span className="px-1 py-1 rounded-full bg-slate-200 me-2">
                  <RiBowlLine
                    size={25}
                    className="text-bold text-orange mr-1"
                  />
                </span>
                <p>
                  <p className="text-zinc-400 text-sm font-medium">Prep Time</p>
                  <p className="font-semibold">{item.prepareTime} Minutes</p>
                </p>
              </p>
              <p className="flex items-center">
                <span className="px-1 py-1 rounded-full bg-slate-200 me-2">
                  <PiChefHatLight
                    size={25}
                    className="text-bold text-orange mr-1"
                  />
                </span>
                <p>
                  <p className="text-zinc-400 text-sm font-medium">Cook Time</p>
                  <p className="font-semibold">{item.cookTime} Minutes</p>
                </p>
              </p>
            </div>
          </div>
          {/* item image starts here */}
          <div className="flex flex-row">
            <div className="basis-1/4 px-3 py-2">
              <img src={item.image} alt="" className="rounded-2xl" />
            </div>
            <div className="basis-3/4 py-3 pr-2">
              <p className="text-lg mb-3 text-zinc-600 px-3 rounded-lg">
                {item.description}
              </p>
            </div>
          </div>
        </div>
        {/* ingredients box */}
        <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
          <h2 className="text-3xl font-bold mb-6">
            Ingre<span className="text-orange">dients</span>
          </h2>
          <ul className="space-y-4">
            {item.ingredients.map((ingredients, index) => (
              <li
                key={index}
                className="flex justify-between items-center border-b pb-4"
              >
                <div>
                  <h3 className="text-xl font-semibold">{ingredients.name}</h3>
                  <p className="text-gray-600">
                    {ingredients.servingSize.desc}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500">
                    {ingredients.servingSize.qty}{" "}
                    {ingredients.servingSize.units}
                  </p>
                  <p className="text-sm text-gray-500">
                    {ingredients.servingSize.grams} grams
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        {/* instructions */}
        <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-6">
          <h2 className="text-3xl font-bold mb-6">
            Cooking <span className="text-orange">Steps</span>
          </h2>
          <ol className="list-decimal list-inside space-y-6">
            {item.steps.map((step, index) => (
              <li
                key={index}
                className="flex items-start space-x-4 bg-gray-50 p-4 rounded-lg shadow-sm"
              >
                <FaCheckCircle className="text-green-500 mt-1" size={20} />
                <p className="text-lg text-gray-700">{step}</p>
              </li>
            ))}
          </ol>
        </div>
        {/* nutrintion data */}
        <div className="max-w-2xl mx-auto p-6 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 text-white shadow-lg rounded-lg mt-6">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Nutrition <span className="text-orange">Facts</span>
          </h2>
          <div className="grid grid-cols-2 gap-4 text-lg">
            <div className="flex items-center justify-between p-4 bg-white bg-opacity-20 rounded-lg">
              <FaAppleAlt className="text-2xl" />
              <span className="font-medium">Calories</span>
              <span>{item.nutrients.caloriesKCal.toFixed(1)} kcal</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-white bg-opacity-20 rounded-lg">
              <FaBreadSlice className="text-2xl" />
              <span className="font-medium">Total Carbohydrates</span>
              <span>{item.nutrients.totalCarbs.toFixed(1)} g</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-white bg-opacity-20 rounded-lg">
              <FaLeaf className="text-2xl" />
              <span className="font-medium">Fiber</span>
              <span>{item.nutrients.fiber.toFixed(1)} g</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-white bg-opacity-20 rounded-lg">
              <FaCheese className="text-2xl" />
              <span className="font-medium">Sugar</span>
              <span>{item.nutrients.sugar.toFixed(1)} g</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-white bg-opacity-20 rounded-lg">
              <FaDrumstickBite className="text-2xl" />
              <span className="font-medium">Protein</span>
              <span>{item.nutrients.protein.toFixed(1)} g</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-white bg-opacity-20 rounded-lg">
              <FaEgg className="text-2xl" />
              <span className="font-medium">Fat</span>
              <span>{item.nutrients.fat.toFixed(1)} g</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-white bg-opacity-20 rounded-lg">
              <FaFish className="text-2xl" />
              <span className="font-medium">Cholesterol</span>
              <span>{item.nutrients.cholesterol.toFixed(1)} mg</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-white bg-opacity-20 rounded-lg">
              <FaFish className="text-2xl" />
              <span className="font-medium">Sodium</span>
              <span>{item.nutrients.sodium.toFixed(1)} mg</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TryitoutDetails;
