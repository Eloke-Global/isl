import LogoBg from "../../assets/bg-logo.png"

const Whatwedo = () =>{
    return (
        <div className="w-full">
            <div className="max-w-screen-xl mx-auto">
                <div className="w-full border-y py-12 flex gap-12 flex-col">
                    <div className="flex">
                        <div className="flex-1">
                            hello
                        </div>
                        <div className="flex-1 relative text-[#242627] gilroy">
                            <div className="absolute top-1.5 -left-4 h-[27] w-[3] bg-[#00000026]"></div>
                            <div className="font-semibold text-[#0A0D31]">
                                <span className="text-3xl">20</span> Years
                            </div>
                            Proven Track Record
                        </div>
                        <div className="flex-1 relative text-[#242627] gilroy">
                            <div className="absolute top-1.5 -left-4 h-[27] w-[3] bg-[#00000026]"></div>
                            <div className="font-semibold text-[#0A0D31]">
                                <span className="text-3xl">98%</span>
                            </div>
                            Customer Satisfaction
                        </div>
                        <div className="flex-1 relative text-[#242627] gilroy">
                            <div className="absolute top-1.5 -left-4 h-[27] w-[3] bg-[#00000026]"></div>
                            <div className="font-semibold text-[#0A0D31] text-lg">
                                <span className="text-3xl">500+</span> Projects
                            </div>
                            Completed
                        </div>
                        <div className="flex-1 relative text-[#242627] gilroy">
                            <div className="absolute top-1.5 -left-4 h-[27] w-[3] bg-[#00000026]"></div>
                            <div className="font-semibold text-[#0A0D31]">
                                <span className="text-3xl">80+</span>
                            </div>
                            Awards & Achievements
                        </div>
                    </div>
                    <div className="relative overflow-hidden flex-1 bg-[#11002C] flex justify-between flex-col rounded p-6 text-white min-h-[360px]">
                        <div className="px-3 py-2 bg-[#7B2CBF] max-w-fit rounded text-xs">
                            WHAT WE DO
                        </div>
                        <div className="text-5xl">
                            Simplifying IT <br /> for a complex world.
                        </div>
                        <img className="h-[534px] absolute top-[100px] -right-8" src={LogoBg.src} alt="" />
                    </div>
                    <div className="flex pt-8 gap-4 text-[#0A0D31]">
                        <div className="flex-1">
                            <div className="text-xl ">Cost-effectiveness</div>
                            <div className="pt-6 text-xs gilroy text-[#00000099]">
                                We offer affordable IT solutions that help you reduce costs and improve your bottom line.
                            </div>
                        </div>
                        <div className="flex-1">
                            <div className="text-xl">Innovative Technology</div>
                            <div className="pt-6 text-xs gilroy text-[#00000099]">
                                We stay up-to-date with the latest
                                technology trends and offer innovative
                                solutions that help you stay ahead of
                                the competition.    
                            </div>
                        </div>
                        <div className="flex-1">
                            <div className="text-xl">Industry Expertise</div>
                            <div className="pt-6 text-xs gilroy text-[#00000099]">
                                We specialize in serving specific
                                industries, such as healthcare, finance,
                                or manufacturing, and offer tailored
                                solutions that meet your unique needs.    
                            </div>
                        </div>
                        <div className="flex-1">
                            <div className="text-xl">Scalability</div>
                            <div className="pt-6 text-xs gilroy text-[#00000099]">
                                Our solutions are scalable and can grow
                                with your business, ensuring that you
                                get the most value out of your
                                investment.    
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-9 text-xs">
                    <span className="border-b-2 text-[#7B2CBF] py-1 cursor-pointer">
                        About Invent Softlabs
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Whatwedo;