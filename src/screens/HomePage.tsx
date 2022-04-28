import React from "react";

// import SearchBar from "../components/SearchBar";

interface Props {
  isHome: boolean;
}

export const HomePage = ({ isHome }: Props) => {
  function checkHome() {
    isHome = true;
  }
  checkHome();

  return (
    <>
      <header>
        <p>Podcaster</p>
        {/* <SearchBar /> */}
      </header>

      {/* <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.name}</li>
        ))}
      </ul> */}
    </>
  );
};
