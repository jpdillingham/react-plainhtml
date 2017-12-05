class ABCContent extends React.Component {
    render() {
        return (
            <div>
                <Marquee id="first" greeting="Tic Tac Toe!"/>
                <Game />
                <Marquee id="second" greeting="This is another greeting!"/>
            </div>
        );
    }
}