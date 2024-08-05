import { ITEM_URL } from "../utils/constants";
import { addItems } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
import ImageFallback from "./ImageFallback";
const ItemList = ({ items, dummy }) => {
  // Prop Drilled
  console.log(dummy);
  const dispatch = useDispatch();
  const handleAdd = (i) => {
    dispatch(addItems(i));
  };
  return (
    <div>
      {items.map((i) => (
        <div
          key={i.card.info.id}
          className="p-4 m-2 border-gray-400 border-b-2 text-left flex justify-between flex-wrap"
        >
          <div className="lg:w-8/12 md:w-6/12 p-4 ">
            <div className="py-2">
              <span className="font-bold">{i?.card?.info?.name}</span>
              <p>
                {" "}
                ₹{" "}
                {i?.card?.info?.price
                  ? i?.card?.info?.price / 100
                  : i?.card?.info?.defaultPrice / 100}
              </p>
              <p className="text-xs">{i?.card?.info?.description}</p>
            </div>
          </div>

          <div className="lg:w-4/12 md:w-6/12  p-4">
            <div className="absolute mx-10">
              <button
                className="p-2 m-2 bg-green-600 text-white  rounded-lg "
                onClick={() => handleAdd(i)}
              >
                ADD +
              </button>
            </div>

            <ImageFallback
              src={ITEM_URL + i.card.info.imageId}
              alt="item"
              className="rounded-lg "
            />
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
