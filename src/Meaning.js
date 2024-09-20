import React from "react";
import Synonyms from "./Synonyms";
import Examples from "./Examples";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <p>
        <h3 className="partOfSpeech">{props.meaning.partOfSpeech}</h3>
        <div>{props.meaning.definition}</div>
        <div className="Examples">
          <Examples examples={props.meaning.example} />
        </div>
        <div>
          <Synonyms synonyms={props.meaning.synonyms} />
        </div>
      </p>
    </div>
  );
}
