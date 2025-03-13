'use client';
import { Framer,  JWT,  NestJS, Nextjs, PostgreSQL, Swagger, TailwindCSS, Tauri, TypeORM } from '@/helpers/svgs';
import HoverVideo from '../hover-video';
import ProjectContainer from './project-container';
import { Docker } from '../../../helpers/svgs';
import { useTranslations } from 'next-intl';




const Projects = () => {
  
  const  t = useTranslations('Projects');

  const projectsData = [
  
    {
      title: t('project1.title'),
      hasRepository: true,
      repositoryLink: 'https://github.com/MrQreb/chat-bot-hello-kitty',
      image: <HoverVideo imageURL="/chat_bot.png" videoURL="https://www.youtube.com/watch?v=VzUV-5DLhvU" />,
      text: t('project1.text'),
      technologies:{
        Tauri,
        Nextjs,
        TailwindCSS,
        Framer,
      }
    },
    {
      title: 'PetSet',
      image: <HoverVideo imageURL="/pet_set.png" videoURL="https://www.youtube.com/watch?v=jKQ-AYxxFO4" />,
      text: t('project2.text'),      
      technologies:{
        Nextjs,
        TailwindCSS,
        NestJS,
        PostgreSQL,
        Docker,
        TypeORM,
      }
    },
    {
      title: 'API REST dentist',
      image: <HoverVideo imageURL="/API_dentist.png" videoURL="https://www.youtube.com/watch?v=ZZcBcgC-n0Q" />,
      hasRepository: true,
      repositoryLink: 'https://github.com/MrQreb/api_arquitectura',
      text: t('project2.text'),      
      technologies:{
        NestJS,
        PostgreSQL,
        Swagger,
        Docker,
        JWT
      }
    },
   
  ];

  return (
    <section className="w-full mt-12 mb-24">
      <h2 className="text-4xl md:text-5xl text-center font-bold font-inter">Projects</h2>
      { 
        projectsData.map ( (project,index) => (
          <ProjectContainer
          key={index}
          title={project.title}
          hasRepository={project.hasRepository}
          repositoryLink={project.repositoryLink}
          image={project.image}
          technologies={project.technologies}
          text={project.text}
        />
        ))
      }
    </section>
  );
};

export default Projects;