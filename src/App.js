import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import { HomePage } from "./screens/HomePage.tsx";
import { PodcastDetails } from "./screens/PodcastDetails.tsx";
import { ChapterDetails } from "./screens/ChapterDetails.tsx";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      setTotalPodcasts: null,
    };
  }

  componentDidMount() {
    fetch(
      "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json"
    )
      .then((response) => response.json())
      .then((data) => this.setState({ setTotalPodcasts: data }));
    console.log(this.response);
  }

  // useEffect(() => {
  //   axios
  //     .get(
  //       "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json"
  //     )
  //     .then((response) => {
  //       this.setState({ data: response.data, isFetching: false });
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //       this.setState({ ...this.state, isFetching: false });
  //     });
  //   console.log(this.data);
  // }, []);

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
