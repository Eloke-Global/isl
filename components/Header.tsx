"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Logo from "../assets/Logo.png";
import CTA from "./utils/CTA";

const HeaderButton = ({ text, isActive, href }: { text: string; isActive: boolean; href: string }) => {
  return (
    <Link href={href}>
      <button 
        className={`text-sm transition-colors duration-200 ${
          isActive 
            ? "text-[#7B2CBF]" 
            : "hover:text-[#7B2CBF]"
        }`}
      >
        {text}
      </button>
    </Link>
  );
};

const Header = () => {
  const pathname = usePathname();
  
  const navigationItems = [
    { text: "Home", path: "/" },
    { text: "About Us", path: "/about" },
    { text: "Case Studies", path: "/casestudies" },
    { text: "Blogs", path: "/blog" },
    { text: "Contact Us", path: "/contact" },
  ];

  return (
    <div className="w-full bg-white sticky top-0 z-50 shadow-sm">
      <div className="max-w-screen-xl mx-auto flex justify-between py-3 items-center px-4">
        <Link href="/">
          <div className="w-32">
            <Image
              src={Logo}
              alt="Logo"
              width={128}
              height={40}
              priority
            />
          </div>
        </Link>
        
        <div className="hidden md:flex gap-11">
          {navigationItems.map((item) => (
            <HeaderButton
              key={item.text}
              text={item.text}
              href={item.path}
              isActive={pathname === item.path}
            />
          ))}
        </div>

        <div className="hidden md:block">
          <Link href="/contact">
            <CTA text="Contact us" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M4 6h16M4 12h16m-7 6h7" 
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Header;