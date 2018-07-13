import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import AirbnbCardList from './AirbnbCardList';

// import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'

// library.add(faStroopwafel)


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vacationUrls: [
        'https://loremflickr.com/300/300/paris',
        'https://loremflickr.com/300/300/rome',
        'https://loremflickr.com/300/300/tokyo',
        'https://loremflickr.com/300/300/london',
        'https://loremflickr.com/300/300/beijing',
        'https://loremflickr.com/300/300/berlin',
        'https://loremflickr.com/300/300/rockymountains',
        'https://loremflickr.com/300/300/stonemountain',
      ]
    }
  }
  render() {
    return (
      <div>
        <Header title='The Best Travel Destinations'/>
        <Main>
          <AirbnbCardList vacationUrls={this.state.vacationUrls} />
        </Main>
        <Footer />
      </div>
    );
  }
}

export default App;
