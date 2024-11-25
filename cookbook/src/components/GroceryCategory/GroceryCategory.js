import React, { useEffect, useState } from "react";
import FixedListItem from "../FixedListItem/FixedListItem";

const GroceryCategory = ({ category, list }) => {
  // cast cateogry to more user friendly label
  // produce
  // meat
  // baking
  // bread
  // dairy
  // frozen
  // condiments
  // canned
  // misc
  // const convertCategoryToLabel = (cat) => {
  //   switch (cat) {
  //     case "produce":
  //       return "Fruits and Vegetables";
  //     case "meat":
  //       return "Meat and Fish";
  //     case "baking":
  //       return "Baking and Spices";
  //     case "bread":
  //       return "Baked Goods";
  //     case "dairy":
  //       return "Dairy";
  //     case "frozen":
  //       return "Frozen Foods";
  //     case "condiments":
  //       return "Condiments";
  //     case "canned":
  //       return "Canned Items";
  //     default:
  //       return "Miscellaneous";
  //   }
  // };

  // useEffect(() => {}, [list]);

  if (list[category].length !== 0) {
    return (
      <div className="flex flex-col border border-black m-4 px-2 pb-1 bg-indigo-200 rounded">
        <h1 className="font-bold">{category.toUpperCase()}</h1>

        <div className="flex flex-col  rounded">
          {list[category].map((item) => (
            <FixedListItem key={item.item} item={item.item} />
          ))}
        </div>
      </div>
    );
  }
};
export default GroceryCategory;
