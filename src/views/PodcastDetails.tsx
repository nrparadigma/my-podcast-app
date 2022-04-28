import React from "react";

interface Props {
  isPodcastDetails: boolean;
}

export const PodcastDetails = ({ isPodcastDetails }: Props) => {
  function checkPodcast() {
    isPodcastDetails = true;
  }
  checkPodcast();

  return (
    <>
      <div className="App">
        <p>Podcast</p>
      </div>
    </>
  );
};
