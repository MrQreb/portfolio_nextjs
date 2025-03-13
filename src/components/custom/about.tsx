'use client';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useLocale, useTranslations } from 'next-intl';
const About = () => {

    const locale = useLocale();
    const handleDowloadPdf = () => {
        let fileUrl = '';
        if (locale === 'en') fileUrl = '/english_cv.pdf';
        if (locale === 'es') fileUrl = '/spanish_cv.pdf';
        const link = document.createElement('a');
        link.href = fileUrl;
        link.download = `Jesus Eduardo CV_${locale}.pdf`;
        link.click();
    }

    const t = useTranslations('aboutMe');
    return (
        <section className="w-[90%] md:w-[80%] h-[640px]  md:h-[450px] rounded-3xl bg-[#252424] mt-34 m-auto grid grid-rows-[40%_10%_40%_10%] md:grid-cols-[30%_70%]  md:grid-rows-[40%_10%_30%_20%]  border-1 border-gray-900 " id='about-me'>
            <div className='size-36 md:size-56 pt-2 m-auto md:mt-[25%]'>
                <Image
                    src="/me.jpeg"
                    width={200}
                    height={200}
                    alt="author image"
                    className='rounded-full'
                />
            </div>
            <div className='w-[90%] mt-4 m-auto'>
                <p className='m-auto text-center md:mt-12 font-bold text-xl md:text-4xl typewriter-text font-inter'>{t('name')}</p>
            </div>
            <div className='w-[90%] mt-6 m-auto md:col-start-2 md:col-end-4'>
                <p className="font-semibold md:text-2xl font-jetbrains mt-6 md:mt-0 text-justify leading-relaxed">
                    {t('aboutMe')}
                </p>            </div>
            <div className='flex justify-center items-center gap-12 md:col-start-1 md:col-end-5 md:row-start-4 md:row-end-4'>
                <Button onClick={handleDowloadPdf} className='font-jetbrains w-26 h-12 bg-gray-950 text-white font-black hover:bg-gray-900 hover:scale-110 transition-all cursor-pointer'>CV</Button>
            </div>
        </section>
    )
}

export default About;