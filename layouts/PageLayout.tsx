import Header from "@/components/Header";
import "../app/globals.css";

const PageLayout = ({children}:{children:React.ReactNode}) =>{
    return (
        <>
            <Header/>
            {children}
        </>
    )
}

export default PageLayout;