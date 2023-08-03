'use client';

import { IProject } from '@interface/IProject';
import { BsGithub } from 'react-icons/bs';
import { LuExternalLink } from 'react-icons/lu';

interface Props {
  project: IProject;
  index: number;
}
const ProjectCard = ({ project, index }: Props) => {
  const goToLiveWebsite = () => {
    window.open(project.link);
  };

  const goToGithub = () => {
    for (let i = 0; i < project.github.length; i++) {
      console.log(project.github[i]);
      window.open(project.github[i]);
    }
  };

  return (
    <li className='--reveal --popUp w-[350px] h-[600px] rounded-lg bg-white overflow-hidden drop-shadow-lg flex flex-col'>
      <img
        src={project.image}
        alt={project.projectName}
        className='w-full h-[180px] object-cover'
      />
      <div className='h-full flex flex-col p-4 justify-between'>
        <div className='flex flex-col'>
          <p className='h-[75px] font-bold text-xl'>{project.projectName}</p>
          <p className='pb-4'>{project.description}</p>
          <div className='w-full pb-6 flex gap-3'>
            <BsGithub
              className='w-6 h-6 cursor-pointer hover:text-lightBlue'
              onClick={goToGithub}
            />
            <LuExternalLink
              className='w-6 h-6 cursor-pointer hover:text-lightBlue'
              onClick={goToLiveWebsite}
            />
          </div>
        </div>

        <div className='flex flex-col'>
          <p>Technologies used:</p>
          <div className='mt-2 flex flex-wrap gap-x-3 gap-y-1'>
            {project.techUsed.map((tech: string) => (
              <span className='text-md py-1 px-1 leading-0 bg-gradient-to-b from-lightBlue to-transparent rounded-sm'>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </li>
  );
};

export default ProjectCard;
