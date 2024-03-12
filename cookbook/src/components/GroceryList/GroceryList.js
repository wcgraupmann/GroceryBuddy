import React, { useEffect, useState } from "react";
import RecipeForm from "../RecipeForm/RecipeForm";
import ItemForm from "../ItemForm/ItemForm";

const GroceryList = () => {
  const [selection, setSelection] = useState("add");
  const [recipeList, setRecipeList] = useState([]);
  const [list, setList] = useState([]);
  const [exists, setExists] = useState(false);

  // fetch grocery list from backend
  const fetchGroceryList = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("No token found");
      }
      const response = await fetch("http://localhost:3000/groceryList", {
        method: "get",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error("Failed to fetch user data");
      }
      const data = await response.json();
      const { groceryList } = data.groceryList;
      setList(groceryList);
      console.log("userInfo", list);
      // console.log("message", message);
    } catch (error) {
      console.error("Error signing in:", error.message);
    }
  };

  const setRecipe = (recipeArray) => {
    setRecipeList(recipeArray);
    // setExists(true);
    console.log(recipeList);
  };

  useEffect(() => {
    fetchGroceryList();
  }, []);

  if (selection === "view") {
    return (
      <div className="flex">
        {/* directory */}
        <div className="border border-black mt-8 ml-8 mr-2 p-8 bg-slate-200">
          <h1 className="underline">MENU</h1>
          <div className="flex flex-col">
            <button
              onClick={() => setSelection("add")}
              className="p-1 m-1 bg-slate-300 hover:bg-slate-400 border border-black rounded"
            >
              Add Recipe To List
            </button>
            <button
              onClick={() => setSelection("view")}
              className="p-1 m-1 bg-slate-300 hover:bg-slate-400 border border-black rounded"
            >
              Grocery List
            </button>
          </div>
        </div>
        {/* directory */}
        {exists ? (
          <div className="flex border border-black m-8 rounded">
            <ul className="border border-black m-8 p-8 rounded">
              {list.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ) : (
          <h1>Empty</h1>
        )}
      </div>
    );
  } else {
    // add recipe form
    return (
      <div className="flex">
        {/* directory */}
        <div className="border border-black mt-8 ml-8 mr-2 p-8 bg-slate-200">
          <h1 className="underline">MENU</h1>
          <div className="flex flex-col">
            <button
              onClick={() => setSelection("add")}
              className="p-1 m-1 bg-slate-300 hover:bg-slate-400 border border-black rounded"
            >
              Add Recipe To List
            </button>
            <button
              onClick={() => setSelection("view")}
              className="p-1 m-1 bg-slate-300 hover:bg-slate-400 border border-black rounded"
            >
              Grocery List
            </button>
          </div>
        </div>
        {/* directory */}
        <div className="bg-indigo-200 m-8 py-8 px-20 border border-black">
          <h1 className="underline">Add Recipe</h1>
          <p>Upload a recipe and automatically generate your grocery list</p>
          <RecipeForm setRecipe={setRecipe} />
        </div>
        <div className="bg-indigo-200 m-8 py-8 px-20 border border-black">
          <h1 className="underline">Add Item</h1>
          <p>Add Individual Items to your Grocery List</p>
          <ItemForm />
        </div>
      </div>
    );
  }
};

export default GroceryList;
