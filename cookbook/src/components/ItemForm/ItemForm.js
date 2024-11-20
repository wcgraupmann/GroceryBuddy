import React, { useState } from "react";

const ItemForm = ({ sendItem }) => {
  const [ingredient, setIngredient] = useState("");
  const [quantity, setQuantity] = useState("");
  // const [quantityType, setQuantityType] = useState(null);
  const [category, setCategory] = useState("produce");

  // TODO: add quantityType and foodGroup
  const handleAddItem = () => {
    sendItem({ category, item: ingredient, quantity });
    setIngredient("");
    setQuantity("");
    setCategory("produce");
  };

  return (
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <div>
        <label
          htmlFor="category"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Category
        </label>
        <div className="mt-2">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            // id="foodGroup"
            // name="foodGroup"
            // type="text"
            // required
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          >
            <option value="produce">Produce</option>
            <option value="meat">Meat/Fish</option>
            <option value="baking">Baking/Spices</option>
            <option value="bread">Bread/Grains</option>
            <option value="dairy">Dairy</option>
            <option value="frozen">Frozen</option>
            <option value="condiments">Condiments</option>
            <option value="canned">Canned Goods</option>
            <option value="misc">miscellaneous</option>
          </select>
        </div>
      </div>
      <div>
        <label
          htmlFor="ingredient"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Grocery Item
        </label>
        <div className="mt-2">
          <input
            onChange={(e) => setIngredient(e.target.value)}
            id="ingredient"
            name="ingredient"
            type="text"
            required
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="quantity"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Quantity
        </label>
        <div className="mt-2">
          <input
            onChange={(e) => setQuantity(e.target.value)}
            id="quantity"
            name="quantity"
            type="text"
            required
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <div>
        <button
          onClick={handleAddItem}
          type="submit"
          className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Add Recipe
        </button>
      </div>
    </div>
  );
};

export default ItemForm;
