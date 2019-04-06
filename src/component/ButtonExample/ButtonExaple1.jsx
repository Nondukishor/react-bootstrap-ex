import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
class ButtonExaple1 extends Component {
    state = { 
        variant: [
            "primary",
            "secondary",
            "success",
            "danger",
            "info",
            "light",
            "dark",
        ] 
     }
    render() {
        return (
            this.state.variant.map((variands) =><Button key={variands} variant={variands}>Primary</Button>
            )
        );
    }
}

export default ButtonExaple1;