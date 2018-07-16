import React, {Component} from 'react';
import './TripCard.css';
import PropTypes from 'prop-types';

class TripCard extends Component {
    static propTypes = {
        urlPath: PropTypes.string.isRequired,
        destination: PropTypes.string.isRequired
    } 
    
render () {
    const {urlPath} = this.props;
    const {destination} = this.props;
    return (
        <div className='TripCard-container'>
            <section className='TripCard-info'>
                <img className='TripCard-img'
                     src={urlPath} />
                <input className='TripCard-input'
                       value={destination} />
            </section>
        </div>
        );
    }
}

export default TripCard;