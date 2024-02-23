import React from "react";

const Navigation = ({ isSignedIn, onRouteChange, route }) => {
  if (isSignedIn) {
    if (route === "profile") {
      return (
        <nav className="flex justify-end">
          <button
            className="p-3 m-1 bg-slate-200 hover:bg-slate-300 rounded"
            onClick={() => onRouteChange("signout")}
          >
            Sign Out
          </button>
        </nav>
      );
    } else {
      return (
        <nav className="flex justify-end">
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
