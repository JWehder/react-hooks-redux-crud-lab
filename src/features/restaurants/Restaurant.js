import React from "react";
import ReviewsContainer from "../reviews/ReviewsContainer";
import { useDispatch } from "react-redux";
import { restaurantRemoved } from "./restaurantsSlice";

function Restaurant({ restaurant }) {
  const dispatch = useDispatch()
  
  function handleDeleteClick() {
    dispatch(restaurantRemoved(restaurant.id))
  }

  return (
    <div>
      <li>
        {restaurant.name}
        <button onClick={handleDeleteClick}> Delete Restaurant </button>
        <ReviewsContainer restaurant={restaurant} />
      </li>
    </div>
  );
}

export default Restaurant;
