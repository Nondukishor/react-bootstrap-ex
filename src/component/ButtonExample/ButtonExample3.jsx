import React, { Component } from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap';
class ButtonExample3 extends Component {
    state = { 
      
     }
    render() {
        return (
            <div>
                <ButtonToolbar>
                <Button href="#">LInk</Button>
                <Button type="submit">Button</Button>
                <Button as="input" type="button" value="Input"/>
                <Button as="input" type="submit" value="Submit"/>
                <Button as="input" type="reset" value="Reset"/>
                </ButtonToolbar>  
         </div>
        );
    }
}

export default ButtonExample3;