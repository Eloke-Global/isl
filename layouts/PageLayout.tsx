import Header from "@/components/Header";
import "../app/globals.css";
import Footer from "@/components/Footer";
import Contactus from "@/components/Home/Contactus";
import { usePathname } from 'next/navigation';

const PageLayout = ({children}:{children:React.ReactNode}) =>{
    const pathname = usePathname();
    
    return (
        <>
            <Header/>
            {children}
            {pathname !== '/' && <Contactus/>}
            <Footer/>
        </>
    )
}

export default PageLayout;