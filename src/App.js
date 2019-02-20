import React, { Component } from 'react';
import { Element } from 'react-scroll';

import Header from './components/header_footer/Header';
import VenueInfo from './components/venueNfo';
import Featured from './components/featured';
import Highlights from './components/highlights/';
import Pricing from "./components/pricing";
import Location from "./components/location"
import Footer from "./components/header_footer/Footer";


//Styles Import
import './resources/styles.css';


class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />

        <Element name="featured">
          <Featured />
        </Element>
        <Element name="venuenfo">
          <VenueInfo /> 
        </Element>
        <Element name="highlights">
          <Highlights />
        </Element>
        <Element name="pricing">
          <Pricing />
        </Element>
        <Element name="location">
          <Location />
        </Element>

        <Footer />
      </div>
    );
  }
}

export default App;
