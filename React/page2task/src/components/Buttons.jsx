import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

function Buttons() {
  return (
    <div >
      <Container className="text-center">
      <Button className="mt-4 mb-2" variant="outline-primary" size="sm">
        Team
      </Button>
      <p className='fs-3 fw-bold'>Our Hardworking Team</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, illo. elit ipsum
        <br/>Lorem ipsum dolor sit amet.
      </p>
      </Container>
    </div>
  );
}

export default Buttons;