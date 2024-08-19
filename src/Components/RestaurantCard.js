import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";
const RestaurantCard = (props) => {
  const { loggedInUser } = useContext(UserContext);
  const styleCard = {
    backgroundColor: "#f0f0f0",
  };
  const { resdata } = props;
  const { name, cuisines, avgRating, sla, cloudinaryImageId, costForTwo } =
    resdata?.info;
  return (
    <div
      data-testid="res"
      className="Res-Container w-[220px] h-[450px] m-4 p-4 rounded-xl transition   shadow hover:shadow-lg ease-in  delay-150"
      style={styleCard}
    >
      <img
        className="res-dish w-full h-[150px] rounded-lg "
        src={CDN_URL + cloudinaryImageId}
        alt="dosa"
      />
      <div className="text-gray-600 py-2 px-2s">
        <h3 className="font-bold text-md">{name}</h3>
        <h5 className="py-2">{cuisines.length<=3?(cuisines.join(", ")):(cuisines.slice(0,2).join(", ")+"...")}</h5>
        <span className="inline-block p-1 rounded-lg text-center font-bold bg-green-500 px-1">⭐{avgRating}</span>
        <span className="mx-3">{costForTwo}</span>
        <h4 className="py-2">{sla?.deliveryTime} Minutes</h4>
        <h4 className="font-semibold">{loggedInUser}</h4>
      </div>
    </div>
  );
};
//HOC
export const withVeg = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="p-1 rounded-lg absolute bg-green-600 text-white">
          Veg
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
export default RestaurantCard;
