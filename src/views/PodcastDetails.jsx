import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Parser from "rss-parser";
import { Link } from "react-router-dom";
import { PodcastComponent } from "../components/PodcastComponent";
import "./podcastDetails.css";
import { HeaderComponent } from "../components/headerComponent";

export const PodcastDetails = () => {
  const [podcast, setPodcast] = useState();
  const [chaptersList, setChaptersList] = useState();
  const params = useParams();
  const podcastURI = `https://itunes.apple.com/lookup?id=${params.podcastId}`;

  useEffect(() => {
    fetch(
      `https://api.allorigins.win/get?url=${encodeURIComponent(podcastURI)}`
    )
      .then((response) => {
        if (response.ok) return response.json();
        throw new Error("Network response was not ok.");
      })
      .then((data) => {
        setPodcast(JSON.parse(data.contents));
        return data.contents;
      })
      .then((contents) => {
        const parser = new Parser();
        const contentsParsed = JSON.parse(contents);
        const feed = parser.parseURL(
          `https://api.allorigins.win/raw?url=${contentsParsed.results[0]?.feedUrl}`
        );
        return feed;
      })
      .then((feed) => {
        setChaptersList(feed.items);
      });
  }, [podcastURI]);

  const onClickLink = (chapter) => {
    localStorage.setItem("chapter", JSON.stringify(chapter));
  };

  return (
    <>
      <HeaderComponent />
      <div className="box">
        <PodcastComponent />
        <div className="chaptersList">
          <div className="episodes">
            <p>Episodes: {chaptersList?.length}</p>
          </div>
          <ul className="chapter">
            <li className="chapterItem chapterHeader">
              <span>Title</span>
              <span>Date</span>
              <span>Duration</span>
            </li>
            {chaptersList?.map((chapter, i) => (
              <li className="chapterItem" key={i}>
                <Link
                  to={`/podcast/${params.podcastId}/episode/${chapter.guid}`}
                  onClick={() => onClickLink(chapter)}
                  className="chapterTitle"
                >
                  <p>{chapter.title}</p>
                </Link>

                <p className="date">
                  {new Date(chapter.pubDate).toLocaleDateString()}
                </p>
                <p className="duration">
                  {chapter.itunes.duration.includes(":")
                    ? chapter.itunes.duration
                    : new Date(chapter.itunes.duration * 1000)
                        .toUTCString()
                        .match(/(\d\d:\d\d:\d\d)/)[0]}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
