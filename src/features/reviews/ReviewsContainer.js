import React from "react";
import ReviewInput from "./ReviewInput";
import Reviews from "./Reviews";
import { useDispatch, useSelector } from "react-redux";
import { reviewAdded } from "./reviewsSlice";

function ReviewsContainer({ restaurant }) {
  const dispatch = useDispatch();
  const reviews = useSelector((state) => state.reviews.entities)
  const filteredReviews = reviews.filter((review) => review.restaurantId === restaurant.id)

  function onSubmit(comment) {
    dispatch(reviewAdded({comment: comment, restaurantId: restaurant.id}))
  }

  return (
    <div>
      <ReviewInput onSubmit={onSubmit}/>
      {reviews ? <Reviews reviews={filteredReviews} /> : ""}
    </div>
  );
}

export default ReviewsContainer;
