import { GROC_IMG } from "../utils/constants";
import Shimmer from "./Shimmer";

const Grocery = () => {
  return (
    <div className="bg-green-600 h-screen">
      <h1 className="text-center text-lg font-bold p-4 ">Welcome to Grocery</h1>
      <h2 className="text-center font-bold p-4 m-4">
        You Can Purchase Item Very Soon
      </h2>
      <img
        className=" h-[400px] w-[400px] mx-auto p-10 rounded-xl"
        src={GROC_IMG}
        alt="image"
      />
    </div>
  );
};
export default Grocery;
