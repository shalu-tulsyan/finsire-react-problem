import React from 'react';
import './styles.css'

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