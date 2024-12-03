import React, { useState } from "react";
import Tesseract from "tesseract.js";

const RecipeForm = ({ sendItem }) => {
  const [file, setFile] = useState();
  const [recipeName, setRecipeName] = useState("");
  const [showButton, setShowButton] = useState(false);

  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
    setShowButton(true);
  }

  const submitRecipe = (e) => {
    e.preventDefault();
    if (file) {
      Tesseract.recognize(
        file,
        "eng", // Language code (e.g., 'eng' for English)
        { logger: (m) => console.log(m) } // Optional logger for progress updates
      ).then(({ data: { text } }) => {
        console.log(text); // Extracted text from the image
        setFile(null);
        setRecipeName("");
        const newItems = text
          .trim()
          .split("\n")
          .filter((item) => item !== "");

        newItems.forEach((item) => {
          sendItem({
            item: item,
            recipe: recipeName,
          });
        });
      });
      setShowButton(false);
      setFile("");
      // setToggle(!toggle)
    }
  };

  return (
    <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-sm">
      <form onSubmit={submitRecipe}>
        <div>
          <label
            htmlFor="recipe"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Recipe Name
          </label>
          <div className="mt-2">
            <input
              value={recipeName}
              onChange={(e) => setRecipeName(e.target.value)}
              id="recipe"
              name="recipe"
              type="text"
              placeholder="Recipe Name"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        {/* {showButton && ( */}
        <div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-indigo-600 mt-2 p-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Add Recipe
          </button>
        </div>
        {/* )} */}

        <div>
          <input className="mt-2" type="file" onChange={handleChange} />
          {file && <img src={file} alt="img" />}
        </div>
      </form>
    </div>
  );
};

export default RecipeForm;
