import { useRouteError } from "react-router-dom"
// import { NO_INT } from "../utils/constants";

const Error =()=>{
    const err=useRouteError();
    return(
    
    <div className="flex flex-wrap justify-center items-center">
        <div>
            <h3>Oops!!!</h3>
        </div>
        <div>
        <h3><i>Page Not Found</i></h3>
        </div>
        <div>
            <h4>{err.status}:{err.statusText}</h4>
            {console.log(err)}
        </div>
    </div>
)
}
export default Error