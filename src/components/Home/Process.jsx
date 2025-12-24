import React from "react";
import "./Process.css";

// Material Icons
import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";
import FactCheckOutlinedIcon from "@mui/icons-material/FactCheckOutlined";
import EventAvailableOutlinedIcon from "@mui/icons-material/EventAvailableOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";

export default function Process() {
  const steps = [
    {
      icon: <ForumOutlinedIcon />,
      title: "Step 1",
      text: "We begin with a conversation to understand your loved one's needs, preferences, and timeline.",
    },
    {
      icon: <FactCheckOutlinedIcon />,
      title: "Step 2",
      text: "We curate a list of vetted senior communities and care providers that align with your situation.",
    },
    {
      icon: <EventAvailableOutlinedIcon />,
      title: "Step 3",
      text: "We arrange visits and equip you with key questions to help evaluate each option.",
    },
    {
      icon: <DescriptionOutlinedIcon />,
      title: "Step 4",
      text: "We assist with logistics, paperwork, and connect you to trusted local services as needed.",
    },
  ];

  return (
    <section className="process">
      <div className="process__container">
        {/* Top label */}
        <span className="process__tag">Our Vision</span>

        {/* Heading */}
        <h2 className="process__heading">
          Trusted Guidance
          <br />
          Every Step of the Way
        </h2>

        {/* Grid */}
        <div className="process__grid">
          {steps.map((step, i) => (
            <article className="process__card" key={i}>
              <div className="process__icon">{step.icon}</div>
              <h3 className="process__title">{step.title}</h3>
              <p className="process__text">{step.text}</p>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="process__ctaWrap">
          <a href="/about" className="process__cta">
            Who we are →
          </a>
        </div>
      </div>
    </section>
  );
}