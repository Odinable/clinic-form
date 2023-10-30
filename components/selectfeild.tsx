"use client"
// components/SelectField.tsx
import React from "react";

interface SelectFieldProps {
  label: string;
  name: string;
  options: { value: string; label: string }[];
}

const SelectField: React.FC<SelectFieldProps> = ({ label, name, options }) => (
  <div className='pt-5'>
    <label className='block text-sm pb-2' htmlFor={name}>{label}</label>
    <select name={name} className='border-2 border-gray-500 p-2 rounded-md w-full'>
      {options.map((option, index) => (
        <option key={index} value={option.value}>{option.label}</option>
      ))}
    </select>
  </div>
);

export default SelectField;
