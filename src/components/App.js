import React, { Component } from 'react';
import ABCContent from './content/Abc';
import XYZContent from './content/Xyz';
import Crypto from './content/Crypto';
import About from './content/About';
import Navigation from './navigation/Navigation';
import NavigationButton from './navigation/NavigationButton';
import ContentFrame from './ContentFrame';

class App extends Component {
  render() {
      return (
          <div>
              <Navigation>
                <NavigationButton id='abc' content={<ABCContent/>}>ABC</NavigationButton>
                <NavigationButton id='xyz' content={<XYZContent/>}>XYZ</NavigationButton>
                <NavigationButton id='about' content={<About/>}>About</NavigationButton>
                <NavigationButton id='btc' content={<Crypto symbol='BTC'/>}>BTC</NavigationButton>
                <NavigationButton id='xrp' content={<Crypto symbol='XRP'/>}>XRP</NavigationButton>
              </Navigation>

              <ContentFrame/>
          </div>
      );
  }
}

export default App;
