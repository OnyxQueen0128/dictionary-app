import React from "react";
import Synonyms from "./Synonyms";
import Example from "./Example";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h4> {props.meaning.partOfSpeech}</h4>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <div>
              <div className="Definition">{definition.definition}</div>
              <div className="Example">
                <Example example={definition.example} />
              </div>
              <div className="Synonyms">
                <Synonyms synonyms={definition.synonyms} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
