import RestaurantCard from "./RestaurantCard";
import resList from "../Utils/resList";
import { CiSearch } from "react-icons/ci";
 // Body Component
const Body = () => {
    return (
      <div className="body">
        <div className="search-box">
          <input placeholder="search" />
          <CiSearch className="search-icon" />
        </div>
  
        <RestaurantList />
      </div>
    );
  };

  const RestaurantList = () => {
    return (
      <div className="restaurant-container">
        {resList.map((restaurant) => (   //for continous looping in resList 
          <RestaurantCard key={restaurant.info.id} restaurantData={restaurant} />
        ))}
      </div>
    );
  };
  export default Body;