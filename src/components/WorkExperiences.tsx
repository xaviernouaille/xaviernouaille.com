import { projects } from '@/app/constants';
import WorkExperienceItem from './WorkExperienceItem';

const WorkExperiences = () => (
  <div className='mt-10 sm:mt-14 container'>
    <div>
      {projects.map((project) => (
        <WorkExperienceItem
          index={project.index}
          imgSrc={project.logo}
          key={project.index}
          date={project.date}
          description={project.description}
          content={project.content}
          techStack={project.techno}
        />
      ))}
    </div>
  </div>
);

export default WorkExperiences;
