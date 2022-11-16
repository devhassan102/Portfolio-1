import React from 'react'

function Projects() {
  return (
    <div className='project' id='projects'>
      <div className='project-section row'>
        <div className='leftSide col-lg-3'>
          
            <div className='my-projects'> My Projects at a Glance </div>
          
        </div>

        <div className='rightSide col-lg-9'>
          <div className='img-section'>
<div className='row'>
            <div className='row-1'> React </div>

            <div className='row-2' id='container'>
            <div className='outer-img-div'>  <div className="react-1 col" > <a href='https://www.blackriflecoffee.com/' target='_blank'> <img src='pr_1.jpeg' style={{width:'100%',height:'100%'}}></img> </a> </div></div>
            <div className='outer-img-div'> <div className="react-2 col" > <a href='https://sablev.net/' target='_blank'> <img src='pr_2.jpeg' style={{width:'100%',height:'100%'}}></img> </a> </div></div>
            <div className='outer-img-div'> <div className="react-3 col" > <a href='https://www.bactrack.com/' target='_blank'> <img src='pr_3.jpeg' style={{width:'100%',height:'100%'}}></img> </a> </div></div>
            </div>
            
            <div className='row-3' > Wordpress </div>
            <div className='row-2' id='container'>
          
            <div className='outer-img-div'> <div className="wordpress-1 col" > <a href='http://thenerdcamp.com/' target='_blank'> <img src='wp_1.jpeg' style={{width:'100%',height:'100%'}}></img> </a> </div></div>
            <div className='outer-img-div'> <div className="wordpress-2 col" > <a href='http://fitnestudio.com/' target='_blank'> <img src='wp_2.jpeg' style={{width:'100%',height:'100%'}}></img> </a> </div></div>
  
              </div>
              </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects