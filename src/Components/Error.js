import { useRouteError } from "react-router-dom";
// import { NO_INT } from "../utils/constants";
import { ERR_IMG } from "../utils/constants";

const Error = () => {
  const err = useRouteError();
  return (
    <div className="flex flex-col h-screen text-white bg-black flex-wrap justify-center items-center">
      <div>
        <h3>Oops!!!</h3>
      </div>
      <div>
        <h3>
          <i>Page Not Found</i>
        </h3>
      </div>
      <div>
        <h4 className="text-white">
          {err.status}:{err.statusText}
        </h4>
        {console.log(err)}
      </div>
      <img className="w-[400px] h-[400px] p-4 m-4" src={ERR_IMG} alt="Error" />
    </div>
  );
};
export default Error;
