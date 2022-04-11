import React from 'react';
import './styles.css';

type GridPropsType = {
    meanValue: number;
    medianValue: number;
    modeValue: number;
    standardDeviationValue: number;
}

export default function Grid({meanValue,medianValue,modeValue,standardDeviationValue}: GridPropsType)
{
    return (
        <div className="gridContainer">
            <div>Mean { meanValue}</div>
            <div>median { medianValue}</div>
            <div>mode { modeValue}</div>
            <div>Standard Deviation { standardDeviationValue}</div>
        </div>
    );
}