import React from "react";

const GroceryCategory = ({ category, items }) => {
  return (
    <div className="flex flex-col border border-black m-4 p-2 bg-indigo-200 rounded">
      <h1>{category.toUpperCase()}</h1>

      <ul className="border border-black bg-slate-300 rounded">
        {items.map((item, index) => (
          <li key={index} className="border border-black m-1 px-24 rounded">
            {item.item + ": " + item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default GroceryCategory;
