import React from 'react'
import { Button } from 'react-bootstrap'
import NavBars from '../components/NavBars'
import Footers from '../components/Footers'


const HomePage= () => {
  return (
    <div>
        <NavBars/>
        <div className='App'>
        <p className="para">THE ART OF FOOD</p>
        <div className="pb-3" style={{color:"white",textAlign:"center"}}>PHOTOGRAPHY</div>
        <Button variant='secondary' style={{width:"10rem",height:"3rem",marginLeft:"30rem"}}>View More</Button>
        </div>
        <Footers/>
        
    </div>
  )
}

export default HomePage