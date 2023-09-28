import Navbar from "../components/Navbar";
import Hero from "../components/hero";
import Imag1 from"../assests/group.jpg";
import "./about.css";
import Footer from "../components/footer";
import AboutSection from "../components/aboutSection";

function about (){
    return(
       <>
       <Navbar/>
    <Hero
    cName="hero"
    heroImg={Imag1}
    title="About Us"
    url = "/dummy/about"
    />
    <AboutSection/>
    <Footer/>
       </>
    )
   }
   
   export default about;