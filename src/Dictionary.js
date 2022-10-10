import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function Search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword} definition`);
  }

  function KeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <h1>Dictionary</h1>
      <form onSubmit={Search}>
        <input type="search" onChange={KeywordChange} />
        <input type="submit" autoFocus={true} />
      </form>
    </div>
  );
}
