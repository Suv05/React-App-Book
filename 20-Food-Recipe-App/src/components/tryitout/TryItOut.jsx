import { CiSearch } from "react-icons/ci";
import { PiChefHatLight } from "react-icons/pi";
import { useState, Suspense } from "react";
import { Link, useLoaderData, json, defer, Await } from "react-router-dom";
import { fetchApi } from "../../API/tryitoutAPI/getByKeyword";
import Spinner from "../pages/Spinner";
import { GrFavorite } from "react-icons/gr";

export async function loader({ request }) {
  const url = new URL(request.url);
  const getTag = url.searchParams.get("tags");
  if (!getTag) {
    return defer({ data: Promise.resolve([]) });
  }
  try {
    const data = fetchApi(
      `https://low-carb-recipes.p.rapidapi.com/search?tags=${getTag}`
    );
    return defer({ data });
  } catch (e) {
    console.error("Failed to fetch data", e.message);
    return defer({
      data: Promise.reject(
        new Response("Failed to fetch data", { status: 500 })
      ),
    });
  }
}

function TryItOut() {
  const [active, setActive] = useState("");
  const keyWords = [
    // Add other keywords as needed
    "appetizer",
    "beef-free",
    "beverages",
    "breakfast",
    "desserts",
    "eggs",
    "fish",
    "freezer-friendly",
    "french",
    "gluten-free",
    "good-for-leftovers",
    "grains",
    "high-protein",
    "keto",
    "kid-friendly",
    "lchf",
    "low-carb",
    "lunch",
    "main-dishes",
    "no-cooking-required",
    "one-pot-meals",
    "paleo",
    "pantry-recipes",
    "peanut-free",
    "peanuts",
    "pescatarian",
    "pork-free",
    "quick-easy",
    "relevant-meal--beverages",
    "relevant-meal--breakfast",
    "relevant-meal--desserts",
    "relevant-meal--lunch",
    "relevant-meal--main-dishes",
    "relevant-meal--salads",
    "relevant-meal--",
    "relevant-meal--snacks",
    "salads",
    "sheet-pan-dinners",
    "shellfish",
    "skillet",
    "snacks",
    "soy-free",
    "tree-nut-free",
    "vegan",
    "vegetarian",
    "wheat-free",
  ];

  const { data } = useLoaderData();

  const handelOnClick = (keyWord) => {
    setActive(keyWord);
  };
  return (
    <>
      <div className="flex justify-center items-center mb-4">
        <div className="flex mt-2 mb-3">
          <input
            type="text"
            placeholder="Search recipes"
            className="w-96 rounded-2xl focus:outline-none focus:ring-0 bg-[#f5f5f5] py-1 px-2 me-2"
          />
          <span className="rounded-full bg-neutral-100 py-2 px-2 active:scale-75 hover:scale-105">
            <button>
              <CiSearch size={20} />
            </button>
          </span>
        </div>
      </div>
      {/* keywords for recipe search */}

      <div className="flex flex-wrap justify-center items-center gap-4 font-noto-sans px-5 mb-8">
        {keyWords.map((i) => (
          <Link to={`?tags=${i}`} key={i} onClick={() => handelOnClick(i)}>
            <p
              className={`px-4 py-2 rounded-full border-2 border-orange whitespace-nowrap ${
                active === i
                  ? "bg-orange text-white"
                  : "hover:bg-orange hover:text-white transition duration-200"
              } `}
            >
              {" "}
              {i}
            </p>
          </Link>
        ))}
      </div>
      {/* Display the fetched data */}
      <Suspense fallback={<Spinner />}>
        <Await resolve={data}>
          {(item) => {
            return (
              <div className="grid md:grid-cols-4 sm:grid-cols-3 xl:grid-cols-5 gap-4 px-5 mb-12">
                {Array.isArray(item) ? (
                  item.length > 0 ? (
                    item.map((i) => (
                      <div
                        key={i.id}
                        className="relative bg-slate-200 rounded-t-xl px-3 pt-1 flex flex-col justify-between"
                      >
                        <div className="relative">
                          <img
                            src={i.image}
                            className="m-auto rounded-2xl mb-1 mt-2"
                          />
                          <button className="absolute top-3 right-3 text-red-600 hover:text-orange transition-colors">
                            <GrFavorite size={30} />
                          </button>
                        </div>
                        <div>
                          <h1 className="text-lg font-bold mb-1">{i.name}</h1>
                        </div>
                        <div className="bg-zinc-950 rounded-3xl text-white mb-3 mt-auto">
                          <Link to={`${i.id}`}>
                            <button className="pl-2 pb-0.5 flex justify-between w-full items-center hover:bg-zinc-800 transition-transform transform hover:scale-105 active:translate-y-1 hover:rounded-md">
                              <span className="text-lg font-extralight">
                                See Recipe
                              </span>
                              <span className="rounded-full px-1 py-1 bg-white text-black mr-2 mb-0.5 mt-1">
                                <PiChefHatLight size={20} />
                              </span>
                            </button>
                          </Link>
                        </div>
                      </div>
                    ))
                  ) : null
                ) : (
                  <div className="flex justify-center items-center w-full">
                    <p className="text-2xl font-bold my-7">
                      Error fetching{" "}
                      <span className="text-orange">recipes</span>
                    </p>
                  </div>
                )}
              </div>
            );
          }}
        </Await>
      </Suspense>
    </>
  );
}

export default TryItOut;
