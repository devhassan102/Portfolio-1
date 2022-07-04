import React from 'react'
import { useTypewriter, Cursor} from 'react-simple-typewriter'

function About(props) {

    const {text} = useTypewriter({
      words: ['Corporations.', 'Small Buisness.', 'Start Ups!'],
      loop: {},
      onLoopDone: () => console.log(`loop completed after 3 runs.`),
    })

  return (
    <div className='about' id='about'>
      <div className='about-box1-size'>
        <div className='about-content-1'>
          <div className='text-1'> {props.name} </div>
          <div className='text-2'> Full Stack Developer & Buisness Solution Expert </div>
          <div className='text-3'> React Shopify & WordPress </div>
        </div>
        <div className='about-content-2'>
          <img src='./avatar.jpg'></img>
        </div>
      </div>

      <div className='about-box2-size'>
        <div className='description'>
          <div className='fisrt-p'>
            <div className='content'> I help build websites for 
              <span className='typing'> 
              {text}
              </span>  
              <Cursor />
            </div>
          </div>
          <div className='second-p'>
            <div className='first'> I Have Served 100+ Clients World wide in my 10 years of experiense. </div>
            <div className='second'> I aim to satisfy my clients through distinct quality and specialized services. </div>
          </div>
        </div>
      </div>

      <div className='about-box3-size'>
        <div className='details'>
          <div className='g1'> One thing you will quickly notice is I am multi-talented </div>
          <div className='g2'> I am an E-Commerce expert with expertise in Shopify and WooCommerce </div>
          <div className='g3'> I am a lead funnel architect with expertise in Leadpages and Kajabi </div>
          <div className='g4'> I am a frontend engineer with expertise in HTML, CSS, and React </div>
        </div>
        <div className='more-details'>
          <div className='w1'> I’ll turn your idea into a product, and here’s my process </div>
          <div className='icons'>
            <div className='concept'><img src='1.png'/><p>Concept</p></div>
            <div className='design'><img src='2.png'/><p>Design</p></div>
            <div className='engineer'><img src='3.png'/><p>Engineer</p></div>
            <div className='develop'><img  src='4.png'/><p>Develop</p></div>
            <div className='maintain'><img src='5.png'/><p>Maintain</p></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About