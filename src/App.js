import './App.css';
import Dictionary from './Dictionary.js';

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">World Dictionary</header>
        <main>
          <Dictionary />
        </main>
        <footer className="app-footer">Coded by Robyn Windsor</footer>
      </div>
    </div>
  );
}

export default App;
