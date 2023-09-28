import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import Hero from "../components/hero";
function Contact (){
    return(
       <>
       <Navbar/>
       <Hero
       cName="hero"
       heroImg={"https://cf.ltkcdn.net/family/images/std-lg/274790-1200x800-teacher-and-mother-talking.webp"}
       />
       <Footer/>
       </>
    )
   }
   
   export default Contact;