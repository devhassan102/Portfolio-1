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
      <Routes>

     

      <Route exact path='About' element={<About name={"Yousaf Raza Gillani"}></About>}></Route>

      <Route exact path='Projects' element={<Projects></Projects>}></Route>

      <Route exact path='Connect' element={<Connect></Connect>}></Route>
      
      </Routes>
      </Router> */}
      <Navbar  title={"Hassan Gillani"}> </Navbar>

      <About exact path='/About' name={"Hassan Gillani"}> </About>
      <Projects exact path='/Projects'> </Projects>
      <Connect exact path='/Connect'> </Connect>

      
    </>
  );
}

export default App;
