"use client"
// components/InputField.tsx
import React from "react";

interface InputFieldProps {
  label: string;
  type: string;
  name: string;
  placeholder: string;
}

const InputField: React.FC<InputFieldProps> = ({ label, type, name, placeholder }) => (
  <div className='pt-5'>
    <label className='block text-sm pb-1.5' htmlFor={name}>{label}</label>
    <input className='border-2 border-gray-500 p-2 rounded-md w-full' type={type} name={name} placeholder={placeholder} />
  </div>
);

export default InputField;
