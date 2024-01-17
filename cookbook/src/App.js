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
    this.state = initalState;
  }

  loadUser = (data) => {
    this.setState({
      user: {
        id: data.id,
        name: data.name,
        email: data.email,
        entries: data.entries,
        joined: data.joined,
        recipes: data.recipes,
      },
    });
  };

  onRouteChange = (route) => {
    if (route === "signout") {
      this.setState(initalState);
    } else if (route === "main") {
      this.setState({ isSignedIn: true });
    }
    this.setState({ route: route });
  };

  onSignIn = () => {
    this.setState({ isSignedIn: true });
  };

  render() {
    const { isSignedIn } = this.state;
    return (
      <div className="App">
        <Navigation
          isSignedIn={isSignedIn}
          onRouteChange={this.onRouteChange}
        />
        {this.state.route === "home" ? (
          <Welcome />
        ) : this.state.route === "main" ? (
          <Hub onRouteChange={this.onRouteChange} />
        ) : this.state.route === "cookbook" ? (
          <Cookbook />
        ) : this.state.route === "signin" ? (
          <Signin onRouteChange={this.onRouteChange} onSignIn={this.loadUser} />
        ) : (
          <Register onRouteChange={this.onRouteChange} />
        )}
      </div>
    );
  }
}

export default App;
