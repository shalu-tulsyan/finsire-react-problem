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
            <div>
                <h2> Mean </h2>
                <p>{meanValue}</p>
            </div>
            <div>
                <h2> median </h2>
                <p>{medianValue}</p>
            </div>
            <div>
                <h2> mode </h2>
                <p>{modeValue}</p>
            </div>
            <div>
                <h2> Standard Deviation </h2>
                <p>{standardDeviationValue}</p>
            </div>
        </div>
    );
}