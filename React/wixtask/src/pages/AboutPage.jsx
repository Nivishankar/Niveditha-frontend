import React from 'react'
// import './App.css';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavBars from '../components/NavBars';
import Footers from '../components/Footers';

const AboutPage = () => {
  return (
    <div>
        <NavBars/>
        <Container className='about'>
        <Row>
        <Col xs lg={6}>
        <Image  style={{width:"32rem",height:"50rem"}} src="https://static.wixstatic.com/media/f61af8_97627769e7bd41538ecbf417234e55d9~mv2_d_4912_7360_s_4_2.jpg/v1/fill/w_592,h_884,al_b,q_85,usm_0.66_1.00_0.01,enc_auto/f61af8_97627769e7bd41538ecbf417234e55d9~mv2_d_4912_7360_s_4_2.jpg"/>
        </Col>
        <Col xs lg={6}>
          <div className='pt-3 fs-1 mt-5'>ABOUT JADE</div>
          <div className='pt-3'>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. </div>
          <div className='pt-3'>This is a great space to write long text about your company and your services. You can use this space to go into a little more detail about your company.</div>

          <div className='pt-3 fs-5' >Education:</div>
          <div>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.</div>

          <div className='pt-3 fs-5'>Awards & Nominations:</div>
            <div className='pt-3'>I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</div>
        </Col>
        </Row>
        </Container>
        <Footers/>
    </div>
  )
}

export default AboutPage