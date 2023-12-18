import "./App.css";
import { Component } from "react";
import Navigation from "./components/Navigation/Navigation";
import Home from "./components/Home/Home";

class App extends Component {
  // constructor() {
  //   super();
  // }

  render() {
    return (
      <div className="App">
        <Navigation />
        <Home />
      </div>
    );
  }
}

export default App;
