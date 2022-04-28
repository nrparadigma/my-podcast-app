import React from "react";

interface Props {
  isChapterDetails: boolean;
}

export const ChapterDetails = ({ isChapterDetails }: Props) => {
  function checkChapter() {
    isChapterDetails = true;
  }
  checkChapter();

  return (
    <>
      <div className="App">
        <p>Chapter</p>
      </div>
    </>
  );
};
