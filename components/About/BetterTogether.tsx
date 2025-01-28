import Img from "../../assets/aboutus/BetterTogether.png"

const PurpleCTA = ({text})=>{
    return (
        <button className="bg-[#7B2CBF] px-6 py-4 text-xs max-w-fit text-white rounded">
            {text}
        </button>
    )
}

const BetterTogether = () =>{
    return (
        <div className="w-full pb-28">
            <div className="max-w-screen-xl mx-auto">
                <div className="flex justify-between">
                    <div className="flex flex-col justify-center flex-1">
                        <div className="text-5xl font-semibold text-[#0A0D31]">
                            Better together
                        </div>
                        <div className="flex flex-col gap-5 text-[#00000099] pr-12 pt-10 pb-8">
                            <div>
                                We know that work is important, but so is play! We respect all of
                                our partnerships, and we make every effort to engage in fun
                                ways that solve critical problems and leave a smile on your face
                                at the same time.
                            </div>
                            <div>
                                We love our job and love helping our clients. Life is just too short
                                to not enjoy every minute!
                            </div>
                        </div>
                        <PurpleCTA text="Get in Touch"/>
                    </div>
                    <img src={Img.src}/>
                </div>
            </div>
        </div>
    )
}

export default BetterTogether;