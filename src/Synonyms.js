import React from "react";

export default function Synonyms(props) {
  if (props.synonyms.length > 0) {
    return (
      <span>
        <strong>Synonyms:</strong> {""}
        <ul className="Synonyms">
          {props.synonyms.map(function (synonym, index) {
            return <li key={index}>{synonym}</li>;
          })}
        </ul>
      </span>
    );
  } else {
    return null;
  }
}
