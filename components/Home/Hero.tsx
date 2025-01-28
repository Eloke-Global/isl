import CTA from "../utils/CTA";

const Hero = () =>{
    return (
        <div className="w-full bg-white">
            <div className="max-w-screen-xl mx-auto py-20 flex items-center flex-col gap-12">
                <div className="font-bold text-center text-6xl leading-tight text-[#0A0D31]">
                    Transforming Ideas to <br />
                    <span className="text-[#7B2CBF]">
                        Impactful Business.
                    </span>
                </div>
                <div className="text-3xl">
                    Take charge of your business continuity with innovative IT solutions
                </div>
                <div className="flex gap-10">
                    <CTA text="Schedule a free Consultation"/>
                    <CTA text="Services" variant="secondary"/>
                </div>
            </div>
        </div>
    )
}

export default Hero;