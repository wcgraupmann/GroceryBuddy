import React from "react";

const Navigation = () => {
  return (
    <nav style={{ display: "flex", justifyContent: "flex-end" }}>
      <button className="p-3 m-1 bg-slate-200 hover:bg-slate-300 rounded">
        Sign In
      </button>
      <button className="p-3 m-1 bg-slate-200 hover:bg-slate-300 rounded">
        Register
      </button>
    </nav>
  );
};

export default Navigation;
