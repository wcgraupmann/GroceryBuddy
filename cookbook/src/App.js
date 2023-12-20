import "./App.css";
import { Component } from "react";
import Navigation from "./components/Navigation/Navigation";
import Home from "./components/Home/Home";
import Signin from "./components/Signin/Signin";
import Register from "./components/Register/Register";
import Main from "./components/Main/Main";

const initalState = {
  isSignedIn: false,
  route: "home",
};
class App extends Component {
  constructor() {
    super();
    this.state = initalState;
  }

  onRouteChange = (route) => {
    if (route === "signout") {
      this.setState(initalState);
    } else if (route === "home") {
      this.setState({ isSignedIn: true });
    }
    this.setState({ route: route });
  };

  render() {
    // const { isSignedIn } = this.state;
    return (
      <div className="App">
        <Navigation
          isSignedIn={this.isSignedIn}
          onRouteChange={this.onRouteChange}
        />
        {this.state.route === "home" ? (
          <Home />
        ) : this.state.route === "main" ? (
          <Main />
        ) : this.state.route === "signin" ? (
          <Signin onRouteChange={this.onRouteChange} />
        ) : (
          <Register onRouteChange={this.onRouteChange} />
        )}
      </div>
    );
  }
}

export default App;
