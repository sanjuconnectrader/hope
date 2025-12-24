import React from "react";
import "./Footer.css";

// MUI Icons
import CallIcon from "@mui/icons-material/Call";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function Footer({
  logoSrc = "./logoo.png",
  aboutText = "At Hope Senior Living Advisors, we leave no stone unturned as we work to get your loved one the care they need.",
  phone = "(833)866-HOPE (4673)",
  email = "joannewong.senioradvisor@gmail.com",
  location = "Western Washington, USA",
  links = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Our Services", href: "/services" },
    { label: "Contact Us", href: "/contact" },
  ],
  copyright = "Copyright@ 2025 Hope Senior Living Advisors. All Rights Reserved.",
  privacyText = "Privacy Policy",
  privacyHref = "/privacy-policy",
  creditText = "Design By connectrader",
}) {
  return (
    <footer className="ft" aria-label="Footer">
      <div className="ft__container">
        <div className="ft__grid">
          <div className="ft__col ft__col--left">
            <div className="ft__logo-wrap">
              <img 
                className="ft__logo" 
                src={logoSrc} 
                alt="Hope Senior Living Advisors" 
              />
            </div>
            <p className="ft__about">{aboutText}</p>
          </div>

          <div className="ft__col ft__col--middle">
            <h3 className="ft__title">Quick Links</h3>
            <nav className="ft__nav">
              {links.map((link) => (
                <a 
                  key={link.label} 
                  className="ft__link" 
                  href={link.href}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="ft__col ft__col--right">
            <h3 className="ft__title">Contact Us</h3>
            <div className="ft__contact">
              <div className="ft__contact-item">
                <span className="ft__contact-icon">
                  <CallIcon />
                </span>
                <a 
                  className="ft__contact-text" 
                  href={`tel:${phone.replace(/\D/g, "")}`}
                >
                  {phone}
                </a>
              </div>
              
              <div className="ft__contact-item">
                <span className="ft__contact-icon">
                  <MailOutlineIcon />
                </span>
                <a 
                  className="ft__contact-text" 
                  href={`mailto:${email}`}
                >
                  {email}
                </a>
              </div>
              
              <div className="ft__contact-item">
                <span className="ft__contact-icon">
                  <LocationOnIcon />
                </span>
                <span className="ft__contact-text">{location}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="ft__bottom">
          <div className="ft__copyright">{copyright}</div>
          <a className="ft__privacy" href={privacyHref}>
            {privacyText}
          </a>
          <div className="ft__credit">{creditText}</div>
        </div>
      </div>
    </footer>
  );
}