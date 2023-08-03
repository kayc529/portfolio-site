'use client';

const Logo = () => {
  const goToHome = () => {};
  return (
    <div className='relative cursor-pointer' onClick={goToHome}>
      <h1 className='text-h3 font-bold text-textGrey'>
        K<span className='--fadeIn font-normal opacity-0'>ay</span> Y
        <span className='--fadeIn --delay-400 font-normal opacity-0'>an</span> C
        <span className='--fadeIn --delay-800 font-normal opacity-0'>
          heung
        </span>
      </h1>
    </div>
  );
};

export default Logo;
