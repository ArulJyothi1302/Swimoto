import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlinestatus from "../utils/useOnlinestatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [sign, setSign] = useState("Login");
  const onlineStatus = useOnlinestatus();
  const { loggedInUser } = useContext(UserContext);

  return (
    <div className="header w-12/12 bg-green-500 sm:bg-yellow-100 lg:bg-blue-500 flex flex-wrap justify-between ">
      <img
        className="logo w-24 h-24 p-2 rounded-full ms-5 my-auto"
        src={LOGO_URL}
        alt="Logp"
      />
      <div className="nav-items flex items-center">
        <ul className="flex flex-wrap p-4 m-4">
          <li className="px-4">Online Status:{onlineStatus ? "✅" : "🔴"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            {" "}
            <Link to="/about">About</Link>
          </li>
          <li className="px-4">
            {" "}
            <Link to="/ContactUs">Contact us</Link>
          </li>
          <li className="px-4">
            {" "}
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">
            {" "}
            <Link to="/cart">Cart</Link>
          </li>
          <li className="px-4">
            <button
              className="text-blue-900 px-3 py-0.5 bg-gray-400 rounded-lg"
              onClick={() => {
                sign === "Login" ? setSign("Logout") : setSign("Login");
              }}
            >
              {sign}
            </button>
          </li>
          <li className="px-t font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
