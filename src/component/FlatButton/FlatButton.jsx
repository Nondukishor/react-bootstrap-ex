import React, { Component } from "react";
import { Button } from "react-bootstrap";
class FlatButton extends Component {
  state = {};
  render() {
    return (
      <div>
        <style type="text/css">
          {`
    .btn-flat {
      background-color: purple;
      color: white;
    }

    .btn-xxl {
      padding: 1rem 1.5rem;
      font-size: 1.5rem;
    }
    `}
        </style>
        <h1>FlatButton Example</h1>

        <Button variant="flat" size="xxl">
          flat button
        </Button>
      </div>
    );
  }
}

export default FlatButton;
