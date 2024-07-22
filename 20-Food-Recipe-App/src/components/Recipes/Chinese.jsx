import { PiChefHatLight } from "react-icons/pi";
import { Link } from "react-router-dom";

// export async function loader() {
//   try {
//     const data = await fetchListApi();
//     return data; // Ensure correct structure
//   } catch (error) {
//     console.error(error);
//     throw new Error("Can't get the Recipes"); // Rethrow error
//   }
// }

function Chinese() {
  //const item  = useLoaderData();
  const item = [
    {
      id: "1",
      title: "Homemade crispy chilli oil",
      difficulty: "Easy",
      image: "https://apipics.s3.amazonaws.com/chinese_recipes_api/1.jpg",
    },
    {
      id: "2",
      title: "Prawn and lemongrass hot and sour soup",
      difficulty: "Easy",
      image: "https://apipics.s3.amazonaws.com/chinese_recipes_api/2.jpg",
    },
    {
      id: "3",
      title: "Steamed lap cheong with five treasure fried rice",
      difficulty: "Easy",
      image: "https://apipics.s3.amazonaws.com/chinese_recipes_api/3.jpg",
    },
    {
      id: "4",
      title: "Jeremy Pang’s General Tso’s chicken",
      difficulty: "Easy",
      image: "https://apipics.s3.amazonaws.com/chinese_recipes_api/4.jpg",
    },
    {
      id: "5",
      title: "MiMi Mei Fair’s ‘Hokkien’ noodles",
      difficulty: "Easy",
      image: "https://apipics.s3.amazonaws.com/chinese_recipes_api/5.jpg",
    },
    {
      id: "6",
      title: "Giant prawn toast",
      difficulty: "Easy",
      image: "https://apipics.s3.amazonaws.com/chinese_recipes_api/6.jpg",
    },
    {
      id: "7",
      title: "Wun’s kung pao chicken",
      difficulty: "Easy",
      image: "https://apipics.s3.amazonaws.com/chinese_recipes_api/7.jpg",
    },
    {
      id: "8",
      title: "Crispy pork potsticker dumplings",
      difficulty: "Easy",
      image: "https://apipics.s3.amazonaws.com/chinese_recipes_api/8.jpg",
    },
    {
      id: "9",
      title: "Hunan-style crispy mushroom noodle salad",
      difficulty: "Easy",
      image: "https://apipics.s3.amazonaws.com/chinese_recipes_api/9.jpg",
    },
    {
      id: "10",
      title: "Black bean tofu and baby pak choi",
      difficulty: "Easy",
      image: "https://apipics.s3.amazonaws.com/chinese_recipes_api/10.jpg",
    },
    {
      id: "11",
      title: "Hot and sour soup",
      difficulty: "Easy",
      image: "https://apipics.s3.amazonaws.com/chinese_recipes_api/11.jpg",
    },
    {
      id: "12",
      title: "Vegan tofu stir-fry",
      difficulty: "Easy",
      image: "https://apipics.s3.amazonaws.com/chinese_recipes_api/12.jpg",
    },
    {
      id: "13",
      title: "Vegetable and sweet chilli spring rolls",
      difficulty: "Easy",
      image: "https://apipics.s3.amazonaws.com/chinese_recipes_api/13.jpg",
    },
    {
      id: "14",
      title: "Stir-fried beef in black bean sauce",
      difficulty: "Easy",
      image: "https://apipics.s3.amazonaws.com/chinese_recipes_api/14.jpg",
    },
    {
      id: "15",
      title: "Leftover roast lamb stir-fry",
      difficulty: "Easy",
      image: "https://apipics.s3.amazonaws.com/chinese_recipes_api/15.jpg",
    },
    {
      id: "16",
      title: "Caramelised apples with sesame",
      difficulty: "Easy",
      image: "https://apipics.s3.amazonaws.com/chinese_recipes_api/16.jpg",
    },
    {
      id: "17",
      title: "Ken Hom’s crispy fish spring rolls",
      difficulty: "Easy",
      image: "https://apipics.s3.amazonaws.com/chinese_recipes_api/17.jpg",
    },
    {
      id: "18",
      title: "Stuffed bitter melon with black bean sauce",
      difficulty: "Medium",
      image: "https://apipics.s3.amazonaws.com/chinese_recipes_api/18.jpg",
    },
    {
      id: "19",
      title: "Ken chu's steamed chicken with Chinese sausage",
      difficulty: "Easy",
      image: "https://apipics.s3.amazonaws.com/chinese_recipes_api/19.jpg",
    },
    {
      id: "20",
      title: "Ken Hom’s chicken on crispy noodles",
      difficulty: "Easy",
      image: "https://apipics.s3.amazonaws.com/chinese_recipes_api/20.jpg",
    },
  ];
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
                <img src={i.image} className="m-auto rounded-2xl mb-1 mt-2" />
                <h1 className="text-lg font-bold mb-1">{i.title}</h1>
              </div>
              <div className="bg-zinc-950 rounded-3xl text-white mb-3 mt-auto">
                <Link to={`${i.id}`}>
                  <button className="pl-2 pb-0.5 flex justify-between w-full items-center hover:bg-zinc-800 transition-transform transform hover:scale-105 active:translate-y-1 hover:rounded-md">
                    <span className="text-lg font-extralight">See Recipe</span>
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
}

export default Chinese;
