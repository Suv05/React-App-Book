//const url = 'https://the-cocktail-db3.p.rapidapi.com/';

export const fetchCocktail = async (url) => {
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "b28bfe787dmsh6b10bc4222a3a4ap1bce90jsn94117385c7af",
      "x-rapidapi-host": "the-cocktail-db3.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
};