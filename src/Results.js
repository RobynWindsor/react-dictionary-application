import React from 'react';
import Meaning from './Meaning.js';

export default function Results(props) {
  //These props are getting results from property called results of Results

  // This props.results.length - we do this to check the length of the array before we render the contetn below in the return statement. If length is 0 it indicates that there are no results available and returning null prevents rendering an empty or irrelevant UI.
  if (props.results) {
    return (
      <div className="Results">
        <h2>{props.results.word}</h2>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
