import React, { useState } from "react";
import axios from "axios";
import Results from "./Results.js";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setResults(response.data);
  }

  function search() {
    let apiKey = "c9f3e1aa2eo8b1a80d203dc2740btbf9";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  function load() {
    setLoaded(true);
    search();
  }
  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <h1>What word would you like to look up?</h1>
          <form className="form" onSubmit={handleSubmit}>
            <input
              type="search"
              onChange={handleKeywordChange}
              defaulValue={props.defaultKeyword}
            />
          </form>
          <small classsName="text-muted">eg. sunset, book, tree</small>
        </section>
        <Results results={results} />
      </div>
    );
  } else {
    load();
    return "loading";
  }
}
