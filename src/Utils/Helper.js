// This line defines and exports the filterData function, which takes two parameters:
//searchText: The text entered by the user in the search input.
//restaurants: The array of restaurant objects to be filtered.
export const filterData = (searchText, restaurants) => {
//This line uses the filter method on the restaurants array to create a new array resFilterData containing only the restaurants that 
//match the search criteria.
//The filter method takes a callback function that is executed for each element in the restaurants array.
//Inside the callback function:
//restaurant?.info?.name: Accesses the name property of the info object within each restaurant object. 
//The optional chaining operator (?.) is used to safely access nested properties, ensuring that if any property in the chain is null or 
//undefined, the expression short-circuits and returns undefined.
//toLowerCase(): Converts the restaurant name to lowercase to make the comparison case-insensitive.
//includes(searchText.toLowerCase()): Checks if the lowercase restaurant name includes the lowercase searchText.
// If it does, the restaurant object passes the filter and is included in the resFilterData array.
    const resFilterData = restaurants.filter((restaurant) =>
      restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase())
    );
//This line returns the resFilterData array, which contains only the restaurant objects whose names match the search text.
    return resFilterData;
  }