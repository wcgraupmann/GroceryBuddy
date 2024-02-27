import React from "react";
import logo from "../../../src/logo-color.png";

const Welcome = () => {
  return (
    <div>
      <div className="flex justify-center">
        <img
          className="h-60 w-80 object-contain rounded-md"
          src={logo}
          alt="description"
        />
      </div>
      <div className="m-5 p-10 border border-black flex bg-stone-300 rounded shadow-2xl">
        <p className="flex-auto border border-black bg-stone-200 rounded basis-1/4">
          How it Works
        </p>
        <p className="flex-auto border border-black ml-5 bg-stone-200 rounded basis-1/2">
          Save your favorite new recipes and share them with your Cookbook Club!
        </p>
      </div>
      <div className="m-5 p-10 border border-black flex bg-stone-300 rounded shadow-2xl">
        <p className="flex-auto border border-black bg-stone-200 rounded basis-1/4">
          Features
        </p>
        <p className="flex-auto border border-black ml-5 bg-stone-200 rounded basis-1/2">
          Create or join a Cookbook Club with family or friends and inspire each
          other to try new dishes
        </p>
      </div>
      <div className="m-5 p-10 border border-black flex bg-stone-300 rounded shadow-2xl">
        <p className="flex-auto border border-black bg-stone-200 rounded basis-1/4">
          Explain community
        </p>
        <p className="flex-auto border border-black ml-5 bg-stone-200 rounded basis-1/2">
          Build a community or join a club that share your culinary interests
        </p>
      </div>
      <div>
        <div className="bg-[#ffe4c4] my-5 mx-16 p-16 border border-black rounded flex mt-8">
          <img
            className="h-60 w-80 object-contain rounded-md"
            src={logo}
            alt="description"
          />
          <div className="ml-32 pl-8 pr-40 border border-black rounded-md flex flex-col justify-evenly">
            <p>Share your most recent culinary conquests!</p>
            <p>Upload your next recipe to create a grocery list</p>
            <p>Discover new meals to add to your cookbook</p>
          </div>
        </div>
      </div>
      <footer className="m-8 p-8"></footer>
    </div>
  );
};

export default Welcome;
