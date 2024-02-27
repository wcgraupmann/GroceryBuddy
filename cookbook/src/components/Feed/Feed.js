import React from "react";
import RecipeCard from "../RecipeCard/RecipeCard";
import recipe1 from "../Cookbook/mala-chicken.jpg";
import recipe2 from "../Cookbook/Saliva-Chicken.jpg";
import recipe3 from "../Cookbook/sheetpan-beef.jpg";
import recipe4 from "../Cookbook/dumplings.jpg";
import recipe5 from "../Cookbook/ramen.jpg";
import recipe6 from "../Cookbook/salmon.jpg";
import recipe7 from "../Cookbook/sausages.jpg";

const Feed = () => {
  return (
    <div>
      <div className="grid grid-cols-1">
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
  );
};

export default Feed;
