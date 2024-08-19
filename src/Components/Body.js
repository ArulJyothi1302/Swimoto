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
    console.log(filterd.length);
    const searched = resList.filter((res) =>
      res.info.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    setFiltered(searched);
  };

  const handleFilterTopRated = () => {
    const filteredTopRated = resList.filter((res) => res.info.avgRating >= 4.3);
    setFiltered(filteredTopRated);
  };

  const onlinestatus = useOnlinestatus();
  if (!onlinestatus) {
    return (
      <div className="flex flex-wrap justify-center items-center">
        <h1>Hey you are offline... check connection</h1>
      </div>
    );
  }

  if (loading) return <Shimmer />;

  if (error) return <div>Error:{error.message}</div>;

  return (
    <div className="Body ">
      {/* <Header /> */}

      <div className="flex flex-wrap items-center justify-center p-4 space-y-4 sm:space-y-0 sm:space-x-4">
        <div className="flex flex-col sm:flex-row items-center w-full sm:w-auto space-y-2 sm:space-y-0 sm:space-x-2">
          <input
            type="text"
            data-testid="searchitems"
            className="p-2 rounded-lg border border-solid border-black w-full sm:w-64"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button
            className="search-box p-2 bg-slate-600 text-rose-50 rounded-lg w-full sm:w-auto"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>

        <div className="flex justify-center w-full sm:w-auto">
          <button
            data-testid="top"
            className="filter-btn p-2 bg-gray-400 rounded-lg w-full sm:w-auto"
            onClick={handleFilterTopRated}
          >
            Top Restaurants
          </button>
        </div>

        <div className="flex flex-col sm:flex-row items-center w-full sm:w-auto space-y-2 sm:space-y-0 sm:space-x-2">
          <label className="text-center sm:text-left">User:</label>
          <input
            className="border rounded-lg bg-gray-300 p-2 outline-none w-full sm:w-64"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>

      <div className="card flex flex-wrap ">
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
