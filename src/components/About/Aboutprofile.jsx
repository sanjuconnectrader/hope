import React from "react";
import "./Aboutprofile.css";

// Material icon (npm: @mui/icons-material)
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function Aboutprofile({
  eyebrow = "Meet JoAnne",
  heading = "Owner and Senior Advisor",
  description = "JoAnne Wong brings over 15 years of experience serving seniors, including roles in home health care and retirement management teams. A Tacoma local and mother of three, JoAnne is deeply involved in her community, volunteering at her church and spending quality time with her family and friends. Her passion lies in guiding seniors and their families in their search for compassionate and dignified care settings.",
  ctaText = "Contact JoAnne",
  ctaHref = "/contact",
  image = "./owner.jpg",
  imageAlt = "JoAnne Wong, Senior Advisor",
}) {
  return (
    <section className="ap" aria-label="About JoAnne Wong">
      <div className="ap__container">
        {/* LEFT - Image */}
        <div className="ap__left">
          <div className="ap__imageFrame">
            <img className="ap__img" src={image} alt={imageAlt} loading="lazy" />
          </div>
        </div>

        {/* RIGHT - Content */}
        <div className="ap__right">
          <div className="ap__eyebrowRow">
            <span className="ap__mark" aria-hidden="true" />
            <span className="ap__eyebrow">{eyebrow}</span>
          </div>

          <h2 className="ap__heading">{heading}</h2>

          <div className="ap__body">
            <p>{description}</p>
          </div>

          <a className="ap__cta" href={ctaHref}>
            <span className="ap__ctaText">{ctaText}</span>
            <span className="ap__ctaIcon" aria-hidden="true">
              <ArrowForwardIcon />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}