import React from "react";
import { useSelector } from "react-redux";
import Restaurant from "./Restaurant";

function Restaurants() {
  const restaurants = useSelector((state) => state.restaurants.entities)

  const displayRestaurants = restaurants.map((restaurant) => <Restaurant key={restaurant.id} restaurant={restaurant} />)

  return <ul>{displayRestaurants}</ul>;
}

export default Restaurants;
