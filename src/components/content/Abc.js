import React, { Component } from 'react';
import Marquee from '../Marquee';

class ABCContent extends Component {
    render() {
        return (
            <div>
                ABC
                <Marquee id="first" greeting="Tic Tac Toe!"/>
                <Marquee id="second" greeting="This is another greeting!"/>
            </div>
        );
    }
}

export default ABCContent;