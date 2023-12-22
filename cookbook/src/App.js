import "./App.css";
import { Component } from "react";
import Navigation from "./components/Navigation/Navigation";
import Home from "./components/Home/Home";
import Signin from "./components/Signin/Signin";
import Register from "./components/Register/Register";
import Main from "./components/Main/Main";
import Cookbook from "./components/Cookbook/Cookbook";

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
          <Home />
        ) : this.state.route === "main" ? (
          <Main onRouteChange={this.onRouteChange} />
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
