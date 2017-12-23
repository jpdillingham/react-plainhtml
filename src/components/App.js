import React, { Component } from 'react';
import ABCContent from './content/Abc';
import XYZContent from './content/Xyz';
import Crypto from './content/Crypto';
import About from './content/About';
import Navigation from './navigation/Navigation';
import NavbarButton from './navigation/NavbarButton';
import ContentFrame from './ContentFrame';

class App extends Component {
  render() {
      return (
          <div>
              <Navigation>
                <NavbarButton id='abc' content={<ABCContent/>}>ABC</NavbarButton>
                <NavbarButton id='xyz' content={<XYZContent/>}>XYZ</NavbarButton>
                <NavbarButton id='about' content={<About/>}>About</NavbarButton>
                <NavbarButton id='btc' content={<Crypto symbol='BTC'/>}>BTC</NavbarButton>
                <NavbarButton id='xrp' content={<Crypto symbol='XRP'/>}>XRP</NavbarButton>
              </Navigation>

              <ContentFrame/>
          </div>
      );
  }
}

export default App;
