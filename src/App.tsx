
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Character from './pages/Character';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/character/:Id" element={<Character />} />
      </Routes>
    </Router>
  );
}

export default App;
