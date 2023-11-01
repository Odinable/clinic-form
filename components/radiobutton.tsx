"use client"

import React, { ChangeEvent } from 'react';

interface RadioButtonProps {
  id: string;
  label: string;
  checked: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const RadioButton: React.FC<RadioButtonProps> = ({ id, label, checked, onChange }) => (
  <div className="flex items-center">
    <input type="radio" name="radio1" id={id} checked={checked} onChange={onChange} className="h-5 w-5" />
    <label htmlFor={id} className="pl-3 text-base font-medium text-[#07074D]">
      {label}
    </label>
  </div>
);

export default RadioButton;
