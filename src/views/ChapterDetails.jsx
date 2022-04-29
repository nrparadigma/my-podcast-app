import React from "react";
import sanitize from "sanitize-html";
import { HeaderComponent } from "../components/headerComponent";
import { PodcastComponent } from "../components/PodcastComponent";
import "./chapterDetails.css";

export const ChapterDetails = () => {
  const chapter = JSON.parse(localStorage.getItem("chapter"));
  const sanitized = sanitize(chapter?.["content:encoded"]);

  return (
    <>
      <HeaderComponent />
      <div className="box">
        <PodcastComponent />
        <div className="episode-detail">
          <h3 className="title">{chapter?.title}</h3>
          <div
            className="description"
            dangerouslySetInnerHTML={{ __html: sanitized }}
          />
          <audio className="audio" controls src={chapter?.enclosure.url} />
        </div>
      </div>
    </>
  );
};
