import React from "react";
import "./Aboutdetails.css";

export default function Aboutdetails({
  image = "https://images.pexels.com/photos/3768131/pexels-photo-3768131.jpeg?auto=compress&cs=tinysrgb&w=1600",
  imageAlt = "Seniors smiling together",
  heading = "Guidance that makes the process clear",
  intro = "At HOPE Senior Living Advisors, we're dedicated to helping families find the right care and support for their loved ones. We provide personalized guidance and placement services tailored to your unique situation.",
  items = [
    {
      no: "01",
      title: "Personalized Support",
      desc: "We begin with a conversation to understand your loved one's needs, preferences, and timeline—so every recommendation is aligned with what matters most to your family.",
    },
    {
      no: "02",
      title: "Trusted Care Options",
      desc: "We take the guesswork out of who to trust and where to look by curating vetted senior living communities and care providers that match your situation.",
    },
    {
      no: "03",
      title: "Hands-On Help, Start to Finish",
      desc: "From scheduling tours and sharing the right questions to assisting with logistics and paperwork, we're your boots on the ground every step of the way—always free to families.",
    },
  ],
}) {
  return (
    <section className="ad" aria-label="About details section">
      <div className="ad__container">
        {/* LEFT CONTENT */}
        <div className="ad__left">
          <h2 className="ad__title">{heading}</h2>
          <p className="ad__intro">{intro}</p>

          <div className="ad__items" role="list">
            {items.map((item, index) => (
              <div key={index} className="ad__item" role="listitem">
                <div className="ad__itemHeader">
                  <span className="ad__itemNumber">{item.no}</span>
                  <h3 className="ad__itemTitle">{item.title}</h3>
                </div>
                <p className="ad__itemDesc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="ad__right">
          <div className="ad__imageWrapper">
            <img 
              className="ad__image" 
              src={image} 
              alt={imageAlt} 
              loading="lazy" 
            />
            <div className="ad__imageOverlay" aria-hidden="true"></div>
          </div>
        </div>
      </div>
    </section>
  );
}