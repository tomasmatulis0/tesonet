import React, { memo } from 'react';
import PropTypes from 'prop-types';
import InputIcon from './InputIcon';
import ValidationError from './ValidationError';

const InputField = ({
    iconOptions: { icon, altText },
    validationError,
    ...restProps
}) => {
    const hasError = validationError !== null;
    const extraClass = hasError ? 'border-red-800 border-2' : 'border focus:shadow-outline';

    return (
        <>
            <div className="relative mt-6">
                <InputIcon icon={icon} altText={altText} />
                <input
                    className={`${extraClass} shadow appearance-none rounded w-full py-2 pl-10 text-gray-700 leading-9 focus:outline-none`}
                    {...restProps}
                />
            </div>
            {hasError && <ValidationError text={validationError} />}
        </>
    );
};

InputField.defaultProps = {
    validationError: null,
};

InputField.propTypes = {
    iconOptions: PropTypes.shape({
        icon: PropTypes.string.isRequired,
        altText: PropTypes.string.isRequired,
    }).isRequired,
    validationError: PropTypes.string,
};

export default memo(InputField);
