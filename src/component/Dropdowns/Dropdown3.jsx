import React ,{useState}from 'react';

import {ButtonToolbar,Dropdown, DropdownButton} from 'react-bootstrap';

const Dropdown3 = () => {
 const [variant]=useState([
   'Primary','Secondary', 'Success', 'Info', 'Warning', 'Danger'
 ]);

  return (
    <ButtonToolbar>
      {variant.map((variants)=>(
        <DropdownButton 
        title={variants}
        variant={variants.toLocaleLowerCase}
        id={`dropdown-variants-${variants}`}
        key={variants}
        >

        <Dropdown.Item eventKey='1'> Action</Dropdown.Item>
        <Dropdown.Item eventKey='2'> Action2</Dropdown.Item>
        <Dropdown.Item eventKey='3' active> Action3</Dropdown.Item>
        <Dropdown.Divider/>
        <Dropdown.Item eventKey='4'> Action4</Dropdown.Item>
        </DropdownButton>

      ))}
    </ButtonToolbar>
  );
}

export default Dropdown3;