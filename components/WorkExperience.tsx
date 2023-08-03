import React from 'react';
import Title from './Title';
import { workExperience } from '../data/work-experience';
import { IWorkExperience } from '@interface/IWorkExperience';
import WorkExperienceCard from './WorkExperienceCard';

const WorkExperience = () => {
  return (
    <section id='work-experience' className='content_container flex flex-col'>
      <Title title='work experience' />
      <ul className='flex flex-col gap-8'>
        {workExperience.map((item, index) => (
          <WorkExperienceCard key={index} workExperience={item} index={index} />
        ))}
      </ul>
    </section>
  );
};

export default WorkExperience;
