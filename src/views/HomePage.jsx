import React, { useEffect, useState } from "react";
import "./homePage.css";
import { Link } from "react-router-dom";
import { HeaderComponent } from "../components/headerComponent";

export const HomePage = () => {
  const [totalPodcasts, setTotalPodcasts] = useState([]);
  const [filteredPodcast, setFilteredPodcast] = useState("");
  useEffect(() => {
    fetch(
      "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json"
    )
      .then((response) => response.json())
      .then((data) => setTotalPodcasts(data.feed.entry));
  }, []);

  let shortedPodcast = totalPodcasts?.filter((podcast) => {
    return (
      podcast["im:artist"].label
        .toLowerCase()
        .includes(filteredPodcast.toLowerCase()) ||
      podcast["im:name"].label
        .toLowerCase()
        .includes(filteredPodcast.toLowerCase())
    );
  });

  const onClickLink = (podcast) => {
    localStorage.setItem("podcast", JSON.stringify(podcast));
  };

  return (
    <>
      <header>
        <HeaderComponent />
        <div className="search">
          <span>{shortedPodcast?.length}</span>
          <input
            type={"text"}
            placeholder="Filter podcast..."
            onChange={(event) => setFilteredPodcast(event.target.value)}
          />
        </div>
      </header>
      <div className="content">
        {Object.values(shortedPodcast).map((podcast, i) => (
          <Link
            to={`/podcast/${podcast["id"].attributes["im:id"]}`}
            onClick={() => onClickLink(podcast)}
            className="link"
            key={i}
          >
            <div className="podcast">
              <img alt="icon" src={podcast["im:image"][2].label} />
              <div className="podcastText">
                <p>{podcast["title"].label}</p>
                <p>{podcast["im:artist"].label}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};
