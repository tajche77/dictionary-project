import React from "react";
import Synonyms from "./Synonyms";
import "./Dictionary.css";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <p>
        <h3 className="partOfSpeech">{props.meaning.partOfSpeech}</h3>
        <strong>Definition: </strong>
        {props.meaning.definition}
        <br />
        <strong>Example: </strong>
        {props.meaning.example}
        <br />
        <strong>Synonyms: </strong>
        <Synonyms synonyms={props.meaning.synonyms} />
      </p>
    </div>
  );
}
