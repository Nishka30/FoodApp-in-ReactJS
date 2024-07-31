import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

// Body Component
const Body = () => {
  const [ListOfRestaurants, setListOfRestaurants] = useState(resList );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.51800&lng=88.38320&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      
      //if promise is not resolved
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log(data);

      // Optional chaining
      const fetchedRestaurants = data?.data?.cards[2]?.card?.card?.faceList;
      if (fetchedRestaurants) {
        setListOfRestaurants(fetchedRestaurants);
      } else {
        throw new Error("Unexpected data structure"); //error creation
      }
    } catch (error) {
      console.error("Failed to fetch data:", error);
      setError("Failed to fetch data"); //updation of state variable error
      setListOfRestaurants(resList); // Fallback to mock data
    } finally {
      setLoading(false);
    }
  };
 //filtering top rated restaurants
  const handleFilter = () => {
    const filteredList = ListOfRestaurants.filter(
      (res) => res.info.avgRating > 4.5
    );
    setListOfRestaurants(filteredList);
  };

  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={handleFilter}>
          Top Rated Restaurants
        </button>
      </div>
      
      {/* before rendering error handling */}
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <>
          <p>{error}</p>
          <RestaurantList resList={ListOfRestaurants} />
        </>
      ) : (
        <RestaurantList resList={ListOfRestaurants} />
      )}
    </div>
  );
};

const RestaurantList = ({ resList }) => {
  return (
    <div className="restaurant-container">
      {resList.map((restaurant) => (
        <RestaurantCard key={restaurant.info.id} restaurantData={restaurant} />
      ))}
    </div>
  );
};

export default Body;
