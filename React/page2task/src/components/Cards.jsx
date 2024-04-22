import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';


function Cards(props) {
  return (
    <Container style={{margin:"0 5rem 0 3rem"}}>
    <Card style={{ width: '15rem' }}>
      <Card.Img style={{height:'15rem'}}variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Subtitle className="text-muted">{props.subtitle}</Card.Subtitle>
      </Card.Body>
    </Card>
    </Container>



    
  );
}


export default Cards;