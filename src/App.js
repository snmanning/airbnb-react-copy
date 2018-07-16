import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';
import Header2 from './Header2';
import Share from './Share';
import TripCard from './TripCard';
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
      ],

      shareTrip: {
        urlPath: '',
        destination: ''
      }
    }
  };

  shareTripUrl (url, destination) {
    this.setState({
      shareTrip: {...this.state.shareTrip, urlPath:url, destination:destination}
    });
  }

  render() {
    return (
      <div>
        <Header title='The Best Travel Destinations'/>
        <Main>
          <AirbnbCardList vacationUrls={this.state.vacationUrls} />
        </Main>
        <Main>
          <Header2 title='Share your Destination Experience'/>
          <Share onAddTripCard={this.shareTripUrl.bind(this)} />
          <TripCard urlPath={this.state.shareTrip.urlPath} destination={this.state.shareTrip.destination}/>
        </Main>
        <Footer />
      </div>
    );
  }
}

export default App;
