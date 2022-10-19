import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function SearchResponse(response) {
    setResults(response.data[0]);
  }

  function SearchResponseImages(response) {
    setPhotos(response.data.photos);
  }

  function Search() {
    //API documentation from: https://dictionaryapi.dev/

    let apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;

    axios.get(apiURL).then(SearchResponse);

    const pexelsApiKey =
      "563492ad6f91700001000001979a5016169c4089b16f8bb21d120390";

    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;

    const headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios
      .get(pexelsApiUrl, {
        headers: headers,
      })
      .then(SearchResponseImages);
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
          <h2>What would you like to know?</h2>
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
        <Photos photos={photos} />
      </div>
    );
  } else {
    Load();
    return "Loading";
  }
}
