class Marquee extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <h1 id={this.props.id}>{this.props.greeting}</h1>
        );
    }
}

class MarqueeControl extends React.Component {
    constructor(props) {
        super(props);
    }

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