import React from 'react';
import {Form} from 'react-bootstrap';

const Form3 = () => {
  return (
    <>
    <Form.Control size="lg" type="text" placeholder="Large text"/>
    <br/>
    <Form.Control type="text" placehoder="Normal text"/>
    <br/>
    <Form.Control type="text" size="sm" placeholder="Small text" />
    </>
  );
}

export default Form3;