
const SuccessCard = ({cat,title,desc}:{cat:string,title:string,desc:string}) =>{
    return (
        <div className="flex-1 text-[#242627] border-[#00000026] rounded-xl border p-5 flex flex-col justify-between min-w-[325px] max-w-[325px]">
            <div>
                <div className="w-full aspect-video bg-blue-500 rounded-lg"></div>
                <div className="px-4 pt-5">
                    <div className="text-xs text-[#ADADAD]">{cat.toUpperCase()}</div>
                    <div className="pt-3.5 pb-6 font-semibold text-lg">
                        {title}
                    </div>
                    <div className="gilroy">
                        {desc}
                    </div>
                </div>
            </div>
            <button className="mt-8 ml-4 text-left max-w-fit text-sm mb-2">
                Learn More
            </button>
        </div>
    )
}

export default SuccessCard;