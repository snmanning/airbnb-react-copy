import React from 'react';
import AirbnbCard from './AirbnbCard';
import Main from './Main';
import Layout from './Layout';
import PropTypes from 'prop-types';

const AirbnbCardList = (props) => {
    const destination = props.vacationUrls.map((url) => <AirbnbCard vacationUrls={url} key={url} />);
        return (
            <div>
                <Main>
                    {destination}
                </Main>
            </div>
        );
};

AirbnbCardList.propTypes = {
    vacationUrls: PropTypes.array.isRequired
};

export default AirbnbCardList;