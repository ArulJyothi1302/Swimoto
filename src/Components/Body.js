import RestaurantCard, { withVeg } from "./RestaurantCard";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlinestatus from "../utils/useOnlinestatus";
import UserContext from "../utils/UserContext";
import useReslist from "../utils/useReslist";
const Body = () => {
  const { loggedInUser, setUserName } = useContext(UserContext);
  const { resList, loading, error } = useReslist();
  const [filterd, setFiltered] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  useEffect(() => {
    if (resList) {
      setFiltered(resList);
    }
  }, [resList]);
  const Respromoted = withVeg(RestaurantCard);

  const handleSearch = () => {
    const searched = resList.filter((res) =>
      res.info.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    setFiltered(searched);
  };

  const handleFilterTopRated = () => {
    const filteredTopRated = resList.filter((res) => res.info.avgRating >= 4.3);
    setFiltered(filteredTopRated);
  };
  console.log(resList);

  const onlinestatus = useOnlinestatus();
  if (!onlinestatus) {
    return (<div className="flex flex-wrap justify-center items-center">
     
      <h1>Hey you are offline... check connection</h1>
      </div>);
  }

  if (loading) return <Shimmer />;

  if (error) return <div>Error:{error.message}</div>;

  return (
    <div className="Body">
      <div className="flex items-center ">
        <div className=" m-4 p-4 ">
          <input
            type="text"
            className=" p-1.5 rounded-lg border border-solid border-black"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />

          <button
            className="search-box p-2 m-2 bg-slate-600 text-rose-50 rounded-lg"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
        <div className="m-4 p-4 ">
          <button
            className="filter-btn  p-2 bg-gray-400 rounded-lg"
            onClick={handleFilterTopRated}
          >
            Top Restaurants
          </button>
        </div>
        <div className="m-4 p-4 ">
          <label>User:</label>
          <input
            className="border border-1 rounded-lg bg-gray-300 m-2 p-2 outline-none"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>

      <div className="flex flex-wrap">
        {/* Hardcoded not best practise */}
        {/* Keys are added to avoid rerendering coz React does not uniquely identifies element */}

        {/* dont use index as keys very bad practise */}
        {filterd.map((resta) => (
          <Link key={resta.info.id} to={"menu/" + resta.info.id}>
            {" "}
            {resta.info.veg || resta.info.name.includes("Veg") ? (
              <Respromoted resdata={resta} />
            ) : (
              <RestaurantCard resdata={resta} />
            )}{" "}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
