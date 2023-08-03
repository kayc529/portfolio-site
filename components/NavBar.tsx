'use client';

import Logo from './Logo';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { FiMenu } from 'react-icons/fi';
import { ModalContext } from '@utils/ModalContext';
import { useContext } from 'react';

const NavBar = () => {
  const { isSidebarOpen, setIsSidebarOpen } = useContext(ModalContext);

  const goToWebsite = (link: string) => {
    window.open(link);
  };

  const toggleMenu = () => {
    if (setIsSidebarOpen) {
      setIsSidebarOpen((prev) => !prev);
    }
  };

  return (
    <nav className='content_container z-10 absolute top-0 left-0 right-0 py-4'>
      <div className='w-full flex justify-between items-center'>
        <Logo />
        <ul className='hidden text-textGrey gap-4 items-start md:flex'>
          <li className='nav_item'>
            <a href='#profile' className='font-libre text-xl'>
              Profile
            </a>
          </li>
          <li className='nav_item'>
            <a href='#projects' className='font-libre text-xl'>
              Projects
            </a>
          </li>
          <li
            className='nav_item_logo'
            onClick={() => {
              goToWebsite('https://github.com/kayc529');
            }}
          >
            <BsGithub className='w-6 h-6 cursor-pointer' />
          </li>
          <li
            className='nav_item_logo'
            onClick={() => {
              goToWebsite('https://linkedin.com/in/kay-yan-cheung');
            }}
          >
            <BsLinkedin className='w-6 h-6 cursor-pointer' />
          </li>
        </ul>
        <FiMenu
          className={`menu_icon ${
            isSidebarOpen ? 'active ' : ''
          }w-6 h-6 cursor-pointer md:hidden`}
          onClick={toggleMenu}
        />
      </div>
    </nav>
  );
};

export default NavBar;
