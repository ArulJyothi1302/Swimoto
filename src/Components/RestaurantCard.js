import { CDN_URL } from "../utils/constants";
const RestaurantCard=(props)=>{
    const styleCard={
        backgroundColor:'#f0f0f0',
    };
    const {resdata}=props;
    const{
        name,
        cuisines, 
        avgRating,
        sla,
        cloudinaryImageId,
        costForTwo}=resdata?.info
    return (
        <div className='Res-Container' style={styleCard}>
            <img className='res-dish' src={CDN_URL+cloudinaryImageId} alt="dosa"/>
            <h3>{name}</h3>
            
            <h5>{cuisines.join(", ")}</h5>
            <h4>{avgRating}</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla?.deliveryTime} Minutes</h4>


        </div>
    )
}
export default RestaurantCard;