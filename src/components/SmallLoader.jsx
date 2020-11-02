import React, { memo } from 'react';
import smallSpinner from '@Assets/icons/small-spinner.svg';

const SmallLoader = () => (
    <img src={smallSpinner} alt="small spinner" />
);

export default memo(SmallLoader);
