import CTA from "@/components/utils/CTA";
import PageLayout from "@/layouts/PageLayout";
import Benefits from "@/components/solutions/Benefits";
import ManagedIT from "@/components/solutions/ManagedIT";
const Hero = ()=>{
    return (
        <div className="w-full bg-[#11002C] pt-24 pb-16 text-white">
            <div className="max-w-screen-xl mx-auto">
                <div className="rounded p-2 text-[10px] max-w-fit font-semibold bg-[#7B2CBF] text-[#DEE0FF] uppercase">
                    Solutions
                </div>
                <div className="text-5xl font-semibold pt-5 pb-7">
                    IT Consulting & Advisory
                </div>
                <div className="text-3xl pb-7">
                    Why hire an internal IT person, when you can have an <br /> 
                    entire team of IT experts for a fraction of the cost?
                </div>
                <CTA text="Schedule a Free Consultation"/>
            </div>
        </div>
    )
}



const Solutions = () =>{
    return (
        <PageLayout>
            <Hero/>
            <Benefits/>
            <ManagedIT/>
        </PageLayout>
    )
}

export default Solutions;