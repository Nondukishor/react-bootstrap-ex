import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
class ButtonExaple2 extends Component {
  state = {
    variant: [
      "outline-primary",
      "outline-secondary",
      "outline-success",
      "outline-danger",
      "outline-info",
      "outline-light",
      "outline-dark"
    ]
  };
  render() {
    return this.state.variant.map(variands => (
      <Button key={variands} variant={variands}>Primary</Button>
    ));
  }
}

export default ButtonExaple2;