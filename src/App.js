import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import { HomePage } from "./views/HomePage.jsx";
import { PodcastDetails } from "./views/PodcastDetails.jsx";
import { ChapterDetails } from "./views/ChapterDetails.jsx";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/podcast/:podcastId" element={<PodcastDetails />} />
          <Route
            path="/podcast/:podcastId/episode/:episodeId"
            element={<ChapterDetails />}
          />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
