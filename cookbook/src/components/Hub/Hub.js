import React, { useState, useEffect } from "react";
import logo from "../../../src/logo-color.png";

const Hub = ({ onRouteChange }) => {
  const [userInfo, setUserInfo] = useState(null);
  // fetch user info and store in useState
  useEffect(() => {
    const getUser = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("No token found");
        }
        const response = await fetch("http://localhost:3000/protected", {
          method: "get",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }
        const data = await response.json();
        setUserInfo(data);
      } catch (error) {
        console.error("Error signing in:", error.message);
      }
    };
    getUser();
  }, []);

  // console.log(userInfo);

  return (
    <div>
      <div>
        <h1>Profile Page</h1>
      </div>
      <div className="flex">
        <div className="border border-black mt-8 ml-8 mr-2 p-8 bg-slate-200">
          <button onClick={() => onRouteChange("cookbook")}>My Recipes</button>
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
};

export default Hub;
