import React from "react";
import "./Homedetails.css";

// Material Icons
import TargetIcon from "@mui/icons-material/TrackChanges";
import PeopleIcon from "@mui/icons-material/People";
import SchoolIcon from "@mui/icons-material/School";

export default function Homedetails({
  tag = "Our Mission and Values",
  headline = "We add value by focusing on understanding your family's needs and applying our experience and guidance approach.",
  cards = [
    {
      title: "Our Focus",
      text: "We are dedicated to helping families find the right care and support for their loved ones through personalized guidance and placement services tailored to your unique situation.",
      icon: <TargetIcon />
    },
    {
      title: "Our Approach",
      text: "We know this can be a difficult and overwhelming time. We'll be your boots on the ground—taking the guesswork out of who to trust and where to look, so you can make clear decisions with confidence.",
      icon: <PeopleIcon />
    },
    {
      title: "Our Experience",
      text: "With years of education and hands-on experience, our advisors simplify the process and align care options with medical, emotional, and financial needs—always free to families, and with support every step of the way.",
      icon: <SchoolIcon />
    },
  ],
}) {
  return (
    <section className="hdx" aria-label="Mission and Values">
      <div className="hdx__container">
        {/* Section Header */}
        <div className="hdx__header">
          <span className="hdx__tag">{tag}</span>
          <div className="hdx__rule" aria-hidden="true" />
          <h2 className="hdx__headline">{headline}</h2>
        </div>

        {/* Cards Grid */}
        <div className="hdx__grid" role="list">
          {cards.map((c) => (
            <article className="hdx__card" role="listitem" key={c.title}>
              <div className="hdx__cardTop">
                <div className="hdx__iconWrapper">
                  {c.icon}
                </div>
                <h3 className="hdx__title">{c.title}</h3>
              </div>
              <p className="hdx__text">{c.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}