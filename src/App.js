import logo from './logo.svg';
import './App.css';
import Contact from './pages/Contact';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
