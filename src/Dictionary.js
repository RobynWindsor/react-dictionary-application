import React, { useState } from 'react';
import axios from 'axios';
import Results from './Results';
import './Dictionary.css';

export default function Dictionary() {
  //This is using the useSate hook. This is an array with two values, the current state value and a function to update the state.
  let [keyword, setkeyword] = useState('');
  let [results, setResults] = useState({});

  function handleResponse(response) {
    console.log(response.data[0].meanings[0].definitions[0]);
    setResults(response.data[0].meanings[0].definitions[0]);
  }

  function search(event) {
    event.preventDefault();

    // API Documentation : https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywodChange(event) {
    // The .target.value is found inside the object that is logged in console when searching for word. Value of word typed is found at target.value
    setkeyword(event.target.value);
  }
  return (
    <div className="Dictionary">
      <form onSubmit={search} onChange={handleKeywodChange}>
        {/* COMMENT - The autoFocus attribute ensures that when the component is rendered, the input field is already selected and user can start typing, instead of the user manually clicking on the box to start typing */}
        <input type="search" autoFocus={true} />
      </form>
      <Results />
    </div>
  );
}
