// function to parse list of ingredients
export const parseList = async (recipePath) => {
  console.log("entered parseList");
  const response = await fetch(recipePath);
  const recipeString = await response.text();
  console.log("parsed txt file:", recipeString);
  console.log("typeof recipeString", typeof recipeString);
  console.log("exited parseList");
  return recipeString;
};

// function to parse list of ingredients and store in a array
export const generateList = (string) => {
  console.log("entered generateList");
  const array = string.split("\n");
  console.log("typeof string: ", typeof array);
  console.log("array: ", array);
  console.log("exited generateList");
  return array;
};
