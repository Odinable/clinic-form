"use client"

// components/SubmitButton.tsx
import React from "react";

interface SubmitButtonProps {
  label: string;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ label }) => (
  <button type='submit' className='text-white bg-black rounded-lg w-full py-3 mt-6'>
    {label}
  </button>
);

export default SubmitButton;
