import Img from "../assets/Footer Right.png"
import {  Linkedin, Github, Twitter, Facebook, Youtube } from 'lucide-react';

const FooterButton = ({text}:{text:string})=>{
    return (
        <button className="text-sm max-w-fit">
            {text}
        </button>
    )
}

const Footer = () =>{
    const Icons = [
        {
          name: "Linkedin",
          icon: Linkedin
        },
        {
          name: "Github",
          icon: Github
        },
        {
          name: "Twitter",
          icon: Twitter
        },
        {
          name: "Facebook",
          icon: Facebook
        },
        {
          name: "Youtube",
          icon: Youtube
        },
    ];
    return (
        <>
            <div className="w-full bg-[#11002C]">
                <div className="max-w-[1320px] mx-auto flex py-16">
                    <div className="flex-1 ">
                        <div className="flex flex-col gap-10">
                            <div className="">
                                <div className="text-xl text-white pb-5">Solutions</div>
                                <div className="flex text-[#F5F5F1B2]">
                                    <div className="w-[320px] flex flex-col gap-2">
                                        <FooterButton text={"Managed Services"}/>
                                        <FooterButton text={"IT Consulting & Advisory"}/>
                                        <FooterButton text={"Cyber Security"}/>
                                        <FooterButton text={"Web Development"}/>
                                    </div>
                                    <div className="w-[320px] flex flex-col gap-2">
                                        <FooterButton text={"Mobile Development"}/>
                                        <FooterButton text={"Cloud Services"}/>
                                        <FooterButton text={"Network Connectivity"}/>
                                        <FooterButton text={"ERP Solutions"}/>
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <div className="text-xl text-white pb-5">Company</div>
                                <div className="flex text-[#F5F5F1B2]">
                                    <div className="w-[320px] flex flex-col gap-2">
                                        <FooterButton text={"About Us"}/>
                                        <FooterButton text={"Why"}/>
                                        <FooterButton text={"Team"}/>
                                        <FooterButton text={"Careers"}/>
                                        <FooterButton text={"Partners and Certifications"}/>
                                        <FooterButton text={"Reviews and Awards"}/>
                                    </div>
                                    <div className="w-[320px] flex flex-col gap-2">
                                        <FooterButton text={"Blog"}/>
                                        <FooterButton text={"Cases Studies"}/>
                                        <FooterButton text={"Events"}/>
                                        <FooterButton text={"FAQ"}/>
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                J
                            </div>
                        </div>
                    </div>
                    <div className="flex-1">
                        <img src={Img.src}/>
                    </div>
                </div>
            </div>
            <div className="mx-auto max-w-[1320px] bg-white">
                <div className="flex justify-between py-7">
                    <div className="flex flex-1 justify-around items-center text-sm">
                        <div className="border-l-[3px] border-gray-300 pl-5 max-h-min">
                            Seventh Ave, 20th Floor <br />
                            New York, NY 10018 
                        </div>
                        <div className="border-l-[3px] border-gray-300 pl-5 max-h-min">
                            T: 1-800-356-8933 <br />
                            E: info@inventsoftlabs.com 
                        </div>
                    </div>
                    <div className="flex gap-11">
                        {
                            Icons.map(({name, icon:Icon})=>(
                                <div key={name} className="cursor-pointer flex flex-col items-center gap-2">
                                    <Icon/>
                                    {name}
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="text-center text-sm py-4 flex items-center justify-center gap-4">
                    <span>
                        © 2024 Invent SoftLabs. All rights reserved.
                    </span>
                    <span>
                        Terms & Conditions
                    </span>
                    <span>
                        Privacy Policy
                    </span>
                </div>
            </div>
        </>
    )
}

export default Footer;