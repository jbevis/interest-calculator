import React from 'react';
import logo from './logo.svg';
import { Calculator } from './features/calculator/Calculator';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>ForUsAll Interest Calculator</h1>
      </header>
      <Calculator />
      <p className='footer'>
        Check out some more of my work at  <a href='https://www.jbevis.dev' rel='noreferrer' target="_blank"><code>www.jbevis.dev</code></a>.
      </p>
    </div>
  );
}

export default App;
