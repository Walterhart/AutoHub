import React from "react";
import image from "../assets/road.jpg"
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="about-page-container">
      <img src={image} className="about-hero-image" />
      <div className="about-page-content">
        <h1>Discover the Ultimate Ride at Autohub </h1>
        <p>At our dealership, we are committed to providing you with the best selection of cars to make your driving experience exceptional. Our mission is to match you with the perfect car that fits your style and preferences, ensuring every journey is a memorable one.</p>
        <p>Our team consists of passionate car enthusiasts who are dedicated to sharing the joy of exploring the roads in the vehicle of your dreams.</p>
      </div>
      <div className="about-page-cta">
        <h2>Your Perfect Car Awaits.</h2>
        <Link className="link-button" to="/cars">Explore our inventory</Link>
      </div>
    </div>
  );
}
