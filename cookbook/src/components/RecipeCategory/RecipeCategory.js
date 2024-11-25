import React, { useState } from "react";
import ListItem from "../ListItem/ListItem";

const RecipeCategory = ({ recipe, list, deleteItem, sendEdit }) => {
  const onDelete = (item) => {
    // console.log("GroceryCategory", recipe, index);
    deleteItem(item, recipe);
  };

  const onEdit = (newlistItem, listItem) => {
    sendEdit(newlistItem, listItem, recipe);
  };

  if (list[recipe].length !== 0) {
    return (
      <div className="flex flex-col border border-black m-4 px-2 pb-1 bg-indigo-200 rounded">
        <h1 className="font-bold">{recipe.toUpperCase()}</h1>

        <div className="flex flex-col  rounded">
          {list[recipe].map((item) => (
            <ListItem
              key={item.item}
              item={item.item}
              onDelete={onDelete}
              onEdit={onEdit}
            />
          ))}
        </div>
      </div>
    );
  }
};
export default RecipeCategory;
