import React from 'react';

export default function Results(props) {
  //These props are getting results from property called results of Results

  // This props.results.length - we do this to check the length of the array before we render the contetn below in the return statement. If length is 0 it indicates that there are no results available and returning null prevents rendering an empty or irrelevant UI.
  if (props.results.length) {
    return <div className="Results">Hello from Results</div>;
  } else {
    return null;
  }
}
