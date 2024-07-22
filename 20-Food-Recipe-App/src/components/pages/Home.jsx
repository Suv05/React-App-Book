import {
  PiChefHatLight,
  PiFediverseLogoThin,
  PiMedal,
  PiBowlFoodThin,
} from "react-icons/pi";
import { CiSearch, CiUser, CiHeart, CiClock1 } from "react-icons/ci";
import { SiTicktick } from "react-icons/si";
import { Link } from "react-router-dom";

function Home({}) {
  return (
    <>
      <div className="px-5 rounded-lg font-noto-sans mb-10">
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
              src="https://media.istockphoto.com/id/1085446276/photo/homemade-french-coq-au-vin-chicken.webp?b=1&s=170667a&w=0&k=20&c=FyuCSuYbQCZmNLvNqw8briNoaEtY7LPl4HCn5-xvV1w="
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
        <div className="mt-3 grid grid-cols-4 gap-4 px-5 pb-12">
          <div className="bg-zinc-200 rounded-xl px-2 pt-2 mb-12">
            <img
              src="https://media.istockphoto.com/id/1436956975/photo/chef-pouring-special-sauce-on-pork-ribs-in-the-kitchen.webp?b=1&s=170667a&w=0&k=20&c=dqjedk3BRtemi6aGrR62j4_HQ7NVZIsGNyTHOedV4_o="
              alt=""
              className="rounded-xl"
            />
            <button
              disabled={true}
              className="flex bg-white text-sm rounded-xl px-3 pt-2 pb-1 my-2"
            >
              <SiTicktick size={18} className="text-orange me-1" />
              Easy To follow recipes
            </button>
          </div>
          <div className="bg-orange mt-12 rounded-xl mb-6">
            <p className="text-white font-semibold text-xl px-3 pt-3">
              "Cooking has never been this easy!"
            </p>
            <p className="text-white text-base px-4 mt-3 font-semibold">
              Marsha Shetty
            </p>
            <p className="text-[#d6c9c9] text-xs px-4">Master Chef, 2023</p>
          </div>
          <div className="bg-zinc-200 rounded-xl mt-16 px-2">
            <div className="bg-white flex px-1 py-1 mb-2 rounded-lg mt-2">
              <PiMedal
                size={25}
                className="me-2 rounded-full px-1 py-1 text-orange bg-zinc-200 mt-1"
              />
              <p className="text-sm font-semibold">
                Acheivements
                <section className="text-xs font-thin">
                  cook two foods today
                </section>
              </p>
            </div>
            <div className="bg-white flex px-1 py-1 mb-2 rounded-lg mt-2">
              <PiChefHatLight
                size={25}
                className="me-2 rounded-full px-1 py-1 text-orange bg-zinc-200 mt-1"
              />
              <p className="text-sm font-semibold">
                Live
                <section className="text-xs font-thin">
                  Chef Mark jhonson
                </section>
              </p>
            </div>
            <div className="bg-white flex px-1 py-1 mb-2 rounded-lg mt-2">
              <PiBowlFoodThin
                size={25}
                className="me-2 rounded-full px-1 py-1 text-orange bg-zinc-200 mt-1"
              />
              <p className="text-sm font-semibold">
                Today's recipe
                <section className="text-xs font-thin">
                  Spoghati Chicken
                </section>
              </p>
            </div>
          </div>
          <div className="bg-zinc-200 rounded-xl px-1 py-1">
            <img
              src="https://media.istockphoto.com/id/1217012868/photo/handsome-young-african-chef-standing-in-professional-kitchen-in-restaurant-preparing-a-meal.webp?b=1&s=170667a&w=0&k=20&c=pcVtkj_n-iKi8xbb5NylgStFk4zN2EF9pYmvZKd-Kno="
              alt="chef"
              className="rounded-md"
            />
            <section
              style={{ float: "right" }}
              className="text-red-600 px-2 py-2 mt-1 text-sm font-medium"
            >
              Live
            </section>
            <p className="bg-white text-lg font-semibold px-2 mt-2 mb-2 py-2 rounded-xl">
              Cook with Master Chefs
            </p>
          </div>
        </div>
        <div className="myfoodImg  rounded-lg">
          <div>
            <h1 className="px-12 text-3xl font-extrabold pt-12">
              Mediterranea <span className="text-orange">Grilled</span>{" "}
              <span className="text-zinc-200">Chicken</span>
            </h1>
            <p className="text-small font-medium mt-4 px-12 pb-10 ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusamus pariatur repudiandae quae? Repellendus maiores error
              accusantium facilis aliquid. Itaque cumque accusamus
              necessitatibus.
            </p>
            <div className="flex flex-1 px-12 pb-14 text-white">
              <p className="flex me-8">
                <CiClock1 size={25} className="text-bold text-orange" />
                <span>45 minutes</span>
              </p>
              <p className="flex">
                <PiChefHatLight size={25} className="text-bold text-orange" />
                <span>Chef Erik parker</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
