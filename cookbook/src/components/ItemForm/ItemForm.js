import React, { useEffect, useState } from "react";

const ItemForm = () => {
  const [foodItem, setFoodItem] = useState(null);
  const [quantity, setQuantity] = useState(null);
  const [item, setItem] = useState(null);

  const handleAddItem = async () => {
    setItem({ foodItem, quantity });
  };

  // TODO: call fetchUserData or useEffect
  // adds grocery item to backend grocery list

  useEffect(() => {
    (async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("No token found");
        }
        const response = await fetch("http://localhost:3000/addItem", {
          method: "post",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(item),
        });
        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }
        const data = await response.json();

        console.log("userInfo", data);
      } catch (error) {
        console.error("Error signing in:", error.message);
      }
    })();
  }, [item]);

  return (
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <div>
        <label
          htmlFor="foodItem"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Grocery Item
        </label>
        <div className="mt-2">
          <input
            onChange={(e) => setFoodItem(e.target.value)}
            id="foodItem"
            name="foodItem"
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
