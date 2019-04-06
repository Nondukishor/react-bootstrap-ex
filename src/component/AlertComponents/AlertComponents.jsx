import React, { Component } from 'react';
import { Alert } from "react-bootstrap";
class AlertComponents extends Component {
    state = {  }
    render() {
        return (
            <div>
                {
                    [
                        'primary',
                        'secondary',
                        'success',
                        'danger',
                        'warning',
                        'info',
                        'light',
                        'dark',
                    ].map((variant, idx) => (
                        <Alert key={idx} variant={variant}>
                            This is a {variant} alert—check it out!
                    </Alert>
                    ))
                }
            </div>
        );
    }
}

export default AlertComponents;