import React from 'react';

type ButtonPropsType = {
    value: string;
    handleClick: ()=>void
}

export default function Button({value, handleClick}: ButtonPropsType)
{
    return (
        <button onClick={handleClick}>{ value }</button>
    );
}