import React from 'react';
import PropTypes from 'prop-types';
import AlbumItem from '../AlbumItem';

AlbumFeature.propTypes = {
    albums: PropTypes.array,
};

AlbumFeature.defaultProps = {
    albums: [],
};

function AlbumFeature({ albums }) {
    return (
        <ul>
            {albums.map(() =>
                <AlbumItem />)}
        </ul>
    );
}

export default AlbumFeature;
