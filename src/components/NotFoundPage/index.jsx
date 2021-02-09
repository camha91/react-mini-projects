import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

NotFoundPage.propTypes = {

};

function NotFoundPage(props) {
    return (
        <div>
            <Redirect to="/home" exact />
        </div>
    );
}

export default NotFoundPage;
