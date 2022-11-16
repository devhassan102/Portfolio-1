import React from 'react'

function Connect() {
  return (
    <div className='footer' id="connect">
      <div className='info-section'>
        <div className='row-1'>If you’re interested in talking about an open position, projects, or other inquiries, you can reach out to me using the following.</div>

        <div className='row-2 row'>
          <div className='row-2-1 col-lg-3 col-md-6'> <p>Write me an email</p><a href=''> <span><i className="fa fa-envelope" aria-hidden="true"></i></span> HASSANGILLANI</a>
          </div>
          <div className='row-2-2 col-lg-3 col-md-6'> <p>Talk to me</p> <a href='' > <span> <i className="fa fa-phone" aria-hidden="true"></i> </span> +18 56867721</a> 
          </div>
          <div className='row-2-3 col-lg-3 col-md-6'> <img className=' img-size' src='6.png'/>
          </div>
          <div className='row-2-4 col-lg-3 col-md-6'> <p>Connect with me</p>
          <a  target='_blank'> <span> <i className="fa fa-linkedin-square" aria-hidden="true"></i> </span> /IN/RANDOMPERSON </a>
          </div>
        </div>

      </div>
      <div className='bottom'>
        <div><p>© The Vice Solution</p></div>
      </div>
    </div>
  )
}

export default Connect