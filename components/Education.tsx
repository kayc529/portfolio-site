import React from 'react';
import Title from './Title';
import { education as educationInfo } from '@data/education';
import { IEducation } from '@interface/IEducation';
import EducationCard from './EducationCard';

const Education = () => {
  return (
    <section className='--reveal --enterFromLeft content_container flex flex-col'>
      <Title title='education' />
      <ul className='flex flex-col gap-y-10 lg:gap-4 lg:grid lg:grid-cols-2'>
        {educationInfo.map((education: IEducation) => (
          <EducationCard education={education} />
        ))}
      </ul>
    </section>
  );
};

export default Education;
