import { Link } from "react-router-dom";
import { PiChefHatLight } from "react-icons/pi";

function Mexican({}) {
  const item = [
    {
      id: "1",
      title: "Pressure cooker refried beans",
      difficulty: "Easy",
      image: "https://apipics.s3.amazonaws.com/mexican_api/1.jpg",
    },
    {
      id: "2",
      title: "Black bean chilli soup with corn dumplings",
      difficulty: "Easy",
      image: "https://apipics.s3.amazonaws.com/mexican_api/2.jpg",
    },
    {
      id: "3",
      title: "Fishcake tacos",
      difficulty: "Easy",
      image: "https://apipics.s3.amazonaws.com/mexican_api/3.jpg",
    },
    {
      id: "4",
      title: "Black bean and chicken burritos",
      difficulty: "Easy",
      image: "https://apipics.s3.amazonaws.com/mexican_api/4.jpg",
    },
    {
      id: "5",
      title: "Pork tacos with sweetcorn and feta",
      difficulty: "Easy",
      image: "https://apipics.s3.amazonaws.com/mexican_api/5.jpg",
    },
    {
      id: "6",
      title: "Taco slaw with pink pickled onions",
      difficulty: "Easy",
      image: "https://apipics.s3.amazonaws.com/mexican_api/6.jpg",
    },
    {
      id: "7",
      title: "Smoky chipotle tofu with tomatoes and avocado",
      difficulty: "Easy",
      image: "https://apipics.s3.amazonaws.com/mexican_api/7.jpg",
    },
    {
      id: "8",
      title: "Chilaquiles with fresh tomatillo salsa",
      difficulty: "Medium",
      image: "https://apipics.s3.amazonaws.com/mexican_api/8.jpg",
    },
    {
      id: "9",
      title: "Chipotle baked eggs",
      difficulty: "Easy",
      image: "https://apipics.s3.amazonaws.com/mexican_api/9.jpg",
    },
    {
      id: "10",
      title: "Venison tacos with grilled spring onions and peanut salsa",
      difficulty: "Easy",
      image: "https://apipics.s3.amazonaws.com/mexican_api/10.jpg",
    },
    {
      id: "11",
      title: "Easy huevos rancheros",
      difficulty: "Medium",
      image: "https://apipics.s3.amazonaws.com/mexican_api/11.jpg",
    },
    {
      id: "12",
      title: "Turkey pozole",
      difficulty: "Easy",
      image: "https://apipics.s3.amazonaws.com/mexican_api/12.jpg",
    },
    {
      id: "13",
      title: "Mexican-style barbecued beef brisket with quick-pickled onions",
      difficulty: "Medium",
      image: "https://apipics.s3.amazonaws.com/mexican_api/13.jpg",
    },
    {
      id: "14",
      title: "Frozen mango margarita",
      difficulty: "Easy",
      image: "https://apipics.s3.amazonaws.com/mexican_api/14.jpg",
    },
    {
      id: "15",
      title: "Raspberry margarita",
      difficulty: "Easy",
      image: "https://apipics.s3.amazonaws.com/mexican_api/15.jpg",
    },
    {
      id: "16",
      title: "Enchiladas verdes",
      difficulty: "Easy",
      image: "https://apipics.s3.amazonaws.com/mexican_api/16.jpg",
    },
    {
      id: "17",
      title: "Margarita cheesecake with tequila strawberries",
      difficulty: "Easy",
      image: "https://apipics.s3.amazonaws.com/mexican_api/17.jpg",
    },
    {
      id: "18",
      title: "Bolognese quesadilla",
      difficulty: "Easy",
      image: "https://apipics.s3.amazonaws.com/mexican_api/18.jpg",
    },
    {
      id: "19",
      title: "Sausage burritos with pea and avocado guacamole",
      difficulty: "Easy",
      image: "https://apipics.s3.amazonaws.com/mexican_api/19.jpg",
    },
    {
      id: "20",
      title: "Taco traybake",
      difficulty: "Easy",
      image: "https://apipics.s3.amazonaws.com/mexican_api/20.jpg",
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

export default Mexican;
