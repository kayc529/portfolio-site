import React from 'react';

const ProfilePic = () => {
  return (
    <div className='card'>
      <div className='content'>
        <div className='front'>
          <img
            src='profile_pic.JPG'
            alt='picture of me'
            className='w-[300px] h-[300px] rounded-full object-cover'
          />
        </div>
        <div className='back'>
          <div className='relative w-[300px] h-[300px] rounded-full overflow-hidden'>
            <img
              src='profile_pic.JPG'
              alt='picture of me'
              className='w-[300px] h-[300px] rounded-full object-cover -scale-x-100'
            />
            <div className='absolute top-0 left-0 w-full h-full bg-gray-900 opacity-60 flex jusitfy-center items-center'>
              <p className='w-full text-white text-center text-h5'>
                {'Hello! :)'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePic;
