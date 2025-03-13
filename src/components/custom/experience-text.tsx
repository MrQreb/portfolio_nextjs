'use client';

import { useTranslations } from "next-intl";

interface ExperienceTextProps{
    years:string;
}
const ExperienceText = ({years}:ExperienceTextProps) => {
    const t =  useTranslations('Experience');
  return (
    <>
        <p className="font-bold"><span className="font-black text-xl text-green-400">+</span><span className="font-black">{years} {t('years')} </span> </p>
    </>
  )
}

export default ExperienceText
