'use client';

import { ModalContext } from '@utils/ModalContext';
import React, { useContext } from 'react';

const ModalShade = () => {
  const { isSidebarOpen, setIsSidebarOpen } = useContext(ModalContext);
  const toggleSideBar = () => {
    if (setIsSidebarOpen) {
      setIsSidebarOpen((prev) => !prev);
    }
  };
  return (
    <div
      className={`modal_shade ${isSidebarOpen ? 'active ' : ''}`}
      onClick={toggleSideBar}
    ></div>
  );
};

export default ModalShade;
