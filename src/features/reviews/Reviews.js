import React from "react";
import Review from "./Review";

function Reviews({ reviews }) {

  const displayReviews = reviews.map((review) => {
    return <Review review={review} key={review.id} />
  })

  return <ul>{displayReviews}</ul>;
}

export default Reviews;
