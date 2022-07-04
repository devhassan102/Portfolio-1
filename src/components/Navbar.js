import React from 'react'
import { Link } from 'react-router-dom'


function Navbar(props) {
    return (
        
        <nav className='navbar'>
            <div className='max_width'>

                <div className='logo'> <a href='#'> ${props.title} </a> </div>

                {/* <div className='logo'> <Link to='#'> ${props.title} </Link> </div> */}

                <ul className='menu'>

                    {/* <li>  <Link to='/About' > ABOUT </Link> </li>
                    <li>  <Link to='/Projects' > PROJECTS </Link> </li>
                    <li>  <Link to='/Connect' > CONNECT </Link> </li> */}

                    <li>  <a href='/About' > ABOUT </a> </li>
                    <li>  <a href='/Projects' > PROJECTS </a> </li>
                    <li>  <a href='/Connect' > CONNECT </a> </li>
                </ul>

            </div>
        </nav>
    )
}

export default Navbar