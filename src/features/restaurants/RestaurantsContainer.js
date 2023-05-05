import React from "react";
import RestaurantInput from "./RestaurantInput";
import Restaurants from "./Restaurants";
import { useDispatch } from "react-redux";
import { restaurantAdded } from "./restaurantsSlice";

function RestaurantsContainer() {
  const dispatch = useDispatch();

  function onSubmit(name) {
    dispatch(restaurantAdded(name))
  }

  return (
    <div>
      <RestaurantInput onSubmit={onSubmit}/>
      <Restaurants />
    </div>
  );
}

export default RestaurantsContainer;
