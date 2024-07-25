import { Suspense } from "react";
import { Link, Await, defer, useLoaderData } from "react-router-dom";
import { fetchMexican } from "../../API/MexicanDB/getMexican";
import { PiChefHatLight } from "react-icons/pi";
import Spinner from "../pages/Spinner";

export async function loader() {
  try {
    const data = fetchMexican(
      "https://the-mexican-food-db.p.rapidapi.com/"
    );
    return defer({ data });
  } catch (err) {
    console.error(err.message);
    return defer({
      data: Promise.reject(
        new Response("Failed to fetch data from API", {
          status: 500,
        })
      ),
    });
  }
}
function Mexican() {
  const { data } = useLoaderData();
  return (
    <Suspense fallback={<Spinner />}>
      <Await resolve={data}>
        {(item) => {
          return (
            <>
              <div className="grid md:grid-cols-4 sm:grid-cols-3 xl:grid-cols-5 gap-4 px-5 mb-12">
                {/* Render the recipes here */}
                {item &&
                  item.map((i) => (
                    <div
                      key={i.id}
                      className="bg-slate-200 rounded-t-xl px-3 pt-1 flex flex-col justify-between"
                    >
                      <div>
                        <img
                          src={i.image}
                          className="m-auto rounded-2xl mb-1 mt-2"
                        />
                        <h1 className="text-lg font-bold mb-1">{i.title}</h1>
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
                  ))}
              </div>
            </>
          );
        }}
      </Await>
    </Suspense>
  );
}

export default Mexican;
