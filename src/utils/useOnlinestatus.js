import { useEffect, useState } from "react";

const useOnlinestatus =()=>{
    const [onlineStatus,useOnlinestatus]=useState(true);
    useEffect(()=>{
        // chack online status
        window.addEventListener('offline',()=>{
            useOnlinestatus(false);
        })
        window.addEventListener('online',()=>{
            useOnlinestatus(true);
        })
    },[])
    return onlineStatus;
}
export default useOnlinestatus;