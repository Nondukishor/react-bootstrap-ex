import React from 'react';

import {Form} from 'react-bootstrap';

const From2 = () => {
  return (
    <Form>
      <Form.Group controlId="exampleForm.ControlInput1" >
        <Form.Label>Email Addres</Form.Label>
        <Form.Control type="email" placeholder="someone@gmail.com"/>
      </Form.Group>

      <Form.Group>
        <Form.Label>Example Select </Form.Label>
        <Form.Control as="select">
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="exampleForm.ControlSelct2">
        <Form.Label>Example Multiple Select </Form.Label>
        <Form.Control as="select" multiple>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        </Form.Control>
      </Form.Group>


      <Form.Group controlId="exampleFrom.controlTextArea1">
      <Form.Label>Example textarea </Form.Label>
      <Form.Control as="textarea" rows="3"></Form.Control>
      </Form.Group>

    </Form>
  );
}

export default From2;