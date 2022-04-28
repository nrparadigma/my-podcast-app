import React, { useEffect, useState } from "react";
import "./homePage.css";

// import SearchBar from "../components/SearchBar";

export const HomePage = () => {
  const [totalPodcasts, setTotalPodcasts] = useState({});

  useEffect(() => {
    fetch(
      "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json"
    )
      .then((response) => response.json())
      .then((data) => setTotalPodcasts(data.feed.entry));
  });
  // console.log(totalPodcasts[0]);

  return (
    <>
      <header>
        <p>Podcaster</p>
        {/* <SearchBar /> */}
      </header>
      <div className="content">
        {Object.values(totalPodcasts).map((keyName, i) => (
          <div className="podcast" key={i}>
            <img
              alt="icon"
              src={totalPodcasts[i]["im:image"][0].label}
              width={85}
              height={85}
            />
            <div className="text">
              <p>{totalPodcasts[i].title.label}</p>
              <p className="author">{totalPodcasts[i]["im:name"].label}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
