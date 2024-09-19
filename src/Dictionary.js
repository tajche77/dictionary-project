import React, { useState } from "react";
import axios from "axios";
import Results from "./Results.js";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data);
  }

  function search(event) {
    event.preventDefault();

    let apiKey = "c9f3e1aa2eo8b1a80d203dc2740btbf9";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="Dictionary">
      <section>
        <form className="form" onSubmit={search}>
          <input
            type="search"
            autoFocus={true}
            placeholder="Enter a word"
            onChange={handleKeywordChange}
          />
        </form>
        <small classsName="text-muted">eg. sunset, book, tree</small>
      </section>
      <Results results={results} />
    </div>
  );
}
