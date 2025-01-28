import Background from "../../assets/SolutionsBenefitsBG.png"

const BENEFITS = [
    {
        title: "IT Service for You",
        desc: "We know that every businesses' needs are completely different from the next, so we offer packages for any business size or budget.",
    },
    {
        title: "Keeping Your Team Productive",
        desc: "Our managed services include round-the-clock monitoring of your key infrastructure, computers and network servers.",
    },
    {
        title: "Predictable Costs 24/7",
        desc: "We doesn't charge you more when your network is down or a server fails. Our flat-rate fee programs covers all of that whenever you need it done.",
    },
    {
        title: "Our Team is Ready to Help",
        desc: "Part of what makes our managed services so exceptional is that we are always available, regardless of time or holiday.",
    }
];


const Benefit = ({benefit})=>{
    return (
        <div className="flex-1 p-2">
            <div className="text-[#0A0D31] text-lg font-semibold flex gap-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 12.2122C0 10.5559 0.3125 9.00122 0.9375 7.5481C1.5625 6.09497 2.41797 4.82544 3.50391 3.7395C4.58984 2.65356 5.86719 1.7981 7.33594 1.1731C8.78906 0.532471 10.3438 0.212158 12 0.212158C13.6562 0.212158 15.2109 0.532471 16.6641 1.1731C18.1328 1.7981 19.4102 2.65356 20.4961 3.7395C21.582 4.82544 22.4375 6.09497 23.0625 7.5481C23.6875 9.00122 24 10.5559 24 12.2122C24 13.8684 23.6875 15.4309 23.0625 16.8997C22.4375 18.3528 21.582 19.6223 20.4961 20.7083C19.4102 21.7942 18.1328 22.6497 16.6641 23.2747C15.2109 23.8997 13.6562 24.2122 12 24.2122C10.3438 24.2122 8.78906 23.8997 7.33594 23.2747C5.86719 22.6497 4.58984 21.7942 3.50391 20.7083C2.41797 19.6223 1.5625 18.3528 0.9375 16.8997C0.3125 15.4309 0 13.8684 0 12.2122ZM17.4375 10.1497C17.5312 10.0247 17.6055 9.89185 17.6602 9.75122C17.7148 9.6106 17.7422 9.45435 17.7422 9.28247C17.7422 8.9231 17.6133 8.6145 17.3555 8.35669C17.0977 8.09888 16.7812 7.96997 16.4062 7.96997C16.25 7.96997 16.0977 7.99731 15.9492 8.052C15.8008 8.10669 15.6719 8.18872 15.5625 8.2981L10.5 13.3606L8.4375 11.2981C8.3125 11.1731 8.17188 11.0754 8.01562 11.0051C7.85938 10.9348 7.6875 10.8997 7.5 10.8997C7.14062 10.8997 6.83203 11.0286 6.57422 11.2864C6.31641 11.5442 6.1875 11.8606 6.1875 12.2356C6.1875 12.4075 6.21875 12.5754 6.28125 12.7395C6.34375 12.9036 6.4375 13.0403 6.5625 13.1497L9.5625 16.1497C9.82812 16.3997 10.1406 16.5247 10.5 16.5247C10.8594 16.5247 11.1719 16.3997 11.4375 16.1497L17.4375 10.1497Z" fill="#7B2CBF"/>
                </svg>
                {benefit.title}
            </div>
            <div className="text-[#00000099] text-sm pl-10 pt-2">
                {benefit.desc}
            </div>
        </div>
    )
}

const Benefits = () =>{
    return (
        <div className="w-full py-[100px]">
            <div className="max-w-screen-xl mx-auto">
                <div className=" flex gap-24">
                    <div className="flex-1 flex flex-col justify-center">
                        <div className="text-[28px] font-semibold text-[#0A0D31]">
                            Benefits of managed IT services <br />
                            provided by Invent
                        </div>
                        <div className="text-[#00000099] pt-5">
                            Are you busy putting out IT fires instead of focusing on your core business? If your technology is 
                            draining resources rather than optimizing them, Netsurit can get you back on track. A 
                            professionally managed services provider can give you the decisive edge to: 
                        </div>
                        <div className="text-[#00000099] pl-8 pt-6 pb-12">
                            <ul className="list-disc">
                                <li>
                                    Grow your business while our experts handle your technology.
                                </li>
                                <li>
                                    Get more done with information technology that increases productivity and efficiency.
                                </li>
                                <li>
                                    Eliminate budgeting surprises with a flat monthly rate for comprehensive IT coverage.
                                </li>
                                <li>
                                    Protect your business and your data from unexpected problems and unwanted intruders.
                                </li>
                            </ul>
                        </div>
                        <div className="flex flex-col gap-8">
                            <div className="flex gap-8">
                                <Benefit benefit={BENEFITS[0]}/>
                                <Benefit benefit={BENEFITS[1]}/>
                            </div>
                            <div className="flex gap-8">
                                <Benefit benefit={BENEFITS[2]}/>
                                <Benefit benefit={BENEFITS[3]}/>
                            </div>
                        </div>
                    </div>
                    <img src={Background.src} className="w-[512px]"/>
                </div>
            </div>
        </div>
    )
}

export default Benefits;