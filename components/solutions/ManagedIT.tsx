import Banner from "../../assets/SolutionsManagedImg.png"

const ManagedIT = ()=>{
    return (
        <div className="w-full">
            <div className="max-w-screen-xl mx-auto py-[100px] flex">
                <img src = {Banner.src}/>
                <div className="flex-1 flex flex-col justify-center px-16 gap-6">
                    <div className="text-[#0A0D31] text-[28px] font-semibold">
                        Our managed IT services let you <br />
                        concentrate on what matters.
                    </div>
                    <div className="text-[#00000099]">
                        Are you busy putting out IT fires instead of focusing on your core
                        business? If your technology is draining resources rather than
                        optimizing them, Netsurit can get you back on track. A professionally
                        managed services provider can give you the decisive edge to:
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ManagedIT;