import React from "react";
import { BsStarFill } from "react-icons/bs";
import image from "../../assets/reviews-graph.png";

export default function Reviews() {
  const reviewsData = [
    {
      rating: 5,
      name: "Steve",
      date: "December  15, 2022",
      text: "Acquiring the Ford Mustang was a truly fantastic choice! The exhilaration it offers on the road is incomparable. We've had the privilege of owning it for 2 weeks now, and it has proven to be a remarkable investment. The car was in impeccable condition upon purchase, and the seller's warm hospitality and flexibility made the whole buying experience truly exceptional. I can't stress enough how delighted we are with our decision to make the Ford Mustang our very own!",
      id: "1",
    },
    {
      rating: 5,
      name: "Cory",
      date: "December 1, 2022",
      text: "The Tesla Model 3 is a true automotive revolution. Its sleek design, electrifying performance, and cutting-edge technology make it a standout choice for any modern driver. I highly recommend the Model 3 for those seeking an eco-conscious and exhilarating driving experience.",
      id: "2",
    },
  ];

  return (
    <section className="host-reviews">
      <div className="top-text">
        <h2>Your reviews</h2>
        <p>
          Last <span>30 days</span>
        </p>
      </div>
      <img className="graph" src={image} alt="Review graph" />
      <h3>Reviews (2)</h3>
      {reviewsData.map((review) => (
        <div key={review.id}>
          <div className="review">
            {[...Array(review.rating)].map((_, i) => (
              <BsStarFill className="review-star" key={i} />
            ))}
            <div className="info">
              <p className="name">{review.name}</p>
              <p className="date">{review.date}</p>
            </div>
            <p>{review.text}</p>
          </div>
          <hr />
        </div>
      ))}
    </section>
  );
}
