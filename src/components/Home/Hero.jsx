import React from "react";
import "./Hero.css";

export default function Hero({
  bgImage = "/hero.jpg",
  title = (
    <>
      Senior Advisory & Placement Services
      <br />
      in Western Washington
    </>
  ),
  subtitle = "We assist Pierce, King, Skagit, Thurston, Mason and Kitsap families in navigating senior care options, including independent, assisted living, adult family homes, memory care, in-home care, hospice, and short-term stays. Our personalized guidance helps you make informed decisions with confidence, and is provided at no cost to families.",
  primaryText = "Speak To an Advisor",
  primaryHref = "#contact",
  secondaryText = "Learn More About Us",
  secondaryHref = "#about",
}) {
  return (
    <section
      id="home"
      className="heroSection"
      style={{ "--hero-bg": `url(${bgImage})` }}
      aria-label="Hero"
    >
      <div className="heroGradient" aria-hidden="true" />
      
      {/* Minimal Background Animation */}
      <div className="bgAnimation" aria-hidden="true">
        <div className="bgShape shape1"></div>
        <div className="bgShape shape2"></div>
        <div className="bgShape shape3"></div>
      </div>
      
      <div className="heroContainer">
        <div className="heroContent">
          <h1 className="heroTitle">
            {title}
          </h1>
          
          <p className="heroSubtitle">
            {subtitle}
          </p>
          
          <div className="heroButtons">
            <a href={primaryHref} className="heroButton primary">
              {primaryText}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            
            <a href={secondaryHref} className="heroButton secondary">
              {secondaryText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}