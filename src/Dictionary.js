import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function SearchResponse(response) {
    setResults(response.data[0]);
  }

  function Search() {
    //API documentation from: https://dictionaryapi.dev/

    let apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;

    axios.get(apiURL).then(SearchResponse);
  }

  function inputSearch(event) {
    event.preventDefault();
    Search();
  }

  function KeywordChange(event) {
    setKeyword(event.target.value);
  }

  function Load() {
    setLoaded(true);
    Search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <form onSubmit={inputSearch}>
            <input
              className="searchbar"
              type="search"
              onChange={KeywordChange}
            />
            <input className="submitbutton" type="submit" autoFocus={true} />
          </form>
          <div className="hint">Sugested words: book, yoga, peach...</div>
        </section>
        <Results result={results} />
      </div>
    );
  } else {
    Load();
    return "Loading";
  }
}
