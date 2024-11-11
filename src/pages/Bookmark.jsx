import Card from "../components/Card";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useContext, useEffect, useState } from "react";
import { dataContext } from "../App";
import Loading from "../components/reusables/Loading";
import Heading from "../components/reusables/Heading";
import Empty from "../components/reusables/Empty";
const Bookmark = ({events,setEvents}) => {
    const [data, setData] = useContext(dataContext);
    const [bookmark, setBookmark] = useState([])

    useEffect(()=>{
        if(events.length > 0){
            const marked = events.filter((event)=> event.bookmarked === true);
            setBookmark(marked);
        }
    },[events])

    return ( 
        <>
        < Header events={events}/>
        <div className="flex min-h-screen w-full">
            <div className="hello container  w-[90%] md:w-[80%] lg:w-[55%] mx-auto">
                {/*<h1 className="text-4xl mb-10">Bookmark</h1>*/}
                < Heading name="Bookmark(s)" />
                {data ? data ? data.filter((event)=> event.bookmarked === true).length > 0 ?( data.filter((event)=> event.bookmarked === true).map((event,index) => (
                    < Card
                        setEvents = {setData}
                        key={index}
                        event={event}
                    />
                ))):
                (
                    <div className="empty flex justify-center items-center my-2">
                        <div className="text-2xl font-bold">
                            <Empty />
                        </div>
                    </div>
                ):
                (
                    <div className="empty flex justify-center items-center my-2">
                        <div className="text-2xl font-bold">
                            < Loading />
                        </div>
                    </div>
                ) : bookmark ? bookmark.length > 0 ? ( bookmark.map((event,index) => (
                    < Card
                        setEvents = {setEvents}
                        key={index}
                        event={event}
                    />
                ))):
                (
                    <div className="empty flex justify-center items-center my-2">
                        <div className="text-2xl font-bold">
                            <Empty />
                        </div>
                    </div>
                ):
                (
                    <div className="empty flex justify-center items-center my-2">
                        <div className="text-2xl font-bold">
                            < Loading />
                        </div>
                    </div>
                )} 
            </div>
        </div>
        < Footer />
        </>
     );
}
 
export default Bookmark;