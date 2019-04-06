import React, { Component } from 'react';

import { Badge } from "react-bootstrap";

class BadgePill extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>
                <Badge pill variant="primary">Primary</Badge>
                <Badge pill variant="secondary">Secodary</Badge>
                <Badge pill variant="success">success</Badge>
                <Badge pill variant="danger">danger</Badge>
                <Badge pill variant="info">info</Badge>
                <Badge pill variant="light">light</Badge>
                <Badge pill variant="dark">Dark</Badge>
            </div>
        );
    }
}

export default BadgePill;