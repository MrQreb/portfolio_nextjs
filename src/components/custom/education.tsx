"use client"
import { GraduationCap, Calendar, MapPin } from "lucide-react"
import { useTranslations } from "next-intl"

type EducationItem = {
    degree: string
    institution: string
    period: string
    location: string
    description: string
}




const Education = () => {
    const t = useTranslations('Education');


    
    const educationData: EducationItem[] = [
        {
            degree: t('institution1.degree'),
            institution:  "Instituto Tecnológico Superior de Irapuato",
            period: "2021 - 2025",
            location: "Irapuato, Guanjuato",
            description:  t('institution1.description'),
        },
        {
            degree: t('institution2.degree'),
            institution: "Centro de Bachillerato Tecnológico Industrial y de Servicios",
            period: "2018 - 2021",
            location: "Irapuato, Guanjuato",
            description: t('institution2.description'),
        },
    ]
    

    return (
        <section
            id="education"
            className="w-[90%] md:w-[80%] rounded-3xl bg-[#252424] my-10 m-auto p-8 border border-gray-900"
        >
            <h2 className="text-center font-bold text-2xl md:text-4xl mb-8 font-inter">
                {t('title')}
            </h2>

            <div className="grid gap-8 md:grid-cols-2 font-jetbrains">
                {educationData.map((item, index) => (
                    <div
                        key={index}
                        className="bg-[#1e1e1e] p-6 rounded-xl hover:scale-[1.02] transition-all"
                    >
                        <div className="flex items-center gap-3 mb-3">
                            <GraduationCap className="h-6 w-6 text-white" />
                            <h3 className="font-bold text-xl">
                                {item.degree}
                            </h3>
                        </div>

                        <p className="text-gray-300 font-semibold mb-4">
                            {item.institution}
                        </p>

                        <div className="flex items-center gap-2 text-gray-400 mb-2">
                            <Calendar className="h-4 w-4" />
                            <span className="text-sm">
                                {item.period}
                            </span>
                        </div>

                        <div className="flex items-center gap-2 text-gray-400 mb-4">
                            <MapPin className="h-4 w-4" />
                            <span className="text-sm">
                                {item.location}
                            </span>
                        </div>

                        <p className="text-gray-200 text-justify leading-relaxed">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Education