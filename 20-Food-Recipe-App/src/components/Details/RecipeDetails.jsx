import { Link } from "react-router-dom";
import { IoIosArrowRoundBack, IoIosMan } from "react-icons/io";
import { SiLevelsdotfyi } from "react-icons/si";
import { BsClockFill } from "react-icons/bs";

function RecipeDetails({}) {
  const item = {
    id: "1",
    title: "Homemade crispy chilli oil",
    difficulty: "Easy",
    portion: "Makes 250ml",
    time: "Hands-on time 30 min, plus overnight infusing ",
    description:
      "This is a full-flavoured, in-your-face crispy chilli oil, with plenty of fire, spice and floral numbness from the Sichuan peppercorns. Use it as a base recipe to then tweak, amend and experiment with until you’ve found your perfect combination.",
    ingredients: [
      "250g vegetable or sunflower oil",
      "2 slices fresh ginger",
      "3 banana shallots, finely sliced",
      "5 garlic cloves, finely sliced",
      "3 tbsp Sichuan peppercorns",
      "3 star anise",
      "1 cinnamon stick",
      "1 tsp fennel seeds",
      "50g gochugaru (Korean red pepper flakes)",
      "25g chilli flakes, or crushed dried chillies",
      "½ tbsp sweet paprika",
      "2 dried bay leaves",
      "2 tsp salt",
      "1 tsp caster sugar",
      "Thermometer",
      "Sterilised jar",
    ],
    method: [
      {
        "Step 1":
          "Pour the oil into a saucepan with a spout. Add the ginger, shallots and garlic, then place over a medium heat and gradually bring to 160°C. Meanwhile, put the Sichuan peppercorns, star anise, cinnamon stick and fennel seeds in a dry frying pan and toast over a medium heat for a few minutes until fragrant. Crush the peppercorns and fennel seeds in a pestle and mortar.",
      },
      {
        "Step 2":
          "Mix the toasted spices with the remaining ingredients in a heatproof container that holds at least a litre, as the oil will bubble up a lot when you pour it in. Mould the mixture into a pyramid, then make an indent in the tip – this is what you’ll pour your oil into.",
      },
      {
        "Step 3":
          "As the oil heats up, the ginger, shallots and garlic will sizzle and begin to colour. As soon as they turn golden, remove them with a slotted spoon. Discard the ginger and leave the shallots and garlic to crisp up as they cool.",
      },
      {
        "Step 4":
          "Once the oil is up to temperature, very carefully pour around a quarter of it into the chilli mixture – it will instantly bubble up and produce a lot of steam. Give everything a good mix, then continue to pour the oil slowly, until the bowl or jar is filled. Leave to cool for 10 minutes, add the fried garlic and shallots, then transfer to a sterilised jar. Seal and leave to infuse at room temperature overnight.",
      },
      {
        "Step 5":
          "The next day, carefully remove and discard the star anise, cinnamon and bay leaves. Keep the chilli oil in the fridge for up to a month.",
      },
    ],
    image: "https://apipics.s3.amazonaws.com/chinese_recipes_api/1.jpg",
  };

  return (
    <>
      <center className="font-noto-sans text-2xl font-bold mt-2 mb-8">
        What to{" "}
        <span className="text-orange underline underline-orange">Cook</span> ?
      </center>
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
          <h1 className="text-2xl px-3 font-bold capitalize mb-3 pt-3">
            {item.title}
          </h1>
          <div className="flex flex-row">
            <div className="basis-1/4 px-3 py-2">
              <img src={item.image} alt="" className="rounded-2xl" />
            </div>
            <div className="basis-3/4 py-3 pr-2">
              <p className="text-lg mb-3 text-zinc-700 px-3 rounded-lg">
                {item.description}
              </p>
              <div className="px-4">
                <div className="flex mb-2">
                  <span className="px-5 py-2 rounded-2xl bg-zinc-200 me-3">
                    <SiLevelsdotfyi size={20} className="text-orange" />
                  </span>
                  <span className="text-lg px-3 py-2 rounded-lg">
                    {item.difficulty} Level
                  </span>
                </div>
                <div className="flex mb-2">
                  <span className="px-5 py-2 rounded-2xl bg-zinc-200 me-3">
                    <IoIosMan size={20} className="text-orange" />
                  </span>
                  <span className="text-lg px-3 py-2 bg-white rounded-lg">
                    {item.portion}
                  </span>
                </div>
                <div className="flex mb-2">
                  <span className="px-5 py-2 rounded-2xl bg-zinc-200 me-3">
                    <BsClockFill size={20} className="text-orange" />
                  </span>
                  <span className="text-lg px-3 py-2 bg-white rounded-lg">
                    {item.time}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ingredients box */}
        <div className="font-noto-sans mb-3">
          <h1 className="px-3 pt-5 text-2xl font-bold mb-3">
            INGRE<span className="text-orange underline">DIENTS</span>
          </h1>
          <div className="mt-4 grid grid-cols-2 gap-4 pb-5 itembox">
            {item.ingredients.map((i, index) => (
              <div
                key={index}
                className="py-2 px-3 rounded-lg capitalize text-lg font-semibold flex items-center space-x-2"
              >
                <input
                  type="checkbox"
                  name="tick"
                  className="custom-checkbox"
                />{" "}
               <span> {i}</span>
              </div>
            ))}
          </div>
        </div>
        {/* instructions */}
        <div className="font-noto-sans">
          <h1 className="px-3 pt-5 text-2xl font-bold mb-5">
            INSTRUC<span className="text-orange underline">TIONS</span>
          </h1>
          <div className="instructionbox px-3 pb-5">
            {item.method.map((step, index) => (
              <div key={index} className="mb-3">
                <h3 className="text-xl font-semibold mb-1 text-orange pt-2 ">
                  {Object.keys(step)[0]}
                </h3>
                <p className="text-lg bg-zinc-200 rounded-xl pl-1">
                  {Object.values(step)[0]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default RecipeDetails;
