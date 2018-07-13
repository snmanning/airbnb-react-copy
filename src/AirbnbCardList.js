import React from 'react';
import AirbnbCard from './AirbnbCard';
// import Layout from 'Layout';
import PropTypes from 'prop-types';

const AirbnbCardList = (props) => {
    const destination = this.state.vacationUrls.map((url) => <AirbnbCard vacationUrls={url} key={url} />);
        return (
            <div>
                <Layout>
                    {destination}
                </Layout>
            </div>
        );
};

AirbnbCardList.propTypes = {
    vacationUrls: PropTypes.array.isRequired
};

export default AirbnbCardList;