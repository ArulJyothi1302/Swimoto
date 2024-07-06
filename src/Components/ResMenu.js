import Shimmer from "./Shimmer";
import useResMenu from "../utils/useResMenu";

const ResMenu=()=>{
// data have been fetched in comp useResMenu see in utils (for clarifications)
// const {resid}=useParams()
    const resMenu = useResMenu();
    if(resMenu===null) return <Shimmer /> 

    const {name,cuisines,costForTwoMessage,avgRating,totalRatingsString}=resMenu.cards[2].card.card.info;
    
    const {itemCards}=resMenu.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    console.log(itemCards)

    return (
        <div className="rest-menu">
            <h1>{name}</h1>
            <h3>{avgRating}{`(${totalRatingsString})`}</h3>
            <h3>Cuisines</h3>
            <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
            
            {/* OVER VIEW */}

            {/* DEALS */}

            <h3><u>Menu</u></h3>

            {/* toggle */}

            {/* carousel-top-picks */}

            <h3>Recommended For You({itemCards.length})</h3>
          
            <ul>
                {itemCards.map(items=><li key={items.card.info.id}>{items.card.info.name} <br/> Rs.-  {items.card.info.price/100 || items.card.info.defaultPrice/100}</li>)}
                
            </ul>
        </div>)
}
export default ResMenu;
