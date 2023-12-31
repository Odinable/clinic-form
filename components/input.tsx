"use client"

import React, { ChangeEvent } from 'react';

interface TextInputProps {
  label: string;
  name: string;
  id: string;
  placeholder: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

const TextInput: React.FC<TextInputProps> = ({ label, name, id, placeholder, value, onChange, type = 'text' }) => (
  <div className="mb-5">
    <label htmlFor={id} className="mb-3 block text-base font-medium text-[#07074D]">
      {label}
    </label>
    <input
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
    />
  </div>
);

export default TextInput;
