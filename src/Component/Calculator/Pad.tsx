// Pad.tsx
import React from 'react';
import Button from './Button';

interface PadProps {
  onButtonClick: (value: string) => void;
}

const Pad: React.FC<PadProps> = ({ onButtonClick }) => {
  const buttons = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '=', '+',
    'C'
  ];

  return (
    <div className="pad">
      {buttons.map((button) => (
        <Button key={button} value={button} onClick={() => onButtonClick(button)} />
      ))}
    </div>
  );
};

export default Pad;
