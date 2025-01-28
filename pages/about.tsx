import BetterTogether from "@/components/About/BetterTogether";
import Journey from "@/components/About/Journey";
import OurValues from "@/components/About/OurValues";
import WhyUs from "@/components/About/Whyus";
import PageLayout from "@/layouts/PageLayout";


const Hero = () =>{
    return (
        <div className="w-full">
            <div className="max-w-screen-xl mx-auto">
                <div className="flex flex-col gap-5 items-center pt-9 pb-[72px]">
                    <div className="rounded p-2 text-[10px] max-w-fit font-semibold bg-[#F5F5F5] text-[#5F6567] uppercase">
                        About
                    </div>
                    <div className="text-center font-semibold text-6xl text-[#0A0D31]">
                        Dedicated to delivering <br />
                        excellence
                    </div>
                    <div className="text-[#00000099] text-xl">
                        Everyone has a story. Here is ours.
                    </div>
                </div>
            </div>
        </div>
    )
}

const About = () =>{
    return (
        <PageLayout>
            <Hero/>
            <Journey/>
            <WhyUs/>    
            <OurValues/>
            <BetterTogether/>
        </PageLayout>
    )
}

export default About;