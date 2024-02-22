import React from "react";

const Profile = ({ onRouteChange, userInfo }) => {
  return (
    <>
      <h1>{userInfo.name}'s Profile</h1>
      <img alt="user profile" />
      <button
        className="p-3 m-1 bg-slate-200 hover:bg-slate-300 rounded"
        onClick={() => onRouteChange("main")}
      >
        Back to Cooking Hub
      </button>
    </>
  );
};

export default Profile;
