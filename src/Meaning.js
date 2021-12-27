import React from "react";
import Synonyms from "./Synonyms.js";
import "./Meanings.css";

export default function Meaning(props) {
  return (
    <div className="Meanings">
      <h4>{props.meaning.partOfSpeech} </h4>;
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              <em className="Definition"> Definition</em> <br />
              {definition.definition}
              <br />
              <em className="Example"> Example</em> <br />
              {definition.example}
              <br />
              <em className="Synonyms"> Synonyms</em>
              <Synonyms synonyms={definition.synonyms} />
            </p>
          </div>
        );
      })}
    </div>
  );
}
