import React from "react";
import "./Aboutdetailstwo.css";

// ✅ Material Icons (npm: @mui/icons-material)
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import ElderlyIcon from "@mui/icons-material/Elderly";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";

export default function Aboutdetailstwo({
  kicker = "01  Our guidance",
  title = "Senior care planning",
  image = "https://images.pexels.com/photos/7551669/pexels-photo-7551669.jpeg?auto=compress&cs=tinysrgb&w=1600",
  imageAlt = "Advisor helping an older adult",
  cards = [
    {
      Icon: TrendingUpIcon,
      heading: "Care Options Education",
      desc: "We help families understand the senior care landscape—independent living, assisted living, adult family homes, memory care, in-home care, hospice, and short-term stays—so you can make informed decisions with confidence.",
    },
    {
      Icon: ElderlyIcon,
      heading: "Personalized Placement Support",
      desc: "We learn your loved one's needs, preferences, and timeline, then curate vetted communities and care providers that align with your unique situation—taking the guesswork out of who to trust and where to look.",
    },
    {
      Icon: VerifiedUserIcon,
      heading: "Transitions & Paperwork Help",
      desc: "We arrange visits, share key questions to evaluate each option, and assist with logistics and documentation to make the move as smooth as possible—our services are always free to families.",
    },
  ],
}) {
  return (
    <section className="ad2" aria-label="Planning section">
      <div className="ad2__wrap">
        {/* top small kicker */}
        <div className="ad2__kicker">
          <span className="ad2__kicker-text">{kicker}</span>
        </div>

        {/* main row */}
        <div className="ad2__row">
          {/* LEFT */}
          <div className="ad2__left">
            <h2 className="ad2__title">{title}</h2>

            {/* cards panel */}
            <div 
              className="ad2__panel" 
              role="list" 
              aria-label="Key planning areas"
            >
              {cards.map(({ Icon, heading, desc }, idx) => (
                <article 
                  key={idx} 
                  className="ad2__item" 
                  role="listitem"
                >
                  <div className="ad2__item-content">
                    <div className="ad2__icon-wrapper" aria-hidden="true">
                      <div className="ad2__icon-bg"></div>
                      <Icon className="ad2__icon" />
                    </div>

                    <h3 className="ad2__heading">{heading}</h3>
                    <p className="ad2__desc">{desc}</p>
                    
                    {/* Decorative line */}
                    <div className="ad2__line"></div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* RIGHT slanted image */}
          <div className="ad2__right">
            <div className="ad2__image-container">
              <div className="ad2__imgClip">
                <img 
                  className="ad2__img" 
                  src={image} 
                  alt={imageAlt} 
                  loading="lazy" 
                />
                <div className="ad2__imgShade" />
              </div>
              {/* Decorative corner accent */}
              <div className="ad2__corner-accent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}