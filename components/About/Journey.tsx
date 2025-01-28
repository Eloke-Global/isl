import Begining from "../../assets/aboutus/Begning.png"
import Mission from "../../assets/aboutus/Mission.png"
import Global from "../../assets/aboutus/Global.png"

const MILESTONES = [
    {
        img: Begining,
        title: "The Begining",
        desc: `The Invent SoftLabs journey began in 2004
            when two college friends, John Salivan and
            Kris Klopperman got together and started
            selling computers and engineering
            calculators.`,
    },
    {
        img: Mission,
        title: "Mission",
        desc: `At Invent, we’re on a mission to bring
together the personal service of local IT
providers with the power of a national
network. We believe that’s simpler than it
sounds. Our offices offer high-touch IT
services that clients love from highly
experienced local team members.`,
    },
    {
        img: Global,
        title: "We are Global",
        desc: `Our national network allows us to offer
best-in-class services like dedicated vCIOs,
specialized security and compliance
advisory services, a 24/7 help desk, and
more.`,
    }
]

const Milestone = ({ milestone, isReversed }) => {
    const ContentSection = () => (
        <div className={`py-10 flex flex-col justify-center w-[400px] max-w-[400px] ${isReversed ? 'pr-[88px]' : 'pl-[88px]'}`}>
            <div className="text-[#0A0D31] text-2xl font-semibold pb-6">
                {milestone.title}
            </div>
            <div className="text-[#00000099]">
                {milestone.desc}
            </div>
        </div>
    )

    const ImageSection = () => (
        <div className={`py-10 ${isReversed ? 'pl-[88px]' : 'pr-[89px]'}`}>
            <img src={milestone.img.src} alt={milestone.title} />
        </div>
    )

    return (
        <div className={`flex ${isReversed ? 'flex-row-reverse' : ''}`}>
            <ImageSection />
            <div className="w-[1px] bg-[#00000026] relative">
                <div className="absolute h-4 w-4 z-20 top-1/2 -left-2 rounded-full border-2 border-[#7B2CBF] flex items-center justify-center">
                    <div className="rounded-full h-2 w-2 bg-[#7B2CBF]"></div>
                </div>
            </div>
            <ContentSection />
        </div>
    )
}

const Journey = () => {
    return (
        <div className="w-full">
            <div className="max-w-[800px] mx-auto">
                <div className="flex flex-col items-center">
                    {MILESTONES.map((milestone, index) => (
                        <Milestone 
                            key={index} 
                            milestone={milestone} 
                            isReversed={index % 2 !== 0}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Journey;