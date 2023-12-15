import React from "react";
import "./Home.css";

class Home extends React.Component {
  render() {
    return (
      <div className="home-page">
        <div className="welcome">
          <h1>Welcome to Cookbook Club</h1>
        </div>
        <hr />
        <div className="info">
          <div className="graphic"></div>
          <p className="description">How it Works</p>
        </div>
        <div className="info">
          <div className="graphic"></div>
          <p className="description">Explain Features</p>
        </div>
        <div className="info">
          <div className="graphic"></div>
          <p className="description">Explain community</p>
        </div>
      </div>
    );
  }
}
export default Home;
