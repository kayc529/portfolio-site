'use client';

import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { toast } from 'react-toastify';

const FAB = () => {
  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText('kay.cheung529@gmail.com');
    toast.success('Email copied to clipboard!');
  };

  return (
    <button
      className='fab_button relative w-[100px] h-[100px] rounded-full bg-lightBlue drop-shadow-lg'
      onClick={copyEmailToClipboard}
    >
      <FontAwesomeIcon icon={faEnvelope} className='fab_icon w-6 h-6 pb-4' />
    </button>
  );
};

export default FAB;
