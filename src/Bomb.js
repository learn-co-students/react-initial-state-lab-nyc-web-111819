import React, { Component } from 'react';

export default class Bomb extends Component {

    constructor(props) {
        super() 
        this.state = {
            secondsLeft: props.initialCount
        }
        
    }

    render() {
        const SECONDS_LEFT = this.state.secondsLeft
        return (
            SECONDS_LEFT === 0 ? "Boom!" : `${SECONDS_LEFT} seconds left before I go boom!`
        )

    }
}

