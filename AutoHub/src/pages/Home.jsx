import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-container">
      <h1>
        Rev up your travel plans with our unbeatable selection of vehicles at
        AutoHub.
      </h1>
      <p>
        Whether you're embarking on a weekend getaway or a cross-country
        expedition, we have the perfect car to add adventure and excitement to
        your life. Join the automotive movement and explore the world with the
        ultimate road trip experience.
      </p>
      <p>
        At AutoHub, we understand that every road trip is unique. That's why we
        offer a diverse range of cars to match your preferences and travel
        needs. From sleek and sporty models that hug the curves to spacious and
        family-friendly SUVs, we've got the ideal ride for every journey.
      </p>
      <p>
        Embrace the freedom of the open road and turn your dream road trip into
        a reality. Our expert team is here to guide you in selecting the perfect
        vehicle that suits your style, budget, and desired features. Picture
        yourself cruising along scenic routes, experiencing the joy of the
        journey as you set out on your adventure.
      </p>
      <p>
        Step into our dealership and get behind the wheel of your chosen car
        with confidence, knowing that you're well-equipped for an unforgettable
        experience. Our cars come equipped with modern amenities, advanced
        technology, and reliable performance, ensuring a smooth and enjoyable
        road trip.
      </p>
      <p>
        Visit AutoHub today and unlock the endless possibilities that await you.
        Whether you seek an adrenaline-pumping escapade or a leisurely
        exploration, our extensive fleet of cars will make your road trip truly
        memorable. The road is calling – answer it with the perfect car from
        AutoHub. Get ready to ignite your wanderlust and embrace the thrill of
        the open road.
      </p>
      <Link to="cars">Find your perfect ride</Link>
    </div>
  );
}
