import React, { memo } from 'react';
import PropTypes from 'prop-types';

const ErrorAlert = ({ text }) => (
    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
        <span className="block sm:inline">{text}</span>
    </div>
);

ErrorAlert.propTypes = {
    text: PropTypes.string.isRequired,
};

export default memo(ErrorAlert);
