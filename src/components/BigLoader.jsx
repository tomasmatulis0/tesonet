import React, { memo } from 'react';
import bigLoader from '@Assets/icons/big-loader.svg';

const SmallLoader = () => (
    <img src={bigLoader} alt="big spinner" className="m-auto" />
);

export default memo(SmallLoader);
