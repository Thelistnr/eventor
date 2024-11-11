import Header from "../components/Header"
import Card from "../components/Card";
import Footer from "../components/Footer";
import Loading from "../components/reusables/Loading";
import Heading from "../components/reusables/Heading";
import Empty from "../components/reusables/Empty";
import { useContext } from "react";
import { dataContext } from "../App";

const Home = ({events,setEvents}) => {
    const [data, setData] = useContext(dataContext);
    console.log(events)
    console.log(data)
    return ( 
        <>
        < Header events={events}/>
        <div className="flex min-h-screen w-full">
            <div className="hello container w-[90%] md:w-[80%] lg:w-[55%]  mx-auto">
                < Heading name="Eventor" filter={data && data[0]}/> 

                {data ? data ? data.length > 0 ? ( data.map((event,index) => (
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
                ) : events ? events.length > 0 ?( events.map((event,index) => (
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
                ): !events &&
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
 
export default Home;