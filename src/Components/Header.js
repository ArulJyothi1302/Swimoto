import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlinestatus from "../utils/useOnlinestatus";
const Header=()=>{
    const [sign,setSign]=useState("Login");
    const onlineStatus=useOnlinestatus();
    return (
        <div className='header'>
            <img className='logo' src={LOGO_URL}alt="Logp"/>
            <div className='nav-items'>
                <ul >
                    <li>Online Status:{onlineStatus?'✅':'🔴'}</li>
                  <li><Link to="/">Home</Link></li>
                   <li> <Link to="/about">About</Link></li>
                   <li> <Link to="/ContactUs">Contact us</Link></li>
                   <li> <Link to='/grocery'>Grocery</Link></li>
                   <li> <Link to="/cart">Cart</Link></li>
                    <button className="in-out" onClick={()=>{
                        sign==="Login"?setSign("Logout"):setSign("Login");
                    }}>{sign}</button>
                    

                </ul>
            </div>
        </div>
    )
}
export default Header;