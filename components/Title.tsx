import React from 'react';
interface Props {
  title: string;
}
const Title = ({ title }: Props) => {
  return (
    <div className='w-full mb-4 flex items-center justify-between'>
      <h1 className='w-max text-h4 mr-4 capitalize whitespace-nowrap'>
        {title}
      </h1>
      <div className='h-px w-full bg-black'></div>
    </div>
  );
};

export default Title;
