import React from 'react'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'

const Footers = () => {
  return (
    <footer>
    <Container className='d-flex mt-5 justify-content-center'>
      <Image className="pe-3" src="https://static.wixstatic.com/media/8f6f59264a094af0b46e9f6c77dff83e.png/v1/fill/w_24,h_24,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/8f6f59264a094af0b46e9f6c77dff83e.png"/>
      <Image className="pe-3" src="https://static.wixstatic.com/media/0fdef751204647a3bbd7eaa2827ed4f9.png/v1/fill/w_24,h_24,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/0fdef751204647a3bbd7eaa2827ed4f9.png"/>
    <Image className="pe-3" src="https://static.wixstatic.com/media/c7d035ba85f6486680c2facedecdcf4d.png/v1/fill/w_24,h_24,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c7d035ba85f6486680c2facedecdcf4d.png"/>
    <Image src="https://static.wixstatic.com/media/01c3aff52f2a4dffa526d7a9843d46ea.png/v1/fill/w_24,h_24,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/01c3aff52f2a4dffa526d7a9843d46ea.png"/>
    </Container>
      <div className='text-center pb-3'>© 2035 by The Art of Food. Powered and secured by Wix</div>
    </footer>
  )
}

export default Footers