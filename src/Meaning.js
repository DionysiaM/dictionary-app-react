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
              <em className="Definition"> {definition.definition}</em> <br />
              <br />
              <em className="Example"> {definition.example}</em> <br />
              <br />
              <em className="Synonyms">
                <Synonyms synonyms={definition.synonyms} />
              </em>
            </p>
          </div>
        );
      })}
    </div>
  );
}
