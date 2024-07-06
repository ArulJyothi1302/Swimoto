// just to get the data
import { RES_MENU } from "./constants";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

const useResMenu =()=>{
    const {resid}=useParams();

    const [resMenu,useresMenu] =useState(null);
    useEffect(()=>{
            fetchdata();
    },[]);

    const fetchdata= async ()=>{
        const data =await fetch(RES_MENU+resid);
        const json= await data.json();
        console.log(json);
        useresMenu(json.data);
        console.log("path",resid)

    }
    return resMenu;
}
export default useResMenu;