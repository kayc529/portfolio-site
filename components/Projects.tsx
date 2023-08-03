import { projectExperience } from '@data/project-experience';
import ProjectCard from './ProjectCard';
import { IProject } from '@interface/IProject';
import Title from './Title';

const Projects = () => {
  return (
    <section
      id='projects'
      className='content_container flex flex-col items-center'
    >
      <Title title='projects' />
      <ul className='projects_container flex flex-wrap justify-center gap-8'>
        {projectExperience.map((project: IProject, index: number) => (
          <ProjectCard project={project} index={index} />
        ))}
      </ul>
    </section>
  );
};

export default Projects;
