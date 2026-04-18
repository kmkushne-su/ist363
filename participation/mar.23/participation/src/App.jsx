import { useState } from 'react';
import './App.css';

/* Change Body Background: https://stackoverflow.com/questions/42464888/how-do-i-change-the-background-color-of-the-body */

document.body.style = 'background: lightblue;';

function App() {
  const [count, setCount] = useState(0);

/* This is where the Nav Bar is (from:https://getbootstrap.com/docs/4.0/components/navbar/) */ 

  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a style={{color: 'darkblue', fontSize: '2em', margin: '5px 10px'}} className="navbar-brand" href="#">Kaitlyn's React App</a>
        
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Portfolio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact</a>
            </li>
          </ul>
        </div>
      </nav>

{/* This is where the main content is (generic webpage from: https://www.w3schools.com/react/react_conditional_rendering.asp*/}

      <header className="App-header">
        <h1 style={{color: 'darkblue'}}>Welcome to Kaitlyn Kushner's Participation</h1>
        <br></br>
        <p style={{fontSize: '100px'}}>&#128079;</p>
        <br></br>
        <p style={{fontSize: '2em'}}>You have applauded the IST 363 Class <b>{count}</b> times.</p>
        <br></br>
        <button onClick={() => setCount(count + 1)} style={{backgroundColor: 'green'}}>
          Applaud the IST 363 Class
        </button>

        <button onClick={() => setCount(0)} style={{marginLeft: '10px', backgroundColor: 'red'}}>
          Reset Applause
        </button>
      </header>

    </div>
  );
}

export default App;