import React, { memo } from 'react';
import PropTypes from 'prop-types';

const ValidationError = ({ text }) => <div className="text-red-800 -mb-6">{text}</div>;

ValidationError.propTypes = {
    text: PropTypes.string.isRequired,
};

export default memo(ValidationError);
