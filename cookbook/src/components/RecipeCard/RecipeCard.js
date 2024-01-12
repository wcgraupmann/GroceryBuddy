import React from "react";

const RecipeCard = ({ imageUrl, title, origin }) => {
  return (
    <div className="flex flex-col">
      <div className="p-8 m-2">
        <h1>{title}</h1>
        <h2>{origin}</h2>
      </div>
      <img
        className="object-cover h-96 w-96 place-content-center"
        src={imageUrl}
        alt="recipe-Card or food"
      />
    </div>
  );
};
export default RecipeCard;
