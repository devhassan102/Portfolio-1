import './App.css';
import About from './components/About.js';
import Connect from './components/Connect.js';
import Navbar from './components/Navbar.js';
import Projects from './components/Projects.js';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>

      {/* <Router>

      <Navbar exact path='#' title={"Noob Squad"}></Navbar>

      <Routes exact path='/About' element={<About name={"Yousaf Raza Gillani"}></About>}></Routes>

      <Routes exact path='/Projects' element={<Projects></Projects>}></Routes>

      <Routes exact path='/Connect' element={<Connect></Connect>}></Routes>
      
      </Router> */}

      <Navbar  title={"Noob Squad"}> </Navbar>

      <About exact path='/About' name={"Hassan Gillani"}> </About>
      <Projects exact path='/Projects'> </Projects>
      <Connect exact path='/Connect'> </Connect>

      
    </>
  );
}

export default App;
