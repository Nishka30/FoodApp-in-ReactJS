import React, { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

// Body Component
const Body = () => {
  const [ListOfRestaurants, setListOfRestaurants] = useState(resList); // Initialize state correctly

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = ListOfRestaurants.filter(
              (res) => res.info.avgRating > 4.5 // Use res.info.avgRating instead of res.data.avgRating
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <RestaurantList resList={ListOfRestaurants} /> {/* Pass ListOfRestaurants as a prop */}
    </div>
  );
};

const RestaurantList = ({ resList }) => { // Destructure resList from props
  return (
    <div className="restaurant-container">
      {resList.map((restaurant) => (
        <RestaurantCard key={restaurant.info.id} restaurantData={restaurant} />
      ))}
    </div>
  );
};

export default Body;
