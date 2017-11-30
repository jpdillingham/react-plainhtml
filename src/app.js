class App extends React.Component {
    render() {
        return (
            <div>
                <Marquee greeting="Tic Tac Toe!"/>
                <Game />
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("app")
);