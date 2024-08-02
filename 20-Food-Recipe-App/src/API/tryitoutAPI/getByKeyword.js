export const fetchApi = async (url) => {
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "ee6e4ee984msh235aca9ea990b5dp1b65c8jsnf5faf72169f7",
      "x-rapidapi-host": "low-carb-recipes.p.rapidapi.com",
    },
  };
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error(error);
  }
};
