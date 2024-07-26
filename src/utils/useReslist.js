import { useEffect, useState } from "react";
import { RES_LIST } from "./constants";

const useReslist = () => {
  const [resList, setResList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch(RES_LIST);
        const json = await data.json();
        const resItems =
          json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants || [];
        setResList(resItems);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return { resList, loading, error };
};
export default useReslist;
