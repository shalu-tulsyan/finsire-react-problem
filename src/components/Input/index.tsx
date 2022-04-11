import React from 'react';

type InputPropsType = {
    inputValue: string;
    handleChange?: (text: any)=> void
}

export default function Input({inputValue,handleChange}: InputPropsType)
{
    return (
        <input value={inputValue} onChange={handleChange} placeholder="enter numbers" />
    );
}