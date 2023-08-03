import { IEducation } from '@interface/IEducation';
import React from 'react';

interface Props {
  education: IEducation;
}

const EducationCard = ({ education }: Props) => {
  const { school, degree, description, duration, location, image } = education;

  return (
    <li className='flex gap-4'>
      <img
        src={image}
        alt={school}
        className='w-[100px] h-[100px] rounded-full border-2 border-lightBlue'
      />
      <div className='flex flex-col'>
        <h2 className='text-xl font-bold'>{school}</h2>
        <p>{degree}</p>
        <p>
          {duration} | {location}
        </p>
        <p>{description}</p>
      </div>
    </li>
  );
};

export default EducationCard;
