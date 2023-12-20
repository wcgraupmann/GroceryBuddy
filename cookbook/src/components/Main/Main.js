import React from "react";
import logo from "../../../src/logo-color.png";

class Main extends React.Component {
  render() {
    return (
      <div>
        <div className="bg-[#ffe4c4] my-5 mx-16 p-16 border border-black rounded flex">
          <img
            class="h-60 w-80 object-contain rounded-md"
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
    );
  }
}
export default Main;
