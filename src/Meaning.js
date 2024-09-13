import React from "react";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <div>
        <h3>{props.meaning.partOfSpeech}</h3>
        <p>{props.meaning.definition}</p>
      </div>
    </div>
  );
}
