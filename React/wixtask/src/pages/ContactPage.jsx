import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import NavBars from '../components/NavBars'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Footers from '../components/Footers'

const ContactPage = () => {
  return (
    <div>
      <NavBars/>
        <Container>
            <Row>
                <Col xs lg={6}>
                    <Image style={{width:"35rem",height:"60rem"}} src="https://static.wixstatic.com/media/f61af8_bed971a2eea0451d8a185669c2cbe5c7~mv2.jpg/v1/fill/w_562,h_1118,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/f61af8_bed971a2eea0451d8a185669c2cbe5c7~mv2.jpg"></Image>
                </Col>
                <Col xs lg={6} >
                 <div className='fs-1 pt-5 mt-5 ms-5'>GET IN TOUCH</div>
                 <div className='ms-5'>I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.</div>
                 <div className='mt-5 ms-5'>Tel: 123-456-7890 | Email: mailto:info@mysite.com</div>
                 <Form>
      <Form.Group className="mb-3 ms-5" controlId="exampleForm.ControlInput1">
        <Form.Label>First Name*</Form.Label>
        <Form.Control type="text"/>
        <Form.Label>Last Name*</Form.Label>
        <Form.Control type="text"/>
        <Form.Label>Email*</Form.Label>
        <Form.Control type="email"/>
        <Form.Label>Subject*</Form.Label>
        <Form.Control type="text"/>
        
      </Form.Group>
      <Form.Group className="mb-3 ms-5" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={4} />
      </Form.Group>
      <Button size='sm' variant='secondary' style={{marginLeft:"25rem"}}>Submit</Button>
    </Form>
        <div className='ms-5'>Stay Up-To-Date with New Posts</div>
        <Form className='ms-5'>
        <Form.Label>Email*</Form.Label><br/>
        <input type="mail" name="mail" style={{width:"230px", height:"35px"}}/>
        <Button size='sm' variant='secondary' style={{width:"10rem",marginLeft:"20rem"}}>Subscribe Now</Button>
        </Form>
                </Col>
            </Row>
        </Container>
        <Footers/>
    </div>
  )
}

export default ContactPage