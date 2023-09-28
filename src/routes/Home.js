import Navbar from "../components/Navbar";
import Section1 from "../components/section1";
import Hero from "../components/hero";
import Announcement from "../components/announcement";
import Footer from "../components/footer";

function Home (){
 return(
    <>
    <Navbar/>
    <Hero
    cName="hero"
    heroImg="https://www.kidwise.in/wp-content/uploads/2020/05/dpspune3.jpg.webp"
    title="A place where dreams becomes reality"
    text=" School Society is recognized through its academic world for its progressive approach"
    url = "/"
    />
    <Section1/>
    <Announcement/>
    <Footer/>
    </>
 )
}

export default Home;