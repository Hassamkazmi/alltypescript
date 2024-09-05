// App.tsx
import React, { useState } from 'react';
import Display from './Calculator/Display';
import Pad from './Calculator/Pad';

const Calculator= () => {
  const [input, setInput] = useState<string>('');
  const [result, setResult] = useState<string>('');

  const handleButtonClick = (value: string) => {
    if (value === '=') {
      try {
        const evaluatedResult = eval(input);
        setResult(evaluatedResult.toString());
      } catch {
        setResult('Error');
      }
    } else if (value === 'C') {
      setInput('');
      setResult('');
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="calculator">
      <Display input={input} result={result} />
      <Pad onButtonClick={handleButtonClick} />
    </div>
  );
};

export default Calculator;
