
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { stack } from '../../svgs/technologies'
import { Link } from "@/i18n/navegation"

const Stack = () => {
    return (
        <section className="w-full mt-12">
            <h2 className="text-4xl md:text-5xl text-center font-bold">Stack</h2>

            <div className="mt-4 w-[90%] md:w-[80%] h-[300px] md:h-[425px] rounded-xl bg-[#252424] m-auto flex justify-center items-center">
                <Carousel className="w-[80%]">
                    <CarouselContent className="-ml-1">
                        {stack.map((item, index) => (
                            <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
                                <div className="p-1">
                                    <Card className="h-[250px] md:h-[320px] rounded-4xl bg-[#1a1a1a] boder border-gray-950">
                                        <CardContent className="flex flex-col aspect-square items-center justify-center p-6 w-full h-full gap-6">
                                            <span className="text-4xl md:text-5xl text-center font-bold ">{item.name}</span>
                                            <Link href={item.documentation}><item.image className="size-16 md:size-24 hover:scale-110 transition-all" /></Link>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>

        </section>
    )
}

export default Stack
