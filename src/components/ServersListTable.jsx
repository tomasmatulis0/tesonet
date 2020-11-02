import React, { memo } from 'react';
import PropTypes from 'prop-types';
import BigLoader from './BigLoader';
import ErrorAlert from './ErrorAlert';

const ServersListTable = ({ serversList, isLoading, errorMessage }) => {
    if (isLoading) {
        return <BigLoader />;
    }

    if (errorMessage !== null) {
        return <ErrorAlert text={errorMessage} />;
    }

    if (serversList === null) {
        return null;
    }

    return (
        <div>
            <div className="flex w-full px-2 py-2 bg-gray-600 font-bold text-white">
                <div className="w-1/2">Server name</div>
                <div className="w-1/2">Distance</div>
            </div>
            <div>
                {serversList.map((server, index) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <div className={`${index % 2 === 0 ? 'bg-gray-200' : 'bg-gray-400'} flex w-full py-2 px-2`} key={index}>
                        <div className="w-1/2">{server.name}</div>
                        <div className="w-1/2">{server.distance}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

ServersListTable.defaultProps = {
    serversList: null,
    errorMessage: null,
};

ServersListTable.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    serversList: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        distance: PropTypes.number.isRequired,
    })),
    errorMessage: PropTypes.string,
};

export default memo(ServersListTable);
