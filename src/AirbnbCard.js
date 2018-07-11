import React, {Component} from 'react';
import './AirbnbCard.css';

class AirbnbCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ratingVote: 0,
        };
    }

    render () {
        return (
            <div>
                <section>
                    <img src='https://via.placeholder.com/300x300' />
                </section>
                <section>
                    <span>
                        Activity
                    </span>
                    <span>
                        Where
                    </span>
                    <h1>
                        Activity's Specific Name
                    </h1>
                    <p>
                        Trip Cost
                    </p>
                    <span>
                        rating
                    </span>
                    <span>
                        ratingVote
                    </span>
                </section>
            </div>
        );
    }

}

export default AirbnbCard;