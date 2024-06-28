import HeroSection from "../HeroSection";
import Footer from "../Footer";
import Navbar from "../Navbar";
import AboutMe from "../AboutMe";
import ContactMe from "../ContactMe";
import MySkills from "../MySkills";


export default function Home(){
    return(
        <>
            <Navbar />
            <HeroSection />
            <AboutMe/>
            <ContactMe/>
            <Footer />
        </>
    )
}