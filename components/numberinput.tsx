"use client"

// components/NumberInput.tsx
import React, { useState, ChangeEvent } from 'react';

interface NumberInputProps {
  label: string;
  name: string;
  placeholder: string;
}

const NumberInput: React.FC<NumberInputProps> = ({ label, name, placeholder }) => {
  const [value, setValue] = useState<string>('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const isValid = /^\d+$/.test(inputValue);

    if (isValid) {
      setValue(inputValue);
    }
  };

  return (
    <div className="pt-5">
      <label htmlFor={name} className="block text-gray-700 text-sm mb-2">
        {label}:
      </label>
      <input
        type="text"
        id={name}
        name={name}
        value={value}
        onChange={handleInputChange}
        placeholder={placeholder}
        className='border-2 border-gray-500 p-2 rounded-md w-full'
      />
    </div>
  );
};

export default NumberInput;
