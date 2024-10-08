// Display.tsx
import React from 'react';

interface DisplayProps {
  input: string;
  result: string;
}

const Display: React.FC<DisplayProps> = ({ input, result }) => {
  return (
    <div className="display">
      <div className="input">{input}</div>
      <div className="result">{result}</div>
    </div>
  );
};

export default Display;
