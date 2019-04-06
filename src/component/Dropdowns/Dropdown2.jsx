import React from 'react';
import {DropdownButton, Dropdown} from 'react-bootstrap';

const Dropdown2 = () => {
  return (
    <DropdownButton id="dropdown-basic-button" title="Dropdwn" button>
      <Dropdown.Item href="#/action1">Action</Dropdown.Item>
      <Dropdown.Item href="#/action2">Antoher Link</Dropdown.Item>
      <Dropdown.Item href="#/action3">Something else</Dropdown.Item>
    </DropdownButton>
  );
}

export default Dropdown2; 