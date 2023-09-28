import "./announcementStyles.css";
import AnnouncementData from "./announcementData";
import Sport from "../assests/sports.jpg"

function Announcement() {
    return(
        <div className="announcement">
            <h1>Announcements</h1>
        <div className="card">
            <AnnouncementData
            image={"https://static.wixstatic.com/media/039906_9170609dfd43420ea0e55fc48d146b62~mv2.jpg/v1/fill/w_488,h_368,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/039906_9170609dfd43420ea0e55fc48d146b62~mv2.jpg"}
            heading="What to look for in a great school?"
            text="Factors to consider when choosing a school.."
            />
        </div>
        <div className="card">
            <AnnouncementData
            image={Sport}
            heading="Gold at IPSC Boys Squash Tournment"
            text="School Boys Squash team participated in the... "
            />
        </div>
        <div className="card">
            <AnnouncementData
            image={"https://dpsvaranasi.com/images/2.png"}
            heading="The result day every year is awaited"
            text="Around 60 students got 10 CGPA . 62 students .."
            />
        </div>
        </div>
        )

}

export default Announcement;