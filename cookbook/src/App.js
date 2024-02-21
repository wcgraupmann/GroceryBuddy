import "./App.css";
import React, { useState } from "react";
import Navigation from "./components/Navigation/Navigation";
import Signin from "./components/Signin/Signin";
import Register from "./components/Register/Register";
import Cookbook from "./components/Cookbook/Cookbook";
import Welcome from "./components/Welcome/Welcome";
import Hub from "./components/Hub/Hub";

const App = () => {
  const [route, setRoute] = useState("home");
  const [isSignedIn, setIsSignedIn] = useState(false);

  // function to change the webpage to intended route
  // also sets signin boolean on signin / signout
  const onRouteChange = (route) => {
    if (route === "signout") {
      setIsSignedIn(false);
    } else if (route === "main") {
      setIsSignedIn(true);
    }
    setRoute(route);
  };

  return (
    <div className="App">
      <Navigation isSignedIn={isSignedIn} onRouteChange={onRouteChange} />
      {route === "home" ? (
        <Welcome />
      ) : route === "main" ? (
        <Hub onRouteChange={onRouteChange} />
      ) : route === "cookbook" ? (
        <Cookbook />
      ) : route === "signin" ? (
        <Signin onRouteChange={onRouteChange} />
      ) : (
        <Register onRouteChange={onRouteChange} />
      )}
    </div>
  );
};

export default App;
