import { useParams } from "react-router-dom";
import { FaArrowCircleLeft,FaCalendarAlt,FaClock,FaSearchLocation } from "react-icons/fa";
import { BiCategory } from "react-icons/bi";
import { Link } from "react-router-dom";
import EventsCard from "../components/eventsCard";


const Event = ({events}) => {
    const params = useParams();
    const eventDetail = events.find((event)=>event.eventId === parseInt(params.id))

    if (!eventDetail) {
        return (
            
            <div className="container w-full h-screen flex justify-center items-center">
                <div className="flex flex-col items-center gap-3">
                <Link to="/">
                    <FaArrowCircleLeft size={50} />
                </Link>
                <button type="button" className="bg-[#4b55631a] text-white px-4 py-2 rounded flex items-center" disabled>
                <svg className="animate-spin h-5 w-5 mr-3 text-white" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>

                </svg>
                Loading...
            </button>
                </div>
            </div>
          );
    }
    return ( 
        <>
        <div className="min-h-screen w-full p-5">
                    <Link to="/">
                        < FaArrowCircleLeft size={40} />
                    </Link>
                <div className="hello container w-full sm:[80%] lg:w-[50%] p-2 sm:p-5 mx-auto">
                    <h1 className="text-4xl mb-10">Event Details</h1>
                    <EventsCard eventDetail={eventDetail}/>
                </div>
            </div>
        </>
     );
}
 
export default Event;