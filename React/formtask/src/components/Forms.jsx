import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
function Forms() {
  return (
    <Form style={{margin:"5rem 15rem 20rem 20rem"}} className='rounded border border-1'>
        <Row style={{margin:"1rem 1rem 0 1rem"}}>
        <Col sm="6">
      <Form.Group className="mb-3" >
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your Name" />
      </Form.Group>
      
      <Form.Group className="mb-3" >
        <Form.Label>Phone</Form.Label>
        <Form.Control type="number" placeholder="Enter your phone number" />
      </Form.Group>
      
      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter your email" />
      </Form.Group>
      </Col>

      <Col sm="6">
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows={9} />
      </Form.Group>
      </Col>
      </Row>
      <Row style={{margin:"0 8rem 1rem 8rem"}}>
      <Button  Variant="primary">Get Started</Button>
      </Row>
    </Form>
  );
}

export default Forms;