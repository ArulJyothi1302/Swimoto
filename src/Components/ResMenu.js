import Shimmer from "./Shimmer";
import useResMenu from "../utils/useResMenu";
import ResCategory from "./ResCategory";
import { useState } from "react";

const ResMenu = () => {
  // data have been fetched in comp useResMenu see in utils (for clarifications)
  // const {resid}=useParams()

  const [item, setItem] = useState(null);
  const resMenu = useResMenu();
  // prop drilling
  const dummy = "dummt data";
  if (resMenu === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage, avgRating, totalRatingsString } =
    resMenu.cards[2].card.card.info;

  // const {itemCards}=resMenu.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  const category =
    resMenu.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // const over=()=>{
  //     setCat(1);
  // }
  return (
    <div className="rest-menu m-4 p-4">
      <h1 className="font-bold text-center p-2">{name}</h1>
      <h3 className="text-center p-2">
        {avgRating}
        {`(${totalRatingsString})`}
      </h3>
      <h3 className="text-center p-2">Cuisines</h3>
      <p className="text-center p-2">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>

      {/* OVER VIEW */}

      {/* DEALS */}

      <h3 className="text-center p-2">
        <u>Menu</u>
      </h3>

      {/* toggle */}

      {/* carousel-top-picks */}

      <div className=" p-4">
        {category.map((c, index) => (
          <ResCategory
            key={c.card.card.title}
            //Lifting the state up

            showItems={index === item ? true : false}
            setItem={() => setItem(index)}
            data={c?.card?.card}
            dummy={dummy}
          />
        ))}
      </div>
    </div>
  );
};
export default ResMenu;
