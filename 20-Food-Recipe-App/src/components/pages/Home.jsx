import { PiChefHatLight, PiFediverseLogoThin } from "react-icons/pi";
import { CiSearch, CiUser, CiHeart } from "react-icons/ci";
import { Link } from "react-router-dom";

function Home({}) {
  return (
    <>
      <div className="px-5 rounded-lg h-screen font-noto-sans mb-10">
        <div className="flex justify-center items-center">
          <div className="flex mt-2 mb-3">
            <input
              type="text"
              placeholder="Search recipes"
              className="w-96 rounded-2xl focus:outline-none focus:ring-0 bg-[#f5f5f5] py-1 px-2 me-2"
            />
            <span className="rounded-full bg-neutral-100 py-2 px-2">
              <button>
                <CiSearch size={20} />
              </button>
            </span>
          </div>
        </div>

        <div className="myImg rounded-lg font-noto-sans px-10 pt-12 grid grid-cols-2 mb-6">
          <div className="mb-8">
            <h1 className="text-5xl font-bold">
              Adventure of <span className="text-orange mt-2">Delicacies</span>
            </h1>
            <p className="mt-2 text-zinc-700 px-1 py-3 mb-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              vero dignissimos ipsam eius quia praesentium tempore.
            </p>
            <div className="px-2">
              <button className="bg-zinc-900 text-white py-2 px-6 flex rounded-lg">
                Explore Recipes
                <span>
                  <PiChefHatLight size={22} className="ml-2 mt-0.5" />
                </span>
              </button>
            </div>
          </div>
        </div>
        {/* below image componet goes here */}
        <div className="flex flex-row rounded-xl">
          <div className="basis-3/4 bg-[#eeeeee] rounded-xl px-5 pb-4">
            <div className="grid grid-cols-3 gap-3">
              <div className="pt-6">
                <h1 className="mb-6 text-black font-bold">
                  <CiUser size={25} />
                </h1>
                <h3 className="text-base font-bold mb-2">User centered</h3>
                <p className="text-sm text-zinc-700">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit nam.
                </p>
              </div>
              <div className="pt-6">
                <h1 className="mb-6 text-black font-bold">
                  <PiFediverseLogoThin size={25} />
                </h1>
                <h3 className="text-base font-bold mb-2">Diverse recipes</h3>
                <p className="text-sm text-zinc-700">
                  sit amet consectetur, adipisicing Minima in animi ipsum qui
                  possimus.
                </p>
              </div>
              <div className="pt-6">
                <h1 className="mb-6 text-black font-bold">
                  <CiHeart size={25} />
                </h1>
                <h3 className="text-base font-bold mb-2">Fun community</h3>
                <p className="text-sm text-zinc-700">
                  quaerat amet ut quis porro minima totam obcaecati ab veniam
                  architecto sapiente.
                </p>
              </div>
            </div>
          </div>
          <div className="basis-1/4 bg-[#fefefe] mybox rounded-xl mx-2">
            <img
              src="https://wallpapers.com/images/high/food-4k-q49cuqvgdryfhk7o.webp"
              alt="food image"
              className="rounded-xl px-1 pt-1"
            />
            <h3 className="text-orange px-3 pt-1 font-semibold">FEATURED</h3>
            <p className="px-3 font-bold">Calisbury Steak and Asparagus</p>
            <p className="text-sm underline px-3 font-light pb-2">
              <Link to="recipes">See Recipe</Link>
            </p>
          </div>
        </div>
        {/* {another part of web page} */}
        <div className="mt-12">
          <center className="leading-relaxed" style={{ padding: "0 13rem" }}>
            <h1 className="text-3xl font-noto-sans font-semibold mb-1">
              Become a true <span className="text-orange"> chef</span> with our
              recipes.
            </h1>
            <p>
              We are a home to variety of recipes world-wide for you to learn.
            </p>
          </center>
        </div>
      </div>
    </>
  );
}

export default Home;
