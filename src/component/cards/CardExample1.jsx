import React from 'react';
import { Card, Button } from 'react-bootstrap';
const CardExample1 = () => {
  return (
    <Card style={{width:"18rem", background:"black", color:"white"}}>
      <Card.Img variant="top" src="http://img.com/static/img/img-logo.png" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis in nobis cupiditate numquam ducimus deleniti distinctio eos, sint harum vitae libero ea sed dolor hic nemo facilis cumque aut ratione.
        </Card.Text>
        <Button variant="primary">Go Some Where</Button>
      </Card.Body>
    </Card>
  );
}

export default CardExample1;  