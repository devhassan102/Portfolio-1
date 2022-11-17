import React,{ useState } from 'react'

function Navbar(props) {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
    return (
        <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-white" onClick={function noRefCheck(){}}>
  <div className="container-fluid">
    <a className="navbar-brand" id="logo" href="/" rel="noreferrer">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse justify-content-end`}  id="navbarNav">
      <ul className="navbar-nav text-align-center" >
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#startup-website">ABOUT</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#projects">PROJECTS</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#connect">CONNECT</a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
    )
}

export default Navbar