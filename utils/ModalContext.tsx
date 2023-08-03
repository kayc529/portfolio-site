'use client';

import { Dispatch, SetStateAction, createContext, useState } from 'react';

interface ModalContextType {
  isSidebarOpen: boolean;
  setIsSidebarOpen: Dispatch<SetStateAction<boolean>> | null;
}
const ModalContext = createContext<ModalContextType>({
  isSidebarOpen: false,
  setIsSidebarOpen: null,
});

const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <ModalContext.Provider value={{ isSidebarOpen, setIsSidebarOpen }}>
      {children}
    </ModalContext.Provider>
  );
};

export { ModalContext, ModalProvider };
