import { useEffect } from "react";
import { CART_LOGO, LOGO_URL } from "../utils/constants";
import { Link, useNavigate } from "react-router-dom";
import useOnlinestatus from "../utils/useOnlinestatus";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const onlineStatus = useOnlinestatus();
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, [dispatch, navigate]);

  const cartItems = useSelector((store) => store.cart.items);
  const Loginbtn = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="header w-12/12 bg-green-500 sm:bg-yellow-100 lg:bg-blue-500 grid grid-flow-col justify-between ">
      <img
        className="logo w-24 h-24 p-2 rounded-full ms-5 my-auto"
        src={LOGO_URL}
        alt="Logp"
      />

      {user && (
        <div className="nav-items grid grid-flow-col-dense ">
          <ul className="flex flex-wrap p-4 m-4">
            <li className="py-1 mx-4 rounded-lg  px-4 bg-gray-300 my-1">
              Online Status:{onlineStatus ? "✅" : "🔴"}
            </li>
            <li className="py-1 mx-4 rounded-lg bg-gray-300 my-1 px-4">
              <Link to="/browse">Home</Link>
            </li>
            <li className="py-1 mx-4 rounded-lg  bg-gray-300 my-1 px-4">
              {" "}
              <Link to="/about">About</Link>
            </li>
            <li className="py-1 mx-4 rounded-lg bg-gray-300 my-1 px-4">
              {" "}
              <Link to="/ContactUs">Contact us</Link>
            </li>
            <li className="py-1 mx-4 rounded-lg bg-gray-300 my-1 px-4">
              {" "}
              <Link to="/grocery">Grocery</Link>
            </li>
            <li className="py-1 mx-4 rounded-lg bg-gray-300 my-1 px-4 font-bold">
              {" "}
              <Link to="/cart">
                <img
                  className="w-12 h-6 px-1 bg-slate-300 inline  rounded-xl"
                  src={CART_LOGO}
                  alt="cart"
                />{" "}
                Cart-{cartItems.length}
              </Link>
            </li>
            <li
              className="py-1 bg-gray-300 mx-4 my-1 rounded-lg cursor-pointer px-4"
              onClick={Loginbtn}
            >
              <button className="text-blue-900  py-0.5 rounded-lg">
                Logout
              </button>
            </li>

            <li className="stroke-black py-1 bg-gray-300 mx-4 my-1 text-center rounded-lg cursor-pointer px-4 font-bold">
              {user.displayName}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
export default Header;
