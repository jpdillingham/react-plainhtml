class Marquee extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <h1>{this.props.greeting}</h1>
        );
    }
}