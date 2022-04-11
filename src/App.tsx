import React, { useState } from 'react';
import Button from './components/Button';
import Input from './components/Input';
import Grid from './components/Grid';
import { data } from './data';
import {updateData } from './promise';
import './App.css';

function App()
{
  const [inputValue, setInputValue] = useState(data[0]);

  const [newInput, updateInputValue] = useState("")

  const [count, setCount] = useState(0);

  const [meanValue, setMeanValue] = useState(0);

  const [medianValue, setMedianValue] = useState(0);

  const [modeValue, setModeValue] = useState(0);

  const [standardDeviationValue, setStandardDeviationValue] = useState(0);

  function handleSubmitClick()
  {
    setInputValue(inputValue.concat(","+newInput))
  }

  function mean(data: number[])
  {
    let sum = 0;
    for (let i = 0; i < data.length; i++)
    {
      sum = sum + data[i];
    }
    return sum / data.length;
  }

  function median(data: number[])
  {
    for (let i = 0; i < data.length; i++)   
    {
      for (let j = i + 1; j < data.length; j++)   
      {
        let tmp = 0;
        if (data[i] > data[j])   
        {
          tmp = data[i];
          data[i] = data[j];
          data[j] = tmp;
        }
      }
    }

    if (data.length % 2 === 0)
    {
      return (data[data.length / 2] + data[data.length / 2]) / 2;
    }
    else
    {
      return data[(data.length +1)/2]
    }
  }

  function mode(data: number[])
  {
    let maxValue = 0;
    let maxCount = 0.;

      for (let i = 0; i < data.length; i++) {
         let count = 0;
         for (let j = 0; j < data.length; ++j) {
            if (data[j] === data[i])
            count++;
         }

         if (count > maxCount) {
            maxCount = count;
            maxValue = data[i];
         }
      }
      return maxValue;
  }

  function standardDeviation(data: number[])
  {
    let meanValue = mean(data);
    let sd = 0;

      for (let i = 0; i < data.length; i++) {
         sd= sd + Math.pow((data[i] - meanValue), 2);
      }
      return Math.sqrt(sd/data.length);
  }

  function handleUpdateClick()
  {
    let resultData;
    if (count <= 4)
    {
      updateData(data[count], count).then((data: any) => setInputValue(data)).catch(error => alert(error))
      setCount(count + 1);
      const arrayData = inputValue.split(',');
      resultData = arrayData.map((data) => { return parseInt(data) })
      setMeanValue(mean(resultData));
      setMedianValue(median(resultData));
      setModeValue(mode(resultData));
      setStandardDeviationValue(standardDeviation(resultData));
    }
    else {
      setCount(0)
    }
  }

  function handleChange(e: any)
  {
    updateInputValue(e.target.value);
  }

  return (
    <div className="App">
      <div className="elementWrapper1">
        <Input inputValue={newInput} handleChange={handleChange} />
        <Button value="SUBMIT" handleClick={handleSubmitClick} />
      </div>
      <div className="elementWrapper2">
        <Input inputValue={inputValue} />
        <Button value="UPDATE" handleClick={handleUpdateClick} />
      </div>
      <Grid meanValue={meanValue} medianValue={medianValue} modeValue={modeValue} standardDeviationValue={standardDeviationValue} />
    </div>
  );
}

export default App;
