import React from "react";
import { useNavigate } from "react-router-dom";
import "./podcastComponent.css";

export const PodcastComponent = () => {
  const podcast = JSON.parse(localStorage.getItem("podcast"));
  const navigate = useNavigate();

  return (
    <>
      <div className="summary" onClick={() => navigate(-1)}>
        <div className="container">
          <img className="image" src={podcast["im:image"][0].label} alt="img" />
        </div>
        <div className="authority">
          <h2 className="title">{podcast.title.label}</h2>
          <p className="author">By {podcast["im:artist"].label}</p>
        </div>
        <div className="description-cnt">
          <p className="description-title">Description:</p>
          <p className="description">{podcast.summary.label}</p>
        </div>
      </div>
    </>
  );
};
