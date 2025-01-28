import PartnersImg from "../../assets/HomePartners.png"

const Partners = () =>{
    return (
        <div className="w-full">
            <div className="max-w-[1320px] mx-auto py-20">
                <div className="flex">
                    <div className="flex-1 flex flex-col justify-center">
                        <div className="rounded p-2 text-[10px] max-w-fit max-h-fit font-semibold bg-[#F5F5F5] text-[#5F6567]">
                            PARTNERS
                        </div>
                        <div className="text-5xl pt-5 pb-6">
                            Recognized by the best
                        </div>
                        <div className="text-xl text-[#00000099]">
                            The company needed to complete a complex <br />
                            migration on a tight deadline to avoid millions of <br />
                            dollars in post-contract fees and fines.
                        </div>
                    </div>
                    <div className="flex-1 flex items-center">
                        <img src={PartnersImg.src}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Partners;