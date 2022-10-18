import React from "react";

export default function Phonetics(props) {
  return (
    <div className="Phonetics">
      {props.phonetics.map(function (phonetic, index) {
        if (phonetic.audio.length === 0) {
          return <div key={index}>{phonetic.text}</div>;
        } else {
          return (
            <div key={index}>
              <a href={phonetic.audio} target="_blank" rel="noreferrer">
                {phonetic.text}
              </a>
            </div>
          );
        }
      })}
    </div>
  );
}
