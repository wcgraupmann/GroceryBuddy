import React from "react";
import logo from "../../logo-color.png";

const Profile = ({ onRouteChange, userInfo }) => {
  return (
    <>
      <h1>LET'S GET COOKING!</h1>
      <img
        className="mx-auto h-40 w-auto border rounded"
        src={logo}
        alt="Your Company"
      />
      {/* <button
        className="p-3 m-1 bg-slate-200 hover:bg-slate-300 rounded"
        onClick={() => onRouteChange("main")}
      >
        Back to Cooking Hub
      </button> */}
    </>
  );
};

export default Profile;
