import React from "react";
import "./Footerhero.css";

export default function Footerhero({
  bgImage = "./chero.webp",
  quoteTop = "We’re honored to be your boots on the ground—",
  quoteBottom = "taking the guesswork out of who to trust and where to look.",
  buttonText = "Contact Us",
  buttonHref = "/contact",
}) {
  return (
    <section
      className="fh"
      style={{ backgroundImage: `url(${bgImage})` }}
      aria-label="Footer hero banner"
    >
      <div className="fh__overlay" aria-hidden="true" />
      
      <div className="fh__inner">
        <p className="fh__quote">
          <span className="fh__quote-line">{quoteTop}</span>
          <span className="fh__quote-line">{quoteBottom}</span>
        </p>
        <a className="fh__btn" href={buttonHref}>
          {buttonText}
        </a>
      </div>
    </section>
  );
}