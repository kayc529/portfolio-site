import NavBar from '@components/NavBar';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ModalProvider } from '@utils/ModalContext';
import SideBar from '@components/SideBar';
import ModalShade from '@components/ModalShade';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Kay Yan Cheung',
  description: "Kay's portfolio site",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className} suppressHydrationWarning={true}>
        <ModalProvider>
          <ToastContainer
            position='top-right'
            autoClose={1500}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss={false}
            draggable={false}
            pauseOnHover={false}
            theme='light'
          />
          <NavBar />
          {children}
          <ModalShade />
          <SideBar />
        </ModalProvider>
      </body>
    </html>
  );
}
