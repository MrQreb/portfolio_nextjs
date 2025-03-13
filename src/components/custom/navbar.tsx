
"use client";
import Link from "next/link";
import { TranslateButton } from './translate-button';
import { useTranslations } from "next-intl";
import { Github, LinkedIn } from '@/helpers/svgs';


const handleScrollToProjects = (elementId: string) => {
  const projectsElement = document.getElementById(elementId);
  if (projectsElement) {
      const headerOffset = 100;
      const elementPosition = projectsElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
  }
};

const Navbar = () => {
  const t = useTranslations('navbar');
  return (
    <section className="z-10 fixed left-1/2  -translate-x-1/2 bg-[#252424] w-[95%] md:w-[75%] h-12 md:h-16 mt-2 rounded-xl grid grid-cols-[25%_25%_25%_6.25%_6.25%_6.25%_6.25] border border-gray-900 font-inter">   
      <p onClick={() => handleScrollToProjects('about-me')} className="m-auto font-bold text-sm md:text-base xl:text-xl cursor-pointer hover:scale-115 transition-all">{t('aboutMe')}</p>
      <p onClick={() => handleScrollToProjects('projects')} className="m-auto font-bold text-sm md:text-base xl:text-xl cursor-pointer hover:scale-115 transition-all">{t('projects')}</p>
      <p onClick={() => handleScrollToProjects('education')} className="m-auto font-bold text-sm md:text-base xl:text-xl cursor-pointer hover:scale-115 transition-all">{t('education')}</p>
      <Link className="m-auto" href={'https://github.com/MrQreb'}><Github className="size-4 md:size-8 m-auto cursor-pointer hover:scale-125 transition-all" /></Link>
      <Link className="m-auto" href={'https://www.linkedin.com/in/jes%C3%BAs-eduardo-arias-diaz-064a8a31b/'}> <LinkedIn className="size-4 md:size-8 m-auto cursor-pointer hover:scale-125 transition-all" /></Link>
      <TranslateButton></TranslateButton>
    </section>
  );
};

export default Navbar;
