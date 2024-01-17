import React from "react";
import logo from "../../../src/logo-color.png";

class Hub extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onChangePage = () => {
    this.props.onRouteChange("cookbook");
  };

  render() {
    return (
      <div>
        <div>
          <h1>User's Profile Page</h1>
        </div>
        <div className="flex">
          <div className="border border-black mt-8 ml-8 mr-2 p-8 bg-slate-200">
            <button onClick={this.onChangePage}>My Recipes</button>
          </div>
          <div className="bg-[#ffe4c4] my-5 mx-16 p-16 border border-black rounded flex mt-8">
            <img
              className="h-60 w-80 object-contain rounded-md"
              src={logo}
              alt="description"
            />
            <div className="ml-32 pl-8 pr-80 border border-black rounded-md flex flex-col justify-evenly">
              <p>My Profile</p>
              <p>My Profile</p>
              <p>My Profile</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Hub;
