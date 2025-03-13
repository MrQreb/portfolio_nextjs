import { Github } from "@/helpers/svgs";
import { Link } from "@/i18n/navegation";




interface ProjectContainerProps {
    image: React.ReactNode;
    title:string;
    text: string;
    technologies: object;
    hasRepository?: boolean
    repositoryLink?: string;
}

const ProjectContainer = ({
    image,
    technologies,
    title,
    text,
    hasRepository = false,
    repositoryLink = ''
}: ProjectContainerProps) => {

    const totalTechnologies = Object.keys(technologies).length;

    return (
        <>
        
            <p className='m-auto text-center mt-8 text-xl lg:text-2xl font-semibold'>{title}</p>

            <div className="mt-8 w-[90%] md:w-[80%] h-[550px] md:h-[400px] rounded-xl bg-[#252424] m-auto grid grid-rows-[50%_30%_20%]
                        md:grid-cols-[30%_70%] md:grid-rows-[10%_60%_30%] relative">
                <div className="m-auto md:row-start-2">
                    {image}
                </div>

                <div className="m-auto w-[90%] text-justify mb-12 h-28 md:col-start-2 md:col-end-3 md:row-start-2">
                    <p className="md:text-xl">{text}</p>
                </div>
                <div className="bg-[#3D3C3C] w-[70%] m-auto rounded-2xl h-[60px] md:h-[75px] flex justify-center gap-4 md:row-start-3 md:col-start-2 mt-4">
                    {Object.values(technologies).map((Component: React.ElementType, index: number) => (
                        <Component key={index} className={`m-auto ${totalTechnologies > 4 ? 'size-7 md:size-12' : 'size-10 md:size-14'} hover:scale-110 md:hover:scale-120 transition-all`} />
                    ))}
                </div>
                {hasRepository && <Link href={repositoryLink}> <Github className="absolute bottom-1 right-1 md:bottom-3 md:right-3 size-10 md:size-13 cursor-pointer hover:scale-115 transition-all" /> </Link>}
            </div>
        </>
    );
};

export default ProjectContainer;