import RestaurantCard from "./RestaurantCard";
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
            <div className='filter'>
                <div className="search-filter">
                    <input type="text" value={search_input} onChange={e=>setSearch_input(e.target.value)}/>
                   
                    <button className="search-box" onClick={()=>{const searched=hotel.filter((res)=>
                        
                        res.info.name.toLocaleLowerCase().includes(search_input.toLocaleLowerCase()))
           
            
            setFilterd(searched);
           
         
            }}
          
          
            
            >Search</button>
                </div>
                <div className="top-res">
            <button className="filter-btn" onClick={()=>{const filtered=hotel.filter((res)=>res.info.avgRating>=4.3 )
           
            
            setFilterd(filtered);
            }}>Top Restaurants</button>
            </div>

            </div>


            
            <div className='res-cards-container'>
              {/* Hardcoded not best practise */}
            {/* Keys are added to avoid rerendering coz React does not uniquely identifies element */}

            {/* dont use index as keys very bad practise */}
           {filterd.map(resta=><Link key={resta.info.id} to={"menu/"+resta.info.id}><RestaurantCard key={resta.info.id} resdata={resta}/></Link>)}
            </div>
        </div>
    )
}
export default Body;