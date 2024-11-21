import React from "react";
import { generateList, parseList } from "../../functions/helpers";
import recipe from "../../recipe.txt";

const RecipeForm = ({ setRecipe }) => {
  //parse recipe from .txt file
  const handleRecipe = async () => {
    const recipeString = await parseList(recipe);
    const recipeArray = generateList(recipeString);
    setRecipe(recipeArray);
  };

  return (
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <div>
        <label
          htmlFor="recipe"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Recipe Name
        </label>
        <div className="mt-2">
          <input
            id="recipe"
            name="recipe"
            type="text"
            required
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="instructions"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Recipe Instructions
        </label>
        <div className="mt-2">
          <textarea
            id="instructions"
            name="instructions"
            type="text"
            required
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="ingredients"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Recipe Ingredients
        </label>
        <div className="mt-2">
          <textarea
            id="ingredients"
            name="ingredients"
            type="text"
            required
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <div>
        <button
          onClick={handleRecipe}
          type="submit"
          className="flex w-full justify-center rounded-md bg-indigo-600 mt-2 p-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Add Recipe
        </button>
      </div>
    </div>
  );
};

export default RecipeForm;
