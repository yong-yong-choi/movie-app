import React from 'react';
import PropTypes from 'prop-types';

function Title({ title }) {
    return (
        <h1 className="title-top">{title}</h1>
    );
}

Title.propTypes = {
    title: PropTypes.string.isRequired
}

export default Title;