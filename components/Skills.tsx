import { AiFillHtml5 } from 'react-icons/ai';
import {
  BiLogoTailwindCss,
  BiLogoCss3,
  BiLogoJavascript,
} from 'react-icons/bi';
import { TbBrandTypescript } from 'react-icons/tb';
import {
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiAzuredevops,
  SiJirasoftware,
  SiRedux,
} from 'react-icons/si';
import { HiOutlineDeviceMobile } from 'react-icons/hi';
import { FaReact } from 'react-icons/fa';
import { VscJson } from 'react-icons/vsc';
import { BsGit } from 'react-icons/bs';
import { FaJava } from 'react-icons/fa';
import { CiMobile3 } from 'react-icons/ci';
import Title from './Title';

const Skills = () => {
  return (
    <div className='content_container skills_content flex flex-col'>
      <Title title='skills' />
      <ul className='grid grid-cols-3 gap-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8'>
        <li className='flex gap-2 items-center'>
          <AiFillHtml5 className='w-6 h-6' />
          <p>HTML</p>
        </li>
        <li className='flex gap-2 items-center'>
          <BiLogoCss3 className='w-6 h-6' />
          <p>CSS</p>
        </li>
        <li className='flex gap-2 items-center'>
          <BiLogoJavascript className='w-6 h-6' />
          <p>Javascript</p>
        </li>
        <li className='flex gap-2 items-center'>
          <TbBrandTypescript className='w-6 h-6' />
          <p>Typescript</p>
        </li>
        <li className='flex gap-2 items-center'>
          <FaJava className='w-6 h-6' />
          <p>Java</p>
        </li>
        <li className='flex gap-2 items-center'>
          <FaReact className='w-6 h-6' />
          <p>React</p>
        </li>
        <li className='flex gap-2 items-center'>
          <SiNextdotjs className='w-6 h-6' />
          <p>Next.js</p>
        </li>
        <li className='flex gap-2 items-center'>
          <SiExpress className='w-6 h-6' />
          <p>Express.js</p>
        </li>
        <li className='flex gap-2 items-center'>
          <CiMobile3 className='w-6 h-6' />
          <p>React Native</p>
        </li>
        <li className='flex gap-2 items-center'>
          <SiMongodb className='w-6 h-6' />
          <p>MongoDB</p>
        </li>
        <li className='flex gap-2 items-center'>
          <SiRedux className='w-6 h-6' />
          <p>Redux</p>
        </li>
        <li className='flex gap-2 items-center'>
          <BiLogoTailwindCss className='w-6 h-6' />
          <p>TailwindCSS</p>
        </li>
        <li className='flex gap-2 items-center'>
          <VscJson className='w-6 h-6' />
          <p>JSON</p>
        </li>
        <li className='flex gap-2 items-center'>
          <BsGit className='w-6 h-6' />
          <p>Git</p>
        </li>
        <li className='flex gap-2 items-center'>
          <SiAzuredevops className='w-6 h-6' />
          <p>Microsoft Azure</p>
        </li>
        <li className='flex gap-2 items-center'>
          <SiJirasoftware className='w-6 h-6' />
          <p>Jira</p>
        </li>
      </ul>
    </div>
  );
};

export default Skills;
