const IndustryTags = ({text}:{text:string}) =>{
    return (
        <div className="rounded-full bg-[#F5F5F5] flex gap-3 items-center pr-4 text-sm font-medium">
            <div className="h-[50px] w-[50px] bg-[#DEE0FF] rounded-full"></div>
            {text}
        </div>
    )
}

const Industries =()=>{
    return (
        <div className="w-full pb-32">
            <div className="max-w-[750px] mx-auto">
                <div className="rounded p-2 text-[10px] max-w-fit font-semibold bg-[#F5F5F5] text-[#5F6567]">
                    WHAT WE DO
                </div>
                <div className="font-semibold text-5xl pt-5 pb-12">
                    Solving IT challenges in every industry, every day.
                </div>
                <div className="flex flex-wrap gap-5">
                    <IndustryTags text="Industry & Manufacturing"/>
                    <IndustryTags text="Transportation & Logistics"/>
                    <IndustryTags text="Healthcare"/>
                    <IndustryTags text="Banks & Insurance"/>
                    <IndustryTags text="Consulting Providers"/>
                    <IndustryTags text="Non-Profit"/>
                </div>
                <button className="text-[#7B2CBF] mt-8 text-sm border-b-2 border-b-[#DEE0FF]">
                    View all Industries
                </button>
            </div>
        </div>
    )
}

export default Industries;