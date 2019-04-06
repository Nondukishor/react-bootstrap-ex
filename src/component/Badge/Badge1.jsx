import React, { Component } from 'react';
import { Badge } from "react-bootstrap";
class Badge1 extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>
                <h1>Example heading <Badge variant={"secondary"}>New </Badge></h1>
                <h2>Example heading <Badge variant={"primary"}>New </Badge></h2>
                <h3>Example heading <Badge variant={"danger"}>New </Badge></h3>
                <h4>Example heading <Badge variant={"dark"}>New </Badge></h4>
                <h5>Example heading <Badge variant={"info"}>New </Badge></h5>
                <h6>Example heading <Badge variant={"warning"}>New </Badge></h6>
            </div> 
        );
    }
}

export default Badge1;