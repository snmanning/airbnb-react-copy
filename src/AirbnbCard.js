import React, {Component} from 'react';
import './AirbnbCard.css';

class AirbnbCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ratingVote: 0,
        };
    }

    voteYay () {
        this.setState({
            ratingVote: this.state.ratingVote + 1
        })
    }

    render () {
        return (
            <div>
                <section className='AirbnbCard-imageCont'>
                    <img src='https://via.placeholder.com/300x300' 
                         className='AirbnbCard-image'/>
                </section>
                <section className='AirbnbCard-infoCont'>
                    <span>
                        Activity
                    </span>
                    <span>
                        Where
                    </span>
                    <h1 className='AirbnbCard-activity'>
                        Activity's Specific Name
                    </h1>
                    <p className='AirbnbCard-cost'>
                        Trip Cost
                    </p>
                    <span className='AirbnbCard-rating'>
                        {this.state.ratingVote}
                    </span>
                    <button className='AirbnbCard-vote'
                            onClick={this.voteYay.bind(this)}>
                        Rate
                    </button>
                </section>
            </div>
        );
    }

}

export default AirbnbCard;