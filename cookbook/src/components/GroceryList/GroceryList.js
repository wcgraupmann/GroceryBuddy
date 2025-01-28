import React, { useEffect, useState } from "react";
import RecipeForm from "../RecipeForm/RecipeForm";
import ItemForm from "../ItemForm/ItemForm";
import GroceryCategory from "../GroceryCategory/GroceryCategory";
import RecipeCategory from "../RecipeCategory/RecipeCategory";
import emptyBasket from "../../assets/empty-basket.jpg";

// TODO: convert key to .env variable
const witClientKey = "UX7IIBGQ7BONGFHX7P5QSGPZ3BFNOISA";

/**
 * Renders the selected group's grocery list.
 * The default group shown will be the first group
 *
 * @param {groupIds} a - The first number.
 * @description Renders the selected group's grocery list
 */
const GroceryList = ({ groupIds }) => {
  // list - groups the list into recipes
  const [list, setList] = useState({});
  // sortedList - groups the list into grocery categories
  const [sortedList, setSortedList] = useState({});
  const [groceryView, setGroceryView] = useState(false);

  // console.log("list useState", list);
  console.log("groupIds", groupIds);

  // fetch the grocery list on intial page load
  // TODO: check if this useEffect is redundant
  useEffect(() => {
    fetchGroceryList();
  }, []);

  // fetch on an interval to sync with any changes made on the mobile app
  useEffect(() => {
    fetchGroceryList();

    // Define the interval to refetch the grocery list (every 10 seconds)
    const interval = setInterval(() => {
      fetchGroceryList();
    }, 10000);

    // Cleanup interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  /**
   * Fetches grocery lists for the currently selected group from the backend.
   * @description - assigns list sorted by recipe to list
   * @description - assigns list sorted by category to sortedList
   * @param {groupIds}: array of group ids that the user has joined
   */
  const fetchGroceryList = async () => {
    try {
      // check if user has access to endpoint by checking for valid token
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("No token found");
      }
      const response = await fetch("http://localhost:3000/groceryList", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ groupId: groupIds[0] }),
      });
      if (!response.ok) {
        throw new Error("Failed to fetch user data");
      }
      const data = await response.json();
      const { recipes, groceryList } = data;
      setList(recipes);
      setSortedList(groceryList);
    } catch (error) {
      console.error("Error signing in:", error.message);
    }
  };

  /**
   * Categorizes item into a grocery category based on a trained dataset in Wit AI
   * @param {string} item : the name of the item in the list
   * @returns the category it is associated with or "Other Items" if it doesn't fit a specific group
   */
  const getCategory = async (item) => {
    try {
      const witAiResponse = await fetch(
        `https://api.wit.ai/message?v=20240101&q=${encodeURIComponent(item)}`,
        {
          headers: {
            Authorization: `Bearer ${witClientKey}`,
            Accept: "application/json",
          },
        }
      );
      const witAidata = await witAiResponse.json();
      if (witAidata.intents.length) {
        return witAidata.intents[0].name.replaceAll("_", " ");
      } else {
        return "Other Items";
      }
    } catch (error) {
      console.error("Error signing in:", error.message);
    }
  };

  /**
   * Adds grocery item to backend grocery list
   * @param {object} itemObj - contains item, associated recipe, associated category, and selected groupId
   * @description - adds item to backend and fetches updated list
   */
  const sendItem = async (itemObj) => {
    try {
      // assign wit ai category
      const cateogry = await getCategory(itemObj.item);
      // check if user has access to endpoint by checking for valid token
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
          groupId: groupIds[0],
        }),
      });
      if (!response.ok) {
        throw new Error("Failed to fetch user data");
      }
      await fetchGroceryList();
    } catch (error) {
      console.error("Error signing in:", error.message);
    }
  };

  /**
   * Delete item from backend list of selected group
   * @param {string} item - item to delete
   * @param {string} recipe - recipe category to delete item from
   */
  const deleteItem = async (item, recipe) => {
    try {
      // check if user has access to endpoint by checking for valid token
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
          groupId: groupIds[0],
        }),
      });
      if (!response.ok) {
        throw new Error("Failed to fetch user data");
      }
      const data = await response.json();

      await fetchGroceryList();
      alert(data.message, data.itemToDelete); // enables screen to render to show updated list
    } catch (error) {
      console.error("Error signing in:", error.message);
    }
  };

  /**
   * Edit item in backend list of selected group
   * @param {string} newListItem - updated item
   * @param {string} listItem - previous item
   * @param {string} listRecipe - name of recipe group that holds item
   */
  const sendEdit = async (newListItem, listItem, listRecipe) => {
    try {
      // check if user has access to endpoint by checking for valid token
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
          groupId: groupIds[0],
        }),
      });
      if (!response.ok) {
        throw new Error("Failed to fetch user data");
      }
      const data = await response.json();
      await fetchGroceryList();
      alert(data.message, data.itemToEdit); // enables screen to render to show updated list
    } catch (error) {
      console.error("Error signing in:", error.message);
    }
  };

  /**
   * Renders grocery list with item forms when list is populated
   * Otherwise, displays empty cart
   */
  if (Object.keys(list).length !== 0) {
    // default: display list grouped by recipes and "Other Items"
    if (!groceryView) {
      return (
        <div className="flex flex-row mt-4 mx-4">
          {/* directory */}
          <div className="basis-1/3  p-4 pt-2 ">
            {/*  */}
            <div className="flex flex-col">
              {/*  */}
              <button
                // onClick={doSomethingLater}
                className="flex w-full justify-center rounded-md bg-slate-600 px-3 py-1.5 m-1 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {`${groupIds[0].toUpperCase()}'s GROCERY LIST`}
              </button>
              <div className="bg-slate-300 mt-2 py-2 px-2 border border-black rounded">
                <div className="border border-black rounded mx-2 px-2">
                  <h1 className="underline font-bold">Add Item</h1>
                  <p>Add Individual Items to your Grocery List</p>
                </div>
                <ItemForm sendItem={sendItem} />
              </div>
              <div className="bg-slate-300 mt-2 py-2 px-2 border border-black rounded">
                <div className="border border-black rounded mx-2 px-2">
                  <h1 className="underline font-bold">Add Recipe</h1>
                  <p>Upload a recipe to automatically populate the list!</p>
                </div>
                <RecipeForm sendItem={sendItem} />
              </div>
            </div>
            {/*  */}
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
                Object.keys(list).map((recipe, index) => {
                  if (list[recipe].length !== 0) {
                    return (
                      <div
                        key={index}
                        className="border border-black m-2 p-2 rounded bg-slate-500"
                      >
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
                    );
                  } else {
                    return <div></div>;
                  }
                })}
            </div>
          </div>
        </div>
      );
    } else {
      // sorted view: display list grouped by grocery categories
      return (
        <div className="flex flex-row mt-4 mx-4">
          {/* directory */}
          <div className="basis-1/3  p-4 pt-2 ">
            <div className="flex flex-col">
              <button
                // onClick={doSomethingLater}
                className="flex w-full justify-center rounded-md bg-slate-600 px-3 py-1.5 m-1 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {`${groupIds[0].toUpperCase()}'s GROCERY LIST`}
              </button>
              <div className="bg-slate-300 mt-2 py-2 px-2 border border-black rounded">
                <div className="border border-black rounded mx-2 px-2">
                  <h1 className="underline font-bold">Add Item</h1>
                  <p>Add Individual Items to your Grocery List</p>
                </div>
                <ItemForm sendItem={sendItem} />
              </div>
              <div className="bg-slate-300 mt-2 py-2 px-2 border border-black rounded">
                <div className="border border-black rounded mx-2 px-2">
                  <h1 className="underline font-bold">Add Recipe</h1>
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
                  <div
                    key={category}
                    className="border border-black m-2 p-2 rounded bg-slate-500"
                  >
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
            <button
              // TODO: add function to enable toggling a user's groups
              // onClick={doSomethingLater}
              className="flex w-full justify-center rounded-md bg-slate-600 px-3 py-1.5 m-1 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {`${groupIds[0].toUpperCase()}'s GROCERY LIST`}
            </button>
            <div className="bg-slate-300 mt-2 py-2 px-2 border border-black rounded">
              <div className="border border-black rounded mx-2 px-2">
                <h1 className="underline font-bold">Add Item</h1>
                <p>Add Individual Items to your Grocery List</p>
              </div>
              <ItemForm sendItem={sendItem} />
            </div>
            <div className="bg-slate-300 mt-2 py-2 px-2 border border-black rounded">
              <div className="border border-black rounded mx-2 px-2">
                <h1 className="underline font-bold">Add Recipe</h1>
                <p>Upload a recipe to automatically populate the list!</p>
              </div>
              <RecipeForm sendItem={sendItem} />
            </div>
          </div>
        </div>
        <div className="basis-2/3  p-4 pt-2 border border-black rounded bg-slate-200 max-h-[500px]">
          <div className="flex flex-col h-full">
            <h1 className="p-8 text-center bg-indigo-300 rounded-lg font-bold">
              {"Your Grocery Basket Is Empty!".toUpperCase()}
            </h1>
            <div className="flex-1 flex justify-center items-center">
              <img
                src={emptyBasket}
                alt="emptyBasket"
                className="max-h-[300px] object-contain rounded-lg "
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default GroceryList;
