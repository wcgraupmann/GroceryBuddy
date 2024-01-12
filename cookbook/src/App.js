import "./App.css";
import { Component } from "react";
import Navigation from "./components/Navigation/Navigation";
import Signin from "./components/Signin/Signin";
import Register from "./components/Register/Register";
import Cookbook from "./components/Cookbook/Cookbook";
import Welcome from "./components/Welcome/Welcome";
import Hub from "./components/Hub/Hub";

const initalState = {
  isSignedIn: false,
  route: "home",
};
class App extends Component {
  constructor() {
    super();
    this.state = {
      isSignedIn: false,
      route: "home",
    };
  }

  onRouteChange = (route) => {
    if (route === "signout") {
      this.setState(initalState);
    } else if (route === "") {
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
          <Signin onRouteChange={this.onRouteChange} onSignIn={this.onSignIn} />
        ) : (
          <Register
            onRouteChange={this.onRouteChange}
            onSignIn={this.onSignIn}
          />
        )}
      </div>
    );
  }
}

export default App;
