import React from 'react'

function Projects() {
  return (
    <div className='project' id='projects'>
      <div className='project-section'>
        <div className='leftSide'>
          <div className='content'>
            <div className='my-projects'> My Projects at a Glance : </div>
          </div>
        </div>

        <div className='rightSide'>
          <div className='img-section'>

            <div className='row-1'> React </div>

            <div className='row-2' id='container'>
              <div clasName="react-1" > <a href='https://www.blackriflecoffee.com/' target='_blank'> <img src='pr_1.jpeg' style={{width:'100%',height:'100%'}}></img> </a> </div>
              <div clasName="react-2" > <a href='https://sablev.net/' target='_blank'> <img src='pr_2.jpeg' style={{width:'100%',height:'100%'}}></img> </a> </div>
              <div clasName="react-3" > <a href='https://www.bactrack.com/' target='_blank'> <img src='pr_3.jpeg' style={{width:'100%',height:'100%'}}></img> </a> </div>
            </div>

            <div className='row-3'> Wordpress </div>

            <div className='row-4' id='cont-2'>
              <div clasName="wordpress-1" > <a href='http://thenerdcamp.com/' target='_blank'> <img src='wp_1.jpeg' style={{width:'100%',height:'100%'}}></img> </a> </div>
              <div clasName="wordpress-2" > <a href='http://fitnestudio.com/' target='_blank'> <img src='wp_2.jpeg' style={{width:'100%',height:'100%'}}></img> </a> </div>
              {/* <div clasName="wordpress-3" > <a> <img src='pr_1.jpeg' style={{width:'100%',height:'100%'}}></img> </a> </div> */}
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects