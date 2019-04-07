import React,{useState,useEffect} from 'react';
import {Alert,Button} from 'react-bootstrap';

const ToggleAlert = () => {
var {show,setShow}=useState({show:true})
const handleHide=()=>useEffect(setShow(false));
const handleShow=()=>setShow(true);
  return (
    <>
      <Alert show={show} variant="success">
          <Alert.Heading>How's it going?!</Alert.Heading>
          <p>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
            eget lacinia odio sem nec elit. Cras mattis consectetur purus sit
            amet fermentum.
          </p>
          <hr />
          <div className="d-flex justify-content-end">
            <Button onClick={handleHide} variant="outline-success">
              Close me ya'll!
            </Button>
          </div>
        </Alert>

        {show && <Button onClick={handleShow}>Show Alert</Button>}
    
    </>
  );
}

export default ToggleAlert;
