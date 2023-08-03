'use client';

import Education from '@components/Education';
import Footer from '@components/Footer';
import Header from '@components/Header';
import Projects from '@components/Projects';
import Skills from '@components/Skills';
import WorkExperience from '@components/WorkExperience';
import { useEffect } from 'react';
import { setAnimations } from '@utils/component-animation';
import Button from '@components/Button';

export default function Home() {
  //scrolling animation
  useEffect(() => {
    window.addEventListener('scroll', setAnimations);
    return () => {
      window.removeEventListener('scroll', setAnimations);
    };
  }, []);

  const downloadResume = () => {
    window.open('kay-yan-cheung-resume.pdf');
  };

  return (
    <main className='w-full flex flex-col items-center gap-20'>
      <Header />
      <Skills />
      <WorkExperience />
      <Projects />
      <Education />
      <Button text='download resume' onButtonClick={downloadResume} />
      <Footer />
    </main>
  );
}
