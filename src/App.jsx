import Header from "./components/Header";
import "./style/Header.css";
import "./style/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";


function App() {
  return (
    <Router>
      <Header/>
      <Routes>
         <Route path="/" element={<Home />}/>
         <Route path="/about" element={<About/>}/>
         <Route path="/contact" element={<Contact/>}/>
         <Route path="*" element={<div>Page Not Found 404</div>}/>
         

      </Routes>
    </Router>
  );
}

export default App;
