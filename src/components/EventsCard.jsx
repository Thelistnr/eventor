import { BiCategory } from "react-icons/bi";
import { FaCalendarAlt, FaClock, FaSearchLocation } from "react-icons/fa";

const EventsCard = ({eventDetail}) => {
    
    return ( <>
        <div className="w-full flex flex-col gap-4 justify-between details-card bg-[#363a3d1c] rounded-3xl p-4 sm:p-8">
            <div className="image-detail w-full h-full min-w-[250px] min-h-[250px] self-center rounded-3xl relative overflow-hidden">
                <img className="object-cover absolute inset-0 w-full h-full " src={eventDetail.image} alt={`image of ${eventDetail.title}`} />
            </div>
            <h2 className="text-3xl font-bold">{eventDetail.title}</h2>
            <p className="description text-lg font-semibold">{eventDetail.description}</p>
            <div className="details-date flex gap-3 items-center">
                < FaCalendarAlt size={20}/>
                <div className="actual-date">{eventDetail.date}</div>
            </div>
            <div className="details-time flex gap-3 items-center">
                < FaClock size={20}/>
                <div className="actual-time">{eventDetail.time}</div>
            </div>
            <div className="details-location flex gap-3 items-center">
                < FaSearchLocation size={20}/>
                <div className="actual-location">{eventDetail.location}</div>
            </div>
            <div className="details-category flex gap-3 items-center">
                < BiCategory size={20}/>
                <div className="actual-category">{eventDetail.category}</div>
            </div>

        </div>
    </> );
}
 
export default EventsCard;