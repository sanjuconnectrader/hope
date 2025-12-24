import React, { useEffect, useRef } from "react";
import "./Servicehero.css";

export default function Servicehero({
  bgImage = "https://images.pexels.com/photos/7551667/pexels-photo-7551667.jpeg?auto=compress&cs=tinysrgb&w=2000",
  breadcrumbLeft = "Home",
  breadcrumbRight = "Services",
  title = "Services",
}) {
  const heroRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const t = setTimeout(() => {
      if (heroRef.current) heroRef.current.classList.add("service-hero__bg--loaded");
      if (contentRef.current) contentRef.current.classList.add("service-hero__content--show");
    }, 60);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="service-hero" aria-label="Service hero section">
      <div
        ref={heroRef}
        className="service-hero__bg"
        style={{ backgroundImage: `url(${bgImage})` }}
        aria-hidden="true"
      >
        <div className="service-hero__overlay" />

        <div className="service-hero__content-wrapper">
          <div ref={contentRef} className="service-hero__content">
            <div className="service-hero__breadcrumb" aria-label="Breadcrumb navigation">
              <span className="service-hero__breadcrumb-item">{breadcrumbLeft}</span>
              <span className="service-hero__breadcrumb-divider">—</span>
              <span className="service-hero__breadcrumb-item service-hero__breadcrumb-item--current">
                {breadcrumbRight}
              </span>
            </div>

            <h1 className="service-hero__title">
              <span className="service-hero__title-text">{title}</span>
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
