import React from 'react'
import Container from 'react-bootstrap/Container'
import NavBars from '../components/NavBars'
import Footers from '../components/Footers'

const ClientAlbumsPage = () => {
  return (
    <div>
        <NavBars/>
        <h1 style={{textAlign:"center",margin:"3rem 0 3rem 0"}}>CLIENT ALBUMS</h1>
        <Container className='cont'>
            <div className='c1'>
                <p className='pt-5 mt-5'>GREEN <br/> EDITORIAL</p>
                <div className='cli'>Client:Herbal Magazine</div>
            </div>

            <div className='c2'>
                <p className='pt-5 mt-5'>GREAD BAKING RECEIPES</p>
                <div className='cli'>Client:The Baker Blog</div>

            </div>

            <div className='c3'>
                <p className='pt-5 mt-5'>FRENCH <br/> COOKBOOK</p>
                <div className='cli'>Client:La Peche</div>

            </div>
        </Container>
        <Footers/>
    </div>
  )
}

export default ClientAlbumsPage