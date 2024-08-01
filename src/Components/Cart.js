import { useDispatch, useSelector } from "react-redux";
import ItemList from "./Itemlist";
import { clearCart } from "../utils/cartSlice";
import EmptyCart from "./EmptyCart";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClear = () => {
    dispatch(clearCart());
  };
  return (
    <div>
      <h1 className="text-center m-4 p-4 font-bold text-xl">Cart</h1>
      <button
        className="bg-black text-white font-bold rounded-lg p-2 m-auto flex justify-center hover:opacity-65"
        onClick={handleClear}
      >
        Clear Cart
      </button>
      {cartItems.length === 0 && (
        <div className="text-center font-bold p-4 m-4">
          <EmptyCart />
        </div>
      )}

      <div className="lg:w-5/12 md:w-5/12 sm:w-5/12 m-auto p-4">
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};
export default Cart;
