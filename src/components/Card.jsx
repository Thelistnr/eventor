import { useEffect, useState } from "react";
import { FaBookmark } from "react-icons/fa";
import { Link } from "react-router-dom";

const Card = ({event,setEvents}) => {
    const [bookmarks, setBookmarks] = useState();

    const handleBookmark = (id)=>{
        console.log(id)
        setEvents((prev)=>
            prev.map((newEvent)=> newEvent.eventId === id ? {...newEvent,bookmarked : !newEvent.bookmarked} : newEvent)
        )
        if(localStorage.bookmarks){
            const books = JSON.parse(localStorage.getItem('bookmarks'));
            if(books.every(data => data.eventId !== id)){
                localStorage.setItem('bookmarks', JSON.stringify([...books, [{eventId:id, 'bookmark':true}]]))
            }
        }else{
            localStorage.setItem('bookmarks', JSON.stringify([[{eventId:id, 'bookmark':true}]]))
        }
        console.log(event.bookmarked)
    }

    useEffect(() => {
        if(localStorage.bookmarks){
            setBookmarks(JSON.parse(localStorage.getItem('bookmarks')))
        }
        console.log(JSON.parse(localStorage.getItem('bookmarks')))
    }, [])

    return ( 
        <div id={event.eventId.toString()} className="card-container w-full flex mb-5 p-2 gap-3 justify-between">
                    <div className="day w-[15%] flex flex-col items-center gap-4 p-1 font-semibold">
                        <div className="date">{event.date}</div>
                        <div onClick={()=>handleBookmark(event.eventId)} className="bookmark hover:animate-pulse cursor-pointer">
                            < FaBookmark size={20} color={bookmarks && bookmarks.eventId===event.eventId && bookmarks.bookmark ? "#ffe300" : ""} />
                        </div>
                    </div>
                    <Link className="card min-w-[80%] p-4 flex gap-3 justify-between shadow-lg rounded-3xl [@media(min-width:380px)]:items-start items-center [@media(min-width:380px)]:flex-row flex-col-reverse backdrop:blur-xl flex-grow" to={`/event/${event.eventId}`}>
                        <div className="event-details flex flex-col gap-1 w-full [@media(min-width:380px)]:w-[calc(100%-140px)]">
                            <h1 className="title text-2xl font-bold">{event.title}</h1>
                            <h3 className="location text-gray-600 font-semibold">{event.location}</h3>
                            <h3 className="category text-gray-600 font-semibold">{event.category}</h3>
                            <h3 className="description text-gray-600 font-semibold truncate w-full">{event.description}</h3>
                        </div>
                        <div className="event-img w-full h-40 [@media(min-width:380px)]:w-[120px] [@media(min-width:380px)]:h-[120px] rounded-2xl overflow-hidden relative [@media(min-width:380px)]:max-w-2/5">
                            <img src={event.image} alt={`image of ${event.title}`} className="absolute inset-0 w-full h-full object-cover" />
                        </div>

                    </Link>
                </div>
     );
}
 
export default Card;