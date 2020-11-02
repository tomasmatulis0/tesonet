import React, { memo } from 'react';
import PropTypes from 'prop-types';

const InputIcon = ({ icon, altText }) => (
    <span className="absolute inset-y-0 left-0 flex items-center pl-2">
        <img className="" src={icon} alt={altText} />
    </span>
);

InputIcon.propTypes = {
    icon: PropTypes.string.isRequired,
    altText: PropTypes.string.isRequired,
};

export default memo(InputIcon);
