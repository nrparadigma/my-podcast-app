import React from "react";
import { useNavigate } from "react-router-dom";
import "./headerComponent.css";

export const HeaderComponent = () => {
  const navigate = useNavigate();

  return (
    <div className="headerComponent">
      <h1 onClick={() => navigate("/")}>Podcaster</h1>
    </div>
  );
};
