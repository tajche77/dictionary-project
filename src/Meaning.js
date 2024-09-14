import React from "react";
import "./Dictionary.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <div>
        <h3 className="partOfSpeech">{props.meaning.partOfSpeech}</h3>
        <p>{props.meaning.definition}</p>
      </div>
    </div>
  );
}
