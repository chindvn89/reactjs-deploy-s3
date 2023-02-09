import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Home() {
    return (
      <div className="App">
        <h1>This is Home page</h1>
        <Link to="/contact">Go to contact page</Link>
      </div>
    );
  }
  
  export default Home;
  