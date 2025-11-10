import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h2>404 | page Not Found</h2>
      <br />

      <button onClick={() => navigate("/")} className="border-2 py-1 px-6">
        Go To HomePage
      </button>
    </div>
  );
};

export default NotFound;
