const url = 'https://chinese-food-db.p.rapidapi.com/';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'b28bfe787dmsh6b10bc4222a3a4ap1bce90jsn94117385c7af',
		'x-rapidapi-host': 'chinese-food-db.p.rapidapi.com'
	}
};

export const fetchListApi = async () => {
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return result; // Ensure the result is returned
  } catch (error) {
    console.error(error);
    throw error; // Rethrow error to be caught in the loader
  }
};
