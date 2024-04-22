import React from 'react'
import {Container } from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import NavBars from '../components/NavBars';
import Footers from '../components/Footers';

const PortfolioPage = () => {
  return (
    <div>
        <NavBars/>
        <h1 style={{textAlign:"center",margin:"3rem 0 3rem 0"}}>PORTFOLIO</h1>
        <Container className='cont'>
                <div className='p1'>
                <p style={{textAlign:"center",marginTop:"5rem"}}>EDITORIAL</p>
                <Button variant="secondary" >View</Button>
                </div>

                <div className='p2'>
                <p style={{textAlign:"center",marginTop:"5rem"}}>FOOD & SERVE</p>
                <Button variant='secondary'>View</Button>
                </div>

                <div className='p3'>
                <p style={{textAlign:"center",marginTop:"5rem"}}>BAKED GOODS</p>
                <Button className='btn' variant='secondary'>View</Button>
                </div>
        </Container>
        <Footers/>
    </div>
  )
}

export default PortfolioPage