import React, { Component } from 'react';

import { Alert } from "react-bootstrap";
class DismissingAlert extends Component {
    
    render() {
        return (
            <Alert dismissible variant="danger">
                <Alert.Heading>Oh! You got an error</Alert.Heading>
                <p>Change this and that and Try adn. Duis mollis, es non commondo Lluctus,
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut, excepturi. Nemo possimus deserunt tempore voluptates, voluptatibus repellat at mollitia eveniet assumenda quae, debitis, distinctio asperiores libero quos itaque culpa enim?
                </p>
            </Alert>
        );
    }
}

export default DismissingAlert;