import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import { HomePage } from "./views/HomePage.tsx";
import { PodcastDetails } from "./views/PodcastDetails.tsx";
import { ChapterDetails } from "./views/ChapterDetails.tsx";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/podcast-details" element={<PodcastDetails />} />
          <Route path="/chapter-details" element={<ChapterDetails />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
