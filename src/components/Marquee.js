import React, { Component } from 'react';

class Marquee extends Component {
    render() {
        return (
            <div>
                <h1 id={this.props.id}>{this.props.greeting}</h1>
                <MarqueeControl boundMarquee={this.props.id}/>
            </div>
        );
    }
}

class MarqueeControl extends Component {
    extendGreeting(extension) {
        let control = document.getElementById(this.props.boundMarquee);

        control.innerText = control.innerText + extension;
    }

    render() {
        return (
            <button onClick={() => this.extendGreeting('a')}>Clickme</button>
        )
    }
}

export default Marquee;