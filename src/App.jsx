import Bookmark from "./pages/Bookmark";
import Home from "./pages/Home";
import Event from "./pages/Event";
import Form from "./pages/Form";
import Error404 from "./pages/Error404";
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import './App.css'
import { useState,useEffect, createContext } from "react";

export const dataContext = createContext();

function App() {
  const [events,setEvents] = useState([]);
  const [data, setData] = useState();
  useEffect(()=>{
    const userEvent = JSON.parse(localStorage.getItem("events")) || []
    fetch("/events.json")
    .then((res)=> res.json())
    .then((data)=>{
      const combinedEvents = [...data,...userEvent]
      console.log('Combined Events:', combinedEvents);
      setEvents(combinedEvents)
    })
    .catch((err)=>console.log(err))
  },[])
  // console.log(events)

  const router = createBrowserRouter([
    {
      path: "/",
      element: < Home events ={events} setEvents = {setEvents}/>
    },
    {
      path: "/bookmark",
      element: < Bookmark events ={events} setEvents = {setEvents}/>
    },
    {
      path: "/event/:id",
      element: < Event events ={events}/>
    },
    {
      path: "/form",
      element: < Form setEvents = {setEvents}/>
    },
    {
      path: "*",
      element: < Error404 />
    },
  ]);

  return (
    <>
      <dataContext.Provider value={[data, setData]}>
        < RouterProvider router={router} />
      </dataContext.Provider>
    </>
  )
}

export default App
