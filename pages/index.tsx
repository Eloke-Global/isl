import Hero from "@/components/Home/Hero";
import Whatwedo from "@/components/Home/Whatwedo";
import PageLayout from "@/layouts/PageLayout";
import Solutions from "@/components/Home/Solutions";
import Industries from "@/components/Home/Industries";
import Tech from "@/components/Home/Tech";
import SuccessStories from "@/components/Home/SuccessStories";
import Contactus from "@/components/Home/Contactus";
import Partners from "@/components/Home/Partners";

const Home = () =>{
    return (
        <PageLayout>
            <Hero/>
            <Whatwedo/>
            <Solutions/>
            <Industries/>
            <Tech/>
            <SuccessStories/>
            <Contactus/>
            <Partners/>
        </PageLayout>
    )
}

export default Home;