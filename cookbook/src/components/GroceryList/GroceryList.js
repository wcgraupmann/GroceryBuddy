import React, { useState } from "react";
import RecipeForm from "../RecipeForm/RecipeForm";

const GroceryList = () => {
  const [selection, setSelection] = useState("add");

  //   const submitRecipe = () => {};

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
        <div className="flex border border-black m-8 rounded">
          <ul className="border border-black m-8 p-8 rounded">
            <li>Fruits and Vegetables</li>
          </ul>
          <ul className="border border-black m-8 p-8 rounded">
            <li>Meat and Dairy</li>
          </ul>
          <ul className="border border-black m-8 p-8 rounded">
            <li>Frozen</li>
          </ul>
          <ul className="border border-black m-8 p-8 rounded">
            <li>To-do:</li>
            <li>what other categories do we need</li>
          </ul>
        </div>
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
          <h1 className="underline">Grocery List</h1>
          <p>Upload a recipe and automatically generate your grocery list</p>
          <RecipeForm />
        </div>
      </div>
    );
  }
};

export default GroceryList;
