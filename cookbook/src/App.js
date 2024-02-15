import "./App.css";
import React, { useState, useEffect } from "react";
import Navigation from "./components/Navigation/Navigation";
import Signin from "./components/Signin/Signin";
import Register from "./components/Register/Register";
import Cookbook from "./components/Cookbook/Cookbook";
import Welcome from "./components/Welcome/Welcome";
import Hub from "./components/Hub/Hub";

// const initalState = {
//   isSignedIn: false,
//   route: "home",
//   user: {
//     id: "",
//     name: "",
//     email: "",
//     entries: 0,
//     joined: "",
//   },
// };

const App = () => {
  // constructor() {
  //   super();
  //   this.state = {
  //     isSignedIn: false,
  //     route: "home",
  //     user: {
  //       id: "",
  //       name: "",
  //       email: "",
  //       entries: 0,
  //       joined: "",
  //     },
  //   };
  // }
  const [userInfo, setUserInfo] = useState(null);
  const [route, setRoute] = useState("home");
  const [isSignedIn, setIsSignedIn] = useState(false);

  // get user name
  // useEffect(() => {
  //   const getUser = async () => {
  //     try {
  //       const token = localStorage.getItem("token");

  //       if (!token) {
  //         throw new Error("No token found");
  //       }

  //       const response = fetch("http://localhost:3000/protected", {
  //         method: "post",
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization: `Bearer ${token}`,
  //         },
  //       });

  //       if (!response.ok) {
  //         throw new Error("Failed to fetch user data");
  //       }

  //       const data = await response.json();
  //       setUserInfo(data);
  //     } catch (error) {
  //       console.error("Error signing in:", error.message);
  //     }
  //   };

  //   getUser();
  // }, []);
  // console.log(userInfo);

  // loadUser = (data) => {
  //   this.setState({
  //     user: {
  //       id: data.id,
  //       name: data.name,
  //       email: data.email,
  //       entries: data.entries,
  //       joined: data.joined,
  //     },
  //   });
  // };

  // const onRouteChange = (route) => {
  //   if (route === "signout") {
  //     this.setState(initalState);
  //   } else if (route === "main") {
  //     this.setState({ isSignedIn: true });
  //     console.log("isSignedIn set to true");
  //   }
  //   this.setState({ route: route });
  //   console.log(`route is set to: ${route}`);
  // };
  const onRouteChange = (route) => {
    if (route === "signout") {
      setIsSignedIn(false);
    } else if (route === "main") {
      setIsSignedIn(true);
    }
    setRoute(route);
  };

  // const { isSignedIn, route } = this.state;
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
