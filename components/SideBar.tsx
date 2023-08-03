'use client';

import { ModalContext } from '@utils/ModalContext';
import { useContext } from 'react';
import { GrClose } from 'react-icons/gr';
import { CgProfile } from 'react-icons/cg';
import { PiProjectorScreenBold } from 'react-icons/pi';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import FAB from './FAB';

const SideBar = () => {
  const { isSidebarOpen, setIsSidebarOpen } = useContext(ModalContext);

  const toggleSideBar = () => {
    if (setIsSidebarOpen) {
      setIsSidebarOpen((prev) => !prev);
    }
  };

  const openLink = (link: string) => {
    window.open(link);
  };

  return (
    <aside
      className={`${
        isSidebarOpen ? 'active ' : ''
      } drop-shadow-lg bg-white flex flex-col justify-between`}
    >
      <div className='relative w-full'>
        <div className='close_menu absolute top-4 right-4 p-1 rounded-full'>
          <GrClose className='w-6 h-6' onClick={toggleSideBar} />
        </div>
        <ul className='w-max mx-auto py-24 flex flex-col gap-8'>
          <li className='nav_item flex gap-4 items-center'>
            <CgProfile className='w-8 h-8' />
            <a
              href='#profile'
              className='font-libre text-h5'
              onClick={toggleSideBar}
            >
              Profile
            </a>
          </li>
          <li className='nav_item flex gap-4 items-center'>
            <PiProjectorScreenBold className='w-8 h-8' />
            <a
              href='#projects'
              className='font-libre text-h5'
              onClick={toggleSideBar}
            >
              Projects
            </a>
          </li>
          <li className='nav_item flex gap-4 items-center'>
            <BsGithub className='w-8 h-8' />
            <p
              className='font-libre text-h5'
              onClick={() => {
                openLink('https://github.com/kayc529');
              }}
            >
              Github
            </p>
          </li>
          <li className='nav_item flex gap-4 items-center'>
            <BsLinkedin className='w-8 h-8' />
            <p
              className='font-libre text-h5'
              onClick={() => {
                openLink('https://linkedin.com/in/kay-yan-cheung');
              }}
            >
              LinkedIn
            </p>
          </li>
        </ul>
      </div>
      <div className='mx-auto py-16'>
        <FAB />
      </div>
    </aside>
  );
};

export default SideBar;
