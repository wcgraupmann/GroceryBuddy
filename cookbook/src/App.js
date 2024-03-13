import "./App.css";
import React, { useState } from "react";
import Navigation from "./components/Navigation/Navigation";
import Signin from "./components/Signin/Signin";
import Register from "./components/Register/Register";
import Cookbook from "./components/Cookbook/Cookbook";
import Welcome from "./components/Welcome/Welcome";
import Hub from "./components/Hub/Hub";
import Profile from "./components/Profile/Profile";
import GroceryList from "./components/GroceryList/GroceryList";

const App = () => {
  const [route, setRoute] = useState("home");
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [userInfo, setUserInfo] = useState(null);

  // function to change the webpage to intended route
  // also sets signin boolean on signin / signout
  const onRouteChange = async (route) => {
    if (route === "signout") {
      setIsSignedIn(false);
    } else if (route === "main") {
      setIsSignedIn(true);
      await fetchUserData();
      console.log("called fetch user data");
    }
    setRoute(route);
    console.log("changed route to", route);
  };

  const fetchUserData = async () => {
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
      console.log("current data", data);
      console.log("current userInfo", userInfo);
    } catch (error) {
      console.error("Error signing in:", error.message);
    }
  };

  return (
    <div className="App bg-gradient-to-r from-indigo-200 to-indigo-400">
      <Navigation
        isSignedIn={isSignedIn}
        onRouteChange={onRouteChange}
        route={route}
      />
      {route === "home" ? (
        <Welcome />
      ) : route === "main" ? (
        <Hub onRouteChange={onRouteChange} userInfo={userInfo} />
      ) : route === "cookbook" ? (
        <Cookbook userInfo={userInfo} />
      ) : route === "signin" ? (
        <Signin onRouteChange={onRouteChange} />
      ) : route === "profile" ? (
        <Profile onRouteChange={onRouteChange} userInfo={userInfo} />
      ) : route === "grocery" ? (
        <GroceryList />
      ) : (
        <Register onRouteChange={onRouteChange} />
      )}
    </div>
  );
};

export default App;
