import React from "react";

const Navigation = ({ isSignedIn, onRouteChange }) => {
  if (isSignedIn) {
    // home page or profile page
    <nav className="flex justify-end">
      <button
        className="p-3 m-1 bg-slate-200 hover:bg-slate-300 rounded"
        onClick={() => onRouteChange("signout")}
      >
        Sign Out
      </button>
    </nav>;
  } else {
    return (
      <nav className="flex justify-end">
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
