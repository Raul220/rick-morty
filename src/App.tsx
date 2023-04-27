import React, { useEffect } from 'react'
import logo from './logo.svg';
import './App.css';
import { listCharacters } from './services/RMServices';

function App() {

  useEffect(() => {
    test()
  }, [])

  const test = () => {
    listCharacters({page: 2})
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
