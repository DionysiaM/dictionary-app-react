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
              <h3 className="Definition">
                {" "}
                Definition: <br /> {definition.definition}
              </h3>{" "}
              <br />
              <h6 className="Example">
                {" "}
                Example: <br /> {definition.example}
              </h6>{" "}
              <br />
              <br />
              <h5 className="Synonyms">
                Synonyms: <br />
                <Synonyms synonyms={definition.synonyms} />
              </h5>
              <br />
            </p>
          </div>
        );
      })}
    </div>
  );
}
