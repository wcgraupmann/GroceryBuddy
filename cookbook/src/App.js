import "./App.css";
import React, { Component } from "react";
import Navigation from "./components/Navigation/Navigation";
import Signin from "./components/Signin/Signin";
import Register from "./components/Register/Register";
import Cookbook from "./components/Cookbook/Cookbook";
import Welcome from "./components/Welcome/Welcome";
import Hub from "./components/Hub/Hub";

const initalState = {
  isSignedIn: false,
  route: "home",
  user: {
    id: "",
    name: "",
    email: "",
    entries: 0,
    joined: "",
  },
};
class App extends Component {
  constructor() {
    super();
    this.state = {
      isSignedIn: false,
      route: "home",
      user: {
        id: "",
        name: "",
        email: "",
        entries: 0,
        joined: "",
      },
    };
  }

  // componentDidMount() {
  //   fetch("http://localhost:3000")
  //     .then((response) => response.json())
  //     .then(console.log);
  // }

  loadUser = (data) => {
    this.setState({
      user: {
        id: data.id,
        name: data.name,
        email: data.email,
        entries: data.entries,
        joined: data.joined,
      },
    });
  };

  onRouteChange = (route) => {
    if (route === "signout") {
      this.setState(initalState);
    } else if (route === "main") {
      this.setState({ isSignedIn: true });
      console.log("isSignedIn set to true");
    }
    this.setState({ route: route });
    console.log(`route is set to: ${route}`);
  };

  render() {
    const { isSignedIn, route } = this.state;
    return (
      <div className="App">
        <Navigation
          isSignedIn={isSignedIn}
          onRouteChange={this.onRouteChange}
        />
        {route === "home" ? (
          <Welcome />
        ) : route === "main" ? (
          <Hub onRouteChange={this.onRouteChange} />
        ) : route === "cookbook" ? (
          <Cookbook />
        ) : route === "signin" ? (
          <Signin onRouteChange={this.onRouteChange} onSignIn={this.loadUser} />
        ) : (
          <Register onRouteChange={this.onRouteChange} />
        )}
      </div>
    );
  }
}

export default App;
