import React from "react";
import "./Homehero.css";

export default function Homehero({
  bgImage = "./h4.webp",
  title = (
    <>
      Senior Advisory & Placement Services
      <br />
      in Western Washington
    </>
  ),
  subtitle = "",
  glassLabel = "",
}) {
  return (
    <section
      className="hh"
      style={{ "--hh-bg": `url(${bgImage})` }}
      aria-label="Home hero"
    >
      {/* Gradient overlay */}
      <div className="hh__overlay" aria-hidden="true" />

      {/* Content */}
      <div className="hh__inner">
        <div className="hh__content">
          <h1 className="hh__title">{title}</h1>
          {subtitle && <p className="hh__subtitle">{subtitle}</p>}
        </div>

        {/* Glass box */}
    
      </div>
    </section>
  );
}