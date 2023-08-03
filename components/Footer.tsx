import React from 'react';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import FAB from './FAB';

const Footer = () => {
  return (
    <footer className='relative w-full h-footer'>
      <div className='absolute top-0 left-0 w-full h-footer bg-gradient-to-t from-transparent to-white'></div>
      <div className='absolute bottom-0 left-0 w-full flex justify-center'>
        <div className='content_container flex flex-col items-center pb-16 gap-6 '>
          <FAB />
          <div className='flex gap-4'>
            <BsGithub className='w-6 h-6 cursor-pointer hover:opacity-60' />
            <BsLinkedin className='w-6 h-6 cursor-pointer hover:opacity-60' />
          </div>
          <p className='text-textGrey'>
            &#169; Copyright 2023 by Kay Yan Cheung.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
