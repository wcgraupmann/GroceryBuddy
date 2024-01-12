import React from "react";
// import logo from "../../../src/logo-color.png";
import RecipeCard from "../RecipeCard/RecipeCard";

class Cookbook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div>
          <h1>Your Cookbook</h1>
        </div>
        <div className="flex">
          <div className="border border-black mt-8 ml-8 mr-2 p-8 bg-slate-200">
            <ul>
              <li onClick={this.onChangePage}>My Recipes</li>
              <li>My Profile</li>
              <li>My Clubs</li>
            </ul>
          </div>
          <div className="bg-[#ffe4c4] my-5 mx-16 p-16 border border-black rounded flex mt-8">
            <RecipeCard />
          </div>
        </div>
      </div>
    );
  }
}
export default Cookbook;
