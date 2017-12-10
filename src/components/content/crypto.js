import React, { Component } from 'react';
import axios from 'axios';

class Crypto extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            usd: 0,
            eur: 0,
        }
    }

    componentWillMount() {
        this.fetchData(this.props.symbol);
    }

    componentWillReceiveProps(nextProps) {
        this.fetchData(nextProps.symbol);
    }

    fetchData(symbol) {
        let url = 'https://min-api.cryptocompare.com/data/price?fsym=' + symbol + '&tsyms=USD,EUR';

        axios.get(url)
        .then((response) => {
            this.setState({ usd: response.data.USD, eur: response.data.EUR });
        })
        .catch((error) => {
            console.log(error);
        });
    }

    render() {
        return(
            <div>
                {this.props.symbol} {this.state.usd} {this.state.eur}
            </div>
        );
    }
}

export default Crypto;