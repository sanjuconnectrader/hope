import React, { useEffect, useRef } from "react";
import "./Abouthero.css";

export default function Abouthero({
  bgImage = "chero.webp",
  breadcrumbLeft = "Home",
  breadcrumbRight = "About Us",
  title = "About Us",
}) {
  const heroRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const t = setTimeout(() => {
      if (heroRef.current) heroRef.current.classList.add("ab-hero__bg--loaded");
      if (contentRef.current) contentRef.current.classList.add("ab-hero__content--show");
    }, 60);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="ab-hero" aria-label="About hero section">
      <div
        ref={heroRef}
        className="ab-hero__bg"
        style={{ backgroundImage: `url(${bgImage})` }}
        aria-hidden="true"
      >
        <div className="ab-hero__overlay" />
        
        <div className="ab-hero__content-wrapper">
          <div ref={contentRef} className="ab-hero__content">
            <div className="ab-hero__breadcrumb" aria-label="Breadcrumb navigation">
              <span className="ab-hero__breadcrumb-item">{breadcrumbLeft}</span>
              <span className="ab-hero__breadcrumb-divider">—</span>
              <span className="ab-hero__breadcrumb-item ab-hero__breadcrumb-item--current">
                {breadcrumbRight}
              </span>
            </div>
            
            <h1 className="ab-hero__title">
              <span className="ab-hero__title-text">{title}</span>
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}