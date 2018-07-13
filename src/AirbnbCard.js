import React, {Component} from 'react';
import './AirbnbCard.css';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class AirbnbCard extends Component {
    static propTypes = {
        vacationUrls: PropTypes.string.isRequired
    }
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
        const {vacationUrls} = this.props;
        return (
            <div className='AirbnbCard-whole'>
                <section className='AirbnbCard-imageCont'>
                    <img src={vacationUrls}
                         className='AirbnbCard-image'/>
                </section>
                <section className='AirbnbCard-infoCont'>
                    <p className='AirbnbCard-snipet'>
                        Activity
                    </p>
                    <i class="fas fa-passport AirbnbCard-snipet"></i>
                    <p className='AirbnbCard-snipet'>
                        Where
                    </p>
                    <h1 className='AirbnbCard-activity'>
                        Activity's Specific Name
                    </h1>
                    <p className='AirbnbCard-cost'>
                        Trip Cost
                    </p>
                    <div className='AirbnbCard-reactions'>
                        <section className='AirbnbCard-stars'>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </section>
                        <button className='AirbnbCard-btn'
                                onClick={this.voteYay.bind(this)}>
                            <i className="fas fa-thumbs-up"></i>
                        </button>
                        <section className='AirbnbCard-rating'>
                            {this.state.ratingVote}
                        </section>
                    </div>
                </section>
            </div>
        );
    }

}

export default AirbnbCard;