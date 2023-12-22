import React from "react";

class Recipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="flex">
        <div className="p-8 m-2">
          <img alt="recipe or food" />
        </div>
        <div className="p-8 m-2">
          <h1>Recipe Title</h1>
          <h2>description</h2>
        </div>
      </div>
    );
  }
}
export default Recipe;
