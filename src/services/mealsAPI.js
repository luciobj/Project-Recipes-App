const API_INGREDIENT_URL = 'https://www.themealdb.com/api/json/v1/1/filter.php?i=';
const API_NAME_URL = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
const API_LETTER_URL = 'https://www.themealdb.com/api/json/v1/1/search.php?f=';

export const fetchMealByIngredient = async (ingredient) => {
  try {
    const response = await fetch(`${API_INGREDIENT_URL}${ingredient}`);
    const { meals } = await response.json();
    return meals;
  } catch (error) {
    return console.log(error);
  }
};

export const fetchMealByName = async (name) => {
  try {
    const response = await fetch(`${API_NAME_URL}${name}`);
    const { meals } = await response.json();
    return meals;
  } catch (error) {
    return console.log(error);
  }
};

export const fetchMealByFirstLetter = async (firstLetter) => {
  try {
    const response = await fetch(`${API_LETTER_URL}${firstLetter}`);
    const { meals } = await response.json();
    return meals;
  } catch (error) {
    return console.log(error);
  }
};
