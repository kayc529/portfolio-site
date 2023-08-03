import Button from './Button';
import ProfilePic from './ProfilePic';
import Title from './Title';

const Header = () => {
  const downloadResume = (e?: React.MouseEvent<HTMLElement>) => {
    window.open('kay-yan-cheung-resume.pdf');
  };

  return (
    <header
      className='relative w-full h-header-sm md:h-header-md lg:h-header'
      id='profile'
    >
      <div className='absolute w-full h-header-sm bg-gradient-to-t from-white to-transparent md:h-header-md lg:h-header'></div>
      {/* header content */}
      <div className='header_content absolute top-0 left-0 w-full pt-36 flex flex-col md:pt-44 lg:pt-52'>
        <div className='content_container flex flex-col items-center justify-center gap-4 md:flex-row'>
          <div className=''>
            {/* <img
              src='profile_pic.JPG'
              alt='profile pic'
              className='max-w-[300px] max-h-[300px] mb-8 rounded-full object-cover md:mb-0'
            /> */}
            <ProfilePic />
          </div>

          <div className='w-full flex flex-col gap-y-4 ml-0 md:ml-4'>
            <h5 className='text-center mb-4 text-xl font-bold md:text-left'>
              Software Engineer | Web Developer
            </h5>
            <p>
              A front-end developer with 2+ years of professional experience in
              the software industry.
            </p>
            <p>
              Despite having a background in mobile app development, my recent
              diploma in Software Engineering Technician from Centennial College
              has sparked my interest in web development. I have been developing
              full-stack web applications with React and Express for the past
              two years.
            </p>
            <p>
              I am now looking for a challenging role as a React Developer where
              I can contribute my skills to building innovative and
              user-friendly web solutions.
            </p>
            <div className='w-full flex justify-center md:justify-start'>
              <Button text='Download Resume' onButtonClick={downloadResume} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
