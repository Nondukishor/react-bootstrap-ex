import React, { Component } from 'react';
import { Button } from "react-bootstrap";


function simulateNetworkRequest() {
    return new Promise(resolve=>setTimeout(resolve,2000))
}

class ClickToLoadButton extends Component {
    constructor(props,contex) {
        super(props, contex);
        this.handleClick=this.handleClick.bind(this)
        this.state = { 
            isLoading:false,
         };
    }


    handleClick() {
        this.setState({ isLoading: true }, () => {
            simulateNetworkRequest().then(() => {
                this.setState({ isLoading: false });
            })
        })
    }
    render() {
        const { isLoading } = this.state;
        return (
            <Button variant="primary"
                disabled={isLoading}
                onClick={!isLoading?this.handleClick:null}
            >
            {isLoading?'Locading..':'click to load'}
            </Button>
        );
    }
}

export default ClickToLoadButton;