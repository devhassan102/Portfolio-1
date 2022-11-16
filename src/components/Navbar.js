import React,{ useState } from 'react'
import { Link } from 'react-router-dom'


function Navbar(props) {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
    return (
        <nav class="navbar sticky-top navbar-expand-lg navbar-light bg-white" onClick={function noRefCheck(){}}>
  <div class="container-fluid">
    <a class="navbar-brand" href="#"className='logo'>{props.title}</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse justify-content-end`}  id="navbarNav">
      <ul class="navbar-nav text-align-center" >
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#">ABOUT</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">PROJECTS</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">CONNECT</a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
    )
}

export default Navbar