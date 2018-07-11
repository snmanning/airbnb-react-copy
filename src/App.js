import React, { Component } from 'react';
import AirbnbCard from './AirbnbCard';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'

library.add(faStroopwafel)


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vacationUrls: [
        
      ]
    }
  }
  render() {
    return (
      <div>
        <AirbnbCard/>
      </div>
    );
  }
}

export default App;
