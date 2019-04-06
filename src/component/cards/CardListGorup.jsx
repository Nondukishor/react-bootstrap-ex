import React ,{useState}from 'react';
import { Card, ListGroup } from 'react-bootstrap';

const CardListGorup = () => {
  const[text]=useState([
    {text:"Nipu chakraborty"},
    {text:"Fardin Ahasan"},
    {text:"Mazaharul Islam"}
  ]);
  
 return(
  <Card style={{width:"18rem"}}>
  <ListGroup variant="flush">
    {text.map((cardTex)=><ListGroup.Item>{cardTex.text}</ListGroup.Item>)}
  </ListGroup>
</Card>
 )
};

export default CardListGorup;