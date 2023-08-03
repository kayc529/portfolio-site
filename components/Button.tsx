'use client';

import React from 'react';

interface Props {
  text: string;
  onButtonClick: (e?: React.MouseEvent<HTMLElement>) => void;
}
const Button = ({ text, onButtonClick }: Props) => {
  return (
    <button
      className='w-button py-2 px-4 capitalize font-libre text-xl text-white bg-textGrey rounded-lg border-2 border-white hover:bg-white hover:text-textGrey hover:border-textGrey duration-200'
      onClick={onButtonClick}
    >
      {text}
    </button>
  );
};

export default Button;
