import React, { Component } from 'react';
import { Button, Badge } from 'react-bootstrap';
class ButtonBadge extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>
                <Button variant={"primary"}>
                    Profile<Badge variant="light">9</Badge>
                    <span className="sr-only">Unread message</span>
                </Button>
                
          </div>
        );
    }
}

export default ButtonBadge;