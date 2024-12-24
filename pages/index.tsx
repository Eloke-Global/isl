import Hero from "@/components/Home/Hero";
import Whatwedo from "@/components/Home/Whatwedo";
import PageLayout from "@/layouts/PageLayout";
import Solutions from "@/components/Home/Solutions";
import Industries from "@/components/Home/Industries";
import Tech from "@/components/Home/Tech";
import SuccessStories from "@/components/Home/SuccessStories";

const Home = () =>{
    return (
        <PageLayout>
            <Hero/>
            <Whatwedo/>
            <Solutions/>
            <Industries/>
            <Tech/>
            <SuccessStories/>
        </PageLayout>
    )
}

export default Home;