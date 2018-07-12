import React, { Component } from 'react';
import AirbnbCard from './AirbnbCard';
import './App.css';
import Header from './Header';
import Footer from './Footer';

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
        'https://loremflickr.com/300/300/london'
      ]
    }
  }
  render() {
    const destination = this.state.vacationUrls.map((url) => <AirbnbCard vacationUrls={url} key={url} />)
    return (
      <div className='App-placeCards'>
        <Header title='The Best Travel Destinations'/>
          {destination}
        <Footer />
      </div>
    );
  }
}

export default App;
