'use client';
import { Framer,  NestJS, Nextjs, PostgreSQL, TailwindCSS, Tauri, TypeORM } from '@/helpers/svgs';
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
      text: 'I made a chatbot focused in acting like Hello Kitty. I consumed gemmini API to made it',
      technologies:{
        Nextjs,
        NestJS,
        PostgreSQL,
        Docker,
        TypeORM
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