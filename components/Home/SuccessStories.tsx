import SuccessCard from "../utils/SuccessCard";

const STORIES = [
    {
        "category": "Cloud Hosting",
        "heading": "Major Insurance Provider Saves $250 per Month With Big Data",
        "description": "The company needed to complete a complex migration of a light database to avoid millions of process inefficiency & lost time and costs",
        "services": [
            "Modern Infrastructure",
            "Consulting services"
        ]
    },
    {
        "category": "IT Consulting",
        "heading": "Maximizing Efficiency with Proper Technology Implementation - Coffee Brand Success",
        "description": "The company needed to complete a complex migration of a light database to avoid millions of process inefficiency & lost time and costs",
        "services": [
            "Modern Infrastructure",
            "Consulting services"
        ]
    },
    {
        "category": "Mobile Development",
        "heading": "Strategic Move to an AI-supported Underground Public Safety Travel App in London",
        "description": "Travel confidently around London with maps and live travel updates. Our mobile journey planner will help you with routes",
        "services": [
            "Modern Infrastructure",
            "Consulting services"
        ]
    },
]


const SuccessStories = () =>{
    return (
        <div className="w-full">
            <div className="max-w-screen-xl mx-auto py-36">
                <div className="rounded p-2 text-[10px] max-w-fit font-semibold bg-[#F5F5F5] text-[#5F6567]">
                    WHERE WE DO
                </div>
                <div className="text-5xl font-semibold pt-5 pb-10">
                    Success Stories
                </div>
                <div className="flex justify-center gap-[30px]">
                    {
                        STORIES.map((data,index)=>(
                            <SuccessCard key={index} cat={data.category} title={data.heading} desc={data.description}/>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default SuccessStories;