class Marquee extends React.Component {
    render() {
        return (
            <h1>Simple Reactjs app using plain HTML</h1>
        );
    }
}

ReactDOM.render(
    <Marquee />,
    document.getElementById('title')
);