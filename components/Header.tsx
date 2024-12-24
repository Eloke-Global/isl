import Logo from "../assets/Logo.png";
import CTA from "./utils/CTA";
const HeaderButton = ({text}:{text:string}) =>{
    return (
        <button className="text-sm hover:text-[#7B2CBF]">
            {text}
        </button>
    )
}


const Header = () =>{
    return (
        <div className="w-full bg-white">
            <div className="max-w-screen-lg mx-auto flex justify-between py-3 items-center">
                <div>
                    <img src={Logo.src}/>
                </div>
                <div className="flex gap-11">
                    <HeaderButton text="Home"/>
                    <HeaderButton text="About Us"/>
                    <HeaderButton text="Case Studies"/>
                    <HeaderButton text="Blogs"/>
                    <HeaderButton text="Contact Us"/>
                </div>
                <div>
                    <CTA text="Contact us"/>
                </div>
            </div>
        </div>
    )
}

export default Header;