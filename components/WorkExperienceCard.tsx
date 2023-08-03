'use client';

import { IWorkExperience } from '@interface/IWorkExperience';
import React from 'react';

interface Props {
  workExperience: IWorkExperience;
  index: number;
}

const WorkExperienceCard = ({ workExperience, index }: Props) => {
  const goToCompanySite = (link: string) => {
    window.open(link);
  };

  const getAnimation = () => {
    return index % 2 === 0 ? '--enterFromLeft' : '--enterFromRight';
  };

  return (
    <li
      className={`--reveal ${getAnimation()} w-full pt-6 pb-10 px-6 bg-gradient-to-b from-lightBlue to-transparent rounded-lg drop-shadow-lg flex flex-col justify-between items-center gap-10 lg:flex-row lg:bg-gradient-to-r lg:even:flex-row-reverse lg:even:from-transparent lg:even:to-lightBlue`}
    >
      <img
        src={workExperience.image}
        alt={workExperience.company}
        className='w-auto h-[100px] lg:h-[150px]'
      />
      <div className='-mt-4 flex flex-col lg:mt-0'>
        <h2 className='text-xl font-bold'>
          {workExperience.jobTitle} |{' '}
          <span
            className='cursor-pointer hover:underline'
            onClick={() => {
              goToCompanySite(workExperience.link);
            }}
          >
            {workExperience.company}
          </span>
        </h2>
        <h3 className=''>{workExperience.date}</h3>
        <ul className='pt-4 flex flex-col gap-2'>
          {workExperience.achievements.map((achievement: string) => (
            <p>- {achievement}</p>
          ))}
        </ul>
      </div>
    </li>
  );
};

export default WorkExperienceCard;
