import { EMPTYCART } from "../utils/constants";

const EmptyCart = () => {
  return (
    <div className="flex flex-wrap flex-col items-center ">
      <div className="">
        <img className="w-[300px] rounded-xl" src={EMPTYCART} alt="emptyCart" />
      </div>
      <h3 className="text-center text-2xl text-slate-400 font-bold p-4">
        Your Cart is Empty Go to Home Page and Select Items from Restaurants
      </h3>
    </div>
  );
};
export default EmptyCart;
