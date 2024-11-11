import { useContext, useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { dataContext } from "../App";
import { TfiMenu } from "react-icons/tfi";

const Header = ({events}) => {
    const [data, setData] = useContext(dataContext);
    const [filter, setFilter] = useState();
    const [mob, setMob] = useState(false);
    const location = useLocation();
    const isActive = (path) => location.pathname === path ? "active routes nav-item hover:border-b-2 hover:border-amber-400" : "";

    const handleClick =(event)=>{
        const navLinks = document.querySelectorAll(".routes")

        navLinks.forEach(link => link.classList.remove("active"))

        event.currentTarget.classList.add("active")
    }
    const handleSearch = (e) => {
        if(e.target.value.length >= 0){
            setData(events.filter( data => data.title.toLowerCase().includes((e.target.value).toLowerCase())));
        }
        else{
            setData();
        } 
        console.log(events.filter( data => data.title.toLowerCase().includes((e.target.value).toLowerCase())))
    }
    const handleFilter = (category) => {
        if(category.length >= 0){
            setData(events.filter( data => data.category.toLowerCase().includes((category).toLowerCase())));
        }
        else{
            setData();
        }
    }

    return ( 
        <nav className = "flex gap-1 sm:gap-8 justify-between items-center px-4 py-3 mb-5">
            <div className="logo text-xl py-2">
                <Link to ="/" onClick={e => {setData()}}>Logo</Link>
            </div>
            <div className="flex">
                <form action="">
                    <label htmlFor="search" className="flex nav-item hover:border-b-2 hover:border-red-600 rounded-lg py-2 px-2 sm:px-5 items-center gap-2 bg-slate-800">
                        <input type="search" id="search" className="bg-slate-800 text-white outline-none" onChange={handleSearch}/>
                        <FaSearch />
                    </label>
                </form>
            </div>
            <div className="tab sm:flex hidden gap-5 w-[30%] text-gray-800 justify-between">
                <Link className="routes nav-item hover:border-b-2 hover:border-red-600" style={{borderBottom: location.pathname === "/bookmark" && '2px solid #dc2626'}} to="/bookmark" onClick={e => {setData()}}>Bookmark</Link>
                <Link className="routes nav-item hover:border-b-2 hover:border-red-600" style={{borderBottom: location.pathname === "/form" && '2px solid #dc2626'}} to="/form" onClick={e => {setData()}}>Add an Event</Link>
                <div className="routes nav-item hover:border-b-2 hover:border-red-600 relative group" onClick={e => filter===true ? setFilter(false) : setFilter(true)}>
                    <p className="cursor-pointer">Filter</p>
                    {filter && <div className="absolute py-4 px-5 bg-white rounded-lg w-max right-0 top-8 shadow-inner group-focus:block">
                        {events && <ul>
                            {/* console.log(Array.from(new Set(data.filter(data => data.category.toLowerCase().includes((category).toLowerCase()))))); */}
                            <li className="text-gray-800 hover:text-md text-sm rounded-lg cursor-pointer mb-2" onClick={e => handleFilter("")}>Clear</li>
                            {Array.from(new Set(events.map(data => data.category))).map((data, index) => <li className="text-black p-1 hover:bg-slate-500 font-bold hover:text-lg rounded-lg cursor-pointer" onClick={e => handleFilter(data)} key={index}>{data}</li>)}
                        </ul>}
                    </div>}
                </div>
            </div>
            <div className="flex sm:hidden group">
                <TfiMenu  className="w-8 h-8 peer" onClick={e => mob === true ? setMob(false) : setMob(true)}/>   
            </div>
            {mob && <div className="absolute flex flex-col gap-5 w-max sm:w-[30%] text-gray-800 justify-between bg-white rounded-lg shadow-2xl top-14 right-1 sm:right-5 py-3 px-4 z-10">
                <Link className="routes nav-item hover:border-b-2 hover:border-red-600" style={{borderBottom: location.pathname === "/bookmark" && '2px solid #dc2626'}} to="/bookmark" onClick={e => {setData()}}>Bookmark</Link>
                <Link className="routes nav-item hover:border-b-2 hover:border-red-600" style={{borderBottom: location.pathname === "/form" && '2px solid #dc2626'}} to="/form" onClick={e => {setData()}}>Add an Event</Link>
                <div className="routes nav-item hover:border-b-2 hover:border-red-600 group">
                    <p className="cursor-pointer" onClick={e => filter===true ? setFilter(false) : setFilter(true)}>Filter</p>
                    {filter && <div className="py-4 px-5 bg-white rounded-lg w-max right-0 top-8">
                        {events && <ul>
                            {/* console.log(Array.from(new Set(data.filter(data => data.category.toLowerCase().includes((category).toLowerCase()))))); */}
                            <li className="text-gray-800 hover:text-md text-sm rounded-lg cursor-pointer mb-2" onClick={e => handleFilter("")}>Clear</li>
                            {Array.from(new Set(events.map(data => data.category))).map((data, index) => <li className="text-black p-1 hover:bg-slate-500 font-bold hover:text-lg rounded-lg cursor-pointer" onClick={e => handleFilter(data)} key={index}>{data}</li>)}
                        </ul>}
                    </div>}
                </div>
            </div>}   
        </nav>
     );
}
 
export default Header;