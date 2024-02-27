import React from "react";

const Navigation = ({ isSignedIn, onRouteChange, route }) => {
  if (isSignedIn) {
    if (route === "main") {
      return (
        <nav className="flex justify-between border border-indigo-600 mb-2 border bg-slate-400">
          <div>
            <button
              className="p-3 m-1 bg-slate-500  rounded"
              onClick={() => onRouteChange("main")}
            >
              Feed
            </button>
            <button
              className="p-3 m-1 bg-slate-200 hover:bg-slate-300 rounded"
              onClick={() => onRouteChange("cookbook")}
            >
              Cookbook
            </button>
            <button
              className="p-3 m-1 bg-slate-200 hover:bg-slate-300 rounded"
              onClick={() => onRouteChange("grocery")}
            >
              Grocery List
            </button>
          </div>
          <div>
            <button
              className="p-3 m-1 bg-slate-200 hover:bg-slate-300 rounded"
              onClick={() => onRouteChange("profile")}
            >
              My Profile
            </button>
            <button
              className="p-3 m-1 bg-slate-200 hover:bg-slate-300 rounded"
              onClick={() => onRouteChange("signout")}
            >
              Sign Out
            </button>
          </div>
        </nav>
      );
    } else if (route === "cookbook") {
      return (
        <nav className="flex justify-between border border-indigo-600 mb-2 border bg-slate-400">
          <div>
            <button
              className="p-3 m-1 bg-slate-200 hover:bg-slate-300 rounded"
              onClick={() => onRouteChange("main")}
            >
              Feed
            </button>
            <button
              className="p-3 m-1 bg-slate-500  rounded"
              onClick={() => onRouteChange("cookbook")}
            >
              Cookbook
            </button>
            <button
              className="p-3 m-1 bg-slate-200 hover:bg-slate-300 rounded"
              onClick={() => onRouteChange("grocery")}
            >
              Grocery List
            </button>
          </div>
          <div>
            <button
              className="p-3 m-1 bg-slate-200 hover:bg-slate-300 rounded"
              onClick={() => onRouteChange("profile")}
            >
              My Profile
            </button>
            <button
              className="p-3 m-1 bg-slate-200 hover:bg-slate-300 rounded"
              onClick={() => onRouteChange("signout")}
            >
              Sign Out
            </button>
          </div>
        </nav>
      );
    } else if (route === "grocery") {
      return (
        <nav className="flex justify-between border border-indigo-600 mb-2 border bg-slate-400">
          <div>
            <button
              className="p-3 m-1 bg-slate-200 hover:bg-slate-300 rounded"
              onClick={() => onRouteChange("main")}
            >
              Feed
            </button>
            <button
              className="p-3 m-1 bg-slate-200 hover:bg-slate-300 rounded"
              onClick={() => onRouteChange("cookbook")}
            >
              Cookbook
            </button>
            <button
              className="p-3 m-1 bg-slate-500  rounded"
              onClick={() => onRouteChange("grocery")}
            >
              Grocery List
            </button>
          </div>
          <div>
            <button
              className="p-3 m-1 bg-slate-200 hover:bg-slate-300 rounded"
              onClick={() => onRouteChange("profile")}
            >
              My Profile
            </button>
            <button
              className="p-3 m-1 bg-slate-200 hover:bg-slate-300 rounded"
              onClick={() => onRouteChange("signout")}
            >
              Sign Out
            </button>
          </div>
        </nav>
      );
    } else {
      return (
        <nav className="flex justify-between border border-indigo-600 mb-2 border bg-slate-400">
          <div>
            <button
              className="p-3 m-1 bg-slate-200 hover:bg-slate-300 rounded"
              onClick={() => onRouteChange("main")}
            >
              Feed
            </button>
            <button
              className="p-3 m-1 bg-slate-200 hover:bg-slate-300 rounded"
              onClick={() => onRouteChange("cookbook")}
            >
              Cookbook
            </button>
            <button
              className="p-3 m-1 bg-slate-200 hover:bg-slate-300 rounded"
              onClick={() => onRouteChange("grocery")}
            >
              Grocery List
            </button>
          </div>
          <div>
            <button
              className="p-3 m-1 bg-slate-500  rounded"
              onClick={() => onRouteChange("profile")}
            >
              My Profile
            </button>
            <button
              className="p-3 m-1 bg-slate-200 hover:bg-slate-300 rounded"
              onClick={() => onRouteChange("signout")}
            >
              Sign Out
            </button>
          </div>
        </nav>
      );
    }
  } else {
    return (
      <nav className="flex justify-end border border-indigo-600 mb-2 border bg-slate-400">
        <button
          className="p-3 m-1 bg-slate-200 hover:bg-slate-300 rounded"
          onClick={() => onRouteChange("signin")}
        >
          Sign In
        </button>
        <button
          className="p-3 m-1 bg-slate-200 hover:bg-slate-300 rounded"
          onClick={() => onRouteChange("register")}
        >
          Register
        </button>
      </nav>
    );
  }
};

export default Navigation;
