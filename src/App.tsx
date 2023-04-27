import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {

  useEffect (() => {
    test()
  }, [])

  const test = () => {
    
    debugger;
    axios.get('https://rickandmortyapi.com/api/character')
    .then(res => {
      console.log(res)
    })
    .catch(e => {
      console.log(e)
    })
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
      </header>
    </div>
  );
}

export default App;
