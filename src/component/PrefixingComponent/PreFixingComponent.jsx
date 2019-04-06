import React, { Component } from 'react';
import { ThemeProvider,Button } from "react-bootstrap";

class PreFixingComponent extends Component {
   
    render() {
        return (
            <div>
                <h1>react-bootstratp prefixing Components use</h1>
                <ThemeProvider prefixes={{ btn: 'my-btn' }}>
                    <Button variant="primary">My Button</Button>
                </ThemeProvider>{' '}
                <Button bsPrefix="super-btn" variant="primary">
                    Super button
  </Button>
            </div>
        );
    }
}

export default PreFixingComponent;