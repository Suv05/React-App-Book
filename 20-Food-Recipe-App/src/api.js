const url = "https://tasty.p.rapidapi.com/recipes/list";
const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "b28bfe787dmsh6b10bc4222a3a4ap1bce90jsn94117385c7af",
    "x-rapidapi-host": "tasty.p.rapidapi.com",
  },
};

const fetchApi = async () => {
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};
fetchApi();
