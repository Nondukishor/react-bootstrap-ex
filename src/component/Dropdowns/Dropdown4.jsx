import React from 'react';
import {Dropdown,ButtonGroup, Button} from 'react-bootstrap';

const Dropdown4 = () => {
  return (
    <Dropdown as={ButtonGroup}>
    <Button variant='success'>Split Button</Button>
    <Dropdown.Toggle split variant="success" id='dropdown-split-basic'/>
    <Dropdown.Menu>
    <Dropdown.Item hred="#/action-1">Action</Dropdown.Item>
    <Dropdown.Item hred="#/action-2">Another action</Dropdown.Item>
    <Dropdown.Item hred="#/action-3">Something else</Dropdown.Item>
    </Dropdown.Menu>
    </Dropdown>
  );
}

export default Dropdown4;