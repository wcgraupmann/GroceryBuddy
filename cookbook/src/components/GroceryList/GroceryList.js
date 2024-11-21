import React, { useEffect, useState } from "react";
import RecipeForm from "../RecipeForm/RecipeForm";
import ItemForm from "../ItemForm/ItemForm";
import GroceryCategory from "../GroceryCategory/GroceryCategory";

const GroceryList = () => {
  const [selection, setSelection] = useState("add");
  const [recipeList, setRecipeList] = useState([]);
  const [list, setList] = useState({});
  const [exists, setExists] = useState(false);

  const categories = [
    "produce",
    "meat",
    "baking",
    "bread",
    "dairy",
    "frozen",
    "condiments",
    "canned",
    "misc",
  ];

  useEffect(() => {
    fetchGroceryList();
  }, []);

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
      const { groceryList } = data;
      setList(groceryList);
      console.log("fetched grocery list", data);
      // console.log("message", message);
    } catch (error) {
      console.error("Error signing in:", error.message);
    }
  };

  const viewGroceryList = async () => {
    await fetchGroceryList();
    setSelection("view");
  };

  const setRecipe = (recipeArray) => {
    setRecipeList(recipeArray);
    // setExists(true);
    console.log(recipeList);
  };

  // TODO: call fetchUserData or useEffect
  // adds grocery item to backend grocery list
  const sendItem = async (itemObj) => {
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
        body: JSON.stringify(itemObj),
      });
      if (!response.ok) {
        throw new Error("Failed to fetch user data");
      }
      const data = await response.json();
      //
      // const { newToken } = data;
      // localStorage.setItem("token", newToken);
      //

      console.log("userInfo", data);
      fetchGroceryList();
    } catch (error) {
      console.error("Error signing in:", error.message);
    }
  };

  const deleteItem = async (index, category) => {
    console.log("GroceryList", category, index);
    // delete from db
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("No token found");
      }
      const response = await fetch("http://localhost:3000/deleteItem", {
        method: "delete",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          index: index,
          category: category,
        }),
      });
      if (!response.ok) {
        throw new Error("Failed to fetch user data");
      }
      const data = await response.json();

      alert(data.message, data.itemToDelete);
      fetchGroceryList();
    } catch (error) {
      console.error("Error signing in:", error.message);
    }
  };

  const sendEdit = async (listItem, listQuantity, listIndex, listCategory) => {
    console.log(
      "GroceryList:",
      listItem,
      listQuantity,
      listIndex,
      listCategory
    );
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("No token found");
      }
      const response = await fetch("http://localhost:3000/editItem", {
        method: "put",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          item: listItem,
          quantity: listQuantity,
          index: listIndex,
          category: listCategory,
        }),
      });
      if (!response.ok) {
        throw new Error("Failed to fetch user data");
      }
      const data = await response.json();

      alert(data.message, data.itemToEdit);
      fetchGroceryList();
    } catch (error) {
      console.error("Error signing in:", error.message);
    }
  };

  // if (selection === "view") {
  return (
    <div className="flex flex-row mt-4 mx-4">
      {/* directory */}
      <div className="basis-1/3 border border-black rounded px-4 pt-2 bg-slate-200">
        <div className="flex flex-col">
          <div className="bg-indigo-200 mt-2 py-2 px-2 border border-black rounded">
            <div className="border border-black rounded mx-2 px-2">
              <h1 className="underline">Add Item</h1>
              <p>Add Individual Items to your Grocery List</p>
            </div>
            <ItemForm sendItem={sendItem} />
          </div>
          <div className="bg-indigo-200 mt-2 py-2 px-2 border border-black rounded">
            <div className="border border-black rounded mx-2 px-2">
              <h1 className="underline">Add Recipe</h1>
              <p>Upload a recipe to automatically populate the list!</p>
            </div>
            <RecipeForm setRecipe={setRecipe} />
          </div>
        </div>
      </div>
      <div className="basis-2/3">
        <div className="flex flex-col border border-black ml-8 px-1 rounded bg-slate-100">
          {list !== null &&
            // Object.keys(list).length !== 0 &&
            categories.map((category) => (
              <div className="border border-black m-2 p-2 rounded bg-slate-500">
                <GroceryCategory
                  category={category}
                  list={list}
                  deleteItem={deleteItem}
                  sendEdit={sendEdit}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
  // } else {
  //   // add recipe form
  //   return (
  //     <div className="flex">
  //       {/* directory */}
  //       <div className="border border-black mt-8 ml-8 mr-2 p-8 bg-slate-200">
  //         <div className="flex flex-col">
  //           <button
  //             onClick={() => setSelection("add")}
  //             className="p-1 m-1 bg-slate-300 hover:bg-slate-400 border border-black rounded"
  //           >
  //             Add Recipe To List
  //           </button>
  //           <button
  //             onClick={viewGroceryList}
  //             className="p-1 m-1 bg-slate-300 hover:bg-slate-400 border border-black rounded"
  //           >
  //             Grocery List
  //           </button>
  //         </div>
  //       </div>
  //       <div>
  //         <div className="bg-indigo-200 m-8 py-8 px-20 border border-black">
  //           <h1 className="underline">Add Recipe</h1>
  //           <p>Upload a recipe and automatically generate your grocery list</p>
  //           <RecipeForm setRecipe={setRecipe} />
  //         </div>
  //         <div className="bg-indigo-200 m-8 py-8 px-20 border border-black">
  //           <h1 className="underline">Add Item</h1>
  //           <p>Add Individual Items to your Grocery List</p>
  //           <ItemForm sendItem={sendItem} />
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }
};

export default GroceryList;
