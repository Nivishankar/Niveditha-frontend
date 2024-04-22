import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

function Buttons() {
  return (
    <div >
      <Container className="text-center">
      <Button className="mt-4 mb-2" variant="outline-primary" size="sm">
        Portfolio
      </Button>
      <p className='fs-3 fw-bold'>Check Our Portfolio</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, illo. elit ipsum dolor sit amet
      </p>
      <div style={{width:"15rem",margin:"0 0 2rem 27rem"}} as="Row" className="d-sm-flex flex-row justify-content-around">
        <div as="col">ALL</div>
        <div as="col">APP</div>
        <div as="col">CARD</div>
        <div as="col">WEB</div>

      </div>
      </Container>
    </div>
  );
}

export default Buttons;