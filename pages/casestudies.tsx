import PageLayout from "@/layouts/PageLayout"
import SuccessCard from "@/components/utils/SuccessCard"


const STORIES = [
    {
        "category": "Cloud Hosting",
        "heading": "Major Insurance Provider Saves $750k per Month With Big Data Migration",
        "description": "The company needed to complete a complex migration of a light database to avoid millions of dollars in post-connect fees and fines.",
        "services": [
            "Modern Infrastructure",
            "Consulting services"
        ]
    },
    {
        "category": "IT Consulting",
        "heading": "Maximizing Efficiency with Proper Technology Implementation - Coffee Success Story",
        "description": "The company needed to complete a complex migration of a light database to avoid millions of dollars in post-connect fees and fines.",
        "services": [
            "Modern Infrastructure",
            "Consulting services"
        ]
    },
    {
        "category": "Mobile Development",
        "heading": "Strategic Move to an AI-supported application for Public Safety Travel App in London",
        "description": "Travel confidently around London with maps and live travel updates. Our reliable journey planner will help you with a safe route.",
        "services": [
            "Modern Infrastructure",
            "Consulting services"
        ]
    },
    {
        "category": "App Development",
        "heading": "Convenience, savings, and rewards at your fingertips",
        "description": "Paysafe's fast-paced expansion had resulted in a lack of process consistency & standardization across their acquired brands.",
        "services": [
            "Digital transformation",
            "Consulting services"
        ]
    },
    {
        "category": "App Development",
        "heading": "Private trust management and trading platform",
        "description": "The company needed to complete a complex migration of a light database to avoid millions of dollars in post-connect fees and fines.",
        "services": [
            "Modern Infrastructure",
            "Consulting services"
        ]
    },
    {
        "category": "App Development",
        "heading": "Online platform for distance learning",
        "description": "Travel confidently around London with maps and live travel updates. Our reliable journey planner will help a safe route.",
        "services": [
            "Modern Infrastructure",
            "Consulting services"
        ]
    },
    {
        "category": "Digital Transformation",
        "heading": "Delivering enterprise-wide efficiencies at Paysafe through Intelligent Automation",
        "description": "Paysafe's fast-paced expansion had resulted in a lack of process consistency & standardization across their acquired brands.",
        "services": [
            "Digital transformation",
            "International growth"
        ]
    },
    {
        "category": "iGaming",
        "heading": "Bringing premium live casino experiences to gamers across the globe",
        "description": "Authentic first partnered with Novologix January 2021, following their rebrand from another of our clients in the iGaming industry",
        "services": [
            "Digital transformation",
            "iGaming"
        ]
    },
    {
        "category": "Infrastructure",
        "heading": "Building, optimising, and future-proofing existing infrastructures with payment gateways",
        "description": "Core to growing a gaming company is a robust payments infrastructure.",
        "services": [
            "Cyber Security",
            "Consulting services"
        ]
    }
]

const Container = () =>{
    return (
        <div className="w-full">
            <div className="max-w-screen-xl mx-auto py-9">
                <div className="flex flex-col items-center">
                    <div className="rounded uppercase p-2 text-[10px] max-w-fit font-semibold bg-[#F5F5F5] text-[#5F6567]">
                        case studies
                    </div>
                    <div className=" text-[#0A0D31] text-6xl font-semibold pt-6 pb-14">
                        Featured case studies
                    </div>
                    <div className="flex justify-center gap-[30px] gap-y-[30px] flex-wrap">
                        {
                            STORIES.map((data,index)=>(
                                <SuccessCard key={index} cat={data.category} title={data.heading} desc={data.description}/>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}


const CaseStudies = () =>{
    return (
        <PageLayout>
            <Container/>

        </PageLayout>
    )
}

export default CaseStudies;