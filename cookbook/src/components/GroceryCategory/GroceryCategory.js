import React from "react";
import ListItem from "../ListItem/ListItem";

const GroceryCategory = ({ category, list, deleteItem, sendEdit }) => {
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
  const convertCategoryToLabel = (cat) => {
    switch (cat) {
      case "produce":
        return "Fruits and Vegetables";
      case "meat":
        return "Meat and Fish";
      case "baking":
        return "Baking and Spices";
      case "bread":
        return "Baked Goods";
      case "dairy":
        return "Dairy";
      case "frozen":
        return "Frozen Foods";
      case "condiments":
        return "Condiments";
      case "canned":
        return "Canned Items";
      default:
        return "Miscellaneous";
    }
  };

  const onDelete = (index) => {
    console.log("GroceryCategory", category, index);
    deleteItem(index, category);
  };

  const onEdit = (listItem, listQuantity, listIndex) => {
    // add category
    console.log(
      "GroceryCategory:",
      listItem,
      listQuantity,
      listIndex,
      category
    );
    sendEdit(listItem, listQuantity, listIndex, category);
  };

  if (list[category]) {
    return (
      <div className="flex flex-col border border-black m-4 px-2 pb-1 bg-indigo-200 rounded">
        <h1 className="font-bold">
          {convertCategoryToLabel(category).toUpperCase()}
        </h1>

        <div className="flex flex-col  rounded">
          {list[category].map((item, index) => (
            <ListItem
              item={item}
              index={index}
              onDelete={onDelete}
              onEdit={onEdit}
            />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col border border-black m-4 px-2 pb-1 bg-indigo-200 rounded">
        <h1 className="font-bold">
          {convertCategoryToLabel(category).toUpperCase()}
        </h1>
      </div>
    );
  }
};
export default GroceryCategory;
