import React from "react";
// import logo from "../../../src/logo-color.png";
import RecipeCard from "../RecipeCard/RecipeCard";
import recipe1 from "./mala-chicken.jpg";
import recipe2 from "./Saliva-Chicken.jpg";
import recipe3 from "./sheetpan-beef.jpg";
import recipe4 from "./dumplings.jpg";
import recipe5 from "./ramen.jpg";
import recipe6 from "./salmon.jpg";
import recipe7 from "./sausages.jpg";

const Cookbook = ({ userInfo }) => {
  // constructor(props) {
  //   super(props);
  //   this.state = {};
  // }

  return (
    <div>
      <div>
        <h1 className="bg-slate-200 p-4 border border-black rounded mx-20">
          {userInfo.name}'s Cookbook
        </h1>
      </div>
      <div className="flex">
        <div className="border border-black mt-8 ml-8 mr-2 p-8 bg-slate-200">
          <ul>
            <li>My Recipes</li>
            <li>My Profile</li>
            <li>My Clubs</li>
          </ul>
        </div>
        <div className="grid grid-cols-2">
          <div className="bg-[#ffe4c4] my-5 mx-4 p-4 border border-black rounded grow mt-8">
            <RecipeCard
              imageUrl={recipe1}
              title={"Mala Chicken"}
              origin={"Szechuan Cookbook"}
            />
          </div>
          <div className="bg-[#ffe4c4] my-5 mx-4 p-14 border border-black rounded  mt-8">
            <RecipeCard
              imageUrl={recipe2}
              title={"Mala Chicken"}
              origin={"Szechuan Cookbook"}
            />
          </div>
          <div className="bg-[#ffe4c4] my-5 mx-4 p-4 border border-black rounded  mt-8">
            <RecipeCard
              imageUrl={recipe3}
              title={"Mala Chicken"}
              origin={"Szechuan Cookbook"}
            />
          </div>
          <div className="bg-[#ffe4c4] my-5 mx-4 p-4 border border-black rounded  mt-8">
            <RecipeCard
              imageUrl={recipe4}
              title={"Mala Chicken"}
              origin={"Szechuan Cookbook"}
            />
          </div>
          <div className="bg-[#ffe4c4] my-5 mx-4 p-4 border border-black rounded  mt-8">
            <RecipeCard
              imageUrl={recipe5}
              title={"Mala Chicken"}
              origin={"Szechuan Cookbook"}
            />
          </div>
          <div className="bg-[#ffe4c4] my-5 mx-4 p-4 border border-black rounded  mt-8">
            <RecipeCard
              imageUrl={recipe6}
              title={"Mala Chicken"}
              origin={"Szechuan Cookbook"}
            />
          </div>
          <div className="bg-[#ffe4c4] my-5 mx-4 p-4 border border-black rounded  mt-8">
            <RecipeCard
              imageUrl={recipe7}
              title={"Mala Chicken"}
              origin={"Szechuan Cookbook"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cookbook;
