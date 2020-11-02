import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Loader from '../Loader';

const LoginButton = ({ isLoading }) => {
    const disabledClass = isLoading ? 'opacity-50 cursor-not-allowed' : '';

    return (
        <button
            className={
                `${disabledClass} flex justify-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 
                px-4 mt-6 rounded focus:outline-none focus:shadow-outline w-full h-10`
            }
            type="submit"
            disabled={isLoading}
        >
            {isLoading ? <Loader /> : 'Log in'}
        </button>
    );
};

LoginButton.propTypes = {
    isLoading: PropTypes.bool.isRequired,
};

export default memo(LoginButton);
