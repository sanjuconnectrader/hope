import React from "react";
import "./Homeabout.css";

// Material icon (npm: @mui/icons-material)
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

export default function Homeabout({
  eyebrow = "About Us",
  heading = (
    <>
      Compassionate guidance
      <br />
      when it matters most
    </>
  ),
  p1 = "At HOPE Senior Living Advisors, we are dedicated to helping families find the right care and support for their loved ones. We provide personalized guidance and placement services tailored to your unique situation.",
  p2 = "We recognize that this can be a difficult and overwhelming time, and we'd be honored to be your boots on the ground—taking the guesswork out of who to trust and where to look. Our services are always free to families, and we're here to support you every step of the way.",
  ctaText = "Get to know us",
  ctaHref = "/about-us",
  image = "./h1.jpg",
  imageAlt = "Care advisor meeting with family",
}) {
  return (
    <section className="ha" aria-label="About HOPE Senior Living Advisors">
      <div className="ha__container">
        {/* LEFT */}
        <div className="ha__left">
          <div className="ha__eyebrowRow">
            <span className="ha__mark" aria-hidden="true" />
            <span className="ha__eyebrow">{eyebrow}</span>
          </div>

          <h2 className="ha__heading">{heading}</h2>

          <div className="ha__body">
            <p>{p1}</p>
            <p>{p2}</p>
          </div>

          <a className="ha__cta" href={ctaHref}>
          
            <span className="ha__ctaText">{ctaText}</span>
          </a>
        </div>

        {/* RIGHT */}
        <div className="ha__right">
          <div className="ha__imageFrame">
            <img className="ha__img" src={image} alt={imageAlt} loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
}