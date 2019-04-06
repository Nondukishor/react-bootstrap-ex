import React, { Component } from 'react';
import { Badge } from 'react-bootstrap';
class Contextualvariations extends Component {
    state = {  }
    render() {
        return (
          <div>
            <Badge variant="primary">Priamary</Badge>
            <Badge variant="secondary">secondary</Badge>
                <Badge variant="success">success</Badge>
            <Badge variant="danger">Danger</Badge>
            <Badge variant="warning">warning</Badge>
            <Badge variant="info">Info</Badge>
            <Badge variant="light">Light</Badge>
            <Badge variant="dark">Dark</Badge>
          </div>
        );
    }
}

export default Contextualvariations;