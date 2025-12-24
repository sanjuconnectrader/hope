import React from "react";
import "./Homeservice.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function Homeservice({
  tag = " Services",
  heading = "Explore Our Services",
  blurb = "We offer personalized guidance, practical support, and trusted referrals to help families navigate senior care with clarity and confidence.",
  services = [
    {
      title: "Senior Care Education & Family Guidance",
      desc: "We offer information and resources to help families understand care options and make informed decisions.",
      img: "./h1.jpg",
      href: "/services",
    },
    {
      title: "Family Mediation & Decision Support",
      desc: "We facilitate discussions among family members to reach consensus on care decisions.",
      img: "./h2.jpg",
      href: "/services",
    },
    {
      title: "Financial Planning Referrals",
      desc: "We connect you with trusted financial advisors to explore funding options for senior care.",
      img: "./h3.jpg",
      href: "/services",
    },
    {
      title: "Paperwork & Transition Assistance",
      desc: "We assist with the necessary documentation and logistics to ensure a smooth transition into care.",
      img: "./h4.webp",
      href: "/services",
    },
  ],
}) {
  return (
    <section className="hs" aria-label="Services">
      <div className="hs__container">
        {/* Top header row */}
        <div className="hs__top">
          <div className="hs__left">
            <span className="hs__tag">{tag}</span>
            <h2 className="hs__heading">{heading}</h2>
          </div>

          <p className="hs__blurb">{blurb}</p>
        </div>

        {/* Cards */}
        <div className="hs__grid" role="list">
          {services.map((s) => (
            <article className="hs__card" role="listitem" key={s.title}>
              <div
                className="hs__img"
                style={{ backgroundImage: `url(${s.img})` }}
                aria-hidden="true"
              />

              {/* Bottom overlay content */}
              <div className="hs__overlay">
                <div className="hs__content">
                  <h3 className="hs__title">{s.title}</h3>
                  <p className="hs__desc">{s.desc}</p>
                </div>

                <a className="hs__cta" href={s.href}>
                  <span className="hs__ctaText">Learn More</span>
                  <span className="hs__ctaIcon" aria-hidden="true">
                    <ArrowForwardIosIcon />
                  </span>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom link line */}
        <div className="hs__footer">
          <a className="hs__footerLink" href="/services">
            Learn More About Our Services
            <span className="hs__footerIcon" aria-hidden="true">
              <ArrowForwardIosIcon />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}