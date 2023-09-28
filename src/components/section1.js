import Motiveimg from "../assests/motive.jpg";
import Motiveimg2 from "../assests/motive2.jpg";
import Achi1 from "../assests/group.jpg"
import Section1Data from "./Section1Data";
import "./section1.css";

const Section1 = () =>{
    return(
        <div className="section-1">
            {/* <h1>Achivement</h1> */}
            <p>To provide a happy, caring, supportive and secure environment. To inculcate values central to the ethos of the school and the community.</p>
           <Section1Data
           className="section-1a"
           heading="Our Motive"
           text="School is the second home of the young minds where they spent few hours daily with their fellow mates and learn under the guidance of a teacher. It’s every parent’s dream that their children have access to the best quality education for their personal growth and professional wealth. Only a good school can provide quality education to shape the minds of children and improve their skills and expertise for a bright future"
           img1={Motiveimg}
           img2={Motiveimg2}
           />
           <Section1Data
           className="section-1b"
           heading="Academic Policy"
           text="Academic policy is a system of rules and procedures for planning and organizing educational activities aimed at implementing student-centered learning and improving the quality of education.The academic strategy of the university is aimed at training competitive personnel and developing additional competencies during the period of study, creating integrated educational and research structures, independently defining academic periods."
           img1={"https://i0.wp.com/www.differencebetween.com/wp-content/uploads/2011/08/Difference-Between-School-and-Education_Education.jpg"}
           img2={"https://dataqualitycampaign.org/wp-content/uploads/elementor/thumbs/AMERICANED_SKYLINE_088-scaled-pfwxuwoh67qadmhi95zaksjldzukwpr5ahdklfh9x4.jpg"}
           />
           <Section1Data
           className="section-1a"
           heading="Our Endeavour"
           text="Our schools offer a wide range of educational styles, have deep ties to their communities and are committed to the success and well-being of every child. Our team consists of teachers and parents who understand the importance education has in children's lives, and we strive to get them the tools they need to thrive."
           img1={"https://i0.wp.com/dpswarangal.in/wp-content/uploads/2023/02/IMG_0401.webp?fit=2506%2C1707&ssl=1"}
           img2={"https://resources.edunexttechnologies.com/web-data/dpsiedge/img/secound.jpg"}
           />
           <Section1Data
           className="section-1b"
           heading="Achivements"
           text="School is the second home of the young minds where they spent few hours daily with their fellow mates and learn under the guidance of a teacher. It’s every parent’s dream that their children have access to the best quality education for their personal growth and professional wealth. Only a good school can provide quality education to shape the minds of children and improve their skills and expertise for a bright future"
           img1={Achi1}
           img2={"https://www.dpsaligarh.org/images/achievements.jpg"}
           />
        </div>
    ); 
};

export default Section1;