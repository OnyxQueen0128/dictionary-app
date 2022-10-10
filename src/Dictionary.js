import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function SearchResponse(response) {
    console.log(response.data[0]);
  }

  function Search(event) {
    event.preventDefault();

    //API documentation from: https://dictionaryapi.dev/

    let apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;

    axios.get(apiURL).then(SearchResponse);
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
