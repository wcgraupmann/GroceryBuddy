import React from "react";

class Home extends React.Component {
  render() {
    return (
      <div>
        <div className="bg-[#ffe4c4] my-5 mx-16 p-16 border border-black rounded">
          <h1>Welcome to Cookbook Club</h1>
        </div>
        <div className="m-5 p-10 border border-black flex bg-stone-300 rounded">
          <p className="flex-auto border border-black bg-stone-200 rounded basis-1/4">
            How it Works
          </p>
          <p className="flex-auto border border-black ml-5 bg-stone-200 rounded basis-1/2">
            Save your favorite new recipes and share them with your Cookbook
            Club!
          </p>
        </div>
        <div className="m-5 p-10 border border-black flex bg-stone-300 rounded">
          <p className="flex-auto border border-black bg-stone-200 rounded basis-1/4">
            Features
          </p>
          <p className="flex-auto border border-black ml-5 bg-stone-200 rounded basis-1/2">
            Create or join a Cookbook Club with family or friends and inspire
            each other to try new dishes
          </p>
        </div>
        <div className="m-5 p-10 border border-black flex bg-stone-300 rounded">
          <p className="flex-auto border border-black bg-stone-200 rounded basis-1/4">
            Explain community
          </p>
          <p className="flex-auto border border-black ml-5 bg-stone-200 rounded basis-1/2">
            Build a community or join a club that share your culinary interests
          </p>
        </div>
      </div>
    );
  }
}
export default Home;
