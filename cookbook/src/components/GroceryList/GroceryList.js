import React, { useEffect, useState } from "react";
import RecipeForm from "../RecipeForm/RecipeForm";
import ItemForm from "../ItemForm/ItemForm";
import GroceryCategory from "../GroceryCategory/GroceryCategory";
import RecipeCategory from "../RecipeCategory/RecipeCategory";

const witClientKey = "OTC7YJLIPWKTCXM6HHFKZJB765CE4A7M";

const GroceryList = () => {
  const [list, setList] = useState({});
  const [sortedList, setSortedList] = useState({});
  const [groceryView, setGroceryView] = useState(false);

  console.log("list useState", list);

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
      const { recipes, groceryList } = data;
      console.log("fetched recipe list", recipes);
      console.log("fetched groceryList", groceryList);
      setList(recipes);
      setSortedList(groceryList);
    } catch (error) {
      console.error("Error signing in:", error.message);
    }
  };

  const getCategory = async (item) => {
    // let groceryCateogry = "misc";
    try {
      const witAiResponse = await fetch(
        "https://api.wit.ai/message?q=" + item,
        {
          headers: {
            Authorization: "Bearer " + witClientKey,
          },
        }
      );
      const witAidata = await witAiResponse.json();
      console.log(witAidata);
      if (witAidata.intents.length) {
        console.log(witAidata.intents[0].name);
        return witAidata.intents[0].name;
      }
    } catch (error) {
      console.error("Error signing in:", error.message);
    }
  };

  // TODO: call fetchUserData or useEffect
  // adds grocery item to backend grocery list
  const sendItem = async (itemObj) => {
    try {
      const cateogry = await getCategory(itemObj.item);
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
        body: JSON.stringify({
          item: itemObj.item,
          recipe: itemObj.recipe,
          category: cateogry,
        }),
      });
      if (!response.ok) {
        throw new Error("Failed to fetch user data");
      }
      // const data = await response.json();
      await fetchGroceryList();
    } catch (error) {
      console.error("Error signing in:", error.message);
    }
  };

  const deleteItem = async (item, recipe) => {
    // delete from backend
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
          item: item,
          recipe: recipe,
        }),
      });
      if (!response.ok) {
        throw new Error("Failed to fetch user data");
      }
      const data = await response.json();

      await fetchGroceryList();
      alert(data.message, data.itemToDelete);
    } catch (error) {
      console.error("Error signing in:", error.message);
    }
  };

  const sendEdit = async (newListItem, listItem, listRecipe) => {
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
          newItem: newListItem,
          recipe: listRecipe,
        }),
      });
      if (!response.ok) {
        throw new Error("Failed to fetch user data");
      }
      const data = await response.json();
      await fetchGroceryList();
      alert(data.message, data.itemToEdit);
    } catch (error) {
      console.error("Error signing in:", error.message);
    }
  };

  if (
    Object.keys(list).length !== 0 &&
    list[Object.keys(list)[0]].length !== 0
  ) {
    if (!groceryView) {
      return (
        <div className="flex flex-row mt-4 mx-4">
          {/* directory */}
          <div className="basis-1/3  p-4 pt-2 ">
            <div className="flex flex-col">
              <div className="bg-slate-300 mt-2 py-2 px-2 border border-black rounded">
                <div className="border border-black rounded mx-2 px-2">
                  <h1 className="underline">Add Item</h1>
                  <p>Add Individual Items to your Grocery List</p>
                </div>
                <ItemForm sendItem={sendItem} />
              </div>
              <div className="bg-slate-300 mt-2 py-2 px-2 border border-black rounded">
                <div className="border border-black rounded mx-2 px-2">
                  <h1 className="underline">Add Recipe</h1>
                  <p>Upload a recipe to automatically populate the list!</p>
                </div>
                <RecipeForm sendItem={sendItem} />
              </div>
            </div>
          </div>
          <div className="basis-2/3 ml-8">
            <div className="flex flex-row border border-black  px-1 rounded bg-slate-500 mb-1">
              <button
                className="flex w-full justify-center rounded-md bg-slate-400 text-black px-3 py-1.5 m-1 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-slate-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={() => setGroceryView(false)}
              >
                All Items
              </button>
              <button
                className="flex w-full justify-center rounded-md bg-indigo-400 text-black px-3 py-1.5 m-1 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={() => setGroceryView(true)}
              >
                Sort By Category
              </button>
            </div>
            {/* {Object.keys(list).length !== 0 ? <h1>list</h1> : <h1>no list</h1>} */}
            <div className="flex flex-col border border-black px-1 rounded bg-slate-100">
              {Object.keys(list).length !== 0 &&
                // Object.keys(list).length !== 0 &&
                Object.keys(list).map((recipe) => (
                  <div className="border border-black m-2 p-2 rounded bg-slate-500">
                    {/* <GroceryCategory
                      category={category}
                      list={list}
                      deleteItem={deleteItem}
                      sendEdit={sendEdit}
                    /> */}
                    <RecipeCategory
                      recipe={recipe}
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
    } else {
      return (
        <div className="flex flex-row mt-4 mx-4">
          {/* directory */}
          <div className="basis-1/3  p-4 pt-2 ">
            <div className="flex flex-col">
              <div className="bg-slate-300 mt-2 py-2 px-2 border border-black rounded">
                <div className="border border-black rounded mx-2 px-2">
                  <h1 className="underline">Add Item</h1>
                  <p>Add Individual Items to your Grocery List</p>
                </div>
                <ItemForm sendItem={sendItem} />
              </div>
              <div className="bg-slate-300 mt-2 py-2 px-2 border border-black rounded">
                <div className="border border-black rounded mx-2 px-2">
                  <h1 className="underline">Add Recipe</h1>
                  <p>Upload a recipe to automatically populate the list!</p>
                </div>
                <RecipeForm sendItem={sendItem} />
              </div>
            </div>
          </div>
          <div className="basis-2/3 ml-8">
            <div className="flex flex-row border border-black  px-1 rounded bg-slate-500 mb-1">
              <button
                className="flex w-full justify-center rounded-md bg-indigo-400 text-black px-3 py-1.5 m-1 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={() => setGroceryView(false)}
              >
                All Items
              </button>
              <button
                className="flex w-full justify-center rounded-md bg-slate-400 text-black px-3 py-1.5 m-1 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-slate-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={() => setGroceryView(true)}
              >
                Sort By Category
              </button>
              {/* New changes: use sorted categories to display items */}
            </div>
            {/* {Object.keys(list).length !== 0 ? <h1>list</h1> : <h1>no list</h1>} */}
            <div className="flex flex-col border border-black px-1 rounded bg-slate-100">
              {Object.keys(sortedList).length !== 0 &&
                // Object.keys(list).length !== 0 &&
                Object.keys(sortedList).map((category) => (
                  <div className="border border-black m-2 p-2 rounded bg-slate-500">
                    <GroceryCategory category={category} list={sortedList} />
                  </div>
                ))}
            </div>
          </div>
        </div>
      );
    }
  } else {
    return (
      <div className="flex flex-row mt-4 mx-4">
        {/* directory */}
        <div className="basis-1/3  p-4 pt-2 ">
          <div className="flex flex-col">
            <div className="bg-slate-300 mt-2 py-2 px-2 border border-black rounded">
              <div className="border border-black rounded mx-2 px-2">
                <h1 className="underline">Add Item</h1>
                <p>Add Individual Items to your Grocery List</p>
              </div>
              <ItemForm sendItem={sendItem} />
            </div>
            <div className="bg-slate-300 mt-2 py-2 px-2 border border-black rounded">
              <div className="border border-black rounded mx-2 px-2">
                <h1 className="underline">Add Recipe</h1>
                <p>Upload a recipe to automatically populate the list!</p>
              </div>
              <RecipeForm sendItem={sendItem} />
            </div>
          </div>
        </div>
        <div className="basis-2/3  p-4 pt-2 border border-black rounded">
          <h1>Your List Is Empty</h1>
        </div>
      </div>
    );
  }
};

export default GroceryList;
