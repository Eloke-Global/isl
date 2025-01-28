const BenefitItem = ({ text }:{text:string}) => (
    <div className="flex gap-3 items-center">
        <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.560059 9.87939C0.560059 8.63721 0.794434 7.47119 1.26318 6.38135C1.73193 5.2915 2.37354 4.33936 3.18799 3.5249C4.00244 2.71045 4.96045 2.06885 6.06201 1.6001C7.15186 1.11963 8.31787 0.879395 9.56006 0.879395C10.8022 0.879395 11.9683 1.11963 13.0581 1.6001C14.1597 2.06885 15.1177 2.71045 15.9321 3.5249C16.7466 4.33936 17.3882 5.2915 17.8569 6.38135C18.3257 7.47119 18.5601 8.63721 18.5601 9.87939C18.5601 11.1216 18.3257 12.2935 17.8569 13.395C17.3882 14.4849 16.7466 15.437 15.9321 16.2515C15.1177 17.0659 14.1597 17.7075 13.0581 18.1763C11.9683 18.645 10.8022 18.8794 9.56006 18.8794C8.31787 18.8794 7.15186 18.645 6.06201 18.1763C4.96045 17.7075 4.00244 17.0659 3.18799 16.2515C2.37354 15.437 1.73193 14.4849 1.26318 13.395C0.794434 12.2935 0.560059 11.1216 0.560059 9.87939ZM13.6382 8.33252C13.7085 8.23877 13.7642 8.13916 13.8052 8.03369C13.8462 7.92822 13.8667 7.81104 13.8667 7.68213C13.8667 7.4126 13.77 7.18115 13.5767 6.98779C13.3833 6.79443 13.146 6.69775 12.8647 6.69775C12.7476 6.69775 12.6333 6.71826 12.522 6.75928C12.4106 6.80029 12.314 6.86182 12.2319 6.94385L8.43506 10.7407L6.88818 9.19385C6.79443 9.1001 6.68896 9.02686 6.57178 8.97412C6.45459 8.92139 6.32568 8.89502 6.18506 8.89502C5.91553 8.89502 5.68408 8.9917 5.49072 9.18506C5.29736 9.37842 5.20068 9.61572 5.20068 9.89697C5.20068 10.0259 5.22412 10.1519 5.271 10.2749C5.31787 10.3979 5.38818 10.5005 5.48193 10.5825L7.73193 12.8325C7.93115 13.02 8.16553 13.1138 8.43506 13.1138C8.70459 13.1138 8.93896 13.02 9.13818 12.8325L13.6382 8.33252Z" fill="#7B2CBF"/>
        </svg>
        {text}
    </div>
  );

const BenefitsList = () => {
    const leftBenefits = ['Client Oriented', 'Independent', 'Competent'];
    const rightBenefits = ['Results Driven', 'Problem Solving', 'Transparent'];

    return (
        <div className="flex gap-20">
            <div className="flex-col flex gap-3">
                {leftBenefits.map((quality, index) => (
                    <BenefitItem key={index} text={quality} />
                ))}
            </div>
            <div className="flex-col flex gap-3">
                {rightBenefits.map((quality, index) => (
                    <BenefitItem key={index} text={quality} />
                ))}
            </div>
        </div>
    );
};

// const FormInput = () =>{
//     return (
//         <div className="">
//             <input type="text" />
//         </div>
//     )
// }

const FloatingForm = () =>{
    return (
        <div className="absolute w-1/2 left-1/2 top-0 h-full flex">
            <div className="w-1/12"></div>
            <div className="flex-1 bg-white rounded mt-40 mb-20 shadow-sm relative">
                <div className="w-full text-center py-6 text-lg font-semibold border border-[#00000026]">Schedule a Free Consultation</div>
                <div className="px-9 py-6">
                    Heyy
                </div>
            </div>
            <div className="w-1/12"></div>
        </div>
    )
}

const Contactus = () =>{
    return (
        <div className="w-full rounded pb-[100px]">
            <div className="max-w-[1320px] mx-auto w-full relative">
                <FloatingForm/>
                <div className="h-[360px] bg-[#11002C] p-10 flex flex-col justify-between">
                    <div className="rounded p-2 text-[10px] max-w-fit font-semibold bg-[#00000026] text-[#DEE0FF]">
                        CONTACT US
                    </div>
                    <div className="font-semibold text-5xl text-white">
                        Partner with Us for <br />
                        Comprehensive IT
                    </div>
                </div>
                <div className="bg-[#F5F5F5] p-8 flex flex-col gap-14 text-[#242627] pb-40">
                    <div className="text-xl">
                        We’re happy to answer any questions you may have and help <br />
                        you determine which of our services best fit your needs.
                    </div>
                    <div className="text-[#0A0D31] text-lg font-semibold">
                        Call us at: 1-800-356-8933
                    </div>
                    <div className="flex flex-col gap-5">
                        <div className="text-[#0A0D31] text-lg font-semibold">Your Benefits</div>
                        <BenefitsList/>
                    </div>
                    <div className="text-lg font-semibold">
                        What happens next?
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contactus;