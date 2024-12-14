import React, { useState } from "react";

const ItemForm = ({ sendItem }) => {
  const [ingredient, setIngredient] = useState("");
  // const [quantity, setQuantity] = useState("");
  // const [quantityType, setQuantityType] = useState(null);
  // const [category, setCategory] = useState("produce");

  const clearItemForm = () => {
    setIngredient("");
    // setQuantity("");
    // setCategory("produce");
  };

  // TODO: add quantityType and foodGroup
  const handleAddItem = (e) => {
    e.preventDefault();
    if (ingredient) {
      sendItem({ item: ingredient, recipe: "" });
      clearItemForm();
    }
  };

  return (
    <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-sm">
      <form onSubmit={handleAddItem}>
        <div>
          <label
            htmlFor="ingredient"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Grocery Item
          </label>
          <div className="">
            <input
              onChange={(e) => setIngredient(e.target.value)}
              value={ingredient}
              id="ingredient"
              name="ingredient"
              type="text"
              placeholder="Grocery Item"
              // required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="flex">
          <button
            onClick={clearItemForm}
            type="button"
            className="flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 m-1 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Clear Inputs
          </button>
          <button
            // onClick={handleAddItem}
            type="submit"
            className="flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 m-1 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Add Item
          </button>
        </div>
      </form>
    </div>
  );
};

export default ItemForm;
