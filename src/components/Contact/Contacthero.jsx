import React, { useEffect, useRef } from "react";
import "./Contacthero.css";

export default function Contacthero({
  bgImage = "./chero.webp",
  breadcrumbLeft = "Home",
  breadcrumbRight = "Contact Us",
  title = "Contact Us",
}) {
  const heroRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const t = setTimeout(() => {
      if (heroRef.current) heroRef.current.classList.add("contact-hero__bg--loaded");
      if (contentRef.current) contentRef.current.classList.add("contact-hero__content--show");
    }, 60);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="contact-hero" aria-label="Contact hero section">
      <div
        ref={heroRef}
        className="contact-hero__bg"
        style={{ backgroundImage: `url(${bgImage})` }}
        aria-hidden="true"
      >
        <div className="contact-hero__overlay" />

        <div className="contact-hero__content-wrapper">
          <div ref={contentRef} className="contact-hero__content">
            <div className="contact-hero__breadcrumb" aria-label="Breadcrumb navigation">
              <span className="contact-hero__breadcrumb-item">{breadcrumbLeft}</span>
              <span className="contact-hero__breadcrumb-divider">—</span>
              <span className="contact-hero__breadcrumb-item contact-hero__breadcrumb-item--current">
                {breadcrumbRight}
              </span>
            </div>

            <h1 className="contact-hero__title">
              <span className="contact-hero__title-text">{title}</span>
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
