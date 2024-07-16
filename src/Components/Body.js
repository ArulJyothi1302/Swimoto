import RestaurantCard, { withPromoted } from "./RestaurantCard";
// import { resobj } from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlinestatus from "../utils/useOnlinestatus";

const Body=()=>{
const [hotel,setHotel] =useState([]);
const [filterd,setFilterd] =useState(hotel);
const [search_input,setSearch_input]=useState("");
let resList;
const Respromoted = withPromoted(RestaurantCard);
console.log(resList)
useEffect(
    ()=>{
        fetchData();
    },[]
)

const fetchData = async ()=>{
    const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0843007&lng=80.2704622&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"

    );
    const json=await data.json();
  
    resList=json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    setHotel(resList)
    setFilterd(resList);
    console.log(resList);
}
const onlinestatus =useOnlinestatus();
if(onlinestatus===false){
    return (
        <h1>Hey you are offline... check connection</h1>
    )
}
return hotel.length===0?
(<Shimmer/>):(
        <div className='Body'>
            <div className='filter flex items-center '>
                <div className="search-filter m-4 p-4 ">
                    <input type="text" className=" p-1.5 rounded-lg border border-solid border-black" value={search_input} onChange={e=>setSearch_input(e.target.value)}/>
                   
                    <button className="search-box p-2 m-2 bg-slate-600 text-rose-50 rounded-lg" onClick={()=>{const searched=hotel.filter((res)=>
                        
                        res.info.name.toLocaleLowerCase().includes(search_input.toLocaleLowerCase()))
           
            
            setFilterd(searched);
           
         
            }}
          
          
            
            >Search</button>
                </div>
                <div className="top-res m-4 p-4 ">
            <button className="filter-btn  p-2 bg-gray-400 rounded-lg" onClick={()=>{const filtered=hotel.filter((res)=>res.info.avgRating>=4.3 )
           
            
            setFilterd(filtered);
            }}>Top Restaurants</button>
            </div>

            </div>


            
            <div className='res-cards-container flex flex-wrap'>
              {/* Hardcoded not best practise */}
            {/* Keys are added to avoid rerendering coz React does not uniquely identifies element */}

            {/* dont use index as keys very bad practise */}
           {filterd.map(resta=><Link key={resta.info.id} to={"menu/"+resta.info.id}> {resta.info.veg || resta.info.name.includes("Veg")?(<Respromoted resdata={resta}/>):(<RestaurantCard resdata={resta}/>)} </Link>)}
            </div>
        </div>
    )
}
export default Body;