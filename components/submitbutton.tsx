"use client"

import React, { MouseEventHandler } from 'react';

interface SubmitButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ onClick }) => (
  <div>
    <button
      onClick={onClick}
      className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none w-full"
    >
      Submit
    </button>
  </div>
);

export default SubmitButton;
