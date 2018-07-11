import React, {Component} from 'react';
import './AirbnbCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
            <div className='AirbnbCard-whole'>
                <section className='AirbnbCard-imageCont'>
                    <img src='https://via.placeholder.com/300x300' 
                         className='AirbnbCard-image'/>
                </section>
                <section className='AirbnbCard-infoCont'>
                    <p>
                        Activity
                    </p>
                    <p>
                        Where
                    </p>
                    <h1 className='AirbnbCard-activity'>
                        Activity's Specific Name
                    </h1>
                    <p className='AirbnbCard-cost'>
                        Trip Cost
                    </p>
                    <section className='AirbnbCard-stars'>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </section>
                    <section className='AirbnbCard-rating'>
                        {this.state.ratingVote}
                    </section>
                    <button className='AirbnbCard-btn'
                            onClick={this.voteYay.bind(this)}>
                        <i class="fas fa-thumbs-up"></i>
                    </button>
                </section>
            </div>
        );
    }

}

export default AirbnbCard;