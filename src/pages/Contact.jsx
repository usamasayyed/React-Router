import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Contact = () => {
  const Navigate = useNavigate();

  return (
    <div>
      <h1 className="text-4xl ">Contact page</h1>
      <div className="flex gap-2 pt-5 ">
        <button onClick={() => Navigate("info")} className="border-2 py-1 px-6">
          Contact Info
        </button>
        <button onClick={() => Navigate("form")} className="border-2 py-1 px-6">
          Contact form
        </button>
      </div>
    </div>
  );
};

export default Contact;
