import React, { Component } from "react";
import { Button, ButtonToolbar } from "react-bootstrap";
class ButtonExample4 extends Component {
  state = {};
  render() {
    return (
      <div>
        <ButtonToolbar>
          <Button variant="primary" size="lg">
            Large Button
          </Button>
        </ButtonToolbar>
        <ButtonToolbar>
          <Button variant="info" size="md">
            Meduim Button
          </Button>
        </ButtonToolbar>
        <ButtonToolbar>
          <Button variant="secondary" size="sm">
            Small button
          </Button>
        </ButtonToolbar>
        <h1>Block Button</h1>
        <Button variant="primary" size="lg" block>
          Block level button
        </Button>
        <Button variant="secondary" size="lg" block>
          Block level button
        </Button>
        <h1>Active Buttons</h1>
        <ButtonToolbar>
          <Button variant="primary" size="lg" active>
            Primary button
          </Button>
          <Button variant="secondary" size="lg" active>
            Button
          </Button>
            </ButtonToolbar>
            

        <h1>Disable Buttons</h1>
        <ButtonToolbar>
          <Button variant="primary" size="lg" disabled>
            Primary button
          </Button>{" "}
          <Button variant="secondary" size="lg" disabled>
            Button
          </Button>{" "}
          <Button href="#" variant="secondary" size="lg" disabled>
            Link
          </Button>
        </ButtonToolbar>
      </div>
    );
  }
}

export default ButtonExample4;
