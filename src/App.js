import logo from './logo.svg';
import './App.css';
import * as Sentry from "@sentry/react";


function test(){
  this.clearLocalStorage();
  this.timer = setTimeout(function() {
    this.clearBoard();    // what is "this"?
  }, 0);
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <button onClick={test}>Break the world</button>;
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default Sentry.withProfiler(App);