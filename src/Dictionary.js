import React from 'react';
import './Dictionary.css';

export default function Dictionary() {
  return (
    <div className="Dictionary">
      <form>
        {/* COMMENT - The autoFocus attribute ensures that when the component is rendered, the input field is already selected and user can start typing, instead of the user manually clicking on the box to start typing */}
        <input type="search" autoFocus={true} />
      </form>
    </div>
  );
}
